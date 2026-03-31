import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Tambahkan ini
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Home />
      <About /> {/* Panggil di sini */}
      <Resume />
      <Portfolio />
      <Contact />
      
      <footer className="bg-secondary text-center py-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Aditya Alfiansyah Saragih.
        </p>
      </footer>
    </div>
  );
}

export default App;