"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TechTagProps {
  name: string
  delay?: number
}

export function TechTag({ name, delay = 0 }: TechTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <Badge 
        variant="outline" 
        className="px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:border-primary/40"
      >
        {name}
      </Badge>
    </motion.div>
  )
}
