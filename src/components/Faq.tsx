"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqdata = [
  {
    sporsmal: "Trenger jeg å bestille time på forhånd?",
    svar: "Vi anbefaler å bestille time for å sikre at du får den tiden som passer deg best. Drop-in er mulig dersom det er ledig kapasitet.",
  },
  {
    sporsmal: "Hvilke produkter bruker dere?",
    svar: "Vi bruker profesjonelle produkter fra anerkjente merker som er skånsomme for håret og gir langvarige resultater.",
  },
  {
    sporsmal: "Tilbyr dere konsultasjon før behandling?",
    svar: "Absolutt! Vi starter alltid med en kort konsultasjon for å forstå dine ønsker og anbefale den beste løsningen.",
  },
  {
    sporsmal: "Har dere parkering?",
    svar: "Ja, det finnes parkeringsmuligheter rett utenfor salongen. Vi ligger også nært kollektivtransport.",
  },
  {
    sporsmal: "Kan jeg avbestille eller endre timen min?",
    svar: "Ja, vi ber om at endringer gjøres minst 24 timer i forveien. Ved avbestilling senere enn dette kan det tilkomme et gebyr.",
  },
];

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.sporsmal} className="mb-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-5 py-4 text-lg text-left text-[#2C2118] rounded-xl bg-[#F0EBE1] hover:bg-[#E8E0D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47] transition-colors">
                    <span className="font-medium">{item.sporsmal}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#8B6F47] flex-shrink-0 ml-3`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-5 pt-3 pb-4 text-[#6B5E50] leading-relaxed">
                    {item.svar}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};
