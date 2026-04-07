import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.voxtech.co.za"),
  title: "VoxTech | The voice of tech execution",
  description:
    "VoxTech helps ambitious businesses design, build, and launch premium digital systems, software products, and execution-ready technical solutions.",
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
