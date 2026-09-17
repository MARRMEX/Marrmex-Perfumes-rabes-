import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onOpenDetails(product)}
      className="group relative flex flex-col justify-between bg-[#0d130f] rounded-2xl border border-[#1b261e] hover:border-[#d4af37] overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-950/20 cursor-pointer"
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
        {product.popular && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider bg-[#d4af37] text-black shadow-sm">
            <Sparkles className="w-2.5 h-2.5 text-black" />
            POPULAR
          </span>
        )}
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#064e3b]/90 backdrop-blur-md text-white border border-emerald-500/40 shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Image Container with Hover Quick View */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#111713] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />

        {/* Quick View Button overlay on hover (desktop) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#080b09]/90 backdrop-blur-sm border border-[#d4af37]/60 text-xs font-bold text-white shadow-lg">
            <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
            Ver detalles
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Brand & Presentation metadata */}
          <div className="flex items-center justify-between text-xs text-gray-300 mb-1.5">
            <span className="font-bold uppercase tracking-wider text-[#d4af37] text-[11px]">
              {product.brand}
            </span>
            <span className="bg-[#121b14] px-2 py-0.5 rounded text-[11px] font-semibold text-white border border-[#203024]">
              {product.presentation}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-1 mb-1.5">
            {product.name}
          </h3>

          {/* Brief notes snippet */}
          <p className="text-xs text-[#cbd5e1] line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="flex items-baseline justify-between mb-3.5 pt-2 border-t border-[#1a251e]">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Precio</span>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-xl text-[#f5e7b8]">
                  ${product.price}
                </span>
                <span className="text-xs font-semibold text-gray-300">MXN</span>
              </div>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible
            </span>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product);
              }}
              className="py-2.5 px-2 rounded-xl bg-[#111913] border border-[#223326] hover:border-emerald-500/50 hover:bg-[#16221a] text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-gray-300" />
              <span>Detalles</span>
            </button>

            <button
              type="button"
              onClick={handleAdd}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                justAdded
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-black hover:brightness-110 active:scale-95 shadow-md shadow-[#d4af37]/20 font-extrabold'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>¡Listo!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-black" />
                  <span>Agregar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
