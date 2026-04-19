import { Card } from "./ui/card";
import { Check, Clock, Users, Coffee } from "lucide-react";
import type { LanguageContent } from "../types/content";

interface Props {
  content: LanguageContent;
}

export default function MenuSection({ content }: Props) {
  const menu = content.menu;

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="py-24 bg-gradient-to-b from-[#0f0f10] to-[#1a1a1a] relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-4 font-serif">
            {menu.title}
          </h2>
          <p className="text-xl text-gray-300 font-light italic">
            {menu.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mt-6" />
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menu.packages.map((pkg, i) => (
            <Card
              key={i}
              data-testid={`package-${pkg.name.toLowerCase()}`}
              className={`bg-[#1a1a1a]/80 backdrop-blur-md border p-8 transition-all duration-500 hover:scale-105 relative ${
                pkg.badge
                  ? "border-[#d4a574] shadow-xl shadow-[#d4a574]/20"
                  : "border-[#d4a574]/30 hover:border-[#d4a574]/50"
              }`}
            >


              <h3 className="text-3xl font-bold text-[#d4a574] mb-6 text-center font-serif">
                {pkg.name}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-[#d4a574]" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Coffee className="w-5 h-5 text-[#d4a574]" />
                  <span>{pkg.baristas} barista(s)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Users className="w-5 h-5 text-[#d4a574]" />
                  <span>{pkg.guests}</span>
                </div>
              </div>

              <div className="border-t border-[#d4a574]/20 pt-6">
                <ul className="space-y-3">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>



      </div>
    </section>
  );
}
