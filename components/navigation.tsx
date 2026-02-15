"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const allSections = ["hero", ...navItems.map((item) => item.href.slice(1))]
      let current = allSections[0]

      for (const id of allSections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = id
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link
            href="#hero"
            className="text-sm font-semibold text-zinc-100 hover:text-white transition-colors tracking-tight"
          >
            Tyler Olli
          </Link>

          {/* Navigation links + Resume */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-[13px] transition-colors duration-200 rounded-md",
                  activeSection === item.href.slice(1)
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="w-px h-4 bg-zinc-800 mx-2" />

            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium px-3.5 py-1.5 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
