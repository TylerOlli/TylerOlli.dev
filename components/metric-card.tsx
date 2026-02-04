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
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="text-4xl font-bold tracking-tight lg:text-5xl">{value}</div>
        <div className="mt-2 text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  )
}
