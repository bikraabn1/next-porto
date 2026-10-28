import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/ui/navigation/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getFeatureSettings } from "./public/datas/pages";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const uncutSans = localFont({
  src: "../public/fonts/UncutSans/UncutSans-Variable.woff2",
  variable: "--font-uncut-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bikraabna.tech'),
  title: {
    default: "Bikra Abna Filqiyast Dzaki | Fullstack Developer",
    template: "%s | Bikra Abna Filqiyast Dzaki"
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Bikra Abna Filqiyast Dzaki | Fullstack Developer",
    description:
      "Official portfolio of Bikra Abna Filqiyast Dzaki.",
    url: "https://bikraabna.tech",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const features = await getFeatureSettings();

  return (
    <html lang="en">
      <body
        className={`${uncutSans.variable} ${martianMono.variable} antialiased selection:bg-signal selection:text-white`}
      >
        <Navbar features={features} />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
