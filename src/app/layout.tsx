import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const calibre = localFont({
  src: [
    {
      path: "../fonts/calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-calibre",
});

const sfMono = localFont({
  src: [
    {
      path: "../fonts/calibre/SFMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sfMono",
});

export const metadata: Metadata = {
  title: "Pallob Poddar",
  description: "Pallob Poddar portfolio website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${calibre.variable} ${sfMono.variable}`}>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
