import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SplitScreenLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white">
      <div className="flex h-full flex-col md:flex-row">
        {/* Sardegna */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="group relative flex-1 overflow-hidden cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
            alt="Sardegna"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>

          <div className="absolute inset-0 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition duration-700"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="mb-4 text-base md:text-lg uppercase tracking-[0.4em] text-cyan-300">
                Sardegna
              </p>

              <h1 className="mb-6 text-4xl font-black md:text-6xl">
                ICE STONE SERVICE
              </h1>

              <p className="mx-auto mb-10 max-w-md text-lg text-zinc-200 md:text-xl">
                Produzione e consegna ghiaccio per eventi, locali e privati
                in tutta la Sardegna.
              </p>

              <button 
                onClick={() => navigate('/home')}
                className="rounded-full border border-cyan-300/40 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_40px_rgba(103,232,249,0.6)]"
              >
                ENTRA
              </button>
            </motion.div>
          </div>

          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 md:block"></div>
        </motion.div>

        {/* Mantova Modena */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="group relative flex-1 overflow-hidden cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop"
            alt="Mantova Modena"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

          <div className="absolute inset-0 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition duration-700"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="mb-4 text-base md:text-lg uppercase tracking-[0.4em] text-cyan-300">
                Mantova • Modena
              </p>

              <h1 className="mb-6 text-4xl font-black md:text-6xl">
                ICE STONE SERVICE
              </h1>

              <p className="mx-auto mb-10 max-w-md text-lg text-zinc-200 md:text-xl">
                Consegna rapida di ghiaccio professionale per bar, eventi e
                privati.
              </p>

              <button 
                onClick={() => navigate('/home')}
                className="rounded-full border border-cyan-300/40 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_40px_rgba(103,232,249,0.6)]"
              >
                ENTRA
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>


    </div>
  );
}
