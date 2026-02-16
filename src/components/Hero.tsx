import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#FAF7F2] to-[#F0EBE1]">
      <Container className="flex flex-wrap items-center py-16 lg:py-24">
        {/* Text content */}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#2C2118] lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight font-serif">
              Velkommen til Ozi Frisør
            </h1>
            <p className="py-5 text-xl leading-relaxed text-[#6B5E50] lg:text-xl xl:text-2xl">
              Din personlige frisøropplevelse i hjertet av byen. Vi skaper
              frisyrer som fremhever din naturlige skjønnhet — med varme,
              ekspertise og øye for detaljer.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#booking"
                className="px-8 py-4 text-lg font-semibold text-white bg-[#8B6F47] rounded-full hover:bg-[#5C4A2E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47]">
                Bestill Time Nå
              </a>
              <a
                href="#tjenester"
                className="px-8 py-4 text-lg font-semibold text-[#8B6F47] border-2 border-[#8B6F47] rounded-full hover:bg-[#F0EBE1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47]">
                Se Våre Tjenester
              </a>
            </div>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="flex items-center justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
          <div
            className="w-full max-w-md h-80 lg:h-[420px] rounded-2xl bg-[#E8E0D4] flex items-center justify-center"
            aria-label="Hero-bilde plassholder">
            <span className="text-[#A89880] text-xl font-medium tracking-widest uppercase">
              Hero Image
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
