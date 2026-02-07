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
      <Card className="group h-full transition-all duration-200 ease-out border border-ui-border-subtle bg-ui-bg-surface-subtle shadow-sm hover:shadow-md hover:border-accent-ui-light overflow-hidden relative">
        {/* Top accent bar - appears on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-ui to-accent-ui-mid opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed mt-3">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-xs font-bold text-accent-ui-dark uppercase tracking-wider mb-2">
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
