import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Main_IceStoneService_Split() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Global Brand Title */}
      <div className="pointer-events-none absolute left-1/2 top-8 z-50 -translate-x-1/2 text-center">
        <h1 className="text-3xl font-black uppercase tracking-[0.35em] text-cyan-200 drop-shadow-[0_0_25px_rgba(103,232,249,0.35)] md:text-5xl">
          ICE STONE SERVICE
        </h1>

        <p className="mt-3 text-xs uppercase tracking-[0.45em] text-zinc-300 md:text-sm">
          Puntualmente Sottozero
        </p>
      </div>
      <div className="flex h-full flex-col md:flex-row">
        {/* Sardegna */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="group relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.15]"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
            alt="Sardegna"
            className="absolute inset-0 h-full w-full object-cover scale-105 transition duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-1"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 group-hover:from-cyan-950/20 group-hover:via-black/40 group-hover:to-black/90 transition duration-700"></div>

          <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition duration-700"></div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_60%)]"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
                Sardegna
              </p>

              

              <p className="mx-auto mb-10 max-w-md text-lg text-zinc-200 md:text-xl">
                Produzione e consegna ghiaccio per eventi, locali e privati in tutta la Sardegna.
              </p>

              <button className="group/button relative overflow-hidden rounded-full border border-cyan-300/40 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_40px_rgba(103,232,249,0.6)]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-1000 group-hover/button:translate-x-full"></span>
                <span className="relative z-10">ENTRA</span>
              </button>
            </motion.div>
          </div>

          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 md:block"></div>
        </motion.div>

        {/* Mantova Modena */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="group relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.15]"
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop"
            alt="Mantova Modena"
            className="absolute inset-0 h-full w-full object-cover scale-105 transition duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-1"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 group-hover:from-cyan-950/20 group-hover:via-black/50 group-hover:to-black transition duration-700"></div>

          <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition duration-700"></div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_60%)]"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
                Mantova • Modena
              </p>

              

              <p className="mx-auto mb-10 max-w-md text-lg text-zinc-200 md:text-xl">
                Consegna rapida di ghiaccio professionale per bar, eventi e privati.
              </p>

              <button className="group/button relative overflow-hidden rounded-full border border-cyan-300/40 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_40px_rgba(103,232,249,0.6)]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-1000 group-hover/button:translate-x-full"></span>
                <span className="relative z-10">ENTRA</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Ice Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-300/10 blur-3xl"></div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-cyan-200/40 blur-[1px]"></div>

        <div className="absolute left-[70%] top-[35%] h-3 w-3 animate-pulse rounded-full bg-white/30 blur-[2px]"></div>

        <div className="absolute left-[45%] top-[70%] h-2 w-2 animate-pulse rounded-full bg-cyan-100/40 blur-[1px]"></div>

        <div className="absolute left-[80%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-200/30 blur-[1px]"></div>
      </div>
    </div>
  );
}
