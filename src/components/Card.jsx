import { motion } from 'framer-motion'

export default function PokerCard({ value = 'A', suit = '♠', color = 'black', size = 'md' }) {
  const sizes = {
    sm: 'h-28 w-20 text-base',
    md: 'h-36 w-28 text-xl',
    lg: 'h-44 w-32 text-2xl',
  }

  return (
    <motion.div
      initial={{ rotate: -10, y: 10, opacity: 0 }}
      animate={{ rotate: 0, y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 150, damping: 16 }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px -12px rgba(0,0,0,0.25)' }}
      className={`relative ${sizes[size]} rounded-2xl bg-white border border-white/70 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center select-none`}
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(248,250,252,0.95))',
      }}
    >
      {/* colorful edge */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-pink-400/60 via-sky-400/60 to-emerald-400/60" />
      <div className="absolute inset-[2px] rounded-[14px] bg-white/90" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className={`font-extrabold ${color === 'red' ? 'text-rose-500' : 'text-slate-800'}`}>{value}</div>
        <div className={`-mt-1 ${color === 'red' ? 'text-rose-500' : 'text-slate-700'}`}>{suit}</div>
      </div>
    </motion.div>
  )
}
