"use client"

import { Badge } from "@/components/ui/badge"

interface PrimaryTechTagProps {
  name: string
  delay?: number
}

export function PrimaryTechTag({ name }: PrimaryTechTagProps) {
  return (
    <Badge 
      variant="secondary" 
      className="px-3 py-1.5 text-sm font-semibold bg-white border border-gray-400 text-gray-800"
    >
      {name}
    </Badge>
  )
}
