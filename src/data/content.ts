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
      text: ` NICE TO MEET YOU! 

We are two young entrepreneurs brought together by one thing — a passion for coffee and creating memorable experiences.

ElCoffeino was born from the desire to offer more than just a drink — a moment to unwind, positive energy, and a genuine smile with every cup of perfectly crafted espresso.

It’s a project built on dreams, dedication, and a real understanding of the market. We care about every detail — from the quality of the beans to the interaction with our guests — because we know that’s what truly makes the difference.

⸻

WHAT DO WE DO?

We are wherever you need us.

ElCoffeino is a fully mobile coffee catering service operating across the Netherlands — served in a unique way, directly from our coffee bike.

We come straight to you — for events, weddings, business meetings, festivals, or private celebrations. No matter the occasion, we provide your guests with a professional barista experience.

If needed, we can also expand our offer with freshly squeezed juices and a selection of sweet treats to pair with coffee, creating a more diverse and tailored menu.`,

      text2: `WHY OUR COFFEE?

We work with beans that belong to the top 5% of coffee beans in the world.

➡ Specialty coffee is grown under carefully controlled conditions — at the right altitude, in rich soil, and in a suitable climate — to bring out its full flavor.

➡ We choose Moyee Coffee — beans sourced from responsible farms, handpicked, slowly dried, and carefully roasted.

➡ Moyee Coffee operates under the Fair Chain model — supporting local communities and ensuring a more balanced distribution of profits.

⸻

We’re here for you — with great coffee, positive energy, and a reliable, professional approach.

You create the occasion. We take care of the rest.

Sit back, relax, and simply enjoy your coffee.`,
    },
    privateChef: {
      title: "Private Chef / Freelance Chef",
      subtitle: "More than Coffee – Culinary Experience Included",
      intro:
        "Behind ElCoffeino stands a passionate owner and experienced freelance chef, available for restaurants, events, private dining and bespoke culinary projects.",
      description:
        "With a strong foundation built in modern, high-pressure kitchens, including experience in restaurants featured in the Michelin Guide, he brings a refined level of professionalism, creativity, and a hands-on approach to every service. Having worked across multiple roles and kitchen environments, he understands both the detail and the bigger picture of running a successful service. His culinary journey goes beyond borders — drawing inspiration from different corners of the world, he combines international influences with a deep appreciation for quality ingredients and authentic techniques. This global perspective allows him to adapt quickly, contribute fresh ideas, and elevate any kitchen he steps into.",
      passion:
        "Cooking is more than just work — it’s a true passion. Especially when it comes to Italian cuisine: fresh ingredients, honest flavours, and dishes made with heart. Whether supporting a professional kitchen or creating an intimate dining experience, he delivers food that is both memorable and meaningful.",
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
        success: "Message sent successfully! We'll get back to you soon.",
        error: "Failed to send message. Please try again.",
      },
      whatsapp: "Message on WhatsApp",
      info: {
        email: "elcoffeinonl@gmail.com",
        phone: "+31 6 17995104",
        location: "Valkenierspad 13, 4714 BD Sprundel Netherlands",
        business: "El Coffeino: 93133111",
      },
    },
    footer: {
      tagline: "Premium coffee & culinary excellence on wheels",
      rights: "All rights reserved.",
      social: "Follow Us",
    },
    // sent: {
    //   subject: "Thank you for your inquiry – El Coffeino",
    //   text: "Hi, thank you for your inquiry about our services ☕ We’ve received your message and will get back to you as soon as possible (usually within 24 hours). If your request is urgent, feel free to contact us directly: 📞 +31 6 17995104 Best regards,  Łukasz Seweryn - El Coffeino. Instagram: https://instagram.com/elcoffeino Website: https://elcoffeino.com We provide services for eve.",
    // },
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
      text: `LEUK JE TE ONTMOETEN!

Wij zijn twee jonge ondernemers met één gezamenlijke passie — koffie en het creëren van bijzondere ervaringen.

ElCoffeino is ontstaan uit de wens om meer te bieden dan alleen een drankje — een moment van rust, positieve energie en een oprechte glimlach bij elke perfect gezette espresso.

Het is een project gebouwd op dromen, toewijding en een goed begrip van de markt. We letten op elk detail — van de kwaliteit van de bonen tot het contact met onze gasten — want juist dat maakt het verschil.

⸻

WAT DOEN WIJ?

Wij zijn waar jij ons nodig hebt.

ElCoffeino is een volledig mobiele koffiecatering die actief is in heel Nederland — geserveerd op een unieke manier, direct vanaf onze koffiefiets.

Wij komen naar jou toe — voor evenementen, bruiloften, zakelijke meetings, festivals of privégelegenheden. Wat de gelegenheid ook is, wij zorgen voor een professionele barista-ervaring voor jouw gasten.

Indien gewenst kunnen wij ons aanbod uitbreiden met versgeperste sappen en een selectie zoetigheden die perfect bij koffie passen, zodat we een nog gevarieerder en op maat gemaakt menu kunnen aanbieden.`,

      text2: `WAAROM ONZE KOFFIE?

Wij werken met bonen die behoren tot de beste 5% van de koffiebonen wereldwijd.

➡ Specialty coffee wordt verbouwd onder zorgvuldig gecontroleerde omstandigheden — op de juiste hoogte, in vruchtbare grond en met een geschikt klimaat — om de volle smaak naar voren te brengen.

➡ Wij kiezen voor Moyee Coffee — bonen afkomstig van verantwoorde teelt, met de hand geplukt, langzaam gedroogd en zorgvuldig gebrand.

➡ Moyee Coffee werkt volgens het Fair Chain-principe — ter ondersteuning van lokale gemeenschappen en een eerlijkere verdeling van opbrengsten.

⸻

Wij staan voor je klaar — met goede koffie, positieve energie en een aanpak waarop je kunt vertrouwen.

Jij creëert het moment. Wij zorgen voor de rest.

Leun achterover, ontspan en geniet van je koffie.`,
    },
    privateChef: {
      title: "Privé Chef / Freelance Chef",
      subtitle: "Meer dan Koffie – Culinaire Ervaring Inbegrepen",
      intro:
        "Achter ElCoffeino staat een gepassioneerde eigenaar en ervaren freelance chef, beschikbaar voor restaurants, evenementen, private dining en op maat gemaakte culinaire projecten.",
      description:
        "Met een sterke basis opgebouwd in moderne, veeleisende keukens, waaronder ervaring in restaurants die zijn opgenomen in de Michelin Gids, brengt hij een hoog niveau van professionaliteit, creativiteit en een hands-on mentaliteit naar elke service. Door te werken in verschillende functies en keukenomgevingen begrijpt hij zowel de details als het grotere geheel van een succesvolle service. Zijn culinaire reis gaat verder dan grenzen — geïnspireerd door verschillende uithoeken van de wereld combineert hij internationale invloeden met een diepe waardering voor kwaliteitsingrediënten en authentieke technieken. Dit wereldwijde perspectief stelt hem in staat zich snel aan te passen, frisse ideeën in te brengen en elke keuken waarin hij werkt naar een hoger niveau te tillen.",
      passion:
        "Koken is meer dan alleen werk — het is een echte passie. Vooral als het gaat om de Italiaanse keuken: verse ingrediënten, eerlijke smaken en gerechten die met hart worden bereid. Of hij nu een professionele keuken ondersteunt of een intieme dinerervaring creëert, hij levert gerechten die zowel memorabel als betekenisvol zijn.",
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
        success:
          "Bericht succesvol verzonden! We nemen binnenkort contact met u op.",
        error: "Verzenden mislukt. Probeer het opnieuw.",
      },
      whatsapp: "Bericht op WhatsApp",
      info: {
        email: "elcoffeinonl@gmail.com",
        phone: "+31 6 17995104",
        location: "Valkenierspad 13, 4714 BD Sprundel Nederland",
        business: "El Coffeino: 93133111",
      },
    },
    footer: {
      tagline: "Premium koffie & culinaire excellentie op wielen",
      rights: "Alle rechten voorbehouden.",
      social: "Volg Ons",
    },
    // sent: {
    //   subject: "Bedankt voor uw vraag – El Coffeino",
    //   text: "Hallo, bedankt voor uw vraag over onze diensten ☕ We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op (meestal binnen 24 uur). Als uw verzoek urgent is, kunt u ons direct bereiken: 📞 +31 6 17995104 Met vriendelijke groeten, Łukasz Seweryn - El Coffeino. Instagram: https://instagram.com/elcoffeino Website: https://elcoffeino.com Wij bieden diensten aan voor eve.",
    // },
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
