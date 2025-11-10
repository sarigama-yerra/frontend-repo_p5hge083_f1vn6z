import { motion } from 'framer-motion'

export default function Chip({ color = 'emerald', value = 100, size = 'md' }) {
  const sizeMap = { sm: 36, md: 48, lg: 64 }
  const d = sizeMap[size]
  const ring = {
    emerald: 'from-emerald-400 to-emerald-500',
    sky: 'from-sky-400 to-cyan-500',
    fuchsia: 'from-fuchsia-400 to-pink-500',
    amber: 'from-amber-400 to-orange-500',
  }[color]

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      whileHover={{ y: -4 }}
      className={`relative grid place-items-center rounded-full`} style={{ width: d, height: d }}
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${ring} shadow-[0_12px_30px_-12px_rgba(0,0,0,0.4)]`} />
      <div className="absolute inset-[6%] rounded-full bg-white" />
      <div className="absolute inset-[22%] rounded-full bg-gradient-to-b from-white to-slate-100 border border-white/80" />
      <span className="relative z-10 text-[10px] font-bold text-slate-700">{value}</span>
    </motion.div>
  )
}
