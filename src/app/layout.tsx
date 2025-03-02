import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import { NavigationItem } from "./types/NavigationItem";

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
      <body className="antialiased">
        <NavigationBar navigationItems={navigationItems} />
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
