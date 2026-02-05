"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, Zap, GitCompare, Network, Code2, Sparkles, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { CaseStudyCard } from "@/components/case-study-card"
import { FeatureCard } from "@/components/feature-card"
import { TechTag } from "@/components/tech-tag"
import { TypingText } from "@/components/typing-text"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
        
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
              <Badge variant="secondary" className="mb-6 px-5 py-2 text-sm font-semibold uppercase tracking-wider bg-gray-100 border border-gray-300 text-gray-800">
                Senior Software Engineer
              </Badge>
            </motion.div>
            
            <h1 className="font-[family-name:var(--font-outfit)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
              Tyler Olli
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              <TypingText 
                text="Building scalable platforms and production systems with context engineering and AI-enabled systems."
                duration={3500}
              />
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

      {/* Scope & Ownership */}
      <Section id="scope" className="section-tech">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-center">
              Scope & Ownership
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Team Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-lg border border-gray-300 bg-card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-xl font-bold mb-3">Team Leadership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led cross-functional engineering teams through complex platform launches. Coordinated frontend, backend, and infrastructure delivery to ship production systems on schedule.
                </p>
              </motion.div>

              {/* End-to-End Ownership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg border border-gray-300 bg-card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-xl font-bold mb-3">End-to-End Ownership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Owned full-stack architecture for mission-critical systems. API design, database schema, frontend implementation, and deployment pipelines under single ownership.
                </p>
              </motion.div>

              {/* Engineering Judgment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-lg border border-gray-300 bg-card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-xl font-bold mb-3">Engineering Judgment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Made pragmatic tradeoffs balancing delivery speed, system complexity, and long-term maintainability. Scoped MVPs under real constraints, evaluated build vs buy decisions, and evolved architecture as product needs changed.
                </p>
              </motion.div>

              {/* Technical Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg border border-gray-300 bg-card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-xl font-bold mb-3">Technical Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed distributed systems with serverless functions, microservices, and data workflows. Balanced scalability, maintainability, and delivery speed in system decisions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" className="bg-white">
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
              tags={["React", "AEM", "Java", "Distributed Systems"]}
              delay={0.1}
            />
            
            <CaseStudyCard
              title="Rules-Driven Eligibility System"
              description="Architected and built a flexible eligibility and dynamic content platform using Next.js, Node.js, Redis, and Postgres to support complex business rules."
              impact="Reduced manual configuration effort by 70%, enabled rapid rule changes without deployments, improved accuracy of content targeting."
              tags={["Next.js", "Node.js", "Redis", "PostgreSQL", "Backend Architecture"]}
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
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border-white/20 text-white/90">
              Product Spotlight
            </Badge>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              ModelTriage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              A context engineering platform for comparing, routing, and validating LLM outputs. Applies structured constraints and schemas to make AI workflows reliable at scale.
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
            <div className="relative w-full rounded-lg border border-white/10 overflow-hidden" style={{ filter: 'brightness(0.94)' }}>
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
              ModelTriage applies context engineering principles to multi-LLM workflows: define structured inputs with explicit constraints, route requests to optimal models based on task requirements, validate outputs against schemas, and compare results across providers. Designed for production systems where reliability matters.
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
              title="Schema Validation"
              description="Define output schemas, constraints, and validation rules. Enforce structure and catch errors before responses reach production systems."
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
              LLM outputs vary widely in quality, cost, and reliability. Context engineering brings system design discipline to AI workflows: measurable quality through validation, predictable costs through routing, and production confidence through structured constraints.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-white/20 text-white/90">
                <Sparkles className="w-4 h-4 mr-2" />
                Faster Iteration
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-white/20 text-white/90">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Higher Quality
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-white/20 text-white/90">
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              AI in My Engineering Workflow
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I use AI tools daily to accelerate delivery without sacrificing quality. My workflow integrates <span className="text-foreground font-medium">Cursor, GitHub Copilot, ChatGPT, Claude, and Gemini</span> across code generation, documentation, review, and modernization.
              </p>
              <p>
                Beyond individual productivity, I treat <span className="text-foreground font-medium">context engineering as a system design discipline</span>: structured inputs, explicit constraints, schema validation, and repeatable workflows. This approach transforms LLM interactions from ad-hoc prompting into reliable, testable components that integrate with production systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Context Engineering</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Design structured prompts, constraints, and validation schemas. Define success criteria and error handling. Build repeatable AI workflows that integrate with backend systems like any other service dependency.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Code Generation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Draft boilerplate, generate tests, and prototype features faster. AI handles the repetitive work while I focus on architecture and production logic.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Documentation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Generate API docs, write clear comments, and create onboarding guides. Keeps teams aligned and reduces knowledge silos.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-3">Code Review & Migration</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Catch edge cases, identify performance issues, and translate legacy systems into modern frameworks. Refactor technical debt with validation at each step.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-8 rounded-lg border-2 bg-card shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">Context Engineering in Practice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Built production AI systems using structured context engineering: defined input schemas, validation rules, constraint boundaries, and success criteria. Implemented with GitHub Spec Kit methodology for an internal translation tool.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Results:</span> Consistent outputs, 70% reduction in iteration cycles, and predictable behavior under edge cases. The system handles thousands of requests with error rates comparable to traditional microservices.
                </p>
              </div>

              <p className="mt-6">
                <span className="text-foreground font-medium">Measurable impact:</span> Reduced feature iteration cycles from days to hours for well-scoped work, enabling 3–5× faster delivery on AI-assisted features and significantly more time spent on system design and high-leverage decisions.
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
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
              Experience
            </h2>

            <div className="relative border-l-2 border-border pl-8">
              <div className="space-y-12">
                {/* Blankfactor */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Lead Software Engineer</h3>
                  <p className="text-sm text-muted-foreground font-medium">Blankfactor • 2023–2025</p>
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
                    <span>Applied context engineering principles to AI tooling: structured inputs, schema validation, and constraint-based workflows using GitHub Spec Kit methodology</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Accelerated delivery 50% integrating AI tools (Cursor, Copilot, ChatGPT, Claude, Gemini) into production workflows alongside traditional backend and frontend engineering</span>
                  </li>
                </ul>
                </motion.div>

                {/* Citrix - Senior Software Engineer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Senior Software Engineer</h3>
                  <p className="text-sm text-muted-foreground font-medium">Citrix • 2022–2023</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Served as technical lead for enterprise web platforms (NetScaler, XenServer), owning end-to-end delivery and coordinating across cross-functional teams</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Led modernization of legacy AEM platforms, rebuilding Java services and React components to simplify architecture and improve performance and UX consistency</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Built embeddable applications and reusable product widgets using React, Node.js, and AWS serverless infrastructure</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Consolidated fragmented React and AEM components into shared libraries, increasing reuse and consistency across high-traffic sites</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Built a company-wide unsubscribe service backed by MongoDB, centralizing email preference management across multiple applications with differing data formats</span>
                  </li>
                </ul>
                </motion.div>

                {/* Citrix - Software Engineer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Software Engineer</h3>
                  <p className="text-sm text-muted-foreground font-medium">Citrix • 2020–2022</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Delivered large-scale web applications supporting multi-site, international deployments</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Led global rebranding and product renaming initiatives across 10+ applications and 27 international sites</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Built interactive purchasing workflows and reusable UI components using React, AEM, and REST APIs</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Improved platform reliability by streamlining reCAPTCHA validation and SendGrid email delivery across multiple applications</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <span>Promoted to Senior Software Engineer based on technical ownership, delivery consistency, and cross-stack impact</span>
                  </li>
                </ul>
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
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Tech Stack
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal">
              Technologies I use to build and ship production systems.
            </p>
          </motion.div>

          <div className="max-w-[60rem] mx-auto space-y-6 px-8">
            {[
              { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "SQL"] },
              { title: "Frameworks", items: ["React", "Next.js", "Node.js", "Angular", "Vue.js"] },
              { title: "Platforms", items: ["Adobe Experience Manager (AEM)", "AWS Lambda"] },
              { title: "Data Systems", items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Amazon S3"] },
              { title: "AI Tools", items: ["GitHub Copilot", "GitHub Spec Kit", "Cursor", "ChatGPT", "Claude", "Gemini"] },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-x-1.5 gap-y-2">
                  {group.items.map((item) => (
                    <TechTag key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
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
      <footer className="border-t bg-white">
        <Container>
          <div className="py-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tyler Olli. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </Container>
      </footer>
    </main>
  )
}
