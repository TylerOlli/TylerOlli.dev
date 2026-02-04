"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  value: string
  label: string
  delay?: number
  className?: string
}

export function MetricCard({ value, label, delay = 0, className }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card p-8 transition-all shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className="relative">
        <div className="text-4xl font-bold tracking-tight lg:text-5xl">{value}</div>
        <div className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">{label}</div>
      </div>
    </motion.div>
  )
}
