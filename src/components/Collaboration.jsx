import { motion } from 'framer-motion'
import { Users, MessageSquare, NotebookText } from 'lucide-react'

export default function Collaboration() {
  return (
    <section className="relative w-full bg-[#0a0f15] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_80%_30%,rgba(245,158,11,0.08),transparent),radial-gradient(40%_50%_at_20%_70%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-gradient-to-br from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl"
        >
          Collaborative Sandbox
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-2 flex items-center gap-2 text-teal-200">
              <Users className="h-5 w-5" />
              Team Rooms
            </div>
            <p className="text-sm text-slate-300">Invite teammates and AI agents to collaborate on shared analysis.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-2 flex items-center gap-2 text-violet-200">
              <MessageSquare className="h-5 w-5" />
              Co‑Analysis
            </div>
            <p className="text-sm text-slate-300">Discuss insights in context with synchronized charts and notes.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-2 flex items-center gap-2 text-amber-200">
              <NotebookText className="h-5 w-5" />
              Shared Notes
            </div>
            <p className="text-sm text-slate-300">Document decisions with audit trails and explainability.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-6 text-center"
        >
          <a
            href="#join"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15"
          >
            <span className="relative z-10">Meet your AI Coach</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-violet-500/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
