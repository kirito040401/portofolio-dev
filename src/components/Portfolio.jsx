import { motion } from 'framer-motion';

// Impor gambar dari folder assets
import projectImg1 from '../assets/img/project1.jpg'; 
import projectImg2 from '../assets/img/project2.jpg'; 
import projectImg3 from '../assets/img/project3.jpg';
import projectImg4 from '../assets/img/project4.jpg';

export default function Portfolio() {
  const projects = [
    { 
      title: 'Sistem Informasi Perpustakaan SMK Al-Razi', 
      desc: 'Sistem Informasi Perpustakaan ini terintegrasi dengan Laravel 9 untuk manajemen buku dan siswa.', 
      tech: 'Laravel',
      image: projectImg1
    },
    { 
      title: 'Sistem Pendukung Keputusan Metode PSI', 
      desc: 'Aplikasi terintegrasi dengan PHP untuk membuat sistem pendukung keputusan menggunakan metode PSI.', 
      tech: 'JavaScript, API, CSS',
      image: projectImg2
    },
    { 
      title: 'Sistem Informasi Masjid Ikhlasiyah Tirtosari', 
      desc: 'Aplikasi terintegrasi Laravel 10 dan MySQL yang menampilkan data kegiatan, artikel khotbah ustadz, serta rincian alur kas masjid yang transparan bagi jamaah.', 
      tech: 'Laravel, MySQL',
      image: projectImg3
    },
    { 
      title: 'Sistem Informasi Paparan dan Data Sambutan Sumatera Utara', 
      desc: 'Aplikasi terintegrasi Laravel 10 dan MySQL yang menampilkan data agenda, dan paparan sambutan dan berfungsi sebagai arsip paparan.', 
      tech: 'Laravel, MySQL',
      image: projectImg4
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-16 text-white border-b-2 border-accent pb-4 inline-block">
          Portofolio Project
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-primary rounded-xl overflow-hidden shadow-xl border border-gray-700 text-left"
            >
              {/* Bagian Gambar */}
              <div className="h-48 overflow-hidden bg-gray-800 flex-shrink-0">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 italic">Preview Project</span>
                  </div>
                )}
              </div>

              {/* Bagian Detail */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 min-h-[3.5rem] line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Deskripsi: Dibuat fleksibel agar mengikuti panjang teks */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.desc}
                </p>

                <div className="mt-auto">
                  <span className="text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full inline-block">
                    {project.tech}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}