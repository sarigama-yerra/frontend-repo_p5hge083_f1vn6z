import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[78vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay with gradient and content */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-6 md:p-10 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Minimalist Poker
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Clean, colorful, and incredibly smooth. Play poker with silky transitions, modern cards, and a premium feel.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/lobby"
                className="inline-flex items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-sky-500 to-emerald-500 text-white font-semibold px-6 py-3 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_16px_40px_-12px_rgba(56,189,248,0.7)] transition-all"
              >
                Play Now
              </Link>
              <Link
                to="/leaderboard"
                className="inline-flex items-center rounded-2xl bg-white/80 hover:bg-white text-slate-800 px-6 py-3 border border-white/70 shadow-sm transition"
              >
                Leaderboard
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
