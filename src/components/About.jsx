import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiMapPin, FiMail } from 'react-icons/fi';
import aboutImg from '../assets/img/PasFoto.jpg'; 
import myCV from '../assets/document/CV-anda.pdf';

export default function About() {
    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com/kirito040401', label: 'Github' },
        { icon: <FiLinkedin />, url: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    ];

    const infoCards = [
        {
            icon: <FiMapPin />,
            label: "Location",
            value: "Jl. Karya Wisata No.58, Medan Johor, Kota Medan",
            isLink: false
        },
        {
            icon: <FiMail />,
            label: "Email",
            value: "aditya.alfiansyah.saragih12@gmail.com",
            isLink: true
        }
    ];

    return (
        <section id="about" className="py-20 md:py-28 bg-secondary overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">
                
                {/* --- HEADING --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                        About <span className="text-accent italic">Me</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* --- IMAGE SECTION --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative max-w-md mx-auto lg:mx-0 w-full"
                    >
                        <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                            <img
                                src={aboutImg} 
                                alt="Aditya Alfiansyah Saragih"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => { e.target.src = "https://via.placeholder.com/600x750?text=Aditya+Profile" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Ornamen Dekoratif */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-accent/20 rounded-[3rem] -z-10 group-hover:rotate-6 transition-transform duration-500" />
                    </motion.div>

                    {/* --- CONTENT SECTION --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-7 text-center lg:text-left"
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                Aditya Alfiansyah <span className="text-accent">Saragih</span>
                            </h3>
                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                                Saya adalah seorang <span className="text-white font-medium italic underline decoration-accent/40">Web Developer</span> yang berdedikasi membangun aplikasi web modern yang cepat, responsif, dan estetis.
                            </p>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Fokus utama saya adalah ekosistem <span className="text-white font-semibold">Laravel & React JS</span>. Saya percaya bahwa kode yang baik adalah kode yang memberikan solusi nyata bagi pengguna.
                            </p>
                        </div>

                        {/* Social Media & Button */}
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start pt-2">
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.a
                                href={myCV}
                                download
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 bg-accent text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all group relative overflow-hidden"
                            >
                                <span className="relative z-10 uppercase tracking-wider">Download CV</span>
                                <FiDownload className="relative z-10 group-hover:animate-bounce" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </motion.a>
                        </div>

                        {/* Info Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {infoCards.map((info, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/5 backdrop-blur-sm text-left">
                                    <div className="text-accent text-2xl flex-shrink-0">{info.icon}</div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{info.label}</p>
                                        <p className={`text-white font-bold text-sm leading-snug break-words ${info.isLink ? 'underline decoration-accent/20' : ''}`}>
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}