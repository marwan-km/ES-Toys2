import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const filteredProducts = selectedCategory === "All Toys"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 8, filteredProducts.length));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 font-heading mb-8 text-center">
          Our Wonderful Toys
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center mt-12">
            <motion.button
              className="bg-[#4ECDC4] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Toys
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
