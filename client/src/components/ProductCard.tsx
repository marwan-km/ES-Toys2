import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="product-card"
      variants={item}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-bold text-xl">{product.name}</h3>
          <span className="font-bold text-[#FF6B6B] text-xl" dir="rtl">{product.price.toFixed(2)} MAD</span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-[#4ECDC4] bg-opacity-20 text-[#4ECDC4] px-3 py-1 rounded-full text-sm font-bold">
            {product.category}
          </span>
          <motion.button 
            className="bg-gradient-to-r from-[#8B5CF6] to-[#FF6B6B] hover:opacity-90 text-white font-bold py-2 px-4 rounded-full transition transform hover:scale-105"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-1">أضف إلى السلة</span>
            <i className="fas fa-cart-plus"></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
