import React from 'react';
import { MessageSquare, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/products';
import { useCart } from '../context/CartContext';

export const FloatingWhatsApp: React.FC = () => {
  const { totalItems, subtotal, setIsCartOpen, setIsOrderModalOpen } = useCart();

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <aside
        aria-label="Atención rápida"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3"
      >
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent('Hola MARRMEX Perfumes Árabes, deseo consultar sobre sus perfumes Al Rehab.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-black font-bold text-xs sm:text-sm rounded-full shadow-2xl shadow-[#25D366]/40 transition-all cursor-pointer"
          title="Atención directa por WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-semibold">¿Dudas? Escríbenos por WhatsApp</span>
          <span className="sm:hidden font-bold">WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Cart Bar if Cart Has Items */}
      {totalItems > 0 && (
        <aside
          aria-label="Resumen rápido de compra"
          className="fixed bottom-0 left-0 right-0 z-30 bg-[#141620]/95 backdrop-blur-md border-t border-[#d4af37]/30 p-3 sm:hidden shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-left"
            >
              <div className="relative w-10 h-10 rounded-xl bg-[#1c202e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#d4af37] text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">Total ({totalItems})</span>
                <span className="font-display font-bold text-sm text-[#f5e7b8]">
                  ${subtotal} MXN
                </span>
              </div>
            </button>

            <button
              id="mobile-bottom-order-btn"
              onClick={() => setIsOrderModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e2be54] to-[#aa771c] text-black font-extrabold text-xs shadow-md shadow-[#d4af37]/20 flex items-center gap-1.5"
            >
              <span>Hacer pedido</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
