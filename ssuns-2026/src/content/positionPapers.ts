export const positionPaperGroups = [
  {
    title: "General Assemblies and Economic and Social Councils",
    contact: "gaecosoc@ssuns.org",
    committees: [
      { slug: "who-2026", label: "WHO", href: "/committees/who-2026", formHref: "https://forms.gle/81z1vwpfhhV9Rmi78" },
      { slug: "ccpcj-2026", label: "CCPCJ", href: "/committees/ccpcj-2026", formHref: "https://forms.gle/GEzy3er2eazLQ2Uy9" },
      { slug: "wto-2026", label: "WTO", href: "/committees/wto-2026", formHref: "https://forms.gle/UFptdG38c3drYn2s6" },
      { slug: "ifad-2026", label: "IFAD", href: "/committees/ifad-2026", formHref: "https://forms.gle/3YSqE4zhNbaHE9d68" },
      { slug: "fespaco-2026", label: "FESPACO", href: "/committees/fespaco-2026", formHref: "https://forms.gle/AW6rU3bEi8EXspCi8" },
      { slug: "sdg-12-2026", label: "SDG 12", href: "/committees/sdg-12-2026", formHref: "https://forms.gle/HKrByYzkkdvX1ron9" },
      { slug: "unhrc-2026", label: "UNHRC", href: "/committees/unhrc-2026", formHref: "https://forms.gle/nmdSKDhZqVAaYmc97" },
      { slug: "icao-2026", label: "ICAO", href: "/committees/icao-2026", formHref: "https://forms.gle/DMCWtxesZZA43Yj79" },
    ],
  },
  {
    title: "Specialized Agencies",
    contact: "spec@ssuns.org",
    committees: [
      {
        slug: "penguins-2026",
        label: "Penguin Random House Board of Directors",
        href: "/committees/penguins-2026",
        formHref: "https://forms.gle/VJ9PhT9gWtQo3ewQ8",
      },
      { slug: "nhl-2026", label: "The National Hockey League", href: "/committees/nhl-2026", formHref: "https://forms.gle/sgK9EZuYgoUk4kUk9" },
      { slug: "icj-2026", label: "International Court of Justice", href: "/committees/icj-2026", formHref: "https://forms.gle/VvUnbu4kUaJ9UKrz7" },
      {
        slug: "praguematic-2026",
        label: "First Pan-Slavic Congress of 1848",
        href: "/committees/praguematic-2026",
        formHref: "https://forms.gle/b6jMKEnYnaTvso748",
      },
      { slug: "mof-2026", label: "Ministry of Overseas France", href: "/committees/mof-2026", formHref: "https://forms.gle/tg9JCYtCrPKeHMzq5" },
      { slug: "dam-right-2026", label: "Cree & Inuit Summit", href: "/committees/dam-right-2026", formHref: "https://forms.gle/9Brx99m4U8rhUy546" },
      {
        slug: "tyre-siege-2026",
        label: "War Council of Alexander the Great",
        href: "/committees/tyre-siege-2026",
        formHref: "https://forms.gle/dFs38v7GbM1n2kw88",
      },
    ],
  },
] as const;

export const positionPaperFormsBySlug = Object.fromEntries(
  positionPaperGroups.flatMap((group) => group.committees.map((committee) => [committee.slug, committee.formHref])),
) as Record<string, string>;
