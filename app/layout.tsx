import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrekMosaic",
  description: "TrekMosaic UI/UX App for camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
