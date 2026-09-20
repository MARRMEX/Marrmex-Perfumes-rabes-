import React, { useState } from 'react';
import { X, ShoppingBag, Zap, Check, Sparkles, Shield, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, buyNow } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 900);
  };

  const handleBuyNow = () => {
    buyNow(product, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        id={`product-modal-${product.id}`}
        className="relative w-full max-w-3xl bg-[#080b09] border-2 border-[#d4af37]/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 my-6 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#111813] hover:bg-[#16221a] border border-[#1b261e] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Cerrar detalles"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Large Image Showcase */}
          <div className="relative bg-[#0d140f] flex items-center justify-center p-6 sm:p-8 aspect-square md:aspect-auto border-b md:border-b-0 md:border-r border-[#1b261e]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl border border-[#1b261e] shadow-xl max-h-[380px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 flex items-center pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#070907]/90 backdrop-blur-sm border border-[#d4af37]/50 text-[#fceda7]">
                {product.category} • {product.gender}
              </span>
            </div>
          </div>

          {/* Right Column: Full Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#080b09]">
            <div>
              {/* Mandatory Display Requirement */}
              <div className="mb-2">
                <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#d4af37]">
                  Perfume árabe {product.brand} — {product.presentation}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1">
                  {product.name}
                </h2>
              </div>

              {/* Mandatory Display of Price */}
              <div className="flex items-baseline gap-2 pb-4 mb-4 border-b border-[#1b261e]">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#fceda7]">
                  ${product.price}
                </span>
                <span className="text-sm font-semibold text-gray-400">MXN</span>
                <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-[#064e3b]/40 text-emerald-300 border border-emerald-500/40 font-bold">
                  En existencia
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Olfactory Notes */}
              <div className="space-y-2 mb-6 bg-[#0e1410] p-3.5 rounded-xl border border-[#1b261e]">
                <div className="flex items-start text-xs">
                  <span className="w-20 font-semibold text-gray-400 flex-shrink-0">Salida:</span>
                  <span className="text-white font-medium">{product.topNotes.join(', ')}</span>
                </div>
                <div className="flex items-start text-xs">
                  <span className="w-20 font-semibold text-gray-400 flex-shrink-0">Corazón:</span>
                  <span className="text-white font-medium">{product.heartNotes.join(', ')}</span>
                </div>
                <div className="flex items-start text-xs">
                  <span className="w-20 font-semibold text-gray-400 flex-shrink-0">Fondo:</span>
                  <span className="text-white font-medium">{product.baseNotes.join(', ')}</span>
                </div>
              </div>

              {/* Benefits reassurance */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300 mb-6">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aceite concentrado sin alcohol</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Alta duración y proyección</span>
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-semibold text-gray-300">Cantidad:</span>
                <div className="flex items-center bg-[#111813] border border-[#1b261e] rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-gray-300 hover:text-white hover:bg-[#16221a] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-white min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-gray-300 hover:text-white hover:bg-[#16221a] transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-gray-400 ml-auto">
                  Subtotal: <strong className="text-white">${product.price * quantity} MXN</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="modal-add-to-cart-btn"
                  type="button"
                  onClick={handleAdd}
                  className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    addedAnimation
                      ? 'bg-[#25D366] text-black font-extrabold'
                      : 'bg-[#111813] hover:bg-[#16221a] text-white border border-[#d4af37]/50 hover:border-[#d4af37]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>¡Agregado al carrito!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                      <span>Agregar al carrito</span>
                    </>
                  )}
                </button>

                <button
                  id="modal-buy-now-btn"
                  type="button"
                  onClick={handleBuyNow}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] hover:brightness-110 active:scale-95 text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-current text-black" />
                  <span>Comprar ahora</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
