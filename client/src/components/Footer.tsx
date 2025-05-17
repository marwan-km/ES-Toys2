import { Link } from "wouter";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#FF6B6B] rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold font-heading">E</span>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD166] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#FF6B6B] font-heading">Essaka Toys</h3>
                <p className="text-xs text-gray-400 font-arabic">ألعاب الأطفال - بركيد</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">نجلب الفرح والخيال للأطفال في كل مكان مع مجموعة ألعابنا الملونة.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FF6B6B] transition" aria-label="Facebook">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FF6B6B] transition" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FF6B6B] transition" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FF6B6B] transition" aria-label="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold font-heading mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">All Toys</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">New Arrivals</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Best Sellers</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Age Groups</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Special Offers</span></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold font-heading mb-4">Help</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Contact Us</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Shipping Policy</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Returns & Exchanges</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">FAQ</span></li>
              <li><span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Privacy Policy</span></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold font-heading mb-4 flex items-center">
              <span>Contact</span>
              <span className="ml-2 font-arabic">اتصل بنا</span>
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-[#FF6B6B]"></i>
                <span>Berrechid, Morocco</span>
                <span className="mr-2 font-arabic text-sm text-gray-300"> - بركيد، المغرب</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-phone mr-2 text-[#FF6B6B]"></i>
                <a href="tel:+212650467509" className="hover:text-[#FF6B6B]">+212 650-467509</a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2 text-[#FF6B6B]"></i>
                <a href="mailto:essaka.gmail.com" className="hover:text-[#FF6B6B]">essaka.gmail.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fab fa-whatsapp mr-2 text-[#25D366]"></i>
                <a href="https://wa.me/+212650467509" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">WhatsApp Chat</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left">© {new Date().getFullYear()} Essaka Toys. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer">Terms</span>
            <span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer ml-4">Privacy</span>
            <span className="text-gray-400 hover:text-[#FF6B6B] transition cursor-pointer ml-4">Cookies</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
