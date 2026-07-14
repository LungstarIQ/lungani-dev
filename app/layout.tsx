import type { Metadata } from "next";
import { IBM_Plex_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  variable: "--font-serif",
});

const fun = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fun",
});

export const metadata: Metadata = {
  title: "Thandanani Lungani Mkhize — Full-Stack Software Developer",
  description:
    "Full-stack developer building web platforms and games. Angular, Spring Boot, Java, PostgreSQL, Firebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.variable} ${serif.variable} ${fun.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}