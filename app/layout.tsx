import type { Metadata } from "next";
import { Nunito_Sans, Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";


const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300","400"],
  variable: "--font-body",
});

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300","400","500"],
  variable: "--font-heading",
});

const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury Park & across CA. In-person & online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${heading.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
