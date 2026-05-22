import { useState, useEffect } from 'react';

const Navbar = () => {
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto que agrega o quita la clase 'dark' a la etiqueta <html> del navegador
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-colors duration-300 border-b dark:border-gray-800 border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl text-brand-primary tracking-tight">
              Los Portones
            </span>
          </div>
          
          {/* Enlaces (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-primary font-medium transition-colors">Inicio</a>
            <a href="#menu" className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-primary font-medium transition-colors">Menú</a>
            <a href="#nosotros" className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-primary font-medium transition-colors">Nosotros</a>
            <a href="#reservas" className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-primary font-medium transition-colors">Reservas</a>
          </div>

          {/* Botones de acción */}
          <div className="hidden md:flex items-center gap-4">
            {/* Botón de Modo Oscuro */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-inner"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>

            {/* Botón CTA conectado a WhatsApp */}
            <a 
              href="https://wa.me/593999999999?text=%C2%A1Hola!%20Quisiera%20hacer%20un%20pedido%20a%20domicilio%20del%20men%C3%BA%20de%20Los%20Portones."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-2 rounded-full font-medium hover:bg-red-800 transition-colors shadow-md"
            >
              Pedir a domicilio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;