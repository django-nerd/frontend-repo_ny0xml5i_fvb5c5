import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f16] text-white">
      {/* 3D scene */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,255,224,0.12),transparent),radial-gradient(30%_40%_at_80%_60%,rgba(147,51,234,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-teal-200/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
          Introducing Fyne
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl bg-gradient-to-br from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-[1.1]"
        >
          Finance Made Simple — Powered by Agentic AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-slate-300 md:text-lg"
        >
          Your private AI analyst, coach, and automation engine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#features"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 px-6 py-3 text-teal-100 shadow-lg ring-1 ring-white/10 backdrop-blur-md transition hover:from-cyan-400/30 hover:to-violet-500/30"
          >
            <span className="relative z-10">Explore Fyne</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-violet-400/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#experience"
            className="rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15"
          >
            Meet Your AI Coach
          </a>
        </motion.div>
      </div>
    </section>
  )
}
