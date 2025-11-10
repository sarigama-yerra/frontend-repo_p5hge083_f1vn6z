import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <Layout>
      <Hero />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Minimalist', desc: 'Clean structure with generous spacing and elegant visuals.' },
              { title: 'Colorful', desc: 'Pastel neon palette with soft gradients and lively accents.' },
              { title: 'Ultra-smooth', desc: 'Fluid animations and micro-interactions everywhere.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
