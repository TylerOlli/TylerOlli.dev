import type { Metadata } from "next"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tylerolli.dev"),
  title: "Tyler Olli — Software Engineer",
  description:
    "Software engineer building AI-native production systems. LLM orchestration, full-stack platforms, and scalable infrastructure.",
  keywords: [
    "software engineer",
    "AI engineering",
    "LLM orchestration",
    "TypeScript",
    "React",
    "Next.js",
    "full-stack",
    "production systems",
  ],
  authors: [{ name: "Tyler Olli" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tylerolli.dev",
    siteName: "Tyler Olli",
    title: "Tyler Olli — Software Engineer",
    description:
      "Software engineer building AI-native production systems. LLM orchestration, full-stack platforms, and scalable infrastructure.",
    images: [
      {
        url: "/og/tyler-olli-og.png",
        width: 1200,
        height: 630,
        alt: "Tyler Olli — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Olli — Software Engineer",
    description:
      "Software engineer building AI-native production systems.",
    images: ["/og/tyler-olli-og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
