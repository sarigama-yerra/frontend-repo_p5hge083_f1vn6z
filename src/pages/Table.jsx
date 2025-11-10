import Layout from '../components/Layout'
import PokerCard from '../components/Card'
import Chip from '../components/Chip'
import { motion } from 'framer-motion'

export default function Table() {
  return (
    <Layout>
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Poker Table</h2>

            {/* Table felt */}
            <div className="relative rounded-3xl p-6 md:p-10 bg-gradient-to-br from-emerald-200 to-teal-200 shadow-inner">
              <div className="absolute inset-4 rounded-3xl border-4 border-white/60 pointer-events-none" />

              {/* Community cards */}
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <PokerCard value="A" suit="♠" color="black" />
                <PokerCard value="K" suit="♥" color="red" />
                <PokerCard value="10" suit="♦" color="red" />
                <PokerCard value="7" suit="♣" color="black" />
                <PokerCard value="3" suit="♠" color="black" />
              </div>

              {/* Chips cluster */}
              <div className="absolute right-6 bottom-6 flex items-center gap-2">
                <Chip color="fuchsia" value={25} />
                <Chip color="sky" value={50} />
                <Chip color="emerald" value={100} />
              </div>

              {/* Player cards area */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 flex items-center justify-center gap-3"
              >
                <PokerCard value="Q" suit="♥" color="red" />
                <PokerCard value="Q" suit="♦" color="red" />
              </motion.div>

              {/* Controls */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl mx-auto">
                {['Fold', 'Check', 'Raise'].map((label, i) => (
                  <button
                    key={label}
                    className="rounded-2xl bg-white/80 hover:bg-white text-slate-800 font-semibold py-3 shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                    style={{ transitionDuration: '250ms' }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
