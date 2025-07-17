import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preserve Skin Clinic",
  description:
    "Premium skincare and aesthetic treatments at Preserve Skin Clinic.",
  generator: "Preserve Skin Clinic Web App",
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
