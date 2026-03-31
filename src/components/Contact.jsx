export default function Contact() {
  // URL Embed Google Maps untuk Jl. Karya Wisata No.58, Medan Johor
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.21586526136!2d98.66597147424614!3d3.537554550731558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313010f391a82d%3A0x6331904d9241f807!2sJl.%20Karya%20Wisata%20No.58%2C%20Pangkalan%20Masyhur%2C%20Kec.%20Medan%20Johor%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020144!5e0!3m2!1sid!2sid!4v1710500000000!5m2!1sid!2sid";

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white border-b-2 border-accent pb-4 inline-block tracking-tight">
          Contact <span className="text-accent">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-secondary p-8 rounded-2xl shadow-xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6 text-white">How Can I Help You?</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2 ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama Anda" 
                  className="w-full bg-primary text-white border border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" 
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  className="w-full bg-primary text-white border border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" 
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2 ml-1">Pesan</label>
                <textarea 
                  rows="4" 
                  placeholder="Ceritakan singkat proyek atau keperluan Anda..." 
                  className="w-full bg-primary text-white border border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-accent/80 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-accent/20 active:scale-[0.98]">
                KIRIM PESAN SEKARANG
              </button>
            </form>
          </div>

          {/* Maps & Info Section */}
          <div className="flex flex-col space-y-6">
            {/* Map Container */}
            <div className="bg-secondary p-2 rounded-2xl shadow-xl border border-white/5 h-[320px] overflow-hidden group">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Aditya Alfiansyah Saragih"
                className="rounded-xl grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

            {/* Info Container */}
            <div className="bg-secondary p-8 rounded-2xl shadow-xl border border-white/5 flex-grow">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-accent mr-3 rounded-full"></span>
                Informasi Kontak
              </h4>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-white font-semibold">Alamat Kantor</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Jl. Karya Wisata No.58, Pangkalan Masyhur,<br />
                      Kec. Medan Johor, Kota Medan, 20144
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">aditya.alfiansyah.saragih12@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp / Phone</p>
                    <p className="text-gray-400 text-sm">+62 812-6386-2811</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}