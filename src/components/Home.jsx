import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiCpu, FiServer, FiTerminal, FiDatabase } from 'react-icons/fi';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c] px-4 sm:px-6 py-20">
      
      {/* --- TECH GRID BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px] z-0"></div>
      
      {/* --- GLOWING BACKGROUND ELEMENTS --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[10%] -right-[10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px] z-0"
      />

      {/* --- FLOATING GADGETS & TECH ELEMENTS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none container mx-auto">
        
        {/* Monitor - Hidden on Mobile, Visible on Tablet+ */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[10%] left-[5%] md:left-[10%] bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-5 rounded-2xl shadow-xl hidden sm:flex flex-col items-center gap-2"
        >
          <FiMonitor className="text-3xl md:text-5xl text-blue-400" />
          <div className="w-8 md:w-12 h-1 bg-white/20 rounded-full"></div>
        </motion.div>

        {/* Smartphone - Bottom Right */}
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -3, 3, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute bottom-[10%] right-[5%] md:right-[10%] bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-xl flex flex-col items-center justify-between h-28 md:h-36"
        >
          <div className="w-6 md:w-8 h-1 bg-white/20 rounded-full"></div>
          <FiSmartphone className="text-3xl md:text-5xl text-purple-400" />
          <div className="w-3 md:w-4 h-3 md:h-4 bg-white/10 rounded-full"></div>
        </motion.div>

        {/* Server - Top Right */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute top-[20%] right-[8%] md:right-[20%] bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 rounded-xl shadow-xl flex items-center justify-center"
        >
          <FiServer className="text-2xl md:text-3xl text-emerald-400" />
        </motion.div>

        {/* Database - Bottom Left */}
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
          className="absolute bottom-[20%] left-[8%] md:left-[20%] bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 rounded-xl shadow-xl flex items-center justify-center"
        >
          <FiDatabase className="text-2xl md:text-3xl text-accent" />
        </motion.div>

        {/* CPU - Center Top */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-sm border border-accent/30 p-2 rounded-lg shadow-lg flex items-center justify-center"
        >
          <FiCpu className="text-lg md:text-xl text-accent" />
        </motion.div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative text-center w-full max-w-4xl z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tech Badge */}
          <div className="flex justify-center items-center mb-6">
            <span className="flex items-center gap-2 px-4 md:px-5 py-2 text-[10px] md:text-xs font-black tracking-[0.1em] md:tracking-[0.2em] text-accent uppercase bg-[#0a0a0c]/80 border border-accent/30 rounded-full backdrop-blur-md">
              <FiTerminal className="text-sm animate-pulse" />
              Fullstack Developer & System Admin
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            Aditya Alfiansyah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-blue-500 uppercase italic">
              Saragih
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Membangun arsitektur <span className="text-white font-medium">web modern</span> dan infrastruktur <span className="text-white font-medium">server yang handal</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <a href="#portfolio" className="w-full sm:w-auto group relative bg-accent text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl md:rounded-2xl transition-all shadow-lg hover:shadow-accent/40 overflow-hidden text-center">
              <span className="relative z-10 font-black tracking-wide text-sm md:text-base">LIHAT PORTOFOLIO</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a href="#contact" className="w-full sm:w-auto border border-white/20 hover:border-accent hover:bg-accent/10 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl md:rounded-2xl transition-all backdrop-blur-sm text-center font-black tracking-wide text-sm md:text-base">
              HUBUNGI SAYA
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}