import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/Layout/components/AppHeader";
import AppFooter from "@/components/Layout/components/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "陶瓷展品",
  description: "陶瓷展品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex min-h-screen flex-col"}>
        <AppHeader />
        <main className="flex-1 bg-white">{children}</main>

        <AppFooter />
      </body>
    </html>
  );
}
