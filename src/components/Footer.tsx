import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-[#2C2118] text-[#C4A97D]">
      <Container>
        <div className="grid grid-cols-1 gap-10 pt-12 pb-8 lg:grid-cols-4">
          {/* Kolonne 1 — Ozi Frisør */}
          <div>
            <Link href="/" aria-label="Ozi Frisør – hjem">
              <span className="text-2xl font-bold text-white font-serif">
                Ozi Frisør
              </span>
            </Link>
            <p className="mt-3 text-[#C4A97D] leading-relaxed">
              Din frisør i Drammen.
            </p>
          </div>

          {/* Kolonne 2 — Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Kontakt
            </h3>
            <address className="not-italic space-y-2 text-[#C4A97D]">
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tollbugata+15C+2044+Drammen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tollbugata 15C, 2044, Drammen
                </a>
              </p>
              <p>
                <a
                  href="tel:+4745506771"
                  className="hover:text-white transition-colors">
                  +47 455 06 771
                </a>
              </p>
              <p>
                <a
                  href="mailto:oguzkara1975@hotmail.com"
                  className="hover:text-white transition-colors">
                  oguzkara1975@hotmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Kolonne 3 — Åpningstider */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Åpningstider
            </h3>
            <dl className="space-y-2 text-[#C4A97D]">
              <div className="flex justify-between gap-4">
                <dt>Man–Fre</dt>
                <dd className="text-white">10:00 – 18:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Lørdag</dt>
                <dd className="text-white">10:00 – 16:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Søndag</dt>
                <dd className="text-white">Stengt</dd>
              </div>
            </dl>
          </div>

          {/* Kolonne 4 — Følg oss */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Følg Oss
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ozi_frisor_as?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Besøk oss på Instagram"
                className="text-[#C4A97D] hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/ozifrisor"
                aria-label="Besøk oss på Facebook"
                className="text-[#C4A97D] hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a
                href="https://www.tiktok.com/@ozi.frisr.as"
                aria-label="Besøk oss på TikTok"
                className="text-[#C4A97D] hover:text-white transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[#3D2E1E] text-sm text-center text-[#8B7355]">
          © 2025 Ozi Frisør. Alle rettigheter reservert.
        </div>
      </Container>
    </footer>
  );
}

const InstagramIcon = ({ size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const FacebookIcon = ({ size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const TikTokIcon = ({ size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);
