import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zain Ahmed | Portfolio",
  description: "Zain Ahmed's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
