import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiBriefcase, FiAward, FiHeart } from 'react-icons/fi';

export default function Resume() {
  const skills = [
    { name: 'Laravel', level: '90%' },
    { name: 'React JS', level: '85%' },
    { name: 'Tailwind CSS', level: '95%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'PHP', level: '90%' },
    { name: 'MySQL', level: '90%' },
    { name: 'Server Management (VPS)', level: '80%' },
  ];

  const interests = ["Technology", "Coffee", "Movie", "Music"];

  const certificates = [
    "Sertifikasi Pengembangan Web Lanjutan",
    "Laravel Framework Professional Certification",
    "Responsive Web Design - FreeCodeCamp"
  ];

  return (
    <section id="resume" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter text-center">
            Resume & <span className="text-accent italic">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.4)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* --- KOLOM KIRI: SKILLS & INTERESTS --- */}
          <div className="space-y-12 md:space-y-16">
            {/* Keahlian Utama */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center justify-center lg:justify-start gap-3">
                <FiCode className="text-accent" /> Keahlian Utama
              </h3>
              <div className="space-y-7">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-accent transition-colors">{skill.name}</span>
                      <span className="text-accent font-bold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2.5 p-[2px] border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: skill.level }} 
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="bg-gradient-to-r from-accent to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Minat */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-center lg:justify-start gap-3">
                <FiHeart className="text-accent" /> Minat & Fokus
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {interests.map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-primary border border-white/10 rounded-xl text-gray-400 text-sm hover:border-accent hover:text-white transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- KOLOM KANAN: EXPERIENCE, EDUCATION, CERTIFICATES --- */}
          <div className="space-y-12 md:space-y-16">
            
            {/* Pengalaman Kerja */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center justify-center lg:justify-start gap-3">
                <FiBriefcase className="text-accent" /> Pengalaman Kerja
              </h3>
              <div className="relative border-l-2 border-white/10 ml-4 lg:ml-3 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  <h4 className="text-xl font-bold text-white">Full-Stack Web Developer</h4>
                  <p className="text-accent text-sm font-bold mb-3 uppercase tracking-widest">2023 - Sekarang</p>
                  <p className="text-gray-400 leading-relaxed">
                    Mengembangkan sistem kasir (POS) restoran dan aplikasi organisasi menggunakan Laravel 11 & React JS.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Pendidikan (Sudah Dirapikan) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center justify-center lg:justify-start gap-3">
                <FiBookOpen className="text-accent" /> Pendidikan
              </h3>
              <div className="relative border-l-2 border-white/10 ml-4 lg:ml-3 pl-8 space-y-12">
                {/* Pendidikan 1 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <h4 className="text-xl font-bold text-white leading-tight">Sistem Informasi</h4>
                  <p className="text-blue-500 text-sm font-bold mt-1 uppercase tracking-wider">STMIK Triguna Dharma</p>
                  <p className="text-gray-500 text-xs font-medium mb-3 tracking-widest">2019 — 2023</p>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Fokus pada analisis sistem, manajemen basis data, dan pengembangan solusi teknologi informasi berskala perusahaan.
                  </p>
                </div>

                {/* Pendidikan 2 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <h4 className="text-xl font-bold text-white leading-tight">Rekayasa Perangkat Lunak</h4>
                  <p className="text-blue-500 text-sm font-bold mt-1 uppercase tracking-wider">SMK Al-Washliyah 2 Perdagangan</p>
                  <p className="text-gray-500 text-xs font-medium mb-3 tracking-widest">2016 — 2019</p>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Mempelajari dasar-dasar pemrograman, algoritma, serta pengembangan aplikasi desktop dan web sederhana.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sertifikat */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-accent/5 p-8 rounded-[2rem] border border-accent/20 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-center lg:justify-start gap-3">
                <FiAward className="text-accent" /> Sertifikasi Professional
              </h3>
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-accent mt-1 text-lg">•</span>
                    <span className="leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}