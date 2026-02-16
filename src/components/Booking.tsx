import { Container } from "@/components/Container";

export const Booking = () => {
  return (
    <section id="booking" className="bg-[#5C4A2E] py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="text-sm font-bold tracking-wider text-[#C4A97D] uppercase mb-3">
            Klar for en forandring?
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-4xl font-serif">
            Bestill Time
          </h2>
          <p className="mt-4 max-w-xl text-lg text-[#C4A97D]">
            Klar for en ny look? Bestill din time enkelt og raskt.
          </p>

          <a
            href="#"
            className="mt-8 px-10 py-4 text-xl font-bold text-white bg-[#D4A853] rounded-full hover:bg-[#C4953E] transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] focus-visible:ring-offset-2 focus-visible:ring-offset-[#5C4A2E]">
            {/* TODO: Sett inn lenke til online booking-system (f.eks. Planyo, Timely, eller Fixit) */}
            Book Online Nå
          </a>

          <p className="mt-6 text-[#C4A97D] text-base">
            Eller ring oss:{" "}
            <a
              href="tel:+4745506771"
              className="font-bold text-white hover:text-[#D4A853] transition-colors">
              +47 455 06 771
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};
