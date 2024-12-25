import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import Content from "./components/Content";

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scheduler",
  description:
    "Welcome to the Advanced Employee Scheduling Application dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="border w-full">
            <Content>{children}</Content>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
