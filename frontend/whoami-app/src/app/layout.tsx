import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WHOAMI",
  description: "fk_2405チームの作品です！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
