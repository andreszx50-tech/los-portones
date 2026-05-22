import { motion } from 'framer-motion';

// Lista de imágenes reales de Unsplash para la demo
const imagenesGaleria = [
  { id: 1, src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop", alt: "Carne asando en la parrilla" },
  { id: 2, src: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?q=80&w=600&auto=format&fit=crop", alt: "Plato de moros con carne" },
  { id: 3, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop", alt: "Selección de asados variados" },
  { id: 4, src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop", alt: "Churrasco de cerca" },
  { id: 5, src: "https://images.unsplash.com/photo-1529692236671-ff99615ae1c4?q=80&w=600&auto=format&fit=crop", alt: "Cortando la carne recién asada" },
  { id: 6, src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop", alt: "Delicia de Chocolate postre" },
  { id: 7, src: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=600&auto=format&fit=crop", alt: "Ambiente del restaurante" },
  { id: 8, src: "https://images.unsplash.com/photo-1628114402179-84b2326f2963?q=80&w=600&auto=format&fit=crop", alt: "Patacones crujientes y salsas" },
];

const Galeria = () => {
  // Variaciones de animación para que las fotos entren una por una (staggered)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Espera 0.1s entre cada foto
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Nuestra Esencia Visual</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Un vistazo al ambiente y sabor que te esperan.</p>
        </div>

        {/* Cuadrícula de fotos */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {imagenesGaleria.map((imagen) => (
            <motion.div 
              key={imagen.id}
              variants={itemVariants}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md border border-gray-100 cursor-pointer group"
            >
              <img 
                src={imagen.src} 
                alt={imagen.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay oscuro y texto al hacer hover */}
              <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-bold text-sm leading-snug drop-shadow">
                  {imagen.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enlace opcional a Instagram real */}
        <div className="text-center mt-12">
            <a 
                href="#" // Aquí iría el enlace real
                className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-red-800 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-instagram text-xl"></i>
                Ver más fotos en nuestro Instagram
            </a>
        </div>

      </div>
    </section>
  );
};

export default Galeria;