import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Letter Land — Learn the Alphabet!",
  description: "A fun, interactive alphabet learning app for kids ages 3-6",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Letter Land",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B6B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body className="font-nunito antialiased">
        {children}
      </body>
    </html>
  );
}
