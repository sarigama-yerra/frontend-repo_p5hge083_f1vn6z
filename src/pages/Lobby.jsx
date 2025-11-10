import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const rooms = [
  { id: 1, name: 'Casual Table', players: 3, stakes: '$1 / $2', color: 'from-fuchsia-400 to-pink-500' },
  { id: 2, name: 'Neon Room', players: 5, stakes: '$2 / $5', color: 'from-sky-400 to-cyan-500' },
  { id: 3, name: 'Emerald Lounge', players: 2, stakes: '$5 / $10', color: 'from-emerald-400 to-green-500' },
]

export default function Lobby() {
  return (
    <Layout>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">Game Lobby</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative rounded-2xl backdrop-blur-xl bg-white/60 border border-white/50 p-6 overflow-hidden"
              >
                <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${room.color} opacity-40 blur-2xl transition group-hover:opacity-60`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-slate-900">{room.name}</h3>
                  <p className="text-slate-600 mt-2">{room.players} / 6 players • {room.stakes}</p>
                  <Link
                    to={`/table?room=${room.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sky-700 font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Join Table <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
