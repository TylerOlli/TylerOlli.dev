"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PillProps {
  children: React.ReactNode
  variant?: "light" | "dark"
  className?: string
}

export function Pill({ children, variant = "light", className }: PillProps) {
  const baseClasses = "text-[13px] font-medium px-2.5 py-1 transition-colors duration-150 ease-out"
  
  const variantClasses = {
    light: "bg-ui-bg-surface border-ui-border-subtle text-ui-text-secondary hover:bg-ui-hover-subtle hover:border-ui-border-default",
    dark: "bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:border-white/30"
  }
  
  return (
    <Badge 
      variant="outline" 
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </Badge>
  )
}
