import { Hero } from "@/components/Hero";
import { Tjenester } from "@/components/Tjenester";
import { Galleri } from "@/components/Galleri";
import { Prisliste } from "@/components/Prisliste";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { OmOss } from "@/components/OmOss";
import { Booking } from "@/components/Booking";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Tjenester />
      <Galleri />
      <Prisliste />

      <section className="bg-[#FAF7F2] pt-16">
        <SectionTitle
          preTitle="Kundeanmeldelser"
          title="Hva kundene våre sier">
          Vi er stolte av å gi hver kunde en uforglemmelig opplevelse. Her er
          noen ord fra de som har besøkt oss.
        </SectionTitle>
        <Testimonials />
      </section>

      <OmOss />
      <Booking />

      <section className="bg-[#FAF7F2] pt-16 pb-8">
        <SectionTitle
          preTitle="Spørsmål og svar"
          title="Ofte stilte spørsmål">
          Finner du ikke svaret du leter etter? Ta gjerne kontakt med oss
          direkte.
        </SectionTitle>
        <Faq />
      </section>
    </>
  );
}
