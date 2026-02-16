import { Container } from "@/components/Container";

const tjenester = [
  {
    tittel: "Hårklipp",
    beskrivelse:
      "Profesjonell klipp for dame, herre og barn. Vi lytter til dine ønsker og gir deg en frisyre som passer din stil og hverdag.",
    pris: "Fra kr 350,-",
    ikon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"
        />
      </svg>
    ),
  },
  {
    tittel: "Farging & Highlights",
    beskrivelse:
      "Fra naturlige nyanser til dristige forandringer. Vi bruker skånsomme produkter som gir varig farge og sunn glans.",
    pris: "Fra kr 890,-",
    ikon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    tittel: "Styling & Oppsett",
    beskrivelse:
      "Perfekt for bryllup, konfirmasjon eller en spesiell kveld. Vi skaper elegante oppsett og styling som varer hele arrangementet.",
    pris: "Fra kr 600,-",
    ikon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    tittel: "Skjeggtrim & Barbering",
    beskrivelse:
      "Klassisk barbering og skjeggtrim med varmt håndkle og presisjon. En avslappende opplevelse for den moderne mannen.",
    pris: "Fra kr 250,-",
    ikon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
        />
      </svg>
    ),
  },
];

export const Tjenester = () => {
  return (
    <section id="tjenester" className="bg-[#FAF7F2] py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <div className="text-sm font-bold tracking-wider text-[#8B6F47] uppercase mb-3">
            Hva vi tilbyr
          </div>
          <h2 className="text-3xl font-bold text-[#2C2118] lg:text-4xl font-serif">
            Våre Tjenester
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B5E50]">
            Fra enkle klipp til komplette stylingopplevelser — vi tar oss av deg
            fra start til slutt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tjenester.map((tjeneste) => (
            <article
              key={tjeneste.tittel}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#F0EBE1] flex items-center justify-center text-[#8B6F47] mb-5 flex-shrink-0">
                {tjeneste.ikon}
              </div>
              <h3 className="text-xl font-bold text-[#2C2118] mb-2 font-serif">
                {tjeneste.tittel}
              </h3>
              <p className="text-[#6B5E50] leading-relaxed flex-grow">
                {tjeneste.beskrivelse}
              </p>
              <div className="mt-5 pt-4 border-t border-[#F0EBE1]">
                <span className="text-base font-semibold text-[#8B6F47]">
                  {tjeneste.pris}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
