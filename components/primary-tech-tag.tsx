"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface PrimaryTechTagProps {
  name: string
  delay?: number
}

export function PrimaryTechTag({ name, delay = 0 }: PrimaryTechTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <Badge 
        variant="secondary" 
        className="px-4 py-2.5 text-sm font-semibold transition-all hover:bg-foreground/10 border border-foreground/10"
      >
        {name}
      </Badge>
    </motion.div>
  )
}
