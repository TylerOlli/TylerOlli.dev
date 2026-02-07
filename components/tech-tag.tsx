"use client"

import { Badge } from "@/components/ui/badge"

interface TechTagProps {
  name: string
  delay?: number
  variant?: "light" | "dark"
}

export function TechTag({ name, variant = "light" }: TechTagProps) {
  const lightClasses = "px-3 py-1.5 text-sm font-medium bg-ui-bg-surface border-ui-border-subtle text-ui-text-secondary hover:bg-ui-hover-subtle hover:border-ui-border-default transition-colors duration-150 ease-out"
  const darkClasses = "px-3 py-1.5 text-sm font-medium bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:border-white/30 transition-colors duration-150 ease-out"
  
  return (
    <Badge 
      variant="outline" 
      className={variant === "dark" ? darkClasses : lightClasses}
    >
      {name}
    </Badge>
  )
}
