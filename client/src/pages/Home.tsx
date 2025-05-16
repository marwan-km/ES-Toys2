import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import FeaturedSection from "@/components/FeaturedSection";
import CartSidebar from "@/components/CartSidebar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Helmet } from "react-helmet";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Toys");
  const { cartOpen } = useCart();

  return (
    <>
      <Helmet>
        <title>Essaka Toys - Colorful Toys for Happy Kids</title>
        <meta name="description" content="Discover our colorful collection of toys that bring smiles to kids and peace of mind to parents. Shop our variety of educational, plush, building, and vehicle toys." />
        <meta property="og:title" content="Essaka Toys - Colorful Toys for Happy Kids" />
        <meta property="og:description" content="Discover our colorful collection of toys that bring smiles to kids and peace of mind to parents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://essakatoys.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroBanner />
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
          <ProductGrid selectedCategory={selectedCategory} />
          <FeaturedSection />
          <Newsletter />
        </main>
        <Footer />
        <CartSidebar isOpen={cartOpen} />
      </div>
    </>
  );
};

export default Home;
