import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Street City - Seu Destino para Streetwear de Qualidade",
  description:
    "Encontre o melhor em streetwear na Street City. Explore nossa coleção exclusiva de tênis e roupas masculinas para expressar seu estilo único. Descubra peças de vestuário urbano autênticas e acessórios que elevam seu visual. Visite-nos hoje!",
  keywords:
    "Street City, streetwear, tênis masculinos, moda urbana, roupas masculinas",
  robots: "index, follow",
  category: "loja de roupa masculina e tênis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-radial-gradient`}>
        {children}
      </body>
    </html>
  );
}
