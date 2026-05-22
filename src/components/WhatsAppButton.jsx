import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // Número de teléfono en formato internacional (Ecuador = 593) sin el símbolo +
  const phoneNumber = "593999999999"; 
  // Mensaje predeterminado que aparecerá cuando el cliente abra el chat
  const message = "¡Hola! Vengo de la página web y quisiera más información sobre Los Portones.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5 // Aparece un poco después de que carga la página
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-shadow"
      aria-label="Contactar por WhatsApp"
    >
      {/* Icono de WhatsApp */}
      <i className="fa-brands fa-whatsapp text-4xl"></i>
      
      {/* Punto rojo de notificación animado para captar la atención */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;