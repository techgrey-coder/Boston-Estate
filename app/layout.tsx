import type { Metadata } from "next";
import AOSProvider from "./components/AOSprovider";
import FloatingDevButton from "./components/floatingBtn";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boston Estates",
  description: "Designed by Tech-Grey",
  
   openGraph: {
    title: "Boston Estates",
    description: "Luxury real estate experiences designed by Tech-Grey",
    url: "https://boston-estates.vercel.app",
    siteName: "Boston Estates",
    images: [
      {
        url: "/tg.png",
        width: 1200,
        height: 630,
        alt: "Boston Estates",
        
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Boston Estates",
    description: "Luxury real estate experiences designed by Tech-Grey",
    images: ["/tg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <AOSProvider/>
        <FloatingDevButton />
        {children}</body>
    </html>
  );
}
