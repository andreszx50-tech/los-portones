import { motion } from 'framer-motion';

const reseñas = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Cliente Frecuente",
    text: "¡El mejor moro de la ciudad, sin duda! La carne siempre en su punto y los patacones súper crujientes. Recomendadísimo para el almuerzo del domingo.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Andrea Villacres",
    role: "Local Guide",
    text: "Me sorprendió la calidad de los cortes. El ambiente es súper acogedor y la atención de primera. La 'Delicia de Chocolate' es un cierre obligatorio.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Luis Fernando",
    role: "Visitante",
    text: "Vine por recomendación y no me arrepiento. Las porciones son bien generosas, bien al estilo guayaco. El piqueo es ideal para compartir.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/68.jpg"
  }
];

const Testimonios = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">La mejor garantía es un cliente satisfecho que regresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reseñas.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
            >
              {/* Icono de comillas decorativo */}
              <i className="fa-solid fa-quote-right absolute top-6 right-8 text-5xl text-gray-100 z-0"></i>
              
              <div className="relative z-10">
                {/* Estrellas */}
                <div className="flex text-yellow-400 mb-6 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < item.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  ))}
                </div>
                
                <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">
                  "{item.text}"
                </p>
                
                {/* Perfil del cliente */}
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <span className="text-sm text-gray-500 font-medium">{item.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;