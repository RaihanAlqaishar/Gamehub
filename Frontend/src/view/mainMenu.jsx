import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function MainMenu() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-6">

            <div className="w-full max-w-4xl text-center">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-400 font-semibold tracking-[0.3em] uppercase text-sm mb-3">
                        Welcome to
                    </p>

                    <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight">
                        GAME<span className="text-blue-500">HUB</span>
                    </h1>

                    <p className="text-slate-400 mt-4 text-lg">
                        Pilih game dan mulai bermain!
                    </p>
                </div>

                {/* Game Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <button
                        onClick={() => navigate('/hangman')}
                        className="group relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-700 p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                    >
                        {/* Glow */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all" />

                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🔤
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-2">
                                Hangman
                            </h2>

                            <p className="text-slate-400 mb-6">
                                Tebak kata sebelum kesempatanmu habis.
                            </p>

                            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold">
                                Main Sekarang
                                <span className="group-hover:translate-x-2 transition-transform">
                                    →
                                </span>
                            </div>
                        </div>
                    </button>

                    {/* Catur */}
                    <button
                        onClick={() => navigate('/catur')}
                        className="group relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-700 p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                    >
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all" />

                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                ♟️
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-2">
                                Catur
                            </h2>

                            <p className="text-slate-400 mb-6">
                                Uji strategi dan kalahkan lawanmu.
                            </p>

                            <div className="inline-flex items-center gap-2 text-purple-400 font-semibold">
                                Main Sekarang
                                <span className="group-hover:translate-x-2 transition-transform">
                                    →
                                </span>
                            </div>
                        </div>
                    </button>

                </div>

                {/* Footer */}
                <p className="text-slate-600 text-sm mt-12">
                    Select a game to begin
                </p>

            </div>
        </div>
    )
}