import { motion } from 'framer-motion'

function Graph() {
  return (
    <div className="relative h-40 w-full">
      <svg viewBox="0 0 400 160" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <motion.polyline
          points="0,120 40,110 80,115 120,90 160,100 200,70 240,85 280,60 320,80 360,50 400,55"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.circle cx="360" cy="50" r="6" fill="#22d3ee" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
        <motion.circle cx="200" cy="70" r="6" fill="#8b5cf6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
        <motion.circle cx="120" cy="90" r="6" fill="#f59e0b" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
      </svg>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0a0f15] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_10%_80%,rgba(34,211,238,0.08),transparent),radial-gradient(40%_50%_at_90%_10%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="mb-3 text-sm text-teal-200">Conversation</div>
          <div className="space-y-3 text-slate-200">
            <div className="rounded-xl bg-white/5 p-3">Upload your statement.pdf</div>
            <div className="rounded-xl bg-white/5 p-3">What changed in my spend vs last month?</div>
            <div className="rounded-xl bg-white/5 p-3">Summarize key risks and opportunities.</div>
            <div className="rounded-xl bg-white/5 p-3">Create a savings plan using the 50/30/20 rule.</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="mb-3 text-sm text-violet-200">Insights</div>
          <div className="space-y-6">
            <Graph />
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-4 text-center">
                <div className="text-2xl font-semibold text-white">+12%</div>
                <div className="text-xs text-slate-300">Savings Rate</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-4 text-center">
                <div className="text-2xl font-semibold text-white">-8.4%</div>
                <div className="text-xs text-slate-300">Discretionary</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-4 text-center">
                <div className="text-2xl font-semibold text-white">92</div>
                <div className="text-xs text-slate-300">Risk Score</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
