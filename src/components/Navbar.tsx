"use client";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const navigation = [
  { label: "Tjenester", href: "#tjenester" },
  { label: "Galleri", href: "#galleri" },
  { label: "Priser", href: "#priser" },
  { label: "Om Oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Navbar = () => {
  return (
    <header className="w-full bg-[#FAF7F2] border-b border-[#E8E0D4] sticky top-0 z-50">
      <nav
        className="container relative flex flex-wrap items-center justify-between px-6 py-4 mx-auto lg:px-8"
        aria-label="Hovednavigasjon">
        {/* Logo */}
        <Link href="/" aria-label="Ozi Frisør – hjem">
          <span className="text-2xl font-bold text-[#8B6F47] font-serif tracking-tight">
            Ozi Frisør
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <ul className="flex items-center list-none gap-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-block px-4 py-2 text-base font-medium text-[#6B5E50] rounded-md hover:text-[#8B6F47] hover:bg-[#F0EBE1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            className="ml-4 px-5 py-2 text-base font-semibold text-white bg-[#D4A853] rounded-full hover:bg-[#C4953E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]">
            Bestill Time
          </a>
        </div>

        {/* Mobile hamburger */}
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton
                aria-label="Åpne meny"
                className="lg:hidden p-2 rounded-md text-[#6B5E50] hover:text-[#8B6F47] hover:bg-[#F0EBE1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6F47]">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </DisclosureButton>

              <DisclosurePanel className="w-full lg:hidden mt-3 pb-3 border-t border-[#E8E0D4]">
                <div className="flex flex-col pt-3 gap-1">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-base font-medium text-[#6B5E50] rounded-md hover:text-[#8B6F47] hover:bg-[#F0EBE1] transition-colors">
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#booking"
                    className="mt-2 mx-4 px-5 py-2 text-base font-semibold text-white text-center bg-[#D4A853] rounded-full hover:bg-[#C4953E] transition-colors">
                    Bestill Time
                  </a>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </nav>
    </header>
  );
};
