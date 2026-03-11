import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Salvus | Nutrologia Dr. Deangelo",
  description: "Sua saúde não aceita protocolos genéricos. Nutrologia focada em Emagrecimento, Hipertrofia, Reposição Hormonal e Longevidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased bg-stone-950 text-stone-100">
        {children}
      </body>
    </html>
  );
}
