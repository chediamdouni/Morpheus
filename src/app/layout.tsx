import type { Metadata } from "next";
import { Birthstone } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';
import "./globals.css";

const birthstone = Birthstone({
  variable: "--font-birthstone",
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediTheria",
  description: "A Mediterranean Ode to Timeless Luxury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
