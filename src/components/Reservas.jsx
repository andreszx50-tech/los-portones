import { motion } from 'framer-motion';

const Reservas = () => {
  return (
    <section id="reservas" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Información de contacto / Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Reserva tu Mesa en <span className="text-brand-primary">Los Portones</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Asegura tu lugar para disfrutar del mejor ambiente y sabor de Guayaquil. 
              Ya sea una cena familiar, un almuerzo de negocios o una celebración especial, 
              nos encargamos de que todo sea perfecto.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-brand-primary/20 p-3 rounded-full text-brand-primary">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Guayaquil, Ecuador (Samanes / Vía a la Costa)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-brand-primary/20 p-3 rounded-full text-brand-primary">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>+593 99 999 9999</span>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Reserva */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full bg-white text-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Nombre Completo</label>
                <input type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">Fecha</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">Número de Personas</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all">
                  <option>1-2 personas</option>
                  <option>3-4 personas</option>
                  <option>5-8 personas</option>
                  <option>Más de 8 (Evento)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-2">Mensaje o Requerimiento Especial</label>
                <textarea rows="3" placeholder="Ej. Es un cumpleaños, deseo una mesa cerca de la ventana..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"></textarea>
              </div>

              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg">
                  Confirmar Reservación
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservas;