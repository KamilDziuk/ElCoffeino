import { Card } from "./ui/card";
import type { LanguageContent } from "../types/content";

interface Props {
  content: LanguageContent;
}

export default function AboutSection({ content }: Props) {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 bg-gradient-to-b from-[#0f0f10] to-[#1a1a1a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-4 font-serif">
            {content.about.title}
          </h2>
          <p className="text-xl text-gray-300 font-light italic">
            {content.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center mb-20">
          <div className="relative  order-2 lg:order-2">
            <img
              src="../../aboutsectionimage0.webp"
              alt="Private Chef"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-1 h-[100%]">
            <Card className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#d4a574]/30 p-8 hover:border-[#d4a574]/50 transition-all duration-500 shadow-xl h-[100%]">
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                {" "}
                {content.about.text}
              </p>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center mb-20">
          <div className="relative group order-2 lg:order-1 ">
            <img
              src="../../aboutsectionimage1.webp"
              alt="Private Chef"
              className="relative rounded-lg shadow-2xl w-full  h-auto object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2 h-[100%]" >
            <Card className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#d4a574]/30 p-8 hover:border-[#d4a574]/50 transition-all duration-500 shadow-xl h-[100%]">
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                {" "}
                {content.about.text2}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
