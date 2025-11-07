import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Award, Target, Trophy } from 'lucide-react'
import { useEffect } from 'react'

function FloatingCard({ icon: Icon, title, subtitle, delay = 0 }) {
  const y = useMotionValue(0)
  const translateY = useTransform(y, [0, 1], [0, -8])

  useEffect(() => {
    const id = setInterval(() => {
      y.set(1)
      setTimeout(() => y.set(0), 800)
    }, 2600 + delay * 100)
    return () => clearInterval(id)
  }, [y, delay])

  return (
    <motion.div
      style={{ translateY }}
      className="group relative flex flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200 ring-1 ring-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm font-semibold text-white/90">{title}</div>
      <div className="text-xs text-slate-300">{subtitle}</div>
      <div className="pointer-events-none absolute inset-px rounded-[14px] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  )
}

export default function Universe() {
  return (
    <section className="relative w-full bg-[#090d13] py-24 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-gradient-to-br from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl"
        >
          Gamified Learning Universe
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <FloatingCard icon={Target} title="Mission: Cashflow" subtitle="Optimize monthly inflows/outflows" />
          <FloatingCard icon={Award} title="XP +120" subtitle="Completed: Budget Mastery" delay={2} />
          <FloatingCard icon={Trophy} title="Badge: Risk Aware" subtitle="Unlocked explainability tier" delay={3} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-6 backdrop-blur-md"
        >
          <p className="text-sm text-slate-300">
            Experience finance as an evolving conversation. From data to decisions — guided by Agentic AI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
