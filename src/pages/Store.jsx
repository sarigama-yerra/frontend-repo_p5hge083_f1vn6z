import Layout from '../components/Layout'
import { motion } from 'framer-motion'

const packs = [
  { id: 'starter', name: 'Starter Pack', chips: 1000, price: '$1.99', color: 'from-sky-400 to-cyan-500' },
  { id: 'pro', name: 'Pro Pack', chips: 5000, price: '$6.99', color: 'from-emerald-400 to-green-500' },
  { id: 'whale', name: 'Whale Pack', chips: 20000, price: '$19.99', color: 'from-fuchsia-400 to-pink-500' },
]

export default function Store() {
  return (
    <Layout>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">Chip Store</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {packs.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="relative rounded-2xl backdrop-blur-xl bg-white/60 border border-white/50 p-6 overflow-hidden"
              >
                <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${p.color} opacity-40 blur-2xl`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-slate-600 mt-2">{p.chips.toLocaleString()} chips</p>
                  <button className="mt-6 inline-flex items-center rounded-2xl bg-white/80 hover:bg-white text-slate-800 font-semibold px-5 py-2.5 border border-white/60 shadow-sm transition-all">
                    Buy {p.price}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
