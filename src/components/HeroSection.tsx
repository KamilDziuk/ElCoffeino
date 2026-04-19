import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import type { LanguageContent } from "../types/content";

interface Props {
  content: LanguageContent;
}

export default function HeroSection({ content }: Props) {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/mainimage.webp')" }}
    >
      <div className="absolute inset-0 hero-parallax">
        <div className="absolute inset-0 bg-linear-to-b from-[#0f0f10]/90 via-[#0f0f10]/75 to-[#0f0f10]" />
      </div>

      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#d4a574]/10 to-transparent animate-pulse-slow" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto  animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-[#d4a574] font-serif tracking-wider">
          {content.hero.title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6 italic">
          {content.hero.subtitle}
        </p>
        <div className="w-32 h-1 bg-linear-to-r from-transparent via-[#d4a574] to-transparent mx-auto mb-8" />
        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          {content.hero.tagline}
        </p>
        <Button
          data-testid="hero-cta"
          onClick={scrollToAbout}
          size="lg"
          className="bg-[#d4a574] text-[#0f0f10] hover:bg-[#c9a66b] font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#d4a574]/50"
        >
          {content.hero.cta}
        </Button>
      </div>

      <div className="absolute  bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#d4a574]" />
      </div>
    </section>
  );
}
