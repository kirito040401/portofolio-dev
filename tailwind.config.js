/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna dark elegan untuk background utama
        dark: '#0f172a',
        primary: '#0f172a', 
        // Warna untuk card atau section agar tidak pakai efek glass
        secondary: '#1e293b',
        card: '#1e293b',
        // Warna ungu modern untuk aksen/highlight
        accent: '#8b5cf6',
      },
    },
  },
  plugins: [],
}