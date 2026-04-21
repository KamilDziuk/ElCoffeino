import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import type { Language, LanguageContent } from "../types/content";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
];

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: LanguageContent;
}

export default function Header({ language, setLanguage, content }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: content.nav.about },
    { id: "chef", label: content.nav.chef },
    { id: "menu", label: content.nav.menu },
    { id: "services", label: content.nav.services },
    { id: "gallery", label: content.nav.gallery },
    { id: "contact", label: content.nav.contact },
  ];

  const LanguageDropdown = ({
    className = "",
    testId = "language-toggle",
  }: {
    className?: string;
    testId?: string;
  }) => (
    <div className={`relative ${className}`}>
      <Button
        data-testid={testId}
        onClick={() => setLangMenuOpen(!langMenuOpen)}
        variant="outline"
        size="sm"
        className="border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-[#0f0f10] transition-colors duration-300"
      >
        <Globe className="w-4 h-4 mr-2" />
        {language.toUpperCase()}
      </Button>

      {langMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-[#d4a574]/30 rounded-lg shadow-xl overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              data-testid={`lang-${lang.code}`}
              onClick={() => {
                setLanguage(lang.code);
                setLangMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang.code
                  ? "bg-[#d4a574] text-[#0f0f10] font-semibold"
                  : "text-gray-200 hover:bg-[#d4a574]/20 hover:text-[#d4a574]"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 h-30 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1f1f1d] backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <img
            src="../../logo.webp"
            alt="ElCoffeino"
            className=" w-47 h-auto cursor-pointer mt-9"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-200 hover:text-[#d4a574]  mt-[40px] transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <LanguageDropdown
              testId="language-toggle-desktop "
              className="mt-[40px]"
            />
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageDropdown
              testId="language-toggle-mobile"
              className="mt-[40px]"
            />
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200  hover:text-[#d4a574]  mt-[40px] transition-colors "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-[#0f0f10]/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-200 hover:text-[#d4a574] hover:bg-[#1a1a1a] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
