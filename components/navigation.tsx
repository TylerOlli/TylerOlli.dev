"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Overview", href: "#hero" },
  { label: "Work", href: "#case-studies" },
  { label: "ModelTriage", href: "#modeltriage" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4 sm:gap-8">
          {/* Left-aligned navigation */}
          <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2 sm:px-3 py-1.5 text-[11px] sm:text-[13px] font-normal transition-all relative group whitespace-nowrap flex-shrink-0",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground/80 hover:text-foreground"
                )}
              >
                {item.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-2 sm:left-3 right-2 sm:right-3 h-[1px] bg-foreground transition-opacity",
                    activeSection === item.href.slice(1)
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-40"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Right-aligned Resume button */}
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-[13px] font-medium px-3 sm:px-4 py-1.5 rounded-md border border-border hover:bg-accent hover:border-primary/30 transition-all whitespace-nowrap flex-shrink-0"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
