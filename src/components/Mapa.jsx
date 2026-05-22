import { motion } from 'framer-motion';

const Mapa = () => {
  return (
    <section id="ubicacion" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            ¿Cómo llegar a <span className="text-brand-primary">Los Portones</span>?
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Te esperamos con la parrilla encendida y las cervezas heladas.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-4 rounded-3xl shadow-2xl border border-gray-700"
        >
          {/* Contenedor del Iframe de Google Maps */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-900">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127572.33948625345!2d-79.98668471132808!3d-2.1492067746194636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d13cbe0f40d71%3A0x6d1f9cc009d17d59!2sGuayaquil%2C%20Ecuador!5e0!3m2!1ses!2s!4v1716353982000!5m2!1ses!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Los Portones de Guayaquil"
            ></iframe>
          </div>
          
          {/* Tarjetas informativas de la ubicación */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-4 text-2xl">
                <i className="fa-solid fa-car"></i>
              </div>
              <h4 className="font-bold text-lg mb-1">Parqueo Privado</h4>
              <p className="text-gray-400 text-sm">Contamos con seguridad y amplio espacio para tu vehículo.</p>
            </div>
            
            <div className="flex flex-col items-center p-4 border-y md:border-y-0 md:border-x border-gray-700">
              <div className="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-4 text-2xl">
                <i className="fa-solid fa-map-pin"></i>
              </div>
              <h4 className="font-bold text-lg mb-1">Ubicación Estratégica</h4>
              <p className="text-gray-400 text-sm">Fácil acceso desde cualquier punto de la ciudad.</p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-4 text-2xl">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h4 className="font-bold text-lg mb-1">Horario Extendido</h4>
              <p className="text-gray-400 text-sm">Atendemos todos los días para tus almuerzos y cenas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mapa;