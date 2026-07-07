/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StairType, MaterialType, ProcessStep, Benefit, GalleryItem, Testimonial, SliderImageItem } from "./types";

// Images generated for the application
export const IMAGES = {
  hero: "/src/assets/images/stairs_hero_1783346178968.jpg",
  floating: "/src/assets/images/stairs_floating_1783346195668.jpg",
  craftsmanship: "/src/assets/images/wood_craft_1783346211730.jpg",
  steel_wood_oak: "/src/assets/images/stairs_steel_wood_oak_1783368508150.jpg",
  zigzag_oak: "/src/assets/images/stairs_zigzag_oak_1783369045898.jpg",
  steel_straight: "/src/assets/images/stairs_steel_straight_1783369300420.jpg",
  wooden_zabiegowe: "/src/assets/images/stairs_oak_zabiegowe_1783416898655.jpg",
  foto1: "/src/assets/images/Foto1.png",
  foto2: "/src/assets/images/Foto2.png",
  foto3: "/src/assets/images/Foto3.png",
  foto4: "/src/assets/images/Foto4.png",
  foto5: "/src/assets/images/Foto5.png",
  foto6: "/src/assets/images/Foto6.png",
  foto7: "/src/assets/images/Foto7.png",
  foto8: "/src/assets/images/Foto8.png",
};

export const SLIDER_IMAGES: SliderImageItem[] = [
  { id: "s1", image: IMAGES.foto1, title: "", description: "" },
  { id: "s2", image: IMAGES.foto2, title: "", description: "" },
  { id: "s3", image: IMAGES.foto3, title: "", description: "" },
  { id: "s4", image: IMAGES.foto4, title: "", description: "" },
  { id: "s5", image: IMAGES.foto5, title: "", description: "" },
  { id: "s6", image: IMAGES.foto6, title: "", description: "" },
  { id: "s7", image: IMAGES.foto7, title: "", description: "" },
  { id: "s8", image: IMAGES.foto8, title: "", description: "" },
];

export const COMPANY_INFO = {
  name: "Stolarnia Jarzębowski",
  brand: "Schody Jarzębowski",
  founded: 1994,
  phone: "+48 604 240 627",
  email: "kontakt@schodyjarzebowski.pl",
  address: "Księdza Piotra Ściegiennego 6, 95-080 Tuszyn",
  workingHours: "Pon - Pt: 08:00 - 17:00, Sob: 08:00 - 12:00, Nd: Zamknięte",
  socials: {
    facebook: "https://facebook.com/schodyjarzebowski",
    instagram: "https://instagram.com/schodyjarzebowski",
  },
  taglines: {
    primary: "Schody, które stają się sercem Twojego domu",
    secondary: "Rodzinna pasja, precyzja rzemiosła i design, który przetrwa pokolenia. Od projektu po montaż – tworzymy stopnie do Twoich marzeń.",
    philosophy: "Schody to nie tylko komunikacja między piętrami. To najważniejszy mebel w Twoim domu.",
    promise: "Wiemy, że budowa domu to stres. Dlatego nasze schody montujemy bez kurzu, bez opóźnień i z uśmiechem.",
    impact: "Nie sprzedajemy drewna. Sprzedajemy bezpieczne kroki Twoich dzieci i solidny fundament Twojej codzienności."
  }
};

export const STAIR_TYPES: StairType[] = [
  {
    id: "stalowo-drewniane",
    name: "Schody Stalowo-Drewniane",
    tagline: "Industrialna elegancja i doskonała trwałość",
    description: "Nowoczesne schody stalowo-drewniane oparte na solidnej, precyzyjnie wykonanej konstrukcji metalowej. Stopnie zostały wykonane z najwyższej jakości litego drewna dębowego, a stalowa konstrukcja gwarantuje wyjątkową sztywność, stabilność oraz ponadczasowy, loftowy charakter.",
    features: [
      "Stopnie wykonane w 100% z litego drewna dębowego",
      "Solidna i stabilna konstrukcja ze stali malowanej proszkowo",
      "Harmonijne połączenie surowości metalu z ciepłem dębu",
      "Projektowane na indywidualny wymiar z pełną dbałością o detale"
    ],
    popularity: 5,
    basePriceRange: "Średnia - Wyższa",
    image: IMAGES.steel_wood_oak
  },
  {
    id: "policzkowe-zygzak",
    name: "Schody Policzkowe Zygzak",
    tagline: "Lekkość i nowoczesny design w stylu industrialnym",
    description: "Wyjątkowo eleganckie i stabilne schody jednobiegowe na bocznej konstrukcji stalowej typu zygzak (sawtooth). Stopnie zostały wykonane z najwyższej jakości litego drewna dębowego o ciepłym odcieniu, które doskonale współgra z czarnym profilem nośnym. Bezpieczeństwo i styl zapewnia balustrada z pionowymi stalowymi tralkami.",
    features: [
      "Stopnie wykonane w 100% z litego drewna dębowego premium",
      "Solidna, precyzyjnie wycinana laserowo konstrukcja stalowa",
      "Szlachetny dębowy pochwyt zintegrowany z pionowymi czarnymi tralkami",
      "Wizualna harmonia drewna, stali i nowoczesnej formy"
    ],
    popularity: 5,
    basePriceRange: "Średnia - Wyższa",
    image: IMAGES.zigzag_oak
  },
  {
    id: "policzkowe-proste",
    name: "Schody Policzkowe na Konstrukcji Stalowej",
    tagline: "Surowa stal i ciepło dębu w minimalistycznej formie",
    description: "Wyjątkowo efektowne, jednobiegowe schody ażurowe osadzone na dwóch bocznych, płaskich policzkach stalowych malowanych proszkowo na kolor głębokiej czerni. Stopnie wykonane z litego drewna dębowego o pięknym, naturalnym usłojeniu idealnie komponują się z nowoczesnym, jasnym wnętrzem i przestronnym korytarzem.",
    features: [
      "Stopnie wykonane w 100% z litego drewna dębowego o ciepłej barwie",
      "Konstrukcja oparta na solidnych, bocznych policzkach ze stali węglowej",
      "W pełni ażurowa forma wpuszczająca światło i optycznie powiększająca przestrzeń",
      "Minimalistyczny, nowoczesny design doskonale pasujący do współczesnych wnętrz"
    ],
    popularity: 5,
    basePriceRange: "Średnia - Wyższa",
    image: IMAGES.steel_straight
  }
];

export const MATERIALS: MaterialType[] = [
  {
    id: "dab",
    name: "Dąb (Szlachetny Król)",
    scientificName: "Quercus robur",
    character: "Elegancja, dostojeństwo i absolutny prestiż",
    durability: "Ekstremalna (Klasa Premium)",
    description: "Król długowieczności. Drewno dębowe jest niezwykle twarde, ciężkie i odporne na ścieranie. Z wiekiem nabiera głębokiego, szlachetnego charakteru. To inwestycja na setki lat.",
    features: [
      "Najbardziej odporny na zarysowania i uderzenia",
      "Piękne, głębokie i reprezentatywne usłojenie",
      "Świetnie przyjmuje oleje naturalne i bejce kolorystyczne"
    ]
  },
  {
    id: "jesion",
    name: "Jesion (Dynamiczny i Sprężysty)",
    scientificName: "Fraxinus excelsior",
    character: "Wyrazistość, nowoczesny sznyt i unikalne kontrasty",
    durability: "Bardzo wysoka (Porównywalna z dębem)",
    description: "Niezwykle ceniony w meblarstwie ze względu na unikalną sprężystość i niesamowicie dekoracyjne, pasiaste usłojenie. Jesion charakteryzuje się piękną grą jasnych i ciemniejszych pasów drewna.",
    features: [
      "Bardzo twarde, a jednocześnie wysoce elastyczne drewno",
      "Unikalne, niezwykle dynamiczne i bogate usłojenie",
      "Doskonałe do nowoczesnych, rozświetlonych loftów"
    ]
  },
  {
    id: "dodatki",
    name: "Balustrady i Wykończenia Premium",
    character: "Nowoczesne akcenty przełamujące ciepło drewna",
    durability: "Bezobsługowa i bezpieczna",
    description: "Współczesne schody to nie tylko drewno. To idealne połączenie organicznego surowca z nowoczesnymi materiałami architektonicznymi, które nadają całości lekkości lub loftowego charakteru.",
    features: [
      "Szkło hartowane (optiwhite) – optyczna niewidzialność i bezpieczeństwo",
      "Stal czarna malowana proszkowo – loftowy, geometryczny minimalizm",
      "Drewniane tralki i pochwyty – idealna, jednolita klasyka rzemiosła"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Darmowy Pomiar & Konsultacja",
    description: "Przyjeżdżamy na budowę, aby dokładnie wymierzyć przestrzeń z dokładnością do 1 milimetra za pomocą laserowych przyrządów pomiarowych.",
    duration: "1 dzień",
    details: [
      "Analiza ścian nośnych i stropów pod kątem konstrukcji",
      "Doradztwo w zakresie optymalnej ergonomii i wygody stopni",
      "Prezentacja fizycznych próbek drewna i wykończeń na miejscu"
    ]
  },
  {
    step: 2,
    title: "Projektowanie & Dobór Materiałów",
    description: "Opracowujemy precyzyjny projekt techniczny schodów dopasowany do Twojego wnętrza. Wspólnie podejmujemy decyzje o wyglądzie i budżecie.",
    duration: "3-5 dni",
    details: [
      "Indywidualny rysunek techniczny i ergonomiczny schodów",
      "Dopasowanie konstrukcji do specyfiki budynku",
      "Ostateczny wybór gatunku drewna i detali wykończeniowych"
    ]
  },
  {
    step: 3,
    title: "Precyzyjna Produkcja",
    description: "Nadajemy drewnu ostateczną formę w naszej rodzinnej stolarni. Łączymy nowoczesny, precyzyjny park maszynowy z ręczną pasją wykończenia.",
    duration: "4-6 tygodni",
    details: [
      "Sezonowanie i staranna selekcja materiału stolarskiego",
      "Precyzyjne frezowanie stopni, gniazd i połączeń czopowych",
      "Wielokrotne szlifowanie i nanoszenie certyfikowanych, bezpiecznych lakierów/olejów"
    ]
  },
  {
    step: 4,
    title: "Czysty & Szybki Montaż",
    description: "Wkraczamy do Twojego domu z uśmiechem i profesjonalnym sprzętem. Montujemy schody sprawnie, nie zostawiając po sobie pyłu.",
    duration: "1-3 dni",
    details: [
      "Zabezpieczenie podłóg i ścian w strefie montażowej",
      "Profesjonalny montaż konstrukcji i balustrad",
      "Sprzątanie i instruktaż pielęgnacji drewna na koniec prac"
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "craft",
    title: "Rodzinna manufaktura",
    description: "Nie jesteśmy masową fabryką. Do każdego stopnia podchodzimy tak, jakbyśmy budowali go we własnym domu, podpisując się pod pracą własnym nazwiskiem."
  },
  {
    id: "quality",
    title: "Trwałość na lata",
    description: "Wykorzystujemy wyłącznie certyfikowane, sezonowane drewno najwyższej klasy, gwarantując brak wypaczeń i doskonałą stabilność przez dziesięciolecia."
  },
  {
    id: "individual",
    title: "Design dopasowany do Ciebie",
    description: "Nie stosujemy gotowych szablonów. Każde schody są projektowane od zera pod wymiar Twojego domu, aby optymalnie wykorzystać przestrzeń i zachwycać stylem."
  },
  {
    id: "full",
    title: "Kompleksowość od A do Z",
    description: "Nie szukasz osobnych podwykonawców do pomiarów, spawania stali czy szkła. Bierzemy pełną odpowiedzialność za całość prac: od projektu do montażu."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Schody stalowo-drewniane dębowe na czarnej konstrukcji loftowej",
    type: "Stalowo-Drewniane",
    material: "Stopnie z litego dębu, konstrukcja stalowa malowana proszkowo",
    location: "Łódź",
    image: IMAGES.steel_wood_oak,
    category: "loft"
  },
  {
    id: "g2",
    title: "Jednobiegowe schody dębowe na bocznej konstrukcji stalowej typu zygzak",
    type: "Policzkowe Zygzak",
    material: "Lite drewno dębowe, boczny policzek stalowy, czarne tralki pionowe",
    location: "Tuszyn",
    image: IMAGES.zigzag_oak,
    category: "loft"
  },
  {
    id: "g3",
    title: "Minimalistyczne schody ażurowe dębowe na bocznych policzkach stalowych",
    type: "Policzkowe Stalowe",
    material: "Stopnie z litego dębu, płaskie policzki stalowe malowane proszkowo",
    location: "Piotrków Trybunalski",
    image: IMAGES.steel_straight,
    category: "loft"
  },
  {
    id: "g4",
    title: "Schody dywanowe z jesionu ułożone w ciepłym salonie",
    type: "Dywanowe",
    material: "Jesion naturalny, stalowe tralki loft",
    location: "Kraków",
    image: IMAGES.hero,
    category: "modern"
  },
  {
    id: "g5",
    title: "Ekskluzywne schody lewitujące z dębu bagiennego",
    type: "Wspornikowe",
    material: "Dąb dymiony, szkło hartowane bezramowe",
    location: "Tychy",
    image: IMAGES.floating,
    category: "modern"
  },
  {
    id: "g6",
    title: "Samonośne schody dębowe zabiegowe z litego drewna",
    type: "Klasyczne Drewniane",
    material: "100% lite drewno dębowe premium, policzki drewniane",
    location: "Pabianice",
    image: IMAGES.wooden_zabiegowe,
    category: "classic"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Marta i Janusz Kołodziej",
    location: "Łódź",
    stairsBuilt: "Schody Dywanowe Dębowe",
    rating: 5,
    text: "Schody Jarzębowski to absolutny profesjonalizm! Wybraliśmy dębowe schody dywanowe i są one dosłownie ozdobą całego domu. Montaż odbył się bardzo sprawnie, panowie zostawili idealny porządek. Zapach naturalnego drewna cieszy nas każdego dnia. Polecamy z czystym sercem!",
    date: "Maj 2026"
  },
  {
    id: "t2",
    author: "Tomasz Wiśniewski",
    location: "Tuszyn",
    stairsBuilt: "Schody Wspornikowe Jesionowe",
    rating: 5,
    text: "Jestem zachwycony realizacją schodów wiszących. Profesjonalny projekt pozwolił nam idealnie dopasować odcień jesionu do paneli na dole. Wykonanie i montaż na najwyższym poziomie – brak jakichkolwiek skrzypień, konstrukcja jest sztywna jak skała. Świetny kontakt z panem Markiem Jarzębowskim.",
    date: "Kwiecień 2026"
  },
  {
    id: "t3",
    author: "Agnieszka i Piotr Kaczmarczyk",
    location: "Piotrków Trybunalski",
    stairsBuilt: "Klasyczne na betonie z białym podstopniem",
    rating: 5,
    text: "Długo szukaliśmy ekipy, która obłoży nasze betonowe schody dębem tak, by nie skrzypiały po latach. Rodzinna firma Jarzębowski wywiązała się z tego genialnie. Wykończenie detali przy ścianie to majstersztyk stolarstwa. Bardzo uczciwa cena i dotrzymanie terminu co do dnia.",
    date: "Czerwiec 2026"
  }
];
