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
