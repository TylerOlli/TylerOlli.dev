"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, Zap, GitCompare, Network, Code2, Sparkles, CheckCircle2, Shield, TrendingUp, Sliders, Cpu, FileText, RefreshCw } from "lucide-react"
import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { CaseStudyCard } from "@/components/case-study-card"
import { FeatureCard } from "@/components/feature-card"
import { Pill } from "@/components/ui/pill"
import { TypingText } from "@/components/typing-text"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true)
  }, [])

  return (
    <main className="relative">
      {/* Hero Section */}
      <Section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-ui-bg-surface"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ui-bg-surface-subtle via-ui-bg-surface to-ui-bg-surface" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 px-5 py-2 text-sm font-semibold uppercase tracking-wider bg-ui-bg-surface-muted border border-ui-border-default text-ui-text-secondary">
                Senior Software Engineer
              </Badge>
            </motion.div>
            
            <h1 className="font-[family-name:var(--font-outfit)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
              Tyler Olli
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 leading-relaxed max-w-3xl mx-auto font-light">
              <TypingText 
                text="Building scalable software and AI platforms."
                duration={2000}
                onComplete={handleTypingComplete}
              />
            </p>

            <p 
              className={`text-base md:text-lg text-muted-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto font-light transition-opacity duration-200 ${
                isTypingComplete ? 'opacity-100' : 'opacity-0'
              }`}
            >
              I take ideas from architecture to production, creating products that teams can rely on.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <a href="#case-studies">
                <Button size="lg" className="group px-8 h-12 text-base">
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                </Button>
              </a>
              <a 
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                or get in touch
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/TylerOlli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tylerolli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ollityler@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* What I Help Teams Do */}
      <Section id="scope" className="bg-ui-bg-surface-subtle">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                What I Help Teams Do
              </h2>
              {/* Subtle divider */}
              <div className="flex justify-center mb-4">
                <div className="w-48 h-[2px] bg-accent-ui"></div>
              </div>
              <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
                The outcomes that consistently make a difference.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ship Reliably - Blue (UI) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative rounded-lg border border-ui-border-subtle bg-accent-ui/5 group-hover:bg-accent-ui/12 p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar - lighter at rest, intensifies on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-ui-light/50 to-accent-ui-mid/50 group-hover:from-accent-ui group-hover:to-accent-ui-mid transition-colors duration-200"></div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent-ui/10 group-hover:bg-accent-ui/15 rounded transition-colors duration-200 flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-accent-ui" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ship Reliably</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Turn ideas into production software with clear ownership, fewer handoffs, and systems teams can depend on from day one.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Scale Without Pain - Blue (UI) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative rounded-lg border border-ui-border-subtle bg-accent-ui/5 group-hover:bg-accent-ui/12 p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar - lighter at rest, intensifies on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-ui-light/50 to-accent-ui-mid/50 group-hover:from-accent-ui group-hover:to-accent-ui-mid transition-colors duration-200"></div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent-ui/10 group-hover:bg-accent-ui/15 rounded transition-colors duration-200 flex-shrink-0 mt-0.5">
                    <TrendingUp className="h-5 w-5 text-accent-ui" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Scale Without Pain</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Design software that can grow with usage and requirements without constant re-architecture or rewrites.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Make Smart Technical Decisions - Green (Data) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative rounded-lg border border-ui-border-subtle bg-accent-data/5 group-hover:bg-accent-data/12 p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar - lighter at rest, intensifies on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-data-light/50 to-accent-data-mid/50 group-hover:from-accent-data group-hover:to-accent-data-mid transition-colors duration-200"></div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent-data/10 group-hover:bg-accent-data/15 rounded transition-colors duration-200 flex-shrink-0 mt-0.5">
                    <Sliders className="h-5 w-5 text-accent-data" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Make Smart Technical Decisions</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Balance speed, complexity, and long-term maintainability under real product and operational constraints.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bring AI Into Real Systems - Purple (AI) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative rounded-lg border border-ui-border-subtle bg-accent-ai/5 group-hover:bg-accent-ai/12 p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar - lighter at rest, intensifies on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-ai-light/50 to-accent-ai-mid/50 group-hover:from-accent-ai group-hover:to-accent-ai-mid transition-colors duration-200"></div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent-ai/10 group-hover:bg-accent-ai/15 rounded transition-colors duration-200 flex-shrink-0 mt-0.5">
                    <Cpu className="h-5 w-5 text-accent-ai" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Bring AI Into Real Systems</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Integrate AI thoughtfully, with structure, validation, and production constraints that hold up in real systems.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" className="bg-ui-bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Selected Case Studies
            </h2>
            {/* Divider */}
            <div className="flex justify-center mb-5">
              <div className="w-48 h-[2px] bg-accent-ui"></div>
            </div>
            <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto font-light">
              High-impact projects that scaled systems, improved workflows, and delivered value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Account Registration Portal"
              description="Designed and delivered a high-volume account registration platform under strict reliability and compliance constraints, coordinating frontend, backend, and platform teams to ship on schedule."
              impact="Enabled reliable account creation at scale, improved onboarding conversion, and reduced friction across the registration flow."
              tags={["React", "AEM", "Java", "OAuth"]}
              delay={0.1}
            />
            
            <CaseStudyCard
              title="Rules-Driven Eligibility System"
              description="Designed a flexible eligibility and decision system that governed access to product features, offers, and workflows, allowing teams to update rules without engineering involvement or service downtime."
              impact="Lowered the risk, effort, and operational cost of frequent product and policy updates made by content authors."
              tags={["Next.js", "Node.js", "Redis", "PostgreSQL"]}
              delay={0.2}
            />
            
            <CaseStudyCard
              title="AI Translation Platform"
              description="Built an AI-powered translation workflow that generated localized content for different languages and regions across web applications using structured product and requirements context."
              impact="Reduced translation costs and turnaround time while improving consistency across localized content."
              tags={["Github Spec Kit", "OpenAI", "React", "AEM"]}
              delay={0.3}
            />
          </div>
        </Container>
      </Section>

      {/* ModelTriage Product Spotlight */}
      <Section id="modeltriage" className="relative overflow-hidden section-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border-accent-data/30 text-white/90 hover:border-accent-data/50 transition-colors">
              Product Spotlight
            </Badge>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              ModelTriage
            </h2>
            {/* Divider */}
            <div className="flex justify-center mb-7">
              <div className="w-40 h-[2px] bg-accent-data"></div>
            </div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            A decision and verification layer that routes prompts to the right LLM and explains model behavior.
            </p>
          </motion.div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative w-full rounded-lg border border-accent-data/20 hover:border-accent-data/30 transition-colors duration-200 overflow-hidden" style={{ filter: 'brightness(0.94)' }}>
              <Image
                src="/modeltriage-screenshot.png"
                alt="ModelTriage interface showing LLM comparison and routing"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* How It Works & Why It Matters - Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* How It Works */}
              <div className="group relative p-8 rounded-lg border border-white/10 bg-white/10 shadow-sm hover:bg-white/15 hover:shadow-lg transition-all duration-200 overflow-hidden">
                {/* Left accent bar - appears on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-data opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-foreground font-semibold">1. Analyze context</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      ModelTriage reads the prompt and any uploaded files to understand the task.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-foreground font-semibold">2. Route intelligently</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The request is classified and routed to the LLM best suited for that type of work.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-foreground font-semibold">3. Compare behavior</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      When multiple models are queried, responses are analyzed to identify agreement, disagreement, and unique perspectives.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-foreground font-semibold">The result</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Engineers can review how different models behave on the same task and make an informed decision before production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why It Matters */}
              <div className="group relative p-8 rounded-lg border border-white/10 bg-white/10 shadow-sm hover:bg-white/15 hover:shadow-lg transition-all duration-200 overflow-hidden">
                {/* Left accent bar - appears on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-data opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                
                <h3 className="text-xl font-bold mb-4">Why It Matters</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                LLM outputs vary widely in quality, cost, and reliability, making model choice a recurring engineering decision rather than a one-time setup.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                ModelTriage brings structure to that process through task-aware routing and parallel comparison, giving teams predictable costs, measurable quality, and confidence in model behavior.
                </p>
                <p className="text-foreground font-semibold mb-3">
                  Engineering teams use ModelTriage to:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed mb-6 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-muted-foreground flex-shrink-0">•</span>
                    <span>Evaluate tradeoffs between models before committing to one</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground flex-shrink-0">•</span>
                    <span>Validate prompt behavior across providers, not just a single model</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground flex-shrink-0">•</span>
                    <span>Debug inconsistent responses and edge cases early</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground flex-shrink-0">•</span>
                    <span>Justify model choices with evidence instead of intuition</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="text-center mb-6">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {["Next.js", "TypeScript", "OpenAI", "Anthropic", "Google AI", "Vercel", "Postgres", "Tailwind"].map((tech) => (
                <Pill key={tech} tone="data">{tech}</Pill>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <a href="https://modeltriage.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group px-8">
                Visit ModelTriage
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a 
              href="https://github.com/TylerOlli/ModelTriage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </motion.div>
        </Container>
      </Section>

      {/* AI in Engineering */}
      <Section id="ai-engineering" className="section-alt">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-center">
              AI in My Engineering Workflow
            </h2>
            {/* Divider */}
            <div className="flex justify-center mb-7">
              <div className="w-56 h-[2px] bg-accent-ai"></div>
            </div>
            <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
              I use AI-assisted development tools such as <strong>Cursor</strong>, <strong>GitHub Copilot</strong>, and <strong>Codex</strong> to explore ideas and execute faster, while making the final calls on architecture, technical tradeoffs, and what ships to production. This approach shapes how I use AI across my engineering workflow:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-7xl mx-auto mb-12"
          >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <div className="group p-6 rounded-lg border border-ui-border-subtle bg-card shadow-sm hover:shadow-lg hover:border-accent-ai transition-all duration-200 ease-out h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent-ai/5 group-hover:bg-accent-ai/15 rounded transition-colors duration-200">
                        <Sliders className="w-5 h-5 text-accent-ai" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Context Engineering</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Design structured prompts with clear inputs and expectations, defining success criteria and error handling to produce repeatable, predictable AI workflows.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="group p-6 rounded-lg border border-ui-border-subtle bg-card shadow-sm hover:shadow-lg hover:border-accent-ai transition-all duration-200 ease-out h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent-ai/5 group-hover:bg-accent-ai/15 rounded transition-colors duration-200">
                        <Code2 className="w-5 h-5 text-accent-ai" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Code Generation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Draft boilerplate, generate tests, and prototype features faster. AI handles the repetitive work while I focus on architecture and production logic.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div className="group p-6 rounded-lg border border-ui-border-subtle bg-card shadow-sm hover:shadow-lg hover:border-accent-ai transition-all duration-200 ease-out h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent-ai/5 group-hover:bg-accent-ai/15 rounded transition-colors duration-200">
                        <FileText className="w-5 h-5 text-accent-ai" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Documentation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Generate and maintain API docs, inline documentation, and onboarding guides. Improve cross-team clarity, reduce knowledge silos, and keep system intent documented as code evolves.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="group p-6 rounded-lg border border-ui-border-subtle bg-card shadow-sm hover:shadow-lg hover:border-accent-ai transition-all duration-200 ease-out h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-accent-ai/5 group-hover:bg-accent-ai/15 rounded transition-colors duration-200">
                        <RefreshCw className="w-5 h-5 text-accent-ai" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Code Review</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Identify edge cases, performance risks, and architectural issues. Use AI-assisted review to modernize legacy systems and refactor technical debt with validation at each step.
                    </p>
                  </div>
                </motion.div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
              {/* Agent-Oriented Engineering Systems - Focal Point */}
              <div className="group max-w-4xl mx-auto mt-14 bg-ui-bg-surface border border-ui-border-subtle rounded-lg py-10 px-6 md:py-12 md:px-10 mb-14 shadow-sm hover:shadow-lg transition-all duration-200 ease-out overflow-hidden relative">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-ai/30 group-hover:bg-accent-ai-dark transition-colors duration-200"></div>
                <h3 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-extrabold text-foreground text-center mb-8">
                  Agent-Oriented Engineering Systems
                </h3>
                
                <div className="max-w-2xl mx-auto space-y-7">
                  <p className="text-base text-foreground/80 leading-relaxed">
                  I design and operate AI-driven engineering systems where multiple specialized agents execute work in parallel. Agents handle code generation, validation, review, documentation, and migration, while I retain architectural ownership and final decision authority.
                  </p>
                  
                  <p className="text-base text-foreground/80 leading-relaxed">
                  I treat context engineering as an agent system design discipline. Agents are designed with explicit inputs, constraints, schemas, and success criteria to improve predictable, repeatable behavior. This turns LLM interactions from ad-hoc prompts into reliable, testable components that integrate cleanly with production systems.
                  </p>
                </div>
              </div>

              {/* Measurable Impact - Punchline */}
              <div className="max-w-3xl mx-auto pt-8 border-t border-ui-border-default">
                <p className="text-lg leading-relaxed text-foreground/90">
                  <span className="font-extrabold text-accent-ai-dark">Measurable impact:</span> Reduced feature iteration cycles from days to hours for well-scoped work, enabling 3–5× faster delivery on AI-assisted features and significantly more time spent on system design and high-leverage decisions.
                </p>
              </div>
          </motion.div>
        </Container>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center">
              Experience
            </h2>
            {/* Divider */}
            <div className="flex justify-center mb-12">
              <div className="w-36 h-[2px] bg-accent-ui"></div>
            </div>

            <div className="relative border-l-2 border-ui-border-subtle pl-8">
              <div className="space-y-12">
                {/* Blankfactor - Current Role (UI-focused) */}
                {/* Citrix uses accent-data (green) for data-focused work (MongoDB, libraries, etc.) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-0 w-5 h-5 rounded-full bg-accent-ui border-[3px] border-background ring-2 ring-accent-ui/20" />
                  <div className="group relative bg-ui-bg-surface border border-ui-border-subtle rounded px-6 py-5 shadow-sm hover:shadow-lg hover:border-accent-ui-light transition-all duration-200 ease-out overflow-hidden">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-ui to-accent-ui-mid group-hover:from-accent-ui-dark group-hover:to-accent-ui transition-colors duration-200"></div>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">Lead Software Engineer</h3>
                      <p className="text-sm text-muted-foreground font-medium">Blankfactor • 2023–2025</p>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <div className="flex items-center justify-center w-5 h-5 bg-accent-ui/5 group-hover:bg-accent-ui/10 rounded transition-colors duration-200 mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-accent-ui" />
                        </div>
                        <span className="leading-relaxed">Delivered an <strong>account registration platform</strong> with integrated authentication, unifying onboarding workflows across applications</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex items-center justify-center w-5 h-5 bg-accent-ui/5 group-hover:bg-accent-ui/10 rounded transition-colors duration-200 mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-accent-ui" />
                        </div>
                        <span className="leading-relaxed">Built a <strong>centralized eligibility system</strong> governing feature access and workflows with support for dynamic rule updates</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex items-center justify-center w-5 h-5 bg-accent-ui/5 group-hover:bg-accent-ui/10 rounded transition-colors duration-200 mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-accent-ui" />
                        </div>
                        <span className="leading-relaxed">Architected systems coordinating <strong>services and data pipelines</strong> to support personalized experiences across financial products</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex items-center justify-center w-5 h-5 bg-accent-ui/5 group-hover:bg-accent-ui/10 rounded transition-colors duration-200 mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-accent-ui" />
                        </div>
                        <span className="leading-relaxed">Shipped an <strong>AI-based localization system</strong> that automated multilingual content generation across web platforms</span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex items-center justify-center w-5 h-5 bg-accent-ui/5 group-hover:bg-accent-ui/10 rounded transition-colors duration-200 mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-accent-ui" />
                        </div>
                        <span className="leading-relaxed">Pioneered adoption of <strong>AI development tools</strong> and drove usage across engineering teams by integrating them into production workflows</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Citrix - Senior Software Engineer - Past Role */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[40px] top-0 w-3.5 h-3.5 rounded-full bg-ui-border-strong border-[1.5px] border-background" />
                  <div className="group relative bg-ui-bg-surface border border-ui-border-subtle rounded px-6 py-4 shadow-sm hover:shadow-lg hover:border-ui-border-default transition-all duration-200 ease-out">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">Senior Software Engineer</h3>
                      <p className="text-sm text-muted-foreground font-medium">Citrix • 2020–2023</p>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">Led end-to-end architecture and delivery for enterprise web platforms supporting NetScaler and XenServer</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">Built purchasing systems with reusable workflows, secure SKU lookup, interactive forms, and pricing calculators</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">Delivered lightweight, embeddable demo applications used on marketing pages to showcase real usage</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">Implimented a company-wide unsubscribe and email preference service backed by MongoDB with centralized opt-out logic</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">Built and maintained a centralized component library for React and AEM used across multiple enterprise sites</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">Introduced automated testing and accessibility workflows to improve reliability, compliance, and release confidence</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section id="tech-stack" className="section-tech">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Tech Stack
            </h2>
            {/* Divider */}
            <div className="flex justify-center mb-5">
              <div className="w-36 h-[2px] bg-accent-ui"></div>
            </div>
            <p className="text-base text-ui-text-secondary/90 max-w-xl mx-auto leading-relaxed mb-5">
              Technologies I use to build and ship production systems.
            </p>
            {/* Capability Strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 text-base font-medium text-ui-text-secondary">
              <span>Frontend & Backend</span>
              <span className="text-ui-text-muted">|</span>
              <span>Serverless Systems</span>
              <span className="text-ui-text-muted">|</span>
              <span>Data Storage</span>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Core Stack - Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-ui-bg-surface-muted via-ui-bg-surface-subtle to-ui-bg-surface border-2 border-ui-border-default rounded-xl px-6 pt-3 pb-4 shadow-sm hover:shadow-lg hover:border-ui-border-strong transition-all duration-200 ease-out"
              style={{
                background: 'radial-gradient(circle at top left, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 50%, rgb(249, 250, 251) 100%)'
              }}
            >
              {/* Primary Badge */}
              <div className="absolute top-3 right-4">
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-ui-bg-inverse text-ui-text-inverse rounded">
                  Primary
                </span>
              </div>
              
              {/* Shape Badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex items-center justify-center w-6 h-6 bg-ui-bg-inverse/5 rounded">
                  <div className="w-2 h-2 rotate-45 bg-ui-bg-inverse"></div>
                </div>
                <h3 className="text-[11px] font-bold text-ui-text-primary uppercase tracking-[0.1em]">Core Stack</h3>
              </div>              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-start justify-center lg:pr-6 lg:border-r lg:border-ui-border-subtle">
                  <span className="text-[9px] text-ui-text-tertiary uppercase tracking-wider font-medium mb-1.5">LANG</span>
                  <span className="text-base font-bold text-ui-text-primary">TypeScript</span>
                </div>
                <div className="flex flex-col items-start justify-center lg:pr-6 lg:border-r lg:border-ui-border-subtle">
                  <span className="text-[9px] text-ui-text-tertiary uppercase tracking-wider font-medium mb-1.5">RUNTIME</span>
                  <span className="text-base font-bold text-ui-text-primary">Node.js</span>
                </div>
                <div className="flex flex-col items-start justify-center lg:pr-6 lg:border-r lg:border-ui-border-subtle">
                  <span className="text-[9px] text-ui-text-tertiary uppercase tracking-wider font-medium mb-1.5">DB</span>
                  <span className="text-base font-bold text-ui-text-primary">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[9px] text-ui-text-tertiary uppercase tracking-wider font-medium mb-1.5">COMPUTE</span>
                  <span className="text-base font-bold text-ui-text-primary">AWS Lambda</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Cards Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* UI Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-ui-bg-surface border border-ui-border-subtle rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-accent-ui-light transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-ui to-accent-ui-mid group-hover:from-accent-ui-dark group-hover:to-accent-ui transition-colors duration-200"></div>
                
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex items-center justify-center w-6 h-6 bg-accent-ui/5 group-hover:bg-accent-ui/10 rounded transition-colors duration-200">
                    <div className="w-2 h-2 rounded-full bg-accent-ui"></div>
                  </div>
                  <h3 className="text-[11px] font-bold text-ui-text-primary uppercase tracking-[0.1em]">UI Frameworks</h3>
                </div>
                <div className="divide-y divide-ui-border-subtle">
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">React</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Next.js</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-ui-border-subtle">
                  <p className="text-sm text-ui-text-tertiary">Also: Angular, Vue</p>
                </div>
              </motion.div>

              {/* Data Systems */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="group relative bg-ui-bg-surface border border-ui-border-subtle rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-accent-data-light transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-data to-accent-data-mid group-hover:from-accent-data-dark group-hover:to-accent-data transition-colors duration-200"></div>
                
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex items-center justify-center w-6 h-6 bg-accent-data/5 group-hover:bg-accent-data/10 rounded transition-colors duration-200">
                    <div className="w-2 h-2 bg-accent-data" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
                  </div>
                  <h3 className="text-[11px] font-bold text-ui-text-primary uppercase tracking-[0.1em]">Data Systems</h3>
                </div>
                <div className="divide-y divide-ui-border-subtle">
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Redis</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Snowflake</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Amazon S3</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative bg-ui-bg-surface border border-ui-border-subtle rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-accent-ai-light transition-all duration-200 ease-out overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-ai to-accent-ai-mid group-hover:from-accent-ai-dark group-hover:to-accent-ai transition-colors duration-200"></div>
                
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex items-center justify-center w-6 h-6 bg-accent-ai/5 group-hover:bg-accent-ai/10 rounded transition-colors duration-200">
                    <div className="w-2 h-2 bg-accent-ai"></div>
                  </div>
                  <h3 className="text-[11px] font-bold text-ui-text-primary uppercase tracking-[0.1em]">AI Tools</h3>
                </div>
                <div className="divide-y divide-ui-border-subtle">
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Cursor</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">GitHub Copilot</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">ChatGPT</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Claude</span>
                  </div>
                  <div className="flex items-center gap-2 py-1.5">
                    <span className="w-1 h-1 rounded-full bg-ui-border-default flex-shrink-0"></span>
                    <span className="text-[15px] font-bold text-ui-text-primary leading-snug">Gemini</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" className="relative overflow-hidden">
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Let's Build Something
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light">
              Interested in complex engineering problems where scale, architecture, and engineering judgment matter. If you're building something meaningful, let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:ollityler@gmail.com" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group">
                  <Mail className="mr-2 h-5 w-5" />
                  ollityler@gmail.com
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/tylerolli/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <a
                href="https://github.com/TylerOlli"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Code2 className="h-5 w-5" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-ui-bg-surface">
        <Container>
          <div className="py-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tyler Olli. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </Container>
      </footer>
    </main>
  )
}
