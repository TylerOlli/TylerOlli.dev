"use client"

import { Badge } from "@/components/ui/badge"

interface TechTagProps {
  name: string
  delay?: number
  variant?: "light" | "dark"
}

export function TechTag({ name, variant = "light" }: TechTagProps) {
  const lightClasses = "px-3 py-1.5 text-sm font-medium bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-150 ease-out"
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
