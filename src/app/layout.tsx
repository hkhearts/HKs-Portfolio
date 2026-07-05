import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "HK Hearts",
  description: "Portfolio of Hari Krishnan C — AR/VR Developer, Game Developer, XR Engineer from Tamil Nadu, India.",
  keywords: ["AR/VR Developer","Game Developer","Unity","XR Engineer","Hari Krishnan"],
  authors: [{ name: "Hari Krishnan C" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "HK Hearts",
    description: "Portfolio of Hari Krishnan C — AR/VR Developer, Game Developer, XR Engineer.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
