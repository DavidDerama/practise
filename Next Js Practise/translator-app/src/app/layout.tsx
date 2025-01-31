import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pollyglot",
  description: "Translate anything into french, spanish or japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
