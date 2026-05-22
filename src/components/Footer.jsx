const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Marca y Descripción */}
        <div>
          <span className="font-bold text-3xl text-white tracking-tight mb-6 block">
            Los Portones
          </span>
          <p className="text-gray-400 leading-relaxed mb-6">
            El auténtico sabor de nuestra tierra. Disfruta de los mejores cortes, en el mejor ambiente de la ciudad.
          </p>
          {/* Redes Sociales */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Horarios de Atención</h4>
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Lunes - Jueves:</span>
              <span className="text-white font-medium">12:00 PM - 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Viernes - Sábado:</span>
              <span className="text-white font-medium">12:00 PM - 11:30 PM</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Domingos:</span>
              <span className="text-white font-medium">12:00 PM - 9:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Contacto Rápido */}
        <div>
          <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Contáctanos</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <i className="fa-solid fa-location-dot mt-1 text-brand-primary"></i>
              <span>Av. Principal y Calle Secundaria<br/>Guayaquil, Ecuador</span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-phone text-brand-primary"></i>
              <span>+593 99 999 9999</span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-brand-primary"></i>
              <span>reservas@losportones.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Los Portones de Guayaquil. Todos los derechos reservados. Desarrollado por Miguel.</p>
      </div>
    </footer>
  );
};

export default Footer;