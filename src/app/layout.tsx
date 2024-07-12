import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
