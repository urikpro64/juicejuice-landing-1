import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductHighlight from "./components/ProductHighlight";
import Reviews from "./components/Reviews";
import Wholesale from "./components/Wholesale";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ProductHighlight />
      <Reviews />
      <Wholesale />
      <Footer />
    </main>
  );
}
