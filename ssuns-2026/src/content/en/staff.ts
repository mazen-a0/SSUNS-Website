export type StaffProfile = {
  name: string;
  role?: string;
  bio?: string;
  imageSrc?: string;
};

export const coordinatorProfiles: StaffProfile[] = [
  {
    "name": "Lara Kasem",
    "role": "Administration Coord"
  },
  {
    "name": "Pearce-Tai Thomasson",
    "role": "Information Technology Coord"
  },
  {
    "name": "Kai Czylyski",
    "role": "Registration Coord",
    "imageSrc": "/coord_headshots/Kai_Czylyski.jpeg"
  },
  {
    "name": "Abby Sconyers",
    "role": "Registration Coord",
    "imageSrc": "/coord_headshots/Abigail_Sconyers.jpg"
  },
  {
    "name": "Noah Lal",
    "role": "Events Coord"
  },
  {
    "name": "Carly Waiz",
    "role": "Events Coord",
    "imageSrc": "/coord_headshots/Carly_Waiz.png"
  },
  {
    "name": "Zoe Torpey",
    "role": "Finance Coord",
    "imageSrc": "/coord_headshots/Zoe_Torpey.jpeg"
  },
  {
    "name": "Gillian Vetters",
    "role": "Equity Coord"
  },
  {
    "name": "Frances Li",
    "role": "Equity Coord",
    "imageSrc": "/coord_headshots/Frances_Li.jpeg"
  },
  {
    "name": "Sophie Louise Manton Williams",
    "role": "Equity Coord"
  },
  {
    "name": "Suzanne Borgeaud",
    "role": "Branding Design Coord"
  },
  {
    "name": "Hiba Maria Belgada",
    "role": "Events Outreach Coord",
    "imageSrc": "/coord_headshots/Hiba_Maria_Belgada.JPG"
  },
  {
    "name": "Brooklyn Waddell",
    "role": "Multimedia Coord",
    "imageSrc": "/coord_headshots/brooklyn_waddell.jpg"
  },
  {
    "name": "Olivia Melchior",
    "role": "Stakeholder Outreach Coord"
  }
];

export const committeeDaisBySlug: Record<string, StaffProfile[]> = {
  "who-2026": [
    {
      "name": "Brianne Bower",
      "role": "Chair",
      "imageSrc": "/dais_headshots/BrianneBower_WTO.png"
    },
    {
      "name": "Lucie Quief",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/LucieQuief_WHO.jpg"
    },
    {
      "name": "Juliette Cherifi",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/JulietteCherifi_WHO.jpg"
    },
    {
      "name": "Layla Yamashiro",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/LaylaYamashiro_WHO.png"
    }
  ],
  "ccpcj-2026": [
    {
      "name": "Ari Vogli",
      "role": "Chair",
      "imageSrc": "/dais_headshots/AriVogli_CCPCJ.webp"
    },
    {
      "name": "Valentine Pougnant Epinoux",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ValentinePougnantEpinoux_CCPCJ.jpg"
    },
    {
      "name": "Chloe Nairne",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ChloeNairne_CCPCJ.jpg"
    },
    {
      "name": "Sia Bhimani",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/SiaBhimani_CCPCJ.jpg"
    },
    {
      "name": "Gaïa Irrmann",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/GaiaIrrmann_CCPCJ.jpg"
    }
  ],
  "wto-2026": [
    {
      "name": "Malaika Lavoie",
      "role": "Chair",
      "imageSrc": "/dais_headshots/MalaikaLavoie_WHO.jpg"
    },
    {
      "name": "Audrey Henry",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/AudreyHenry_WTO.jpg"
    },
    {
      "name": "Rees Stafford",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/ReesStafford_WTO.jpg"
    },
    {
      "name": "Aditi Shringarpure",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/AditiShringarpure_WTO.jpg"
    },
    {
      "name": "Suha Islam",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/SuhaIslam_WTO.jpg"
    }
  ],
  "ifad-2026": [
    {
      "name": "Julia Hees",
      "role": "Chair",
      "imageSrc": "/dais_headshots/JuliaHees_IFAD.jpg"
    },
    {
      "name": "Ella Rosenthal",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ EllaRosenthal_IFAD.png"
    },
    {
      "name": "Valentin Cervasel",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ ValentinCervasel_IFAD.jpg"
    },
    {
      "name": "Sarra Khaireddine",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/SarraKhaireddine_IFAD.jpg"
    }
  ],
  "fespaco-2026": [
    {
      "name": "Maggie Winsor",
      "role": "Chair",
      "imageSrc": "/dais_headshots/websafe/MaggieWinsor_FESPACO.jpg"
    },
    {
      "name": "Andrea Iskandar",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/AndreaIskandar_FESPACO.jpg"
    },
    {
      "name": "Frederique Dicaire",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/FrederiqueDicaire_FESPACO.jpg"
    },
    {
      "name": "Trish Twijuke",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/TrishTwijuke_FESPACO.jpg"
    }
  ],
  "sdg-12-2026": [
    {
      "name": "India Bejaoui",
      "role": "Chair",
      "imageSrc": "/dais_headshots/ IndiaBejaoui_SDG12.png"
    },
    {
      "name": "Capucine Parvery",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/CapucineParvery_SDG12.JPG"
    },
    {
      "name": "Anne-Gaelle Thelliez",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/AnneGaelleThelliez_SDG12.jpg"
    },
    {
      "name": "Parmis Mortazavi",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ParmisMortazavi_SDG12.jpg"
    },
    {
      "name": "Camille Causse Culpan",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/CamilleCausseCulpan_SDG12.jpg"
    }
  ],
  "unhrc-2026": [
    {
      "name": "Vivienne Gavillet",
      "role": "Chair"
    },
    {
      "name": "Norah Nehme",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ NorahNehme_UNHRC.png"
    },
    {
      "name": "Madelyne Ayoub",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/MadelyneAyoub_UNHRC.jpg"
    },
    {
      "name": "Juliette Balagny",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/JulietteBalagny_UNHCR.jpg"
    }
  ],
  "icao-2026": [
    {
      "name": "Alya Mernissi",
      "role": "Chair",
      "imageSrc": "/dais_headshots/ AlyaMernissi_ICAO.jpg"
    },
    {
      "name": "Marius Carlier",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/MariusCarlier_ICAO.jpg"
    },
    {
      "name": "Mark Camarao-Clemente",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/MarkCamarao-Clemente_ICAO.jpg"
    },
    {
      "name": "Sanjana Deb",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/SanjanaDeb_ICAO.jpg"
    }
  ],
  "penguins-2026": [
    {
      "name": "Isabella Richards",
      "role": "Co-Chair",
      "imageSrc": "/dais_headshots/Isabella Richards_Penguin.jpg"
    },
    {
      "name": "Gopika Wright",
      "role": "Co-Chair",
      "imageSrc": "/dais_headshots/websafe/GopikaWright_Penguin.jpg"
    },
    {
      "name": "Sienna Ural",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/SiennaUral_Penguin.jpg"
    },
    {
      "name": "Layla Viel",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Layla Viel_Penguin.png"
    },
    {
      "name": "Eva Bevan",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Eva Bevan_Penguin.jpg"
    }
  ],
  "nhl-2026": [
    {
      "name": "Samuel Stead",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Samuel Stead_NHL.PNG"
    },
    {
      "name": "Cassidie Regent",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Cassidie Regent_NHL.jpeg"
    },
    {
      "name": "Lauren Chambers",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/LaurenChambers_NHL.jpg"
    }
  ],
  "icj-2026": [
    {
      "name": "Francesca Hayes",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Francesca Hayes_ICJ.jpg"
    },
    {
      "name": "Leah Freedhoff",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Leah Freedhoff_ICJ.JPEG"
    },
    {
      "name": "Anaë Gregori",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Anaë Gregori_ICJ.jpg"
    },
    {
      "name": "Eliza Kishan",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Eliza Kishan_ICJ.png"
    }
  ],
  "praguematic-2026": [
    {
      "name": "Dasha Zelentsova",
      "role": "Chair",
      "imageSrc": "/dais_headshots/ Dasha Zelentsova_Slavic.jpg"
    },
    {
      "name": "Henry Loftsgard",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/HenryLoftsgard_Slavic.jpg"
    },
    {
      "name": "Vanio Pernikliev",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Vanio Pernikliev_Slavic_.jpg"
    },
    {
      "name": "Martin Grange",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Martin Grange_Slavic.jpg"
    }
  ],
  "mof-2026": [
    {
      "name": "Hector Giraud",
      "role": "Chair"
    },
    {
      "name": "Achille Croquelois Palluel",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Achille Croquelois Palluel_French.jpg"
    },
    {
      "name": "Elizabeth de Lamberterie",
      "role": "Vice Chair"
    },
    {
      "name": "Elijah N'dolo",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Elijah N_dolo_French.jpg"
    }
  ],
  "dam-right-2026": [
    {
      "name": "Adrian Yehia",
      "role": "Chair"
    },
    {
      "name": "Chiara Corradi",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Chiara Corradi_Dam.png"
    },
    {
      "name": "Lucy Crowther",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Lucy Crowther_Dam.jpg"
    },
    {
      "name": "Abigael Rondeau",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/AbigaelRondeau_Dam.jpg"
    }
  ],
  "tyre-siege-2026": [
    {
      "name": "Alice Edwards",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Alice Edwards_Alexander.JPG"
    },
    {
      "name": "Adelaide Dodson",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Adelaide Dodson_Alexander.jpg"
    },
    {
      "name": "Maggie Hayes",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Maggie Hayes_Alexander.jpg"
    },
    {
      "name": "Thibault Nicolas",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Thibault Nicolas_Alexander.JPG"
    }
  ],
  "ad-hoc-2026": [
    {
      "name": "Krupa Patel",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Krupa Patel_Spadhoc.JPG"
    },
    {
      "name": "Sara Di Sabatino Garbati",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Sara Di Sabatino Garbati_spadhoc.jpg"
    },
    {
      "name": "Ushna Masroor",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/websafe/UshnaMasroor_SPADHOC.jpg"
    },
    {
      "name": "Lyna Rochdi",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/ Lyna Rochdi_spadhoc.jpg"
    }
  ],
  "chess-2026": [
    {
      "name": "Rian Reichel",
      "role": "Coordinating Crisis Director - The Great Game"
    },
    {
      "name": "Eloise Barriault",
      "role": "Chair",
      "imageSrc": "/dais_headshots/ Eloise Barriault_Russia.jpg"
    },
    {
      "name": "Lou Didelot",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Lou Didelot_Russia.jpeg"
    },
    {
      "name": "Dahlia Harrison-Irwin",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Dahlia Harrison-Irwin_Russia.JPG"
    },
    {
      "name": "Philippe Valtat",
      "role": "Crisis Director"
    },
    {
      "name": "Daiwik Dhawan",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/Daiwik Dhawan_Britain.jpg"
    },
    {
      "name": "Hannah Kassam",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Hannah Kassam_Britain.jpeg"
    },
    {
      "name": "Matheo Negreanu Stribley",
      "role": "Vice Chair"
    },
    {
      "name": "Thomas Wylie",
      "role": "Crisis Director",
      "imageSrc": "/dais_headshots/Thomas Wylie_Russia.PNG"
    },
    {
      "name": "Noah Deschenes",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/Noah Deschenes_Russia.jpg"
    }
  ],
  "festival-rivalry-2026": [
    {
      "name": "Hande Soran",
      "role": "Coordinating Crisis Director - Festival Rivalry",
      "imageSrc": "/dais_headshots/HandeSoran_Festival.JPG"
    },
    {
      "name": "Noosha Aval",
      "role": "Chair",
      "imageSrc": "/dais_headshots/NooshaAval_Osheagajpeg.jpg"
    },
    {
      "name": "Joia Tavares",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/JoiaTavares_Osheaga.jpeg"
    },
    {
      "name": "Genevieve Hart",
      "role": "Crisis Director",
      "imageSrc": "/dais_headshots/Genevieve Hart_Osheaga.jpg"
    },
    {
      "name": "Nicole McAdoo",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/Nicole McAdoo_Osheaga.JPG"
    },
    {
      "name": "Hana Tomoum",
      "role": "Chair",
      "imageSrc": "/dais_headshots/HanaTomoum_Lollapalooza.jpg"
    },
    {
      "name": "Ivy Zheng",
      "role": "Vice Chair"
    },
    {
      "name": "Penelope Cramer",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Penelope_Lollapalooza.png"
    },
    {
      "name": "Forest Jones",
      "role": "Crisis Director",
      "imageSrc": "/dais_headshots/Forest Jones_Lollapalooza.jpg"
    },
    {
      "name": "Olive Chiu",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/OliveChiu_Lollapalooza.JPG"
    }
  ],
  "versace-2026": [
    {
      "name": "Thomas Musumeci",
      "role": "Chair"
    },
    {
      "name": "Lily Dodson",
      "role": "Vice Chair"
    },
    {
      "name": "Luke Smith",
      "role": "Vice Chair"
    },
    {
      "name": "Hong Duc Cheng",
      "role": "Crisis Director"
    },
    {
      "name": "Juliette Bussi",
      "role": "Assistant Crisis Director"
    }
  ],
  "newsboys-2026": [
    {
      "name": "Gillian Butler",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Gillian Butler_Newsboy.JPG"
    },
    {
      "name": "Daniella Mara Dunn",
      "role": "Vice Chair",
      "imageSrc": "/dais_headshots/Daniella Mara Dunn_Newsboy.jpeg"
    },
    {
      "name": "Zoë Ley",
      "role": "Crisis Director",
      "imageSrc": "/dais_headshots/Zoë Ley_Newsboy.jpeg"
    },
    {
      "name": "Eva Moore",
      "role": "Assistant Crisis Director"
    }
  ],
  "unsc-2026": [
    {
      "name": "Ines Wolff",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Ines Wolff_UNSC .jpg"
    },
    {
      "name": "Simon Michell",
      "role": "Vice Chair"
    },
    {
      "name": "Collin Schlosser",
      "role": "Crisis Director"
    },
    {
      "name": "Jafar Khasawneh",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/Jafar Khasawneh_UNSC.jpg"
    }
  ],
  "khanflict-2026": [
    {
      "name": "Henri Roy",
      "role": "Chair",
      "imageSrc": "/dais_headshots/Henri Roy_Khanflict.PNG"
    },
    {
      "name": "Michael Battulga",
      "role": "Vice Chair"
    },
    {
      "name": "Annabella Handler",
      "role": "Vice Chair"
    },
    {
      "name": "Ethan Ozan Vandivier",
      "role": "Crisis Director",
      "imageSrc": "/dais_headshots/Ethan_Khanflict.jpg"
    },
    {
      "name": "Laurie Ruel",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/Laurie Ruel_khanflict.jpeg"
    },
    {
      "name": "Yevgeny Podolyanskiy",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/websafe/YevgenyPodolyanskiy_Khanflict.jpg"
    }
  ],
  "pour-decisions-2026": [
    {
      "name": "James Stauder",
      "role": "Chair",
      "imageSrc": "/dais_headshots/James_Stauder_Burgundian.jpg"
    },
    {
      "name": "Albane Baniol",
      "role": "Vice Chair"
    },
    {
      "name": "Cole Herman",
      "role": "Crisis Director",
      "imageSrc": "/dais_headshots/Cole Herman_ Burgundian.jpg"
    },
    {
      "name": "Noor Bially",
      "role": "Assistant Crisis Director",
      "imageSrc": "/dais_headshots/Noor Bially_Burgundian.PNG"
    }
  ],
  "ad-hoc-sg-2026": [
    {
      "name": "Eliza Hamilton",
      "role": "Chair",
      "imageSrc": "/dais_headshots/ElizaHamilton_Cradhoc.jpeg"
    },
    {
      "name": "Sarah Harley",
      "role": "Vice Chair"
    },
    {
      "name": "Helena Kennedy",
      "role": "Crisis Director"
    },
    {
      "name": "Sienna Loo",
      "role": "Assistant Crisis Director"
    },
    {
      "name": "Doria Rafolisisoa",
      "role": "Assistant Crisis Director"
    }
  ],
};
