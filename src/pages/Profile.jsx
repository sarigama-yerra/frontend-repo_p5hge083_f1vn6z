import Layout from '../components/Layout'

export default function Profile() {
  return (
    <Layout>
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-slate-900">Your Profile</h2>
            <p className="mt-2 text-slate-600">Minimalist layout with colorful accents.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 p-6">
                <h3 className="font-semibold text-slate-800">Stats</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Games played: 128</li>
                  <li>Win rate: 57%</li>
                  <li>Best hand: Royal Flush</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-pink-100 to-fuchsia-100 p-6">
                <h3 className="font-semibold text-slate-800">Achievements</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Neon Rookie</li>
                  <li>Table Tactician</li>
                  <li>River Master</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
