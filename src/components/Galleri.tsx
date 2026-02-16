import { Container } from "@/components/Container";

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
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="aspect-square rounded-lg overflow-hidden bg-[#E8E0D4] flex items-center justify-center">
              {/* TODO: Erstatt placeholder-divs med <Image> når bilder er klare */}
              <span className="text-[#A89880] text-base font-medium tracking-widest uppercase transition-transform duration-300 hover:scale-105 inline-block">
                Bilde {num}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
