import Layout from '../components/Layout'
import * as Switch from '@radix-ui/react-switch'
import { useState } from 'react'

export default function Settings() {
  const [animations, setAnimations] = useState(true)
  const [sound, setSound] = useState(true)

  return (
    <Layout>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8">Settings</h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/60 border border-white/50 p-5">
              <div>
                <h3 className="font-semibold text-slate-900">Smooth animations</h3>
                <p className="text-slate-600 text-sm">Toggle motion and transitions.</p>
              </div>
              <Switch.Root
                checked={animations}
                onCheckedChange={setAnimations}
                className="w-12 h-7 bg-slate-200 data-[state=checked]:bg-sky-400 rounded-full relative outline-none cursor-pointer transition-colors"
              >
                <Switch.Thumb className="block w-6 h-6 bg-white rounded-full shadow translate-x-1 data-[state=checked]:translate-x-5 transition-transform" />
              </Switch.Root>
            </div>

            <div className="flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/60 border border-white/50 p-5">
              <div>
                <h3 className="font-semibold text-slate-900">Sound effects</h3>
                <p className="text-slate-600 text-sm">Enable card and chip sounds.</p>
              </div>
              <Switch.Root
                checked={sound}
                onCheckedChange={setSound}
                className="w-12 h-7 bg-slate-200 data-[state=checked]:bg-emerald-400 rounded-full relative outline-none cursor-pointer transition-colors"
              >
                <Switch.Thumb className="block w-6 h-6 bg-white rounded-full shadow translate-x-1 data-[state=checked]:translate-x-5 transition-transform" />
              </Switch.Root>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
