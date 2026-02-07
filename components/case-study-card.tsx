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
      whileHover={{ y: -2 }}
    >
      <Card className="group h-full transition-shadow duration-200 ease-out border border-ui-border-subtle bg-ui-bg-surface-subtle shadow-sm hover:shadow-md hover:border-ui-border-default">
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
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-ui-bg-surface border-ui-border-subtle text-ui-text-secondary text-[13px] font-medium px-2.5 py-1 hover:bg-ui-hover-subtle hover:border-ui-border-default transition-colors duration-150 ease-out">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
