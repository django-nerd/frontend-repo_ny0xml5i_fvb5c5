import { motion } from 'framer-motion'
import { Brain, Rocket, Shield, LineChart, Gamepad2, Users, Workflow, Files } from 'lucide-react'

const features = [
  {
    title: 'AI Finance Coach',
    icon: Brain,
    text: 'Personalized guidance that learns your goals and adapts with you.',
  },
  {
    title: 'Autonomous Analyst',
    icon: LineChart,
    text: 'Continuously scans markets, budgets, and risks to surface insights.',
  },
  {
    title: 'Decision Intelligence',
    icon: Shield,
    text: 'Scenario planning, guardrails, and explainable recommendations.',
  },
  {
    title: 'Gamified Learning Universe',
    icon: Gamepad2,
    text: 'Level up with missions, XP, and badges that make finance engaging.',
  },
  {
    title: 'Collaborative Sandbox',
    icon: Users,
    text: 'Work with teammates and AI agents in shared spaces.',
  },
  {
    title: 'Agentic Task Automation',
    icon: Workflow,
    text: 'Automate routine workflows with safe, auditable actions.',
  },
  {
    title: 'Multimodal Intelligence',
    icon: Files,
    text: 'Chat with docs, spreadsheets, and dashboards in one place.',
  },
  {
    title: 'Ethical Explainability Layer',
    icon: Rocket,
    text: 'Transparent reasoning with citations, confidence, and controls.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#090d13] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_10%,rgba(20,184,166,0.1),transparent),radial-gradient(40%_50%_at_80%_60%,rgba(139,92,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-gradient-to-br from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl"
        >
          Capabilities that feel alive
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-px rounded-[14px] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white/95">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
