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
      className="px-3 py-1.5 text-sm font-semibold bg-ui-bg-surface border border-ui-border-strong text-ui-text-secondary"
    >
      {name}
    </Badge>
  )
}
