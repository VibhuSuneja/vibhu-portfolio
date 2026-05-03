import type { Metadata } from "next";
import { Sora, DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vibhu Suneja | MERN Stack Developer & Technical Architect",
  description: "Engineering high-performance web ecosystems and AI-integrated platforms. Specialized in MERN stack, Next.js, and Agentic RAG solutions.",
  keywords: ["MERN Stack", "Next.js", "AI Development", "Agentic RAG", "Full Stack Developer", "Vibhu Suneja"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${dmSerif.variable} ${dmMono.variable} antialiased bg-[#080808] text-[#d4d4d4]`}
      >
        {children}
      </body>
    </html>
  );
}
