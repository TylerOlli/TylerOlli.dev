"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react"
import { Section } from "@/components/section"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

/* ------------------------------------------------
   Animation config
   ------------------------------------------------ */
const spring = {
  type: "spring" as const,
  damping: 30,
  stiffness: 200,
}

/* ------------------------------------------------
   Data
   ------------------------------------------------ */
const projects = [
  {
    title: "Account Registration Portal",
    problem:
      "Onboarding was fragmented across multiple systems with no unified auth flow, creating user friction and compliance risk at scale.",
    approach:
      "Designed and delivered a centralized registration platform coordinating frontend, backend, and platform teams under strict reliability and compliance constraints.",
    impact:
      "Enabled reliable account creation at scale with unified authentication, improving onboarding conversion and reducing friction across the registration flow.",
    tags: ["React", "AEM", "Java", "OAuth"],
  },
  {
    title: "Rules-Driven Eligibility System",
    problem:
      "Every product and policy update required a full engineering deployment — creating bottlenecks, risk, and slow iteration cycles for the business.",
    approach:
      "Built a flexible decision engine that decoupled business rules from application code, enabling content authors to update eligibility logic without engineering involvement or downtime.",
    impact:
      "Eliminated the engineering bottleneck for policy updates, reducing update cycles and deployment risk while giving business teams direct control.",
    tags: ["Next.js", "Node.js", "Redis", "PostgreSQL"],
  },
  {
    title: "AI Translation Platform",
    problem:
      "Manual translation workflows were slow, expensive, and produced inconsistent results across languages and regions at enterprise scale.",
    approach:
      "Engineered an AI-powered localization pipeline using structured product context and brand guidelines to generate contextually accurate translations across web properties.",
    impact:
      "Reduced translation costs and turnaround time while improving consistency across all localized content.",
    tags: ["OpenAI", "React", "AEM", "GitHub Spec Kit"],
  },
]

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function Home() {
  return (
    <main className="relative">
      {/* ==========================================
          Hero
          ========================================== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden pt-14"
      >
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 hero-glow" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              className="inline-block text-sm font-mono font-medium text-violet-400 tracking-wide mb-8"
            >
              Senior Software Engineer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
              className="font-[family-name:var(--font-outfit)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] mb-8 text-zinc-50"
            >
              Tyler Olli
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
              className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-4 max-w-2xl"
            >
              I build the systems that make AI work in production&mdash;from LLM
              orchestration and intelligent routing to full-stack platforms that
              teams ship and scale on.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-zinc-600 mb-12"
            >
              Currently exploring senior and staff engineering roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <a href="#work">
                <Button
                  size="lg"
                  className="bg-violet-600 text-white hover:bg-violet-500 px-8 transition-colors"
                >
                  See my work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="mailto:ollityler@gmail.com"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-500"
              >
                ollityler@gmail.com
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ==========================================
          Featured Project — ModelTriage
          ========================================== */}
      <Section id="work" className="relative overflow-hidden">
        {/* Section separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4 block">
              Featured Project
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 text-zinc-50">
              ModelTriage
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-16 font-light">
              A decision and verification layer that routes prompts to the right
              LLM and explains model behavior&mdash;built for teams that need
              predictable, auditable AI in production.
            </p>
          </motion.div>

          {/* Screenshot with ambient glow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative max-w-5xl mx-auto mb-20"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-violet-500/10 via-violet-500/5 to-transparent rounded-2xl blur-xl" />
            <div className="relative rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900">
              <Image
                src="/modeltriage-screenshot.png"
                alt="ModelTriage — LLM comparison and routing interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Three-column details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16"
          >
            <div>
              <h3 className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4">
                How It Works
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Analyzes prompt context, classifies the task type, routes to the
                optimal model, and compares behavior across providers&mdash;giving
                engineers evidence-based model selection instead of guesswork.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4">
                Why It Matters
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                LLM outputs vary widely in quality, cost, and reliability.
                ModelTriage brings structure through task-aware routing and
                parallel comparison&mdash;predictable costs, measurable quality,
                and justified decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4">
                Built With
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "OpenAI",
                  "Anthropic",
                  "Google AI",
                  "Vercel",
                  "Postgres",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md border border-zinc-800 text-zinc-400 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://modeltriage.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-zinc-900 hover:bg-zinc-200 transition-colors"
              >
                Visit ModelTriage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://github.com/TylerOlli/ModelTriage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>View source</span>
            </a>
          </motion.div>
        </Container>
      </Section>

      {/* ==========================================
          Selected Work
          ========================================== */}
      <Section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">
              Systems I&apos;ve Built
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="text-lg font-bold text-zinc-100 mb-5">
                  {project.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
                      Problem
                    </span>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-1.5">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
                      Approach
                    </span>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-1.5">
                      {project.approach}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-violet-400/80 uppercase tracking-widest">
                      Impact
                    </span>
                    <p className="text-sm text-zinc-300 leading-relaxed mt-1.5">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-zinc-800/50">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ==========================================
          Engineering Approach — Callout
          ========================================== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-8 block">
              Engineering Approach
            </span>

            <div className="border-l-2 border-violet-500/30 pl-8">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                I design and operate AI-driven engineering systems where multiple
                specialized agents execute work in parallel&mdash;code generation,
                validation, review, documentation, and migration&mdash;while I
                retain architectural ownership and final decision authority.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                This approach has reduced feature iteration cycles from days to
                hours for well-scoped work, enabling 3&ndash;5&times; faster delivery on
                AI-assisted features and significantly more time spent on system
                design and high-leverage decisions.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ==========================================
          Experience
          ========================================== */}
      <Section id="experience" className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-4 block">
              Experience
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">
              Where I&apos;ve Worked
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-16">
            {/* ---- Blankfactor ---- */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    Lead Software Engineer
                  </h3>
                  <p className="text-sm text-violet-400 font-medium mt-0.5">
                    Blankfactor
                  </p>
                </div>
                <span className="text-sm text-zinc-600 font-mono mt-1 sm:mt-0">
                  2023&ndash;2025
                </span>
              </div>

              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-violet-500/60 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Delivered a high-volume account registration platform with
                    integrated auth, unifying onboarding workflows across
                    applications
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-violet-500/60 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Architected a rules-driven eligibility system enabling dynamic
                    policy updates without engineering deployments or downtime
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-violet-500/60 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Shipped an AI-powered localization system that automated
                    multilingual content generation across web platforms
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-violet-500/60 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Pioneered adoption of AI development tools across engineering
                    teams, integrating them into production workflows
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* ---- Citrix ---- */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    Senior Software Engineer
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium mt-0.5">
                    Citrix
                  </p>
                </div>
                <span className="text-sm text-zinc-600 font-mono mt-1 sm:mt-0">
                  2020&ndash;2023
                </span>
              </div>

              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-zinc-700 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Led end-to-end architecture and delivery for enterprise web
                    platforms supporting NetScaler and XenServer product lines
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-zinc-700 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Built purchasing systems with reusable workflows, secure SKU
                    lookup, interactive forms, and pricing calculators
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-zinc-700 mt-0.5 flex-shrink-0 select-none">
                    &mdash;
                  </span>
                  <span className="leading-relaxed">
                    Created and maintained a centralized React component library
                    used across multiple enterprise sites and teams
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Tech strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mt-20 pt-8 border-t border-zinc-800/50"
          >
            <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest mb-4">
              Core Technologies
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              TypeScript&ensp;&middot;&ensp;React&ensp;&middot;&ensp;Next.js&ensp;&middot;&ensp;Node.js&ensp;&middot;&ensp;PostgreSQL&ensp;&middot;&ensp;Redis&ensp;&middot;&ensp;MongoDB&ensp;&middot;&ensp;AWS
              Lambda&ensp;&middot;&ensp;OpenAI&ensp;&middot;&ensp;Anthropic&ensp;&middot;&ensp;Google
              AI&ensp;&middot;&ensp;Vercel
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* ==========================================
          Contact
          ========================================== */}
      <Section id="contact" className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-50">
              Get in touch
            </h2>
            <p className="text-zinc-400 mb-12 leading-relaxed">
              Interested in complex engineering problems where architecture, AI
              integration, and engineering judgment matter. If you&apos;re
              building something meaningful, let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="mailto:ollityler@gmail.com">
                <Button
                  size="lg"
                  className="bg-violet-600 text-white hover:bg-violet-500 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  ollityler@gmail.com
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/tylerolli/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-zinc-600">
              <a
                href="https://github.com/TylerOlli"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50">
        <Container>
          <div className="py-8 text-center text-sm text-zinc-700">
            <p>&copy; {new Date().getFullYear()} Tyler Olli</p>
          </div>
        </Container>
      </footer>
    </main>
  )
}
