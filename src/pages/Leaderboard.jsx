import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const players = [
  { name: 'Ava', chips: 25000 },
  { name: 'Liam', chips: 22000 },
  { name: 'Mia', chips: 19000 },
  { name: 'Noah', chips: 15000 },
  { name: 'Ella', chips: 12000 },
]

export default function Leaderboard() {
  return (
    <Layout>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">Leaderboard</h2>

          <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 border border-white/50">
            {players.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-center justify-between px-6 py-4 border-b border-white/60 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 font-mono w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-semibold text-slate-900">{p.name}</span>
                </div>
                <div className="font-bold text-slate-800">{p.chips.toLocaleString()} chips</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
