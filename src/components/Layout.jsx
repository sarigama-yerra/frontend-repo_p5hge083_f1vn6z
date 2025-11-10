import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Home, Trophy, ShoppingBag, Settings as SettingsIcon, User, Cards } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/lobby', label: 'Lobby', icon: Cards },
  { to: '/table', label: 'Table', icon: Cards },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/store', label: 'Store', icon: ShoppingBag },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,193,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(147,197,253,0.3),transparent_60%)] from-pink-100 to-sky-100 relative overflow-hidden">
      {/* Soft pastel gradient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute top-16 -right-16 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-violet-300/40 blur-3xl" />
      </div>

      {/* Glassy navbar */}
      <div className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <Link to="/" className="flex items-center gap-2">
                <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-400 via-sky-400 to-emerald-400 shadow-inner" />
                <span className="font-semibold tracking-tight text-slate-800">Neon Poker</span>
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => `group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'}`}
                  >
                    <Icon size={16} className="opacity-80 group-hover:opacity-100" />
                    {label}
                  </NavLink>
                ))}
              </div>

              <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl bg-white/70">
                <Menu size={20} />
              </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden border-t border-white/50 px-2 pb-3"
                >
                  {navItems.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm font-medium transition ${isActive ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'}`}
                    >
                      {label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10"
        >
          {children || <Outlet />}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="backdrop-blur-xl bg-white/50 border border-white/40 rounded-2xl p-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Neon Poker. All rights reserved.</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Ultra-smooth experience
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
