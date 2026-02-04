"use client"

import { Badge } from "@/components/ui/badge"

interface TechTagProps {
  name: string
  delay?: number
}

export function TechTag({ name }: TechTagProps) {
  return (
    <Badge 
      variant="outline" 
      className="px-3 py-1.5 text-sm font-medium bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-150 ease-out"
    >
      {name}
    </Badge>
  )
}
