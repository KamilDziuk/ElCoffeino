import { FaInstagram, FaEnvelope } from "react-icons/fa";
import type { LanguageContent } from "../types/content";

interface Props {
  content: LanguageContent;
}

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/elcoffeino/",
  },
];


export default function Footer({ content }: Props) {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { id: "about", label: content.nav.about },
    { id: "chef", label: content.nav.chef },
    { id: "services", label: content.nav.services },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0f0f10] border-t border-[#d4a574]/20 py-12 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center justify-center ">
          <div>
            <img
              src="../../logo.webp"
              alt="ElCoffeino"
              className=" w-47 h-auto cursor-pointer mt-9"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-3 ">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-[#d4a574] transition-colors text-sm "
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-3">
              {content.footer.social}
            </h4>
            <div className="flex space-x-4 ">
              {SOCIAL_LINKS.map(({ id, icon: Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#d4a574]/30 flex items-center justify-center hover:bg-[#d4a574] hover:border-[#d4a574] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-[#d4a574] group-hover:text-[#0f0f10]" />
                </a>
              ))}
              <a
                href={`mailto:${content.contact.info.email}`}
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#d4a574]/30 flex items-center justify-center hover:bg-[#d4a574] hover:border-[#d4a574] transition-all duration-300 group"
              >
                <FaEnvelope className="w-5 h-5 text-[#d4a574] group-hover:text-[#0f0f10]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4a574]/20 pt-8 ">
          <p className="text-center text-gray-400 text-sm ">
            &copy; {year} ElCoffeino. {content.footer.rights}
          </p>
          <br />
          <a
            href="https://kamildziuk.github.io/"
            target="_balank"
            className="text-center text-gray-700 text-sm"
          >
            Realization: Kamil Dziuk
          </a>
        </div>
      </div>
    </footer>
  );
}
