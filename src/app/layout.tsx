import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avinashuchadiya.vercel.app"),
  title: {
    default: "Avinash Uchadiya | Senior MERN Stack Developer",
    template: "%s | Avinash Uchadiya",
  },
  description:
    "Detail-oriented MERN Stack Developer with 4+ years of experience building scalable SaaS and enterprise solutions. React, TypeScript, Node.js specialist serving Fortune 500 clients.",
  keywords: [
    "Avinash Uchadiya",
    "MERN Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Frontend Engineer",
    "Full Stack Developer",
    "SaaS",
    "Blue Yonder",
    "Enterprise Solutions",
    "Software Engineer",
    "India",
  ],
  authors: [{ name: "Avinash Uchadiya" }],
  creator: "Avinash Uchadiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avinashuchadiya.vercel.app",
    title: "Avinash Uchadiya | Senior MERN Stack Developer",
    description:
      "Building Scalable SaaS & Enterprise-Grade Frontend Systems. 4+ years crafting production-grade solutions for Fortune 500 clients.",
    siteName: "Avinash Uchadiya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Uchadiya | Senior MERN Stack Developer",
    description:
      "Building Scalable SaaS & Enterprise-Grade Frontend Systems. React, TypeScript, Node.js specialist.",
    creator: "@AvinashUchadiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
