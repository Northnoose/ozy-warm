import React from "react";
import { Container } from "@/components/Container";

const anmeldelser = [
  {
    sitat:
      "Har vært kunde hos Ozi i over tre år. Alltid fornøyd, og stemningen i salongen er fantastisk!",
    navn: "Maria K.",
    initialer: "MK",
    farge: "bg-[#8B6F47]",
  },
  {
    sitat:
      "Endelig en frisør som forstår hva jeg vil ha. Anbefales på det sterkeste!",
    navn: "Thomas A.",
    initialer: "TA",
    farge: "bg-[#5C4A2E]",
  },
  {
    sitat:
      "Brudestylingen min ble helt perfekt. Tusen takk til teamet hos Ozi!",
    navn: "Linn S.",
    initialer: "LS",
    farge: "bg-[#C4A97D]",
  },
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-3">
        {anmeldelser.map((a) => (
          <blockquote
            key={a.navn}
            className="flex flex-col justify-between w-full h-full bg-[#F0EBE1] px-8 py-10 rounded-2xl">
            <p className="text-xl leading-relaxed text-[#2C2118]">
              &ldquo;{a.sitat}&rdquo;
            </p>
            <div className="flex items-center mt-8 gap-3">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${a.farge} flex items-center justify-center text-white font-bold text-sm`}
                aria-hidden="true">
                {a.initialer}
              </div>
              <cite className="not-italic">
                <span className="text-base font-semibold text-[#2C2118]">
                  {a.navn}
                </span>
              </cite>
            </div>
          </blockquote>
        ))}
      </div>
    </Container>
  );
};
