import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles, Phone, Facebook } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/products';
import logoImg from '../assets/images/marrmex_official_logo_1789927674144.jpg';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Perfumes', href: '#catalogo' },
    { label: 'Al Rehab', href: '#al-rehab' },
    { label: 'Envíos', href: '#envios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#070907]/95 backdrop-blur-md border-b border-[#d4af37]/30 transition-all duration-200">
        {/* Top Mini Banner */}
        <div className="bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#064e3b] border-b border-[#d4af37]/40 py-2 px-4 text-center text-xs tracking-wide shadow-sm font-semibold">
          <div className="flex items-center justify-center gap-2 text-white">
            <Sparkles className="w-3.5 h-3.5 text-[#fceda7]" />
            <span className="text-white font-bold tracking-wide">
              Envío Gratis En Compras Más de 1500 MXN
            </span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#d4af37] focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#inicio"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border-2 border-[#d4af37]/70 shadow-sm shadow-[#10b981]/20 flex-shrink-0 bg-[#0d120e]">
              <img
                src={logoImg}
                alt="Logo MARRMEX Perfumes Árabes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#f3e5ab] transition-colors">
                MARRMEX
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#d4af37] font-semibold -mt-0.5">
                Perfumes Árabes
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#e2e8f0] hover:text-[#d4af37] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              id="navbar-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-white hover:text-[#f3e5ab] hover:bg-[#111713] transition-all"
              aria-label="Buscar perfume"
              title="Buscar perfume"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Contact */}
            <a
              id="navbar-whatsapp-direct"
              href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent('Hola MARRMEX Perfumes Árabes, tengo una consulta sobre sus perfumes Al Rehab.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-emerald-500/50 bg-[#064e3b]/50 text-white hover:bg-[#064e3b] transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Facebook Link */}
            <a
              id="navbar-facebook-direct"
              href={BUSINESS_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-blue-500/40 bg-[#1877F2]/20 text-[#bfdbfe] hover:bg-[#1877F2]/40 hover:text-white transition-colors shadow-sm"
              title="Síguenos en Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-[#60a5fa] fill-current" />
              <span>Facebook</span>
            </a>

            {/* Cart Button */}
            <button
              id="navbar-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-[#0e1410] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#141e17] text-white transition-all group"
              aria-label="Ver carrito"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#d4af37] text-black font-extrabold text-[11px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs font-semibold text-white">
                Carrito {totalItems > 0 && `(${totalItems})`}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-[#090d0a] border-r border-[#d4af37]/30 p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1b261e]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md overflow-hidden border border-[#d4af37]/60 bg-[#0d120e]">
                    <img
                      src={logoImg}
                      alt="Logo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="font-display font-bold text-base text-white block">MARRMEX</span>
                    <span className="text-[10px] text-[#d4af37] tracking-widest block uppercase font-medium">Perfumes Árabes</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-white hover:text-[#d4af37] hover:bg-[#121a14] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1b261e] flex flex-col gap-3">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent('Hola MARRMEX Perfumes Árabes, quiero información sobre sus perfumes Al Rehab.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Atención por WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/50 text-[#bfdbfe] font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4 text-[#60a5fa] fill-current" />
                <span>Facebook</span>
              </a>

              <p className="text-[11px] text-center text-gray-400">
                Huajuapan de León, Oaxaca • Envíos a todo México
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
