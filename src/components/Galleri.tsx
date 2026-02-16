import { Container } from "@/components/Container";
import Image from "next/image";

const images = [
  { src: "/img/hair/ozy_hair1.jpg", alt: "Frisyre 1" },
  { src: "/img/hair/ozy_hair2.jpg", alt: "Frisyre 2" },
  { src: "/img/hair/ozy_hair3.jpg", alt: "Frisyre 3" },
  { src: "/img/hair/ozy_hair4.jpg", alt: "Frisyre 4" },
  { src: "/img/hair/ozy_hair5.jpg", alt: "Frisyre 5" },
  { src: "/img/hair/ozy_hair6.jpg", alt: "Frisyre 6" },
];

export const Galleri = () => {
  return (
    <section id="galleri" className="bg-[#F0EBE1] py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <div className="text-sm font-bold tracking-wider text-[#8B6F47] uppercase mb-3">
            Inspirasjon
          </div>
          <h2 className="text-3xl font-bold text-[#2C2118] lg:text-4xl font-serif">
            Vårt Arbeid
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B5E50]">
            Se eksempler på frisyrer og styling utført av vårt team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden bg-[#E8E0D4]">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
