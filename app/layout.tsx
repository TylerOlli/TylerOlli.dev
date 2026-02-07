import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
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

export const metadata: Metadata = {
  metadataBase: new URL('https://tylerolli.dev'),
  title: "Tyler Olli",
  description: "Senior Software Engineer. Building scalable software and AI platforms.",
  keywords: ["software engineer", "senior engineer", "full-stack", "TypeScript", "React", "Next.js", "AI engineering", "AWS", "context engineering"],
  authors: [{ name: "Tyler Olli" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tylerolli.dev",
    siteName: "Tyler Olli",
    title: "Tyler Olli",
    description: "Senior Software Engineer. Building scalable software and AI platforms.",
    images: [
      {
        url: "/og/tyler-olli-og.png",
        width: 1200,
        height: 630,
        alt: "Tyler Olli - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Olli",
    description: "Senior Software Engineer. Building scalable software and AI platforms.",
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
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
