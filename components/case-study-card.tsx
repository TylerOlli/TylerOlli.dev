"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CaseStudyCardProps {
  title: string
  description: string
  impact: string
  tags: string[]
  delay?: number
}

export function CaseStudyCard({ 
  title, 
  description, 
  impact, 
  tags, 
  delay = 0 
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full transition-all border border-gray-200 bg-gray-50 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed mt-3">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-xs font-bold text-foreground/70 uppercase tracking-wider mb-2">
              Impact
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">{impact}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-white border-gray-300 text-gray-700 text-sm font-semibold px-2.5 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
