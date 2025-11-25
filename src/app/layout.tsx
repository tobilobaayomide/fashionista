"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNavbar from "./components/SideNavbar";
import DesktopOnly from "./components/DesktopOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Arima:wght@700&family=Bitcount+Grid+Single:wght@100..900&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Momo+Signature&family=Momo+Trust+Display&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black`}>
        <DesktopOnly />
        <div className="flex min-h-screen overflow-x-hidden">
          <SideNavbar />
          <div className="flex-1 ml-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
