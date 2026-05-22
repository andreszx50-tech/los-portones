import { motion } from 'framer-motion';

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagen / Collage visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                alt="Ambiente del restaurante" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-brand-primary rounded-3xl z-0"></div>
          </motion.div>

          {/* Texto y Estadísticas */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h3 className="text-brand-primary font-bold tracking-wider uppercase mb-2">Nuestra Historia</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white transition-colors mb-6">
              Más de 15 años asando con el corazón
            </h2>
            <p className="text-gray-600 dark:text-gray-300 transition-colors text-lg mb-8 leading-relaxed">
              Los Portones nació con la idea de llevar el verdadero sabor de la comida hecha en casa a la mesa de todos los guayaquileños. Seleccionamos los mejores cortes, preparamos nuestras salsas desde cero y mantenemos viva la tradición en cada plato que servimos.
            </p>
            
            {/* Sección de Estadísticas */}
            <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-gray-100 dark:border-gray-800 transition-colors">
              <div>
                <span className="block text-4xl font-extrabold text-brand-primary mb-1">+15</span>
                <span className="text-gray-500 dark:text-gray-400">Años de Tradición</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-brand-primary mb-1">10k</span>
                <span className="text-gray-500 dark:text-gray-400">Clientes Felices</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-brand-primary mb-1">100%</span>
                <span className="text-gray-500 dark:text-gray-400">Ingredientes Locales</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-brand-primary mb-1">5</span>
                <span className="text-gray-500 dark:text-gray-400">Estrellas en Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;