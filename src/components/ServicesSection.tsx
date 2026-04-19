import { Card } from "./ui/card";
import { UtensilsCrossed, Briefcase, Home, Users, Clock, Palmtree, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LanguageContent } from "../types/content";

const ICONS: LucideIcon[] = [
  UtensilsCrossed, Briefcase, Home, Users, Clock, Palmtree, ScrollText, UtensilsCrossed,
];

interface Props {
  content: LanguageContent;
}

export default function ServicesSection({ content }: Props) {
  const services = content.privateChef.availableServices;

  return (
    <section id="services" data-testid="services-section" className="py-24 bg-gradient-to-b from-[#0f0f10] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-4 font-serif">
            {content.privateChef.availableTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Card
                key={i}
                className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#d4a574]/20 p-6 hover:border-[#d4a574]/50 hover:bg-[#1a1a1a] transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-[#d4a574]/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4a574]/10 flex items-center justify-center group-hover:bg-[#d4a574]/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#d4a574] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-[#d4a574] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
