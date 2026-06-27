import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/ui/navigation/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ['300', '400', '500', '600', '700']
})

const clashDisplay = localFont({
  src: "./public/fonts/ClashDisplay/ClashDisplay-Bold.woff2",
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bikraabna.tech'),
  title: {
    default : "Bikra Abna Filqiyast Dzaki | Frontend Developer",
    template : "%s | Bikra Abna Filqiyast Dzaki"
  },
  description: "Web Portfolio by Bikra Abna",
  keywords: [
    "Bikra Abna Filqiyast Dzaki",
    "Bikra",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Indonesia",
  ],
  authors: [{
    name: "Bikra Abna Filqiyast Dzaki"
  }],
  creator: "Bikra Abna Filqiyast Dzaki",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Bikra Abna Filqiyast Dzaki | Front-End Developer",
    description:
      "Official portfolio of Bikra Abna Filqiyast Dzaki.",
    url: "https://domainlu.tech",
    siteName: "Bikra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image/profile/profile.png",
        width: 1200,
        height: 630,
        alt: "Bikra Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${clashDisplay.variable} ${firaCode.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
