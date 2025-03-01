import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import { NavigationItem } from "./types/NavigationItem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aampere Coding Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationItems: NavigationItem[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Vehicles",
      url: "/vehicles",
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar navigationItems={navigationItems} />
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
