"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full border transition-all shadow-sm hover:shadow-md">
        <CardHeader>
          <div className="mb-4 inline-flex rounded-md bg-foreground/5 p-3 transition-colors group-hover:bg-foreground/10">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed mt-2">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
