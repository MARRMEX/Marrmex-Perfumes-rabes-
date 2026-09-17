import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Sparkles, CheckCircle2, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/products';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    isFreeShipping,
    remainingForFreeShipping,
    setIsOrderModalOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round((subtotal / BUSINESS_CONFIG.freeShippingThreshold) * 100)
  );

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel */}
      <div
        id="cart-slideover-drawer"
        className="relative w-full max-w-md bg-[#080b09] border-l-2 border-[#d4af37]/40 h-full shadow-2xl shadow-black flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#1b261e] flex items-center justify-between bg-[#0d140f]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#111813] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base sm:text-lg text-white">
                Tu Carrito de Compras
              </h2>
              <span className="text-xs text-gray-400">
                {totalItems} {totalItems === 1 ? 'producto' : 'productos'} en tu lista
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-white hover:bg-[#152018] rounded-xl transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Dynamic Progress Bar */}
        <div className="p-4 bg-[#0a0f0b] border-b border-[#1b261e]">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            {isFreeShipping ? (
              <span className="text-emerald-300 flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ¡Tu envío es GRATIS!
              </span>
            ) : (
              <span className="text-[#fceda7] flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#d4af37]" />
                Te faltan <strong>${remainingForFreeShipping} MXN</strong> para obtener envío GRATIS.
              </span>
            )}
            <span className="text-gray-400 text-[11px] font-semibold">{progressPercent}%</span>
          </div>

          <div className="w-full h-2 bg-[#050705] rounded-full overflow-hidden border border-[#1b261e]">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                isFreeShipping
                  ? 'bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#047857]'
                  : 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c]'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-[10px] text-[#cbd5e1] mt-1.5 text-center">
            Envío gratis a todo México en compras mayores a $1,500 MXN.
          </p>
        </div>

        {/* Cart Item List */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-3.5 scrollbar-thin">
          {cart.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#0d140f] border border-[#1b261e] flex items-center justify-center mx-auto text-gray-400 mb-4">
                <ShoppingBag className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1.5">
                Tu carrito está vacío
              </h3>
              <p className="text-xs text-[#cbd5e1] max-w-xs mx-auto mb-6">
                Descubre nuestros perfumes árabes Al Rehab de 5 ml y agrega tus fragancias favoritas.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-black font-extrabold text-xs hover:brightness-110 transition-all cursor-pointer shadow-md"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0d140f] border border-[#1b261e] hover:border-[#d4af37]/40 transition-colors shadow-sm"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#111813] flex-shrink-0 border border-[#1b261e]">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] text-[#d4af37] uppercase font-bold tracking-wider block truncate">
                    {item.product.brand} • {item.product.presentation}
                  </span>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-[#fceda7]">
                      ${item.product.price} MXN
                    </span>
                    <span className="text-[10px] text-gray-400">c/u</span>
                  </div>
                </div>

                {/* Quantity Controls & Subtotal */}
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-400 p-1 transition-colors"
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center bg-[#111813] border border-[#1b261e] rounded-lg">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="text-[11px] font-bold text-white">
                    ${item.product.price * item.quantity} MXN
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Summary */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#0d140f] border-t border-[#1b261e] space-y-3">
            {/* Delivery highlights */}
            <div className="p-2.5 rounded-lg bg-[#111813] border border-[#1b261e] text-[11px] text-[#cbd5e1] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-white">Envíos a todo México:</span>
              </span>
              <span className="font-bold text-emerald-300">Paquetería con rastreo</span>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-[#cbd5e1]">Subtotal de productos:</span>
                <span className="font-semibold text-white">${subtotal} MXN</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#cbd5e1]">Costo de envío:</span>
                <span className={isFreeShipping ? 'font-bold text-emerald-300' : 'text-gray-300 italic'}>
                  {isFreeShipping ? 'GRATIS' : 'Se calcula antes del pago'}
                </span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-[#1b261e] font-bold">
                <span className="text-white font-display">Total de productos:</span>
                <span className="text-[#fceda7] font-display text-base sm:text-lg">
                  ${subtotal} MXN
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-1">
              <button
                id="cart-checkout-btn"
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] hover:brightness-110 active:scale-95 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hacer mi pedido</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Seguir navegando y agregando perfumes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
