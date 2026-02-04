"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Zap, GitCompare, Network, Code2, Sparkles, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { MetricCard } from "@/components/metric-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { FeatureCard } from "@/components/feature-card"
import { TechTag } from "@/components/tech-tag"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
        
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
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                Lead Software Engineer
              </Badge>
            </motion.div>
            
            <h1 className="font-[family-name:var(--font-outfit)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
              Tyler Olli
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              Building scalable fintech platforms and shipping high-impact products with{" "}
              <span className="text-foreground font-medium">AI-accelerated development</span>.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#case-studies">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/tylerolli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/tylerolli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:tyler@tylerolli.dev"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Proof Highlights */}
      <Section id="proof" className="section-alt">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
              Delivering measurable results across teams, users, and systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard value="100k+" label="Users Served" delay={0.1} />
            <MetricCard value="5" label="Engineers Led" delay={0.2} />
            <MetricCard value="3" label="Platform Launches" delay={0.3} />
            <MetricCard value="50%" label="Delivery Speed Gain" delay={0.4} />
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Selected Case Studies
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
              High-impact projects that scaled systems, improved workflows, and delivered value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Account Registration Portal"
              description="Led team of 5 engineers to ship a production account registration system serving 100,000+ users, integrating React front-end with AEM and Java microservices."
              impact="Launched on schedule, enabled digital account creation at scale, improved conversion rates and user onboarding experience."
              tags={["React", "AEM", "Java", "Team Leadership", "Microservices"]}
              delay={0.1}
            />
            
            <CaseStudyCard
              title="Rules-Driven Eligibility System"
              description="Architected and built a flexible eligibility and dynamic content platform using Next.js, Node.js, Redis, and Postgres to support complex business rules."
              impact="Reduced manual configuration effort by 70%, enabled rapid rule changes without deployments, improved accuracy of content targeting."
              tags={["Next.js", "Node.js", "Redis", "PostgreSQL", "System Design"]}
              delay={0.2}
            />
            
            <CaseStudyCard
              title="AWS Lambda Data Orchestration"
              description="Built TypeScript-based AWS Lambda workflows to orchestrate Java microservices, Snowflake queries, and S3 data pipelines for financial data processing."
              impact="Automated data flows, reduced processing time by 60%, improved reliability and observability of critical data operations."
              tags={["AWS Lambda", "TypeScript", "Snowflake", "S3", "Data Engineering"]}
              delay={0.3}
            />
          </div>
        </Container>
      </Section>

      {/* ModelTriage Product Spotlight */}
      <Section id="modeltriage" className="relative overflow-hidden section-alt">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Product Spotlight
            </Badge>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              ModelTriage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              An AI engineering platform for comparing, routing, and optimizing LLM outputs. Built for developers who need reliable AI decisions at scale.
            </p>
          </motion.div>

          {/* What it does */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 p-8 rounded-lg border bg-card shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4">What It Does</h3>
            <p className="text-muted-foreground leading-relaxed">
              ModelTriage provides a structured approach to multi-LLM workflows: compare outputs from GPT-4, Claude, Gemini, and other models side-by-side, route prompts to the best model for each task, and validate responses against schemas and constraints. Built with production reliability in mind.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={Network}
              title="Intelligent Routing"
              description="Automatically route prompts to the optimal LLM based on task type, cost constraints, and performance requirements."
              delay={0.1}
            />
            <FeatureCard
              icon={GitCompare}
              title="Diff & Compare"
              description="Run the same prompt across multiple models and compare outputs in a clean interface with structured diffs."
              delay={0.2}
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Structured Outputs"
              description="Define schemas and validations to ensure LLM responses match your requirements before they reach production."
              delay={0.3}
            />
          </div>

          {/* Why it matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12 p-8 rounded-lg bg-foreground/[0.02] border"
          >
            <h3 className="text-xl font-bold mb-4">Why It Matters</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              LLM outputs vary widely in quality, cost, and reliability. ModelTriage brings engineering discipline to AI workflows: measurable quality, predictable costs, and confidence in production deployments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Faster Iteration
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Higher Quality
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Lower Costs
              </Badge>
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
              {["Next.js", "TypeScript", "OpenAI", "Anthropic", "Google AI", "Vercel", "Postgres", "Tailwind"].map((tech, i) => (
                <TechTag key={tech} name={tech} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="https://github.com/tylerolli/modeltriage" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="mailto:tyler@tylerolli.dev?subject=ModelTriage Demo Request">
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </a>
          </motion.div>
        </Container>
      </Section>

      {/* AI in Engineering */}
      <Section id="ai-engineering">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              AI in My Engineering Workflow
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I use AI tools daily to accelerate delivery without sacrificing quality. My workflow integrates <span className="text-foreground font-medium">Cursor, GitHub Copilot, ChatGPT, Claude, and Gemini</span> to handle different aspects of development.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Code Generation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Draft boilerplate, generate tests, and prototype features faster. AI handles the repetitive work while I focus on architecture and logic.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Documentation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Generate API docs, write clear comments, and create onboarding guides. Keeps teams aligned and reduces knowledge silos.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Code Review</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Catch edge cases, identify performance issues, and suggest improvements before code reaches production.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Legacy Modernization</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Translate legacy systems into modern frameworks, refactor technical debt, and migrate to new patterns with confidence.
                  </p>
                </div>
              </div>

              <p>
                <span className="text-foreground font-medium">Measurable impact:</span> 50% faster feature delivery, fewer bugs in production, and more time spent on high-leverage decisions instead of manual tasks.
              </p>

              <div className="mt-8 p-6 rounded-lg border bg-foreground/[0.02] shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">GitHub Spec Kit Implementation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a structured AI translation tool using GitHub Spec Kit methodology: defined clear context, validation rules, and success criteria. Result: consistent, high-quality outputs and significant reduction in iteration cycles.
                </p>
              </div>
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
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
              Experience
            </h2>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Lead Software Engineer</h3>
                  <p className="text-sm text-muted-foreground font-medium">Fintech Platform Company</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Led team of 5 engineers to deliver account registration portal serving 100,000+ users</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Architected rules-driven eligibility platform with Next.js, Node, Redis, and Postgres</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Built AWS Lambda TypeScript workflows orchestrating Java services and Snowflake pipelines</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Implemented AI-driven tooling with structured validations using GitHub Spec Kit methodology</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Accelerated delivery 50% using Cursor, Copilot, ChatGPT, Claude, and Gemini for code, docs, and testing</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section id="tech-stack" className="section-alt">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Tech Stack
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
              Modern tools for building scalable, maintainable systems.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"].map((tech, i) => (
                  <TechTag key={tech} name={tech} delay={i * 0.05} />
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "TypeScript", "Java", "AWS Lambda", "Microservices", "REST APIs"].map((tech, i) => (
                  <TechTag key={tech} name={tech} delay={i * 0.05} />
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Data & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Redis", "Snowflake", "AWS S3", "AWS Lambda", "Docker"].map((tech, i) => (
                  <TechTag key={tech} name={tech} delay={i * 0.05} />
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">AI & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Cursor", "GitHub Copilot", "ChatGPT", "Claude", "Gemini", "OpenAI API", "Anthropic API"].map((tech, i) => (
                  <TechTag key={tech} name={tech} delay={i * 0.05} />
                ))}
              </div>
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
              Open to interesting problems in fintech, AI tooling, and high-scale platforms. Let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:tyler@tylerolli.dev" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group">
                  <Mail className="mr-2 h-5 w-5" />
                  tyler@tylerolli.dev
                </Button>
              </a>
              <a href="https://linkedin.com/in/tylerolli" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <a
                href="https://github.com/tylerolli"
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
      <footer className="border-t section-alt">
        <Container>
          <div className="py-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tyler Olli. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </Container>
      </footer>
    </main>
  )
}
