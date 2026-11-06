// Bound Apps Script for the SSUNS reservations spreadsheet. See docs/merch-shop.md.
const ORDERS = 'Reservations';
const ITEMS = 'Reservation Items';
const STATUS = ['Reserved', 'Collected', 'Cancelled', 'Unclaimed'];
const ORDER_HEADERS = [
  'Reservation ID', 'Submitted (Montréal)', 'Delegate name', 'Email', 'School / Delegation',
  'Total (CAD)', 'Status', 'Selections', 'Cancelled (Montréal)',
  'Request ID', 'Request fingerprint', 'Management token hash', 'Link expiry (epoch ms)', 'Language',
];
const ITEM_HEADERS = [
  'Reservation ID', 'Product', 'Variant / Size', 'Quantity', 'Unit price (CAD)', 'Line total (CAD)',
  'Regular unit price (CAD)', 'Product ID', 'Options',
];
const COL = { id: 0, name: 2, email: 3, total: 5, status: 6, count: 7, cancelled: 8, request: 9, fingerprint: 10, token: 11, expiry: 12, language: 13 };
const DAY = 86400000;
const STOCK = {
  'white-tee': { S: 17, M: 22, L: 10, XL: 1 },
  'navy-hoodie': { S: 22, M: 24, L: 11, XL: 3 },
  sweatpants: { S: 7, M: 8, L: 4, XL: 1 },
  tote: 22, pin: 200, poster: 30, postcard: 230, bookmark: 340, cap: 17,
  'large-sticker': 120, 'small-sticker': 180,
};
// Only stock-controlled components are listed. Unspecified stock is not capped.
const STOCK_BUNDLES = {
  'ssuns-outfit': [['navy-hoodie', 1, 'hoodie'], ['sweatpants', 1, 'sweatpants']],
  'conference-souvenirs': [['poster', 1]],
  'accessories-bundle': [['cap', 1], ['tote', 1], ['large-sticker', 1]],
  'three-small-stickers': [['small-sticker', 3]],
  'mixed-stickers': [['large-sticker', 1], ['small-sticker', 2]],
  'souvenir-pack': [['poster', 1], ['postcard', 1], ['bookmark', 1]],
  'rose-postcard': [['postcard', 1]],
};

function setupShop() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Run this from a script bound to the reservations spreadsheet.');
  const orders = prepareTab_(ss, ORDERS, ORDER_HEADERS);
  const items = prepareTab_(ss, ITEMS, ITEM_HEADERS);
  ss.setSpreadsheetTimeZone('America/Toronto');
  orders.getRange('F2:F').setNumberFormat('"$"#,##0.00');
  items.getRange('E2:G').setNumberFormat('"$"#,##0.00');
  orders.getRange('G2:G').setDataValidation(SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUS, true).setAllowInvalid(false).build());
  orders.hideColumns(10, 5);
  items.hideColumns(8, 2);
  orders.setColumnWidths(1, 9, 155);
  orders.setColumnWidth(4, 240);
  items.setColumnWidths(1, 7, 155);
  items.setColumnWidth(3, 230);
  PropertiesService.getScriptProperties().setProperty('SHOP_SHEET_ID', ss.getId());
}

function prepareTab_(ss, name, headers) {
  const tab = ss.getSheetByName(name) || ss.insertSheet(name);
  const row = tab.getRange(1, 1, 1, headers.length);
  if (tab.getLastRow() && JSON.stringify(row.getValues()[0]) !== JSON.stringify(headers)) {
    throw new Error('Unexpected columns in ' + name + '. Use a fresh sheet or restore the original headers.');
  }
  row.setValues([headers]).setBackground('#142082').setFontColor('#ffffff').setFontWeight('bold').setWrap(true);
  tab.setFrozenRows(1);
  return tab;
}

function doPost(e) {
  try {
    const props = PropertiesService.getScriptProperties();
    const d = authenticate_(e, props.getProperty('SHOP_SIGNING_SECRET'));
    if (!d) return json_({ ok: false, error: 'unavailable' });
    const lock = LockService.getScriptLock();
    if (!lock.tryLock(7000)) return json_({ ok: false, error: 'busy' });
    let result;
    try {
      if (!rateLimit_(d)) return json_({ ok: false, error: 'busy' });
      const ss = SpreadsheetApp.openById(props.getProperty('SHOP_SHEET_ID'));
      const orders = ss.getSheetByName(ORDERS);
      const items = ss.getSheetByName(ITEMS);
      if (!orders || !items) return json_({ ok: false, error: 'unavailable' });
      result = transact_(ss, orders, items, d, Date.now());
    } finally {
      lock.releaseLock();
    }
    // Send at most once per committed action, outside the reservation lock.
    if (result.mail) result.receipt.email = sendMail_(result.mail, result.receipt, props);
    delete result.mail;
    return json_(result);
  } catch (_) {
    // Delegate data, signatures, and private links must never appear in logs.
    return json_({ ok: false, error: 'unavailable' });
  }
}

function authenticate_(e, secret) {
  const content = e && e.postData && e.postData.contents;
  if (!secret || secret.length < 32 || !content || content.length > 24000) return null;
  const env = JSON.parse(content);
  if (!Number.isSafeInteger(env.timestamp) || Math.abs(Date.now() - env.timestamp) > 120000 ||
      typeof env.payload !== 'string' || !/^[a-f0-9]{64}$/.test(env.signature)) return null;
  const signature = Utilities.computeHmacSha256Signature(env.timestamp + '.' + env.payload, secret, Utilities.Charset.UTF_8)
    .map(function (b) { return ('0' + (b & 255).toString(16)).slice(-2); }).join('');
  let difference = 0;
  for (let i = 0; i < signature.length; i++) difference |= signature.charCodeAt(i) ^ env.signature.charCodeAt(i);
  if (difference) return null;
  const d = JSON.parse(env.payload);
  return d && ['create', 'view', 'cancel'].includes(d.action) &&
    /^[a-f0-9]{64}$/.test(d.rateKey) && /^[a-f0-9]{64}$/.test(d.tokenHash) ? d : null;
}

function rateLimit_(d) {
  const cache = CacheService.getScriptCache();
  const key = 'shop:' + (d.action === 'create' ? 'new:' : 'manage:') + d.rateKey;
  const used = Number(cache.get(key) || 0);
  if (used >= (d.action === 'create' ? 25 : 60)) return false;
  cache.put(key, String(used + 1), 60);
  return true;
}

function transact_(ss, orders, items, d, now) {
  const fail = (error) => ({ ok: false, error });
  const data = readRows_(orders, ORDER_HEADERS.length);
  const pickup = Date.parse(d.pickupDeadline);
  if (!Number.isFinite(pickup)) return fail('unavailable');
  if (d.action === 'create') {
    const existing = data.find((row) => row[COL.request] === d.requestId);
    if (existing) {
      return existing[COL.fingerprint] === d.fingerprint && existing[COL.token] === d.tokenHash && now < existing[COL.expiry]
        ? { ok: true, receipt: receipt_(existing, items, now, pickup) } : fail('duplicate');
    }
    const close = Date.parse(d.closesAt);
    if (!Number.isFinite(close) || close > pickup || now >= close) return fail('closed');
    // Older deployments sent a tax-inclusive total without a separate tax field.
    const subtotal = d.subtotal === undefined && d.tax === undefined ? d.total : d.subtotal;
    const tax = d.subtotal === undefined && d.tax === undefined ? 0 : d.tax;
    if (!Number.isSafeInteger(subtotal) || subtotal < 0 || !Number.isSafeInteger(d.total) ||
        tax !== (d.subtotal === undefined ? 0 : taxCents_(subtotal)) || d.total !== subtotal + tax ||
        !Array.isArray(d.lines) || !d.lines.length || d.lines.length > 3 ||
        d.lines.some((l) => !Number.isSafeInteger(l.quantity) || l.quantity < 1 || !Number.isSafeInteger(l.unitPrice) ||
          l.unitPrice < 0 || l.lineTotal !== l.unitPrice * l.quantity) ||
        d.lines.reduce((n, l) => n + l.quantity, 0) !== d.count ||
        d.lines.reduce((n, l) => n + l.lineTotal, 0) !== subtotal || d.count > 3) return fail('invalid');
    const activeCount = data.filter((row) => String(row[COL.email]).trim().toLowerCase() === d.email &&
      (row[COL.status] === 'Reserved' || row[COL.status] === 'Collected'))
      .reduce((sum, row) => sum + Number(row[COL.count]), 0);
    if (!Number.isSafeInteger(activeCount) || activeCount + d.count > 3) return fail('limit');
    if (data.some((row) => row[COL.id] === d.id)) return fail('unavailable');
    const requested = stockCounts_(d.lines);
    if (requested.size) {
      const activeIds = new Set(data.filter((row) => row[COL.status] === 'Reserved' || row[COL.status] === 'Collected').map((row) => row[COL.id]));
      const held = stockCounts_(readRows_(items, ITEM_HEADERS.length).filter((line) => activeIds.has(line[0]))
        .map((line) => ({ productId: line[7], options: JSON.parse(line[8]), quantity: line[3] })));
      for (const [key, quantity] of requested) {
        const [id, size] = key.split(':');
        const capacity = size ? STOCK[id][size] : STOCK[id];
        if ((held.get(key) || 0) + quantity > capacity) return { ok: false, error: 'stock', stockKey: key };
      }
    }
    const row = [
      d.id, localTime_(now), d.name, d.email, d.school, d.total / 100, 'Reserved', d.count, '',
      d.requestId, d.fingerprint, d.tokenHash, now + 30 * DAY, d.locale,
    ];
    const itemRows = d.lines.map((l) => [
      d.id, l.productName, l.variant, l.quantity, l.unitPrice / 100, l.lineTotal / 100, l.regularPrice / 100, l.productId, JSON.stringify(l.options),
    ]);
    // Both tabs are written atomically, so a failure cannot leave a partial reservation.
    Sheets.Spreadsheets.batchUpdate({ requests: [append_(orders, [row]), append_(items, itemRows)] }, ss.getId());
    return {
      ok: true, receipt: { id: d.id, name: d.name, status: 'Reserved', lines: d.lines, total: d.total, canCancel: true },
      mail: { address: d.email, locale: d.locale, url: d.managementUrl, pickup: d.pickup, hold: d.hold, payment: d.payment },
    };
  }
  const index = data.findIndex((row) => row[COL.token] === d.tokenHash && now < row[COL.expiry]);
  if (index < 0) return fail('invalid-link');
  const row = data[index];
  const receipt = receipt_(row, items, now, pickup);
  if (d.action === 'view' || receipt.status === 'Cancelled') return { ok: true, receipt };
  if (!receipt.canCancel) return fail('not-cancellable');
  const updates = [
    { column: COL.status, value: 'Cancelled' },
    { column: COL.cancelled, value: localTime_(now) },
  ].map(({ column, value }) => ({
    updateCells: {
      start: { sheetId: orders.getSheetId(), rowIndex: index + 1, columnIndex: column },
      rows: [cells_([value])], fields: 'userEnteredValue',
    },
  }));
  Sheets.Spreadsheets.batchUpdate({ requests: updates }, ss.getId());
  return {
    ok: true, receipt: { ...receipt, status: 'Cancelled', canCancel: false },
    mail: { address: row[COL.email], locale: row[COL.language], cancelled: true },
  };
}

function stockCounts_(lines) {
  const counts = new Map();
  const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  for (const line of lines) {
    const parts = has(STOCK_BUNDLES, line.productId) ? STOCK_BUNDLES[line.productId] : [[line.productId, 1, 'size']];
    for (const [id, units, option] of parts) {
      if (!has(STOCK, id)) continue;
      const capacity = STOCK[id];
      const size = typeof capacity === 'number' ? '' : line.options?.[option];
      if ((typeof capacity !== 'number' && !has(capacity, size)) ||
          !Number.isSafeInteger(line.quantity) || line.quantity < 1) throw new Error('Invalid stock allocation');
      const key = size ? id + ':' + size : id;
      counts.set(key, (counts.get(key) || 0) + line.quantity * units);
    }
  }
  return counts;
}

function receipt_(row, sheet, now, pickup) {
  const lines = readRows_(sheet, ITEM_HEADERS.length).filter((line) => line[0] === row[COL.id])
    .map((line) => ({
      productName: line[1], variant: line[2], quantity: line[3], unitPrice: cents_(line[4]), lineTotal: cents_(line[5]),
      regularPrice: cents_(line[6]), productId: line[7], options: JSON.parse(line[8]),
    }));
  const total = cents_(row[COL.total]);
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  if (!lines.length || (subtotal !== total && subtotal + taxCents_(subtotal) !== total) ||
      lines.reduce((sum, line) => sum + line.quantity, 0) !== row[COL.count] ||
      !STATUS.includes(row[COL.status])) throw new Error('Reservation data incomplete');
  return { id: row[COL.id], name: row[COL.name], status: row[COL.status], lines, total,
    canCancel: row[COL.status] === 'Reserved' && now < pickup };
}

function readRows_(sheet, width) {
  const length = sheet.getLastRow() - 1;
  return length > 0 ? sheet.getRange(2, 1, length, width).getValues() : [];
}
function append_(sheet, rows) {
  return { appendCells: { sheetId: sheet.getSheetId(), rows: rows.map(cells_), fields: 'userEnteredValue' } };
}
function cells_(row) {
  // stringValue is literal, even for a delegate name or school beginning with "=".
  return { values: row.map((value) => ({ userEnteredValue: typeof value === 'number' ? { numberValue: value } : { stringValue: String(value) } })) };
}
function cents_(dollars) { return Math.round(dollars * 100); }
function taxCents_(subtotal) { return Math.floor((subtotal * 599 + 2000) / 4000); }
function localTime_(ms) { return Utilities.formatDate(new Date(ms), 'America/Toronto', 'yyyy-MM-dd HH:mm:ss z'); }
function json_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }

function sendMail_(mail, receipt, props) {
  try {
    if (props.getProperty('SHOP_SEND_EMAIL') !== 'true' || MailApp.getRemainingDailyQuota() < 1) return 'unavailable';
    const fr = mail.locale === 'fr';
    const money = (value) => fr ? (value / 100).toFixed(2).replace('.', ',') + ' $ CA' : '$' + (value / 100).toFixed(2) + ' CAD';
    const subject = mail.cancelled
      ? (fr ? 'Réservation SSUNS annulée' : 'SSUNS reservation cancelled')
      : (fr ? 'Réservation SSUNS enregistrée' : 'SSUNS reservation recorded');
    const lines = receipt.lines.map((l) => l.quantity + ' × ' + l.productName +
      (l.variant ? ' (' + l.variant + ')' : '') + ' — ' + money(l.lineTotal));
    const subtotal = receipt.lines.reduce((sum, line) => sum + line.lineTotal, 0);
    const tax = receipt.total - subtotal;
    const body = [subject + ' · ' + receipt.id, '', receipt.name, '', ...lines, '',
      ...(tax > 0 ? [(fr ? 'Sous-total : ' : 'Subtotal: ') + money(subtotal),
        (fr ? 'TPS et TVQ : ' : 'GST and QST: ') + money(tax)] : []),
      (mail.cancelled ? (fr ? 'Total annulé : ' : 'Cancelled total: ') : (fr ? 'Total à payer au retrait : ' : 'Total payable at pickup: ')) + money(receipt.total),
      ...(mail.cancelled ? [] : ['', mail.pickup, mail.hold, mail.payment, '', (fr ? 'Gérer votre réservation : ' : 'Manage your reservation: ') + mail.url,
        fr ? 'Gardez ce lien privé.' : 'Keep this link private.']),
    ].join('\n');
    MailApp.sendEmail({ to: mail.address, subject: subject + ' · ' + receipt.id, body, name: 'SSUNS Shop' });
    return 'sent';
  } catch (_) {
    return 'unavailable';
  }
}
