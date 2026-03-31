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

  // Varians untuk animasi icon hamburger ke X
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
      scrolled || isOpen ? 'bg-[#0a0a0c]/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      {/* Container disamakan dengan max-w-6xl seperti di About/Resume */}
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
              ></motion.span>
              <motion.span
                custom={{ opacity: 0 }}
                animate={isOpen ? "opened" : "closed"}
                variants={lineVariants}
                className="w-7 h-[2px] bg-accent mb-1.5 block rounded-full"
              ></motion.span>
              <motion.span
                custom={{ rotate: -45, y: -8 }}
                animate={isOpen ? "opened" : "closed"}
                variants={lineVariants}
                className="w-7 h-[2px] bg-white block rounded-full"
              ></motion.span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0a0a0c] z-[100] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-4xl font-black text-gray-400 hover:text-accent transition-colors tracking-tighter"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-accent text-white px-10 py-4 rounded-2xl font-black text-xl shadow-xl shadow-accent/20"
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