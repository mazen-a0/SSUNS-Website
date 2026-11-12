export const diningGroups = [
  {
    title: "Between sessions",
    places: [
      { name: "Parma Café", address: "1202 rue Bishop", note: "Italian panini and salads on the block between René-Lévesque and Sainte-Catherine.", hours: "Mon–Sat 10 am–9 pm · Sun 10 am–6 pm", price: "Panini about $16–19", menu: "https://parmacafe.ca/en/panini/", source: "https://parmacafe.ca/emplacements/" },
      { name: "Mandy’s Crescent", address: "2067 rue Crescent", note: "Salads on Crescent Street.", hours: "Daily 8 am–9 pm", source: "https://mandys.ca/en/locations/crescent/" },
      { name: "Time Out Market Montréal", address: "705 rue Sainte-Catherine Ouest", note: "Several kitchens with shared seating inside the Eaton Centre, useful when your group wants different meals.", hours: "Thu–Sat 11:30 am–10 pm · Sun 11:30 am–6 pm", source: "https://www.timeout.com/time-out-market-montreal/faqs" },
    ],
  },
  {
    title: "Sit-down meals",
    places: [
      { name: "Stanley", address: "1201 boulevard René-Lévesque Ouest", note: "Breakfast, lunch and dinner in the Sheraton lobby.", hours: "Daily 6:30 am–10:30 pm", source: "https://www.marriott.com/en-us/hotels/yulsi-le-centre-sheraton-montreal-hotel/dining/" },
      { name: "Dunn’s Famous", address: "1249 rue Metcalfe", note: "Montréal smoked meat, sandwiches and poutine on Metcalfe Street.", source: "https://dunnsfamous.com/locations/dunns-downtown" },
      { name: "Kinton Ramen", address: "1624 rue Sainte-Catherine Ouest", note: "Ramen at Sainte-Catherine and Guy.", hours: "Daily 11:30 am–10:30 pm", price: "Pork ramen about $17–18", menu: "https://kintonramen.com/menu/quebec/", source: "https://kintonramen.com/location/sainte-catherine-x-guy/" },
    ],
  },
  {
    title: "Coffee & snacks",
    places: [
      { name: "Café Myriade", address: "1432 rue Mackay", note: "Coffee at the Golden Square Mile location on Mackay.", hours: "Mon–Fri 7 am–7 pm · Sat–Sun 8 am–7 pm", source: "https://cafemyriade.com/locations/" },
      { name: "Café Olimpico", address: "1333 boulevard Robert-Bourassa", note: "Italian coffee at the downtown location on Robert-Bourassa.", hours: "Fri 6 am–9 pm · Other days 6 am–10 pm", source: "https://cafeolimpico.com/pages/locations" },
    ],
  },
] as const;

export function walkingDirections(name: string, address: string) {
  const params = new URLSearchParams({
    api: "1",
    origin: "Le Centre Sheraton Montréal, 1201 Boulevard René-Lévesque Ouest, Montréal",
    destination: `${name}, ${address}, Montréal`,
    travelmode: "walking",
  });
  return `https://www.google.com/maps/dir/?${params}`;
}
