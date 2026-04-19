import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import type { LanguageContent } from "../types/content";

interface Props {
  content: LanguageContent;
}

export default function PrivateChefSection({ content }: Props) {
  const chef = content.privateChef;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="chef"
      data-testid="chef-section"
      className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f10] relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-4 font-serif">
            {chef.title}
          </h2>
          <p className="text-2xl text-gray-300 font-light italic max-w-3xl mx-auto">
            {chef.subtitle}
          </p>
        </div>

        {/* Image + description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a574] via-[#c9a66b] to-[#d4a574] rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
            <img
              src="../../privatecheffreelancechef.webp"
              alt="Private Chef"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <Card className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#d4a574]/30 p-8 hover:border-[#d4a574]/50 transition-all duration-500 shadow-xl">
              <p className="text-gray-200 leading-relaxed text-lg mb-4">
                {chef.intro}
              </p>
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                {chef.description}
              </p>
              <p className="text-gray-300 leading-relaxed text-base italic border-l-4 border-[#d4a574] pl-4">
                {chef.passion}
              </p>
            </Card>
          </div>
        </div>

        {/* Why work */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#d4a574] mb-8 text-center font-serif">
            {chef.whyWorkTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {chef.whyWork.map((item, i) => (
              <Card
                key={i}
                className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-[#d4a574]/20 p-6 hover:border-[#d4a574]/40 hover:bg-[#1a1a1a]/80 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-200 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-[#1a1a1a] via-[#d4a574]/10 to-[#1a1a1a] border border-[#d4a574]/30 p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#d4a574] mb-4 font-serif">
            {chef.ctaTitle}
          </h3>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {chef.ctaText}
          </p>
          <Button
            data-testid="chef-cta"
            onClick={scrollToContact}
            size="lg"
            className="bg-[#d4a574] text-[#0f0f10] hover:bg-[#c9a66b] font-semibold px-10 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#d4a574]/50"
          >
            {chef.ctaButton}
          </Button>
        </Card>
      </div>
    </section>
  );
}
