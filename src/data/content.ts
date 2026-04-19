import type { ContentMap } from "../types/content";

export const content: ContentMap = {
  en: {
    nav: {
      about: "About",
      chef: "Private Chef",
      menu: "Menu",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      title: "ElCoffeino",
      subtitle: "Jouw mobiele koffiebar",
      tagline: "Where Premium Coffee Meets Culinary Excellence",
      cta: "Discover More",
    },
    about: {
      title: "Who We Are",
      subtitle: "Premium Coffee Meets Culinary Excellence",
      text: "Behind ElCoffeino stands a passionate entrepreneur who successfully combines two worlds — premium coffee experiences and professional culinary expertise.\n\nWhat started as a love for quality, hospitality and creating memorable moments has grown into a brand built on passion, hard work and versatility. ElCoffeino is more than just a mobile coffee bar — it is also backed by the skills and experience of a dedicated freelance chef.\n\nAs an experienced chef freelancer, he is available for restaurants, private dining, events, catering projects and temporary kitchen support. With a strong background in modern kitchens and experience working in different restaurant environments, he brings professionalism, creativity and a hands-on mentality to every service.",
      text2:
        "He is known for being flexible, reliable and ready for any challenge. Whether it is stepping into a busy service, supporting a team during peak hours, helping with new menu ideas or taking care of private guests, he adapts quickly and always works with focus, energy and attention to detail.\n\nCooking is more than work — it is true passion. Especially when it comes to Italian cuisine, where fresh ingredients, honest flavours and respect for tradition come together on every plate. At the same time, he feels comfortable in modern kitchens, contemporary concepts and dynamic working environments.\n\nThe same dedication that drives ElCoffeino's coffee service is brought into every kitchen project: quality, consistency, hospitality and the desire to create a great experience for every guest.\n\nWhether you are looking for a freelance chef for your restaurant, support for an event, private dining services or a unique coffee experience, ElCoffeino delivers quality with personality.",
    },
    privateChef: {
      title: "Private Chef / Freelance Chef",
      subtitle: "More than Coffee – Culinary Experience Included",
      intro:
        "Behind ElCoffeino stands the same passionate owner who is also an experienced freelance chef, available for restaurants, events, private dining and culinary projects.",
      description:
        "With a strong background in modern kitchens and experience working in different restaurants, he brings professionalism, creativity and a hands-on mentality to every service.",
      passion:
        "Cooking is more than work — it is passion. Especially when it comes to Italian cuisine, fresh ingredients, honest flavours and dishes made with heart.",
      whyWorkTitle: "More Than Just a Chef",
      whyWork: [
        "Experienced in modern and fast-paced kitchens",
        "Passion for Italian cuisine",
        "Flexible and available for different concepts",
        "Strong work ethic – no task is too big or too small",
        "Reliable, professional and easy to work with",
        "Able to adapt quickly to new teams and environments",
        "Calm under pressure and focused on quality",
      ],
      availableTitle: "Available for",
      availableServices: [
        {
          title: "Freelance chef positions",
          description:
            "Professional kitchen support for restaurants and hotels",
        },
        {
          title: "Restaurant support",
          description: "Temporary or seasonal assistance during busy periods",
        },
        {
          title: "Private dining experiences",
          description: "Intimate culinary experiences in your home",
        },
        {
          title: "Events & catering",
          description: "Corporate events, weddings, and special occasions",
        },
        {
          title: "Temporary kitchen staff",
          description: "Fill staffing gaps with experienced hands",
        },
        {
          title: "Seasonal projects",
          description: "Summer pop-ups, festival kitchens, and more",
        },
        {
          title: "Menu support",
          description: "Menu development and recipe consultation",
        },
        {
          title: "Kitchen assistance",
          description:
            "Prep work, line cooking, and general kitchen operations",
        },
      ],
      ctaTitle: "Let's Work Together",
      ctaText:
        "Looking for a motivated and skilled chef who can step in and deliver from day one?",
      ctaButton: "Get in touch",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Passion in Every Cup & Dish",
    },
    testimonials: {
      title: "What People Say",
      subtitle: "Trusted by restaurants, events, and coffee lovers",
      items: [
        {
          name: "Marco van Dijk",
          role: "Restaurant Owner",
          text: "Outstanding professionalism and incredible Italian dishes. He stepped in during our busiest season and exceeded all expectations.",
          rating: 5,
        },
        {
          name: "Sophie Jansen",
          role: "Event Coordinator",
          text: "Not only does he make the best coffee, but his catering for our corporate event was exceptional. Guests are still talking about it!",
          rating: 5,
        },
        {
          name: "Thomas De Vries",
          role: "Private Client",
          text: "Hired him for a private dinner party. The food was restaurant-quality, beautifully presented, and everyone loved it. Highly recommend!",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to collaborate? Let's create something special together.",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Phone Number",
        message: "Your Message",
        submit: "Send Message",
        submitting: "Sending...",
        // success: "Message sent successfully! We'll get back to you soon.",
        success: "The form is temporarily unavailable.",
        error: "Failed to send message. Please try again.",
      },
      whatsapp: "Message on WhatsApp",
      info: {
        email: "info@elcoffeino.nl",
        phone: "+31 6 12345678",
        location: "Netherlands",
      },
    },
    footer: {
      tagline: "Premium coffee & culinary excellence on wheels",
      rights: "All rights reserved.",
      social: "Follow Us",
    },
    menu: {
      title: "Our Offer",
      subtitle: "Choose the perfect package for your event",
      ctaText: "Custom menus available for events & private bookings.",
      packages: [
        {
          name: "Basic",
          duration: "4 hours (min.)",
          baristas: "1",
          guests: "Up to 60",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Plant-based milk",
            "Tea",
          ],
        },
        {
          name: "Premium",
          badge: "Most chosen",
          duration: "4 hours (min.)",
          baristas: "1",
          guests: "Up to 100",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Plant-based milk",
            "Tea",
            "Cookies with coffee",
            "Seasonal coffee",
          ],
        },
        {
          name: "Excellence",
          duration: "5 hours",
          baristas: "1-2",
          guests: "Up to 150",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Plant-based milk",
            "Tea",
            "Premium cookies with coffee",
            "Seasonal coffee",
            "Special drinks",
            "Cold brew / Iced coffee",
            "Fresh pressed juices",
          ],
        },
      ],
    },
  },

  nl: {
    nav: {
      about: "Over Ons",
      chef: "Privé Chef",
      menu: "Menu",
      services: "Diensten",
      gallery: "Galerij",
      contact: "Contact",
    },
    hero: {
      title: "ElCoffeino",
      subtitle: "Jouw mobiele koffiebar",
      tagline: "Waar Premium Koffie en Culinaire Excellentie Samenkomen",
      cta: "Ontdek Meer",
    },
    about: {
      title: "Wie Zijn Wij",
      subtitle: "Premium Koffie Ontmoet Culinaire Excellentie",
      text: "Hij staat bekend om zijn flexibiliteit, betrouwbaarheid en bereidheid om elke uitdaging aan te gaan. Of het nu gaat om het bijspringen in een drukke dienst, het ondersteunen van een team tijdens piekuren, het bedenken van nieuwe menu-ideeën of het verzorgen van privé-gasten, hij past zich snel aan en werkt altijd met focus, energie en oog voor detail. Koken is meer dan werk – het is een ware passie. Vooral als het gaat om de Italiaanse keuken, waar verse ingrediënten, authentieke smaken en respect voor traditie samenkomen op elk bord. Tegelijkertijd voelt hij zich thuis in moderne keukens, eigentijdse concepten en dynamische werkomgevingen. Dezelfde toewijding die de koffieservice van ElCoffeino kenmerkt, zet hij in bij elk keukenproject: kwaliteit, consistentie, gastvrijheid en de wens om elke gast een geweldige ervaring te bieden. Of u nu op zoek bent naar een freelance chef-kok voor uw restaurant, ondersteuning voor een evenement, privé-diners of een unieke koffiebeleving, ElCoffeino levert kwaliteit met persoonlijkheid.",
      text2:
        "Achter ElCoffeino staat een gepassioneerde ondernemer die met succes twee werelden combineert: hoogwaardige koffiebelevingen en professionele culinaire expertise. Wat begon als een liefde voor kwaliteit, gastvrijheid en het creëren van onvergetelijke momenten, is uitgegroeid tot een merk gebouwd op passie, hard werken en veelzijdigheid. ElCoffeino is meer dan alleen een mobiele koffiebar; het wordt ook ondersteund door de vaardigheden en ervaring van een toegewijde freelance chef-kok. Als ervaren freelance chef-kok is hij beschikbaar voor restaurants, privédiners, evenementen, cateringprojecten en tijdelijke keukenondersteuning. Met een sterke achtergrond in moderne keukens en ervaring in diverse restaurantomgevingen, brengt hij professionaliteit, creativiteit en een praktische instelling in elke service.",
    },
    privateChef: {
      title: "Privé Chef / Freelance Chef",
      subtitle: "Meer dan Koffie – Culinaire Ervaring Inbegrepen",
      intro:
        "Achter ElCoffeino staat dezelfde gepassioneerde eigenaar die ook een ervaren freelance chef is, beschikbaar voor restaurants, evenementen, privédiners en culinaire projecten.",
      description:
        "Met een sterke achtergrond in moderne keukens en ervaring in verschillende restaurants, brengt hij professionaliteit, creativiteit en een hands-on mentaliteit naar elke dienst.",
      passion:
        "Koken is meer dan werk — het is passie. Vooral als het gaat om de Italiaanse keuken, verse ingrediënten, eerlijke smaken en gerechten gemaakt met hart.",
      whyWorkTitle: "Meer Dan Alleen Een Chef",
      whyWork: [
        "Ervaring in moderne en snelle keukens",
        "Passie voor de Italiaanse keuken",
        "Flexibel en beschikbaar voor verschillende concepten",
        "Sterke werkethiek – geen taak is te groot of te klein",
        "Betrouwbaar, professioneel en gemakkelijk om mee te werken",
        "Kan zich snel aanpassen aan nieuwe teams en omgevingen",
        "Kalm onder druk en gericht op kwaliteit",
      ],
      availableTitle: "Beschikbaar voor",
      availableServices: [
        {
          title: "Freelance chef posities",
          description:
            "Professionele keukenondersteuning voor restaurants en hotels",
        },
        {
          title: "Restaurant ondersteuning",
          description:
            "Tijdelijke of seizoensgebonden hulp tijdens drukke periodes",
        },
        {
          title: "Privé dining ervaringen",
          description: "Intieme culinaire ervaringen bij u thuis",
        },
        {
          title: "Evenementen & catering",
          description:
            "Zakelijke evenementen, bruiloften en speciale gelegenheden",
        },
        {
          title: "Tijdelijk keukenpersoneel",
          description: "Vul personeelstekorten met ervaren handen",
        },
        {
          title: "Seizoensprojecten",
          description: "Zomer pop-ups, festivalkeukens en meer",
        },
        {
          title: "Menu ondersteuning",
          description: "Menu-ontwikkeling en receptconsultatie",
        },
        {
          title: "Keukenhulp",
          description:
            "Voorbereidingswerk, lijnkoken en algemene keukenoperaties",
        },
      ],
      ctaTitle: "Laten We Samenwerken",
      ctaText:
        "Op zoek naar een gemotiveerde en bekwame chef die vanaf dag één kan leveren?",
      ctaButton: "Neem contact op",
    },
    gallery: {
      title: "Galerij",
      subtitle: "Passie in Elke Kop & Gerecht",
    },
    testimonials: {
      title: "Wat Mensen Zeggen",
      subtitle: "Vertrouwd door restaurants, evenementen en koffieliefhebbers",
      items: [
        {
          name: "Marco van Dijk",
          role: "Restaurant Eigenaar",
          text: "Uitstekend professionalisme en ongelofelijke Italiaanse gerechten. Hij sprong bij tijdens ons drukste seizoen en overtrof alle verwachtingen.",
          rating: 5,
        },
        {
          name: "Sophie Jansen",
          role: "Evenementencoördinator",
          text: "Hij maakt niet alleen de beste koffie, maar zijn catering voor ons bedrijfsevenement was uitzonderlijk. Gasten praten er nog steeds over!",
          rating: 5,
        },
        {
          name: "Thomas De Vries",
          role: "Privé Klant",
          text: "Ingehuurd voor een privé diner. Het eten was van restaurantkwaliteit, prachtig gepresenteerd en iedereen vond het geweldig. Zeer aan te bevelen!",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "Neem Contact Op",
      subtitle:
        "Klaar om samen te werken? Laten we samen iets speciaals creëren.",
      form: {
        name: "Uw Naam",
        email: "Uw E-mail",
        phone: "Telefoonnummer",
        message: "Uw Bericht",
        submit: "Verzend Bericht",
        submitting: "Verzenden...",
        // success:
        //   "Bericht succesvol verzonden! We nemen binnenkort contact met u op.",

        success: "Het formulier is tijdelijk niet beschikbaar.",
        error: "Verzenden mislukt. Probeer het opnieuw.",
      },
      whatsapp: "Bericht op WhatsApp",
      info: {
        email: "info@elcoffeino.nl",
        phone: "+31 6 12345678",
        location: "Nederland",
      },
    },
    footer: {
      tagline: "Premium koffie & culinaire excellentie op wielen",
      rights: "Alle rechten voorbehouden.",
      social: "Volg Ons",
    },
    menu: {
      title: "Ons Aanbod",
      subtitle: "Kies het perfecte pakket voor uw evenement",
      ctaText:
        "Aangepaste menu's beschikbaar voor evenementen en privé boekingen.",
      packages: [
        {
          name: "Basis",
          duration: "4 uur (min.)",
          baristas: "1",
          guests: "Tot 60",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Plantaardige melk",
            "Thee",
          ],
        },
        {
          name: "Plus",
          badge: "Meest gekozen",
          duration: "4 uur (min.)",
          baristas: "1",
          guests: "Tot 100",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Plantaardige melk",
            "Thee",
            "Koekjes bij de koffie",
            "Seizoenskoffie",
          ],
        },
        {
          name: "Top",
          duration: "5 uur",
          baristas: "1-2",
          guests: "Tot 150",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Plantaardige melk",
            "Thee",
            "Premium koekjes bij de koffie",
            "Seizoenskoffie",
            "Special drinks",
            "Cold brew / Ijskoffie",
            "Versgeperste sappen",
          ],
        },
      ],
    },
  },

  pl: {
    nav: {
      about: "O Nas",
      chef: "Prywatny Szef Kuchni",
      menu: "Menu",
      services: "Uslugi",
      gallery: "Galeria",
      contact: "Kontakt",
    },
    hero: {
      title: "ElCoffeino",
      subtitle: "Jouw mobiele koffiebar",
      tagline:
        "Mobilny Coffee Bar Premium w Holandii – Specialty Coffee & Nowoczesny Lifestyle",
      cta: "Zobacz Wiecej",
    },
    about: {
      title: "Kim Jestesmy",
      subtitle: "Milo Cie poznac!",
      text: "Jest znany ze swojej elastyczności, niezawodności i gotowości na każde wyzwanie. Niezależnie od tego, czy chodzi o wkroczenie do zatłoczonego serwisu, wspieranie zespołu w godzinach szczytu, pomoc w tworzeniu nowych pomysłów na menu, czy opiekę nad gośćmi prywatnymi, szybko się adaptuje i zawsze pracuje z koncentracją, energią i dbałością o szczegóły. Gotowanie to coś więcej niż praca — to prawdziwa pasja. Zwłaszcza jeśli chodzi o kuchnię włoską, gdzie świeże składniki, autentyczne smaki i szacunek dla tradycji łączą się na każdym talerzu. Jednocześnie czuje się komfortowo w nowoczesnych kuchniach, współczesnych koncepcjach i dynamicznym środowisku pracy. To samo zaangażowanie, które napędza serwis kawowy ElCoffeino, jest wnoszone do każdego projektu kuchennego: jakość, spójność, gościnność i chęć stworzenia wspaniałych wrażeń dla każdego gościa. Niezależnie od tego, czy szukasz niezależnego szefa kuchni do swojej restauracji, wsparcia na wydarzeniu, usług prywatnych posiłków czy wyjątkowego doświadczenia kawowego, ElCoffeino zapewnia jakość z osobowością.",
      text2:
        "Za ElCoffeino stoi pełen pasji przedsiębiorca, który z powodzeniem łączy dwa światy – najwyższej jakości kawy i profesjonalnego doświadczenia kulinarnego. To, co zaczęło się od miłości do jakości, gościnności i tworzenia niezapomnianych chwil, przerodziło się w markę zbudowaną na pasji, ciężkiej pracy i wszechstronności. ElCoffeino to coś więcej niż tylko mobilna kawiarnia – to również zasługa umiejętności i doświadczenia oddanego, niezależnego szefa kuchni. Jako doświadczony, niezależny szef kuchni, oferuje on swoje usługi restauracjom, prywatnym kolacjom, wydarzeniom, projektom cateringowym oraz tymczasowemu wsparciu kuchni. Dzięki bogatemu doświadczeniu w nowoczesnych kuchniach i pracy w różnych środowiskach restauracyjnych, wnosi profesjonalizm, kreatywność i praktyczne podejście do każdej usługi.",
    },
    privateChef: {
      title: "Prywatny Szef Kuchni / Freelance Chef",
      subtitle: "Wiecej niz Kawa – Doswiadczenie Kulinarne w Cenie",
      intro:
        "Za ElCoffeino stoi ten sam pasjonat, który jest równiez doswiadczonym szefem kuchni freelance, dostepnym dla restauracji, eventów, prywatnych kolacji i projektów kulinarnych.",
      description:
        "Z solidnym doswiadczeniem w nowoczesnych kuchniach i praca w róznych restauracjach, wnosi profesjonalizm, kreatywnosc i praktyczne podejscie do kazdej uslugi.",
      passion:
        "Gotowanie to wiecej niz praca — to pasja. Szczególnie jesli chodzi o kuchnie wloska, swieże skladniki, uczciwe smaki i dania przygotowane z sercem.",
      whyWorkTitle: "Wiecej Niz Tylko Szef Kuchni",
      whyWork: [
        "Doswiadczenie w nowoczesnych i dynamicznych kuchniach",
        "Pasja do kuchni wloskiej",
        "Elastyczny i dostepny dla róznych koncepcji",
        "Silna etyka pracy – zadne zadanie nie jest zbyt duze ani zbyt male",
        "Niezawodny, profesjonalny i latwy w wspólpracy",
        "Szybko adaptuje sie do nowych zespolów i srodowisk",
        "Spokojny pod presja i skoncentrowany na jakosci",
      ],
      availableTitle: "Dostepny dla",
      availableServices: [
        {
          title: "Stanowiska szefa kuchni freelance",
          description:
            "Profesjonalne wsparcie kuchenne dla restauracji i hoteli",
        },
        {
          title: "Wsparcie restauracji",
          description:
            "Tymczasowa lub sezonowa pomoc w okresach wzmozonego ruchu",
        },
        {
          title: "Prywatne kolacje",
          description: "Intymne kulinarne doswiadczenia w Twoim domu",
        },
        {
          title: "Eventy i catering",
          description: "Eventy firmowe, wesela i specjalne okazje",
        },
        {
          title: "Tymczasowy personel kuchenny",
          description: "Wypelnij braki kadrowe doswiadczonymi rekami",
        },
        {
          title: "Projekty sezonowe",
          description: "Letnie pop-upy, kuchnie festiwalowe i wiecej",
        },
        {
          title: "Wsparcie menu",
          description: "Rozwój menu i konsultacje receptur",
        },
        {
          title: "Pomoc kuchenna",
          description:
            "Przygotowania, gotowanie na linii i ogólne operacje kuchenne",
        },
      ],
      ctaTitle: "Pracujmy Razem",
      ctaText:
        "Szukasz zmotywowanego i wykwalifikowanego szefa kuchni, który moze dostarczyc od pierwszego dnia?",
      ctaButton: "Skontaktuj sie",
    },
    gallery: {
      title: "Galeria",
      subtitle: "Pasja w Kazdej Filizance i Daniu",
    },
    testimonials: {
      title: "Co Mówia Ludzie",
      subtitle: "Zaufali nam restauracje, eventy i milosnicy kawy",
      items: [
        {
          name: "Marco van Dijk",
          role: "Wlasciciel Restauracji",
          text: "Wybitny profesjonalizm i niesamowite wloskie dania. Dolaczyl w naszym najbardziej ruchliwym sezonie i przekroczyl wszystkie oczekiwania.",
          rating: 5,
        },
        {
          name: "Sophie Jansen",
          role: "Koordynator Eventów",
          text: "Nie tylko robi najlepsza kawe, ale jego catering na nasz event firmowy byl wyjatkowy. Goscie wciaz o tym mówia!",
          rating: 5,
        },
        {
          name: "Thomas De Vries",
          role: "Klient Prywatny",
          text: "Zatrudnilem go na prywatna kolacje. Jedzenie bylo na poziomie restauracji, pieknie podane, a wszyscy to uwielbiili. Goraco polecam!",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "Skontaktuj Sie",
      subtitle: "Gotowy na wspólprace? Stwórzmy razem cos wyjatkowego.",
      form: {
        name: "Twoje Imie",
        email: "Twój Email",
        phone: "Numer Telefonu",
        message: "Twoja Wiadomosc",
        submit: "Wyslij Wiadomosc",
        submitting: "Wysylanie...",
        // success: "Wiadomosc wyslana pomyslnie! Wkrótce sie odezwiemy.",
        success: "Formularz chwilowo niedostępny.",
        error: "Nie udalo sie wyslac wiadomosci. Spróbuj ponownie.",
      },
      whatsapp: "Napisz na WhatsApp",
      info: {
        email: "info@elcoffeino.nl",
        phone: "+31 6 12345678",
        location: "Holandia",
      },
    },
    footer: {
      tagline: "Premium coffee & kulinarna doskonalosc na kólkach",
      rights: "Wszelkie prawa zastrzezone.",
      social: "Sledz Nas",
    },
    menu: {
      title: "Nasza Oferta",
      subtitle: "Wybierz idealny pakiet na Twój event",
      ctaText: "Dostepne niestandardowe menu na eventy i prywatne rezerwacje.",
      packages: [
        {
          name: "Basic",
          duration: "4 godziny (min.)",
          baristas: "1",
          guests: "Do 60 osób",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Mleko roslinne",
            "Herbata",
          ],
        },
        {
          name: "Premium",
          badge: "Najczesciej wybierane",
          duration: "4 godziny (min.)",
          baristas: "1",
          guests: "Do 100 osób",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Mleko roslinne",
            "Herbata",
            "Ciasteczka do kawy",
            "Kawa sezonowa",
          ],
        },
        {
          name: "Excellence",
          duration: "5 godzin",
          baristas: "1-2",
          guests: "Do 150 osób",
          features: [
            "Espresso / Americano",
            "Cappuccino / Latte",
            "Mleko roslinne",
            "Herbata",
            "Premium ciasteczka do kawy",
            "Kawa sezonowa",
            "Specjalne drinki",
            "Cold brew / Kawa mrozona",
            "Swiezo wyciskane soki",
          ],
        },
      ],
    },
  },
};

export const API_URL = import.meta.env.REACT_APP_BACKEND_URL || "";

export async function submitContact(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!API_URL) {
    // Mock submission when no backend
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => resolve({ success: true }), 1500);
    });
  }

  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return res.json();
}
