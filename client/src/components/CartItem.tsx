import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <motion.div 
      className="flex items-center justify-between bg-neutral-100 p-4 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="flex items-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-16 h-16 object-cover rounded-lg mr-4"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold">{product.name}</h4>
          <p className="text-[#FF6B6B] font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          className="w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-[#FF6B6B] transition"
          onClick={() => decreaseQuantity(product.id)}
          aria-label="Decrease quantity"
        >
          <i className="fas fa-minus text-xs"></i>
        </button>
        <span className="font-bold">{quantity}</span>
        <button 
          className="w-6 h-6 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center hover:bg-opacity-90 transition"
          onClick={() => increaseQuantity(product.id)}
          aria-label="Increase quantity"
        >
          <i className="fas fa-plus text-xs"></i>
        </button>
        <button 
          className="ml-2 text-neutral-800 hover:text-[#E74C3C] transition"
          onClick={() => removeFromCart(product.id)}
          aria-label="Remove item"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
