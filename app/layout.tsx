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
  title: "Tyler Olli | Lead Software Engineer",
  description: "Lead Software Engineer focused on scalable fintech platforms and AI-accelerated development. Building high-impact systems with modern web technologies.",
  keywords: ["software engineer", "fintech", "full-stack", "TypeScript", "React", "Next.js", "AI engineering", "AWS", "lead engineer"],
  authors: [{ name: "Tyler Olli" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tylerolli.dev",
    siteName: "Tyler Olli",
    title: "Tyler Olli | Lead Software Engineer",
    description: "Lead Software Engineer focused on scalable fintech platforms and AI-accelerated development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tyler Olli - Lead Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Olli | Lead Software Engineer",
    description: "Lead Software Engineer focused on scalable fintech platforms and AI-accelerated development.",
    images: ["/og-image.png"],
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
