import Hero from './components/Hero'
import Features from './components/Features'
import Experience from './components/Experience'
import Universe from './components/Universe'
import Collaboration from './components/Collaboration'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#080c12] text-white antialiased">
      <Hero />
      <Features />
      <Experience />
      <Universe />
      <Collaboration />
      <footer id="join" className="relative w-full bg-[#080c12] py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(34,211,238,0.08),transparent)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
          <h3 className="bg-gradient-to-br from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
            Join the Future of Finance
          </h3>
          <p className="max-w-2xl text-slate-300">
            Your intelligent financial companion, simplified.
          </p>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 px-6 py-3 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:from-cyan-400/30 hover:to-violet-500/30"
          >
            <span className="relative z-10">Get Started with Fyne</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-violet-400/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
