import type { LanguageContent } from "../types/content";

const GALLERY_IMAGES = [
  "../../projects0.webp",
  "../../projects1.webp",
  "../../projects2.webp",
  "../../projects3.webp",
  "../../projects4.webp",
  "../../projects5.webp",
  "../../projects6.webp",
  "../../projects7.webp",
  "../../projects8.webp",
];

interface Props {
  content: LanguageContent;
}

export default function GallerySection({ content }: Props) {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f10] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-4 font-serif">
            {content.gallery.title}
          </h2>
          <p className="text-xl text-gray-300 font-light italic">
            {content.gallery.subtitle}
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#d4a574] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg shadow-lg  cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full aspect-square object-cover object-center transition-transform duration-900 group-hover:scale-120 "
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f0f10] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#d4a574]/0 group-hover:bg-[#d4a574]/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
