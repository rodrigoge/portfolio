import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import '../styles/styles.scss';

export const metadata: Metadata = {
  title: "Rodrigo Gouveia Estevão - Portfólio",
  description: "A portfolio project being build with Next.js, Sass & Typescript.",
};

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: false
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={font.className} lang="pt-BR">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
