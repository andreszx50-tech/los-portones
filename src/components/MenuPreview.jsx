import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    id: 1,
    name: "El Gran Churrasco",
    desc: "Corte de carne de res en su punto, servido con una generosa porción de arroz, papas fritas, huevo frito y patacones crujientes.",
    price: 8.50, // Lo cambiamos a número para hacer operaciones matemáticas
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Piqueo Los Portones",
    desc: "Nuestra selección especial de salchichas y embutidos asados, acompañados de patacones recién hechos. Ideal para compartir.",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Delicia de Chocolate",
    desc: "Para cerrar con broche de oro: pastel de chocolate intenso, adornado con fresas frescas y crema batida.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
  }
];

const MenuPreview = () => {
  // Estado para controlar las cantidades del carrito: { [id_del_plato]: cantidad }
  const [cart, setCart] = useState({});

  // Función para añadir una unidad de un plato
  const addToCart = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  // Función para quitar una unidad de un plato
  const removeFromCart = (id) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id]; // Si llega a 0, lo eliminamos del objeto
      }
      return updatedCart;
    });
  };

  // Cálculos matemáticos basados en el estado del carrito
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find(m => m.id === parseInt(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  // Función mágica: Construye el mensaje de WhatsApp detallado
  const enviarPedidoWhatsApp = () => {
    const numeroTelefono = "593999999999"; // Reemplázalo con tu número real
    let saludo = "¡Hola Los Portones! 👋 Quisiera realizar el siguiente pedido a domicilio:\n\n";
    let detallePlatos = "";

    Object.entries(cart).forEach(([id, qty]) => {
      const item = menuItems.find(m => m.id === parseInt(id));
      if (item) {
        const subtotalItem = (item.price * qty).toFixed(2);
        detallePlatos += `• *${qty}x* ${item.name} ($${item.price.toFixed(2)} c/u) -> *$${subtotalItem}*\n`;
      }
    });

    const cierre = `\n💵 *Total a Pagar:* $${totalPrice.toFixed(2)}\n📍 _Por favor envíenme los datos de cuenta para transferencia e indíquenme el tiempo estimado._`;
    
    // Unimos todo y lo codificamos para la URL de WhatsApp
    const mensajeCompleto = saludo + detallePlatos + cierre;
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeCompleto)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Nuestros Platos Estrella</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Arma tu pedido seleccionando tus platos favoritos.</p>
        </div>

        {/* Grid de Tarjetas de Platos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {menuItems.map((item, index) => {
            const cantidadEnCarrito = cart[item.id] || 0;

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                  {cantidadEnCarrito > 0 && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-brand-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-lg"
                    >
                      {cantidadEnCarrito}
                    </motion.div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                      <span className="text-xl font-extrabold text-brand-primary bg-red-50 px-3 py-1 rounded-lg">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>

                  {/* Controles del Carrito */}
                  <div className="mt-6">
                    {cantidadEnCarrito === 0 ? (
                      <button 
                        onClick={() => addToCart(item.id)}
                        className="w-full py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-primary transition-colors duration-300 shadow-md"
                      >
                        <i className="fa-solid fa-cart-plus mr-2"></i> Agregar al pedido
                      </button>
                    ) : (
                      <div className="flex items-center justify-between bg-gray-200 rounded-xl p-1">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-12 h-11 bg-white text-brand-dark hover:bg-red-100 hover:text-brand-primary font-bold rounded-lg transition-colors flex items-center justify-center text-lg shadow-sm"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span className="font-extrabold text-xl text-brand-dark">{cantidadEnCarrito}</span>
                        <button 
                          onClick={() => addToCart(item.id)}
                          className="w-12 h-11 bg-white text-brand-dark hover:bg-green-100 hover:text-green-600 font-bold rounded-lg transition-colors flex items-center justify-center text-lg shadow-sm"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Barra de Checkout Flotante Inferior */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] z-40 py-5 px-6"
          >
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 font-medium">Tienes {totalItems} plato(s) seleccionados</p>
                <p className="text-2xl font-black text-brand-dark">
                  Total estimado: <span className="text-brand-primary">${totalPrice.toFixed(2)}</span>
                </p>
              </div>
              <button 
                onClick={enPedidoWhatsApp}
                className="w-full sm:w-auto bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-[#25D366]/40 transition-all flex items-center justify-center gap-3 animate-pulse"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i> Enviar pedido por WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuPreview;