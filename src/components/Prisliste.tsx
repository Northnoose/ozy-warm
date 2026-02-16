"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

const kategorier = [
  {
    label: "Dame",
    tjenester: [
      { navn: "Klipp & føn", pris: "kr 550,-" },
      { navn: "Klipp uten føn", pris: "kr 400,-" },
      { navn: "Farging helfarging", pris: "kr 1 290,-" },
      { navn: "Farging utvekst", pris: "kr 890,-" },
      { navn: "Highlights halvhode", pris: "kr 1 190,-" },
      { navn: "Highlights helhode", pris: "kr 1 590,-" },
      { navn: "Oppsett / Styling", pris: "kr 600,-" },
      { navn: "Brudestyling", pris: "kr 1 200,-" },
    ],
  },
  {
    label: "Herre",
    tjenester: [
      { navn: "Hårklipp", pris: "kr 350,-" },
      { navn: "Klipp & skjeggtrim", pris: "kr 490,-" },
      { navn: "Skjeggtrim", pris: "kr 250,-" },
      { navn: "Barbering med varmt håndkle", pris: "kr 350,-" },
    ],
  },
  {
    label: "Barn",
    tjenester: [{ navn: "Barneklipp (under 12 år)", pris: "kr 280,-" }],
  },
];

export const Prisliste = () => {
  const [aktiv, setAktiv] = useState(0);

  return (
    <section id="priser" className="bg-[#FAF7F2] py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <div className="text-sm font-bold tracking-wider text-[#8B6F47] uppercase mb-3">
            Prisliste
          </div>
          <h2 className="text-3xl font-bold text-[#2C2118] lg:text-4xl font-serif">
            Priser
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B5E50]">
            Oversiktlige priser for alle tjenester.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center gap-2 mb-8"
          role="tablist"
          aria-label="Priskategorier">
          {kategorier.map((kat, idx) => (
            <button
              key={kat.label}
              role="tab"
              aria-selected={aktiv === idx}
              aria-controls={`panel-${idx}`}
              id={`tab-${idx}`}
              onClick={() => setAktiv(idx)}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47] ${
                aktiv === idx
                  ? "bg-[#8B6F47] text-white"
                  : "bg-[#F0EBE1] text-[#6B5E50] hover:bg-[#E8E0D4]"
              }`}>
              {kat.label}
            </button>
          ))}
        </div>

        {/* Price table */}
        <div className="max-w-2xl mx-auto">
          {kategorier.map((kat, idx) => (
            <div
              key={kat.label}
              id={`panel-${idx}`}
              role="tabpanel"
              aria-labelledby={`tab-${idx}`}
              hidden={aktiv !== idx}>
              <div className="rounded-2xl overflow-hidden border border-[#E8E0D4]">
                {kat.tjenester.map((tj, i) => (
                  <div
                    key={tj.navn}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                    }`}>
                    <span className="text-[#2C2118] font-medium">{tj.navn}</span>
                    <span className="text-[#8B6F47] font-semibold">{tj.pris}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-6 text-center text-sm text-[#6B5E50] italic">
            Prisene er veiledende. Endelig pris avtales ved konsultasjon.
          </p>
        </div>
      </Container>
    </section>
  );
};
