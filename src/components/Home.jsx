import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiCpu, FiServer, FiTerminal, FiDatabase } from 'react-icons/fi';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c] px-4 sm:px-6 pt-32 md:pt-0">
      
      {/* --- TECH GRID BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
      
      {/* --- GLOWING BACKGROUND ELEMENTS --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] bg-accent/10 rounded-full blur-[100px] md:blur-[120px] z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] bg-blue-600/10 rounded-full blur-[120px] md:blur-[150px] z-0"
      />

      {/* --- FLOATING GADGETS & TECH ELEMENTS (GLASSMORPHISM) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Laptop / Monitor Concept */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[15%] left-[5%] md:left-[15%] lg:left-[20%] bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col items-center gap-2"
        >
          <FiMonitor className="text-4xl md:text-5xl text-blue-400" />
          <div className="w-12 h-1 bg-white/20 rounded-full mt-1"></div>
        </motion.div>

        {/* Smartphone Concept */}
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -3, 3, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute bottom-[20%] right-[5%] md:right-[15%] lg:right-[20%] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[2rem] shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center justify-between h-32 md:h-36"
        >
          <div className="w-8 h-1 bg-white/20 rounded-full mb-2"></div>
          <FiSmartphone className="text-4xl md:text-5xl text-purple-400" />
          <div className="w-4 h-4 bg-white/10 rounded-full mt-2"></div>
        </motion.div>

        {/* Server / VPS Concept (Hidden on very small screens) */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute top-[30%] right-[8%] md:right-[10%] lg:right-[25%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl hidden sm:flex items-center justify-center"
        >
          <FiServer className="text-3xl text-emerald-400" />
        </motion.div>

        {/* Database Concept */}
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
          className="absolute bottom-[25%] left-[8%] md:left-[10%] lg:left-[25%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl hidden sm:flex items-center justify-center"
        >
          <FiDatabase className="text-3xl text-accent" />
        </motion.div>

        {/* CPU / Chip Concept */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[10%] left-[50%] -translate-x-1/2 bg-white/5 backdrop-blur-sm border border-accent/30 p-2 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center justify-center"
        >
          <FiCpu className="text-xl text-accent" />
        </motion.div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative text-center w-full max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tech Badge */}
          <div className="flex justify-center items-center mb-6">
            <span className="flex items-center gap-2 px-5 py-2 text-[10px] md:text-xs font-black tracking-[0.2em] text-accent uppercase bg-[#0a0a0c]/80 border border-accent/30 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <FiTerminal className="text-sm animate-pulse" />
              Fullstack Developer & System Admin
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter text-balance">
            Aditya Alfiansyah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-blue-500 uppercase italic">
              Saragih
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-2 font-light"
          >
            Membangun arsitektur <span className="text-white font-medium">web modern</span> dan infrastruktur <span className="text-white font-medium">server yang handal</span> untuk pengalaman pengguna yang optimal.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <a href="#portfolio" className="w-full sm:w-auto group relative bg-accent text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] overflow-hidden text-center">
              <span className="relative z-10 font-black tracking-wide">LIHAT PORTOFOLIO</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a href="#contact" className="w-full sm:w-auto border border-white/20 hover:border-accent hover:bg-accent/10 text-white font-bold py-4 px-10 rounded-2xl transition-all backdrop-blur-sm text-center font-black tracking-wide">
              HUBUNGI SAYA
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}