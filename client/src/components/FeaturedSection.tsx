import { motion } from "framer-motion";

const FeaturedSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#FF6B6B]/10 to-[#FFD166]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <motion.img 
              src="https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
              alt="Essaka Toys Mascot" 
              className="rounded-2xl shadow-fun transform rotate-3"
              animate={{ rotate: [3, -3, 3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <div className="md:w-2/3">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-800 font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Kids Love Essaka Toys
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="bg-white p-6 rounded-2xl shadow-md" variants={itemVariants}>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center text-[#FF6B6B] mr-4">
                    <i className="fas fa-shield-alt text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl">Safe Materials</h3>
                </div>
                <p>All our toys are made from non-toxic, child-safe materials tested to the highest standards.</p>
              </motion.div>
              
              <motion.div className="bg-white p-6 rounded-2xl shadow-md" variants={itemVariants}>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center text-[#4ECDC4] mr-4">
                    <i className="fas fa-brain text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl">Educational Play</h3>
                </div>
                <p>Designed to stimulate creativity, problem-solving, and motor skills while having fun.</p>
              </motion.div>
              
              <motion.div className="bg-white p-6 rounded-2xl shadow-md" variants={itemVariants}>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#FFD166]/20 rounded-full flex items-center justify-center text-[#FFD166] mr-4">
                    <i className="fas fa-smile-beam text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl">Joy Guaranteed</h3>
                </div>
                <p>Our toys are tested by real kids to ensure maximum fun and engagement.</p>
              </motion.div>
              
              <motion.div className="bg-white p-6 rounded-2xl shadow-md" variants={itemVariants}>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center text-[#FF6B6B] mr-4">
                    <i className="fas fa-leaf text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl">Eco-Friendly</h3>
                </div>
                <p>Many of our products use sustainable materials and eco-friendly packaging.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
