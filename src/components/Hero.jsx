import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-brand-dark">
      {/* Fondo con imagen y overlay oscuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido principal animado */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Tradición y Sabor <br/>
          <span className="text-brand-primary">Guayaco</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 font-light"
        >
          Disfruta de nuestros mejores cortes de carne, arroz bien servido, patacones crujientes y moros que te harán sentir en casa.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#menu" className="text-center bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-primary/50">
            Ver nuestro menú
          </a>
          <a href="#reservas" className="text-center bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
            Hacer una reserva
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;