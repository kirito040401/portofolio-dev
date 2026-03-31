import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lineVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    opened: (custom) => ({
      rotate: custom.rotate || 0,
      y: custom.y || 0,
      opacity: custom.opacity !== undefined ? custom.opacity : 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled || isOpen 
        ? 'bg-[#0a0a0c]/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-[110]">
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tighter italic">
              ADITYA<span className="text-accent not-italic">.</span>SRG
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="relative group text-gray-300 hover:text-white px-4 py-2 text-sm font-bold transition-colors"
              >
                {link}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 bg-accent text-white hover:scale-105 px-6 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg shadow-accent/20"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center z-[110]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative w-10 h-10 flex flex-col justify-center items-center outline-none"
            >
              <motion.span
                custom={{ rotate: 45, y: 8 }}
                animate={isOpen ? "opened" : "closed"}
                variants={lineVariants}
                className="w-7 h-[2px] bg-white mb-1.5 block rounded-full"
              />
              <motion.span
                custom={{ opacity: 0 }}
                animate={isOpen ? "opened" : "closed"}
                variants={lineVariants}
                className="w-7 h-[2px] bg-accent mb-1.5 block rounded-full"
              />
              <motion.span
                custom={{ rotate: -45, y: -8 }}
                animate={isOpen ? "opened" : "closed"}
                variants={lineVariants}
                className="w-7 h-[2px] bg-white block rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            /* Ditambahkan pt-32 agar tidak mengenai Navbar Logo/Button */
            className="fixed inset-0 w-full h-screen bg-[#0a0a0c]/95 backdrop-blur-2xl z-[100] flex flex-col items-center pt-32 md:hidden overflow-y-auto"
          >
            {/* Profile Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center mb-10"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                
                <div className="relative w-28 h-28 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-gray-900">
                  {/* Periksa path: "assets/img/PasFoto.jpg" atau "asset/img/PasFoto.jpg" */}
                  <img 
                    src="/src/assets/img/PasFoto.jpg" 
                    alt="Aditya Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
                  />
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Aditya Alfiansyah</h2>
                <p className="text-accent text-xs font-bold tracking-[0.2em] mt-1">FULLSTACK DEVELOPER</p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-6 pb-10">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-black text-gray-400 hover:text-white transition-colors tracking-tighter"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-accent text-white px-12 py-4 rounded-2xl font-black text-lg shadow-xl shadow-accent/30 hover:scale-105 active:scale-95 transition-all"
              >
                HIRE ME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}