import React, { useState, useRef } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ProductCatalog } from './components/ProductCatalog';
import { AlRehabSection } from './components/AlRehabSection';
import { ArabianHeritageSection } from './components/ArabianHeritageSection';
import { ShippingSection } from './components/ShippingSection';
import { PaymentGuide } from './components/PaymentGuide';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const MainApp: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleOpenSearch = () => {
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
    const inputEl = document.getElementById('catalog-search-input') as HTMLInputElement | null;
    if (inputEl) {
      setTimeout(() => inputEl.focus(), 350);
    }
  };

  const handleExploreCatalog = () => {
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070907] text-[#f4f3ef] flex flex-col antialiased selection:bg-[#059669]/40 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar onOpenSearch={handleOpenSearch} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onExploreCatalog={handleExploreCatalog} />

        {/* Compra con confianza */}
        <TrustSection />

        {/* Product Catalog */}
        <ProductCatalog
          ref={catalogRef}
          onOpenDetails={(product) => setSelectedProduct(product)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Por qué elegir Al Rehab */}
        <AlRehabSection />

        {/* Fotos de lugares árabes e inspiración */}
        <ArabianHeritageSection />

        {/* Envíos a todo México */}
        <ShippingSection />

        {/* Cómo pago mi pedido */}
        <PaymentGuide />

        {/* Conoce MARRMEX Perfumes Árabes */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <CartDrawer />
      <OrderModal />

      {/* Floating WhatsApp and Mobile Bar */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
