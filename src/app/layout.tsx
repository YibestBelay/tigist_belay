import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../Components/NavBar";
import Footer from "@/Components/Footer";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tigist Belay",
  description: "I Deliver Quality products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        
        <NavBar />
        {children}
        <Footer />
        
        </ThemeProvider>
        
      </body>
    </html>
  );
}
