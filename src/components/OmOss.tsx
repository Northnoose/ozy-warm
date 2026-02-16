import { Container } from "@/components/Container";

const team = [
  {
    navn: "Ozi",
    rolle: "Eier & Sjefsfrisør",
    bio: "Med over 15 års erfaring brenner Ozi for å gi hver kunde en personlig opplevelse.",
    initialer: "OZ",
    farge: "bg-[#8B6F47]",
  },
  {
    navn: "Sara",
    rolle: "Fargespesialist",
    bio: "Sara er vår ekspert på fargeteknikker og elsker å skape naturlige, flotte resultater.",
    initialer: "SA",
    farge: "bg-[#C4A97D]",
  },
  {
    navn: "Mikael",
    rolle: "Barber & Herrefrisør",
    bio: "Mikael kombinerer klassisk barbering med moderne trender for den perfekte finish.",
    initialer: "MI",
    farge: "bg-[#5C4A2E]",
  },
];

export const OmOss = () => {
  return (
    <section id="om-oss" className="bg-[#FAF7F2] py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <div className="text-sm font-bold tracking-wider text-[#8B6F47] uppercase mb-3">
            Teamet vårt
          </div>
          <h2 className="text-3xl font-bold text-[#2C2118] lg:text-4xl font-serif">
            Møt Teamet Vårt
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B5E50]">
            Hos Ozi Frisør møter du et lidenskapelig team med bred erfaring og et
            felles mål: at du skal føle deg fantastisk.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:items-start">
          {team.map((person) => (
            <article
              key={person.navn}
              className="flex flex-col items-center text-center max-w-xs">
              <div
                className={`w-24 h-24 rounded-full ${person.farge} flex items-center justify-center text-white text-2xl font-bold font-serif mb-4`}
                aria-label={`Portrettbilde av ${person.navn}`}>
                {person.initialer}
              </div>
              <h3 className="text-xl font-bold text-[#2C2118] font-serif">
                {person.navn}
              </h3>
              <p className="text-[#8B6F47] font-medium mt-1">{person.rolle}</p>
              <p className="text-[#6B5E50] mt-3 leading-relaxed">{person.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
