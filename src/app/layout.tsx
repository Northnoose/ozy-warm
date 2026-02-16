import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ozi Frisør — Profesjonell Frisørsalong",
  description:
    "Velkommen til Ozi Frisør. Vi tilbyr hårklipp, farging, styling og barbering i en varm og innbydende salong. Bestill time i dag!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAF7F2] text-[#2C2118]`}>
        <ThemeProvider attribute="class" forcedTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
