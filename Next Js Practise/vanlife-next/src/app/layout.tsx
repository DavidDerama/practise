import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vanlife",
  description: "Find a van for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#FFF7ED]`}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
