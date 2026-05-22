import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import MenuPreview from './components/MenuPreview';
import Testimonios from './components/Testimonios';
import Galeria from './components/Galeria';
import Mapa from './components/Mapa'; // <-- 1. Importamos el componente
import Reservas from './components/Reservas';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Nosotros />
      <MenuPreview />
      <Testimonios />
      <Galeria />
      <Mapa /> {/* <-- 2. Lo colocamos aquí, antes de las Reservas */}
      <Reservas />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App;