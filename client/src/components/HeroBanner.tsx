import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFD166] to-[#4ECDC4] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white font-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Toys That Spark Joy & Imagination!
            </motion.h2>
            <motion.p 
              className="text-white text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our colorful collection of toys that bring smiles to kids and peace of mind to parents.
            </motion.p>
            <motion.button 
              className="bg-[#FF6B6B] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src="https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Colorful toy collection"
              className="rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
