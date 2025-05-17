import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
}

const CartSidebar = ({ isOpen }: CartSidebarProps) => {
  const {
    cartItems,
    closeCart,
    subtotal,
    total
  } = useCart();

  const [whatsappNumber] = useState("+212650467509"); // Berrechid WhatsApp number

  const handleWhatsAppOrder = () => {
    // Create message with cart items for WhatsApp
    let message = "Hello! I'd like to order the following items from Essaka Toys:\n\n";

    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.product.name} - ${(item.product.price * item.quantity).toFixed(2)} MAD\n`;
    });

    message += `\nTotal: ${total.toFixed(2)} MAD`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto"
            style={{borderRadius: "20px 0 0 20px"}}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold font-heading text-[#8B5CF6] flex items-center">
                  <span>Your Toy Box</span>
                  <span className="mx-2 font-arabic text-lg">سلة الألعاب</span>
                  <i className="fas fa-shopping-cart text-[#FF6B6B] animate-bounce"></i>
                </h2>
                <button
                  className="text-neutral-800 hover:text-[#FF6B6B] transition"
                  onClick={closeCart}
                  aria-label="Close cart"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>

              <div className="space-y-4 mb-8">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <i className="fas fa-shopping-basket text-4xl text-gray-300 mb-2"></i>
                    <p className="text-gray-500">Your toy box is empty!</p>
                    <p className="text-gray-500 text-sm mb-4">Let's fill it with some fun!</p>
                    <button
                      className="mt-4 text-[#8B5CF6] hover:underline"
                      onClick={closeCart}
                    >
                      Find Some Toys!
                    </button>
                  </div>
                ) : (
                  <AnimatePresence>
                    {cartItems.map(item => (
                      <CartItem key={item.product.id} item={item} />
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {cartItems.length > 0 && (
                <>
                  <motion.div
                    className="border-t-4 border-dotted border-[#FFD166] pt-4 mb-6 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-[#8B5CF6]">Subtotal:</span>
                      <span className="font-bold" dir="rtl">{subtotal.toFixed(2)} MAD</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-[#8B5CF6]">Shipping:</span>
                      <span className="font-bold text-[#2ECC71]">FREE</span>
                    </div>
                    <div className="flex justify-between text-xl mt-4">
                      <span className="font-bold text-[#8B5CF6]">Total:</span>
                      <span className="font-bold text-[#FF6B6B]" dir="rtl">{total.toFixed(2)} MAD</span>
                    </div>
                  </motion.div>

                  <motion.a
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-[#25D366] hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl mb-4 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fab fa-whatsapp text-2xl mr-2"></i>
                    <span className="font-arabic">طلب عبر واتساب</span>
                  </motion.a>

                  <motion.button
                    className="w-full bg-[#FF6B6B] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl mb-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-arabic">إتمام الشراء</span> <i className="fas fa-arrow-right ml-2"></i>
                  </motion.button>

                  <motion.button
                    className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#4ECDC4] text-white font-bold py-3 px-8 rounded-xl hover:opacity-90 transition"
                    onClick={closeCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-arabic">مواصلة التسوق</span>
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
