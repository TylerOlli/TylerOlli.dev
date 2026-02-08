"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PillProps {
  children: React.ReactNode
  tone?: "ui" | "data"
  className?: string
  onClick?: () => void
}

export function Pill({ children, tone = "ui", className, onClick }: PillProps) {
  // Base classes - applied to all pills
  const baseClasses = "rounded-full border text-[13px] font-medium px-2.5 py-1 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ui-surface"
  
  // Tone-specific classes using semantic accent tokens
  const toneClasses = {
    ui: "text-ui-text-secondary border-accent-ui/10 bg-accent-ui/5 hover:border-accent-ui-light hover:bg-accent-ui/10 hover:shadow-sm focus-visible:ring-accent-ui-light",
    data: "text-white border-white/40 bg-accent-data/5 hover:border-accent-data-light hover:bg-accent-data/10 hover:shadow-sm focus-visible:ring-accent-data-light"
  }
  
  return (
    <Badge 
      variant="outline" 
      className={cn(baseClasses, toneClasses[tone], className)}
      onClick={onClick}
    >
      {children}
    </Badge>
  )
}
