import { categories } from "@/data/products";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center font-heading text-2xl mb-6">Find by Category</h3>
        <motion.div 
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : 'bg-white text-neutral-800'}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryFilter;
