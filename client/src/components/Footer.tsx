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
              <img 
                src="https://cdn.pixabay.com/photo/2012/04/18/14/49/teddy-bear-37030_1280.png" 
                alt="Essaka Toys Mascot" 
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-2xl font-bold text-[#FF6B6B] font-heading">Essaka Toys</h3>
            </div>
            <p className="text-gray-400 mb-4">Bringing joy and imagination to kids everywhere with our colorful toy collection.</p>
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
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">All Toys</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">New Arrivals</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Best Sellers</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Age Groups</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Special Offers</a></Link></li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold font-heading mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Contact Us</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Shipping Policy</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Returns & Exchanges</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">FAQ</a></Link></li>
              <li><Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Privacy Policy</a></Link></li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold font-heading mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-[#FF6B6B]"></i>
                123 Toy Lane, Playland, PL 12345
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-phone mr-2 text-[#FF6B6B]"></i>
                (123) 456-7890
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2 text-[#FF6B6B]"></i>
                hello@essakatoys.com
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
            <Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Terms</a></Link>
            <Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Privacy</a></Link>
            <Link href="/"><a className="text-gray-400 hover:text-[#FF6B6B] transition">Cookies</a></Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
