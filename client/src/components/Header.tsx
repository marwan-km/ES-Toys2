import { useCart } from "@/hooks/useCart";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const Header = () => {
  const { toggleCart, itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <motion.div
                className="relative w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#FF6B6B] dark:from-[#4C1D95] dark:to-[#991B1B] rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
              >
                <span className="text-white text-2xl font-bold font-heading">E</span>
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#FFD166] dark:bg-[#FCD34D] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#FF6B6B] dark:from-[#4C1D95] dark:to-[#991B1B] font-heading">ES Toys</h1>
                <p className="text-xs text-[#8B5CF6] dark:text-[#4C1D95] font-arabic">ألعاب الأطفال - برشيد</p>
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400 text-xl"></i>
              ) : (
                <i className="fas fa-moon text-[#8B5CF6] text-xl"></i>
              )}
            </button>

            <div className="relative hidden md:block">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search toys..."
                  className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full border-2 border-[#8B5CF6] dark:border-[#4C1D95] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:focus:ring-[#991B1B] transition text-gray-900 dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute left-3 top-3 text-[#8B5CF6] dark:text-[#4C1D95]">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            <motion.button
              className="relative p-2 bg-gradient-to-r from-[#8B5CF6] to-[#FF6B6B] dark:from-[#4C1D95] dark:to-[#991B1B] rounded-full text-white hover:opacity-90 transition"
              onClick={toggleCart}
              aria-label="Open shopping cart"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-shopping-cart text-2xl p-1"></i>
              <motion.span
                className="absolute -top-2 -right-2 bg-[#FFD166] dark:bg-[#FCD34D] text-[#8B5CF6] dark:text-[#4C1D95] text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md"
                initial={{ scale: 1 }}
                animate={{ scale: itemCount > 0 ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {itemCount}
              </motion.span>
            </motion.button>

            <a
              href="https://wa.me/+212650467509"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-1 bg-[#25D366] text-white px-3 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span className="font-bold text-sm">تواصل معنا</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
