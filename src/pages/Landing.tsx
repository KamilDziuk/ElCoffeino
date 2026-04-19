import { useState } from "react";
import type { Language } from "../types/content";
import { content } from "../data/content";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PrivateChefSection from "../components/PrivateChefSection";
import MenuSection from "../components/MenuSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Landing() {
  const [language, setLanguage] = useState<Language>("en");
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[#0f0f10]">
      <Header
        language={language}
        setLanguage={setLanguage}
        content={currentContent}
      />
      <HeroSection content={currentContent} />
      <AboutSection content={currentContent} />
      <PrivateChefSection content={currentContent} />
      <MenuSection content={currentContent} />
      <ServicesSection content={currentContent} />
      <GallerySection content={currentContent} />
      <ContactSection content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}
