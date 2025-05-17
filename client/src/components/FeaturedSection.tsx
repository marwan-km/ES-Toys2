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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#FF6B6B]/10 to-[#FFD166]/10 dark:from-[#991B1B]/20 dark:to-[#92400E]/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
              alt="ES Toys Mascot"
              className="rounded-2xl shadow-fun transform rotate-3 dark:shadow-gray-800/50"
              animate={{
                rotate: [3, -3, 3],
                y: [0, -10, 0]
              }}
              transition={{
                rotate: { repeat: Infinity, duration: 3 },
                y: { repeat: Infinity, duration: 2 }
              }}
            />
          </motion.div>
          <div className="md:w-2/3">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white font-heading mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose ES Toys
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#FF6B6B]/20 dark:bg-[#991B1B]/20 rounded-full flex items-center justify-center text-[#FF6B6B] dark:text-[#F87171] mr-4">
                    <i className="fas fa-shield-alt text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">Safe Materials</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">All our toys are made from non-toxic, child-safe materials tested to the highest standards.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#4ECDC4]/20 dark:bg-[#0D9488]/20 rounded-full flex items-center justify-center text-[#4ECDC4] dark:text-[#2DD4BF] mr-4">
                    <i className="fas fa-brain text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">Educational Play</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Designed to stimulate creativity, problem-solving, and motor skills while having fun.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#FFD166]/20 dark:bg-[#92400E]/20 rounded-full flex items-center justify-center text-[#FFD166] dark:text-[#FCD34D] mr-4">
                    <i className="fas fa-smile-beam text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">Joy Guaranteed</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Our toys are tested by real kids to ensure maximum fun and engagement.</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#FF6B6B]/20 dark:bg-[#991B1B]/20 rounded-full flex items-center justify-center text-[#FF6B6B] dark:text-[#F87171] mr-4">
                    <i className="fas fa-leaf text-2xl"></i>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">Eco-Friendly</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Many of our products use sustainable materials and eco-friendly packaging.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
