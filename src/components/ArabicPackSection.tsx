import React, { useState } from 'react';
import { Sparkles, Check, ShoppingBag, Phone, ArrowRight, Star, ShieldCheck, Flame, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, BUSINESS_CONFIG, ARABIC_PACK_CONFIG } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface PresetBundle {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  productIds: [string, string, string];
}

const PRESET_BUNDLES: PresetBundle[] = [
  {
    id: 'bestseller',
    name: 'Trío Más Vendido (Gourmand & Dulce)',
    tagline: 'Los aromas favoritos en México: chocolate con vainilla, café arábico y caramelo cítrico.',
    badge: 'MÁS POPULAR',
    productIds: ['choco-musk', 'french-coffee', 'soft'],
  },
  {
    id: 'oriental',
    name: 'Trío Oriental & Maderas (Misterio & Elegancia)',
    tagline: 'Maderas nobles, ámbar cálido y notas balsámicas de alta alcurnia árabe.',
    badge: 'RECOMENDADO',
    productIds: ['distance', 'sultan', 'silver'],
  },
  {
    id: 'fresco',
    name: 'Trío Fresco & Almizcle (Limpio & Versátil)',
    tagline: 'Frescura vibrante, cítricos orientales y almizcle puro aterciopelado para el día a día.',
    badge: 'DÍA A DÍA',
    productIds: ['white-musk', 'khaliji', 'dakar'],
  },
];

export const ArabicPackSection: React.FC = () => {
  const { addToCart, setIsCartOpen, buyNow } = useCart();

  const [activeTab, setActiveTab] = useState<'preset' | 'custom'>('preset');
  const [selectedPresetId, setSelectedPresetId] = useState<string>('bestseller');

  // Custom selection of 3 product IDs
  const [customSlot1, setCustomSlot1] = useState<string>('choco-musk');
  const [customSlot2, setCustomSlot2] = useState<string>('french-coffee');
  const [customSlot3, setCustomSlot3] = useState<string>('soft');

  const [addedSuccess, setAddedSuccess] = useState(false);

  // Determine current active product IDs
  const currentProductIds: [string, string, string] =
    activeTab === 'preset'
      ? (PRESET_BUNDLES.find((b) => b.id === selectedPresetId)?.productIds || ['choco-musk', 'french-coffee', 'soft'])
      : [customSlot1, customSlot2, customSlot3];

  const selectedProducts: (Product | undefined)[] = currentProductIds.map((id) =>
    PRODUCTS.find((p) => p.id === id)
  );

  const product1 = selectedProducts[0] || PRODUCTS[0];
  const product2 = selectedProducts[1] || PRODUCTS[1];
  const product3 = selectedProducts[2] || PRODUCTS[2];

  const packTitle = ARABIC_PACK_CONFIG.name;
  const packFragrancesNames = [product1.name, product2.name, product3.name];

  // Helper to create the pack product object for cart
  const createPackProduct = (): Product => {
    return {
      id: `pack-experiencia-arabe-${currentProductIds.join('-')}`,
      name: `${packTitle} (3x 6 ml)`,
      brand: 'Al Rehab',
      presentation: 'Pack 3 x 6 ml',
      price: ARABIC_PACK_CONFIG.price, // 549
      originalPrice: ARABIC_PACK_CONFIG.originalPrice, // 747
      category: 'Pack Especial',
      gender: 'Variado',
      description: `Pack Experiencia Árabe: 1. ${product1.name}, 2. ${product2.name}, 3. ${product3.name}. Concentrado roll-on 6 ml c/u. Ahorro de $${ARABIC_PACK_CONFIG.savings} MXN.`,
      topNotes: ['3 Perfumes concentrados originales', 'Roll-on 6 ml con balín de acero'],
      heartNotes: packFragrancesNames,
      baseNotes: ['Fijación prolongada 8 a 14 hrs', 'Fórmula en aceite puro sin alcohol'],
      image: product1.image,
      popular: true,
      isPack: true,
      packItems: packFragrancesNames,
    };
  };

  const handleAddToCart = () => {
    const pack = createPackProduct();
    addToCart(pack, 1);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setIsCartOpen(true);
    }, 500);
  };

  const handleBuyNow = () => {
    const pack = createPackProduct();
    buyNow(pack, 1);
  };

  const handleWhatsAppOrder = () => {
    const messageLines = [
      `🌟 *PEDIDO — PACK "EXPERIENCIA ÁRABE" (3x 6ml)* 🌟`,
      ``,
      `Hola MARRMEX Perfumes Árabes, deseo ordenar el *Pack "Experiencia Árabe"* por *$${ARABIC_PACK_CONFIG.price} MXN* (Ahorro de *$${ARABIC_PACK_CONFIG.savings} MXN* sobre el precio de $${ARABIC_PACK_CONFIG.originalPrice} MXN).`,
      ``,
      `🎁 *3 Fragancias seleccionadas (6 ml c/u):*`,
      `1️⃣ *${product1.name}* (${product1.category})`,
      `2️⃣ *${product2.name}* (${product2.category})`,
      `3️⃣ *${product3.name}* (${product3.category})`,
      ``,
      `📍 *Despacho:* Envío express desde Huajuapan de León, Oaxaca`,
      `Favor de confirmarme disponibilidad y número de cuenta para realizar el pago. ¡Muchas gracias!`
    ];

    const encoded = encodeURIComponent(messageLines.join('\n'));
    window.open(`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="pack-experiencia-arabe"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#070a08] via-[#0d1510] to-[#070907] relative overflow-hidden border-y border-[#d4af37]/30"
    >
      {/* Background luxury ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#d4af37]/15 via-emerald-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#047857]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#d4af37]/20 via-[#fceda7]/20 to-[#d4af37]/20 border border-[#d4af37]/60 text-[#fceda7] shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
            <span>OFERTA ESPECIAL • EDICIÓN LIMITADA</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Pack <span className="bg-gradient-to-r from-[#fceda7] via-[#d4af37] to-[#aa771c] bg-clip-text text-transparent">"Experiencia Árabe"</span>
          </h2>

          <p className="text-base sm:text-lg text-[#e2e8f0] font-medium mt-3">
            3 Perfumes Árabes Al Rehab Concentrados (6 ml c/u en Roll-On)
          </p>

          <p className="text-xs sm:text-sm text-[#94a3b8] mt-2 max-w-2xl mx-auto leading-relaxed">
            La oportunidad ideal para probar las fragancias más deseadas de Arabia y Medio Oriente con una fórmula en aceite puro sin alcohol que dura de 8 a 14 horas continuas.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-5" />
        </div>

        {/* Pricing Spotlight Banner */}
        <div className="mb-10 max-w-4xl mx-auto p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#111a14] via-[#142219] to-[#111a14] border-2 border-[#d4af37]/70 shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                <span className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                  Precio Exclusivo del Pack:
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#25D366] text-black shadow-md shadow-[#25D366]/30 animate-pulse">
                  ¡AHORRAS $198 MXN!
                </span>
              </div>

              <div className="flex items-baseline justify-center sm:justify-start gap-3 mt-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#fceda7] tracking-tight">
                  $549 <span className="text-xl sm:text-2xl font-bold text-gray-300">MXN</span>
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-sm sm:text-base font-bold text-gray-400 line-through decoration-red-500/80 decoration-2">
                    $747 MXN
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    Precio regular (3 x $249)
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#cbd5e1] mt-2 flex items-center justify-center sm:justify-start gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Solo <strong>$183 MXN</strong> por cada perfume Al Rehab de 6 ml.</span>
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col w-full sm:w-auto gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Pedir Pack por WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] hover:brightness-110 text-black font-extrabold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95"
              >
                {addedSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>¡Agregado al Carrito!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-black" />
                    <span>Agregar al Carrito</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Selection Modes: Preset Trios vs Customize */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center p-1.5 bg-[#0a0f0b] rounded-2xl border border-[#1b261e] max-w-md mx-auto mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('preset')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'preset'
                  ? 'bg-gradient-to-r from-[#064e3b] to-[#047857] text-white shadow-md border border-emerald-500/40'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Tríos Recomendados
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('custom')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'custom'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-black shadow-md font-extrabold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Personaliza tus 3 Aromas
            </button>
          </div>

          {/* Preset Buttons */}
          {activeTab === 'preset' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
              {PRESET_BUNDLES.map((b) => {
                const isSelected = selectedPresetId === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedPresetId(b.id)}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#132017] border-[#d4af37] shadow-lg shadow-emerald-950/40 ring-1 ring-[#d4af37]'
                        : 'bg-[#0d140f] border-[#1b261e] hover:border-emerald-500/40 hover:bg-[#111a13]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-[#d4af37] text-black'
                              : 'bg-[#1b261e] text-gray-300'
                          }`}
                        >
                          {b.badge}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-sm text-white mb-1">
                        {b.name}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">
                        {b.tagline}
                      </p>
                    </div>

                    <div className="text-[11px] font-semibold text-[#fceda7] pt-2 border-t border-[#1b261e]/60">
                      Incluye: {b.productIds.map(id => PRODUCTS.find(p => p.id === id)?.name.replace('Al Rehab ', '')).join(', ')}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Custom Selectors for the 3 slots */
            <div className="p-5 rounded-2xl bg-[#0d140f] border border-[#d4af37]/40 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#fceda7]" />
                  Elige tus 3 perfumes favoritos entre las 30 fragancias Al Rehab
                </span>
                <span className="text-[11px] text-gray-400">
                  Total: $549 MXN (Ahorras $198 MXN)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Slot 1 */}
                <div className="bg-[#111813] p-3.5 rounded-xl border border-[#1e2a21]">
                  <label className="block text-[11px] font-bold text-[#fceda7] uppercase tracking-wider mb-2">
                    1er Perfume (6 ml)
                  </label>
                  <select
                    value={customSlot1}
                    onChange={(e) => setCustomSlot1(e.target.value)}
                    className="w-full bg-[#0a0f0b] border border-[#2d3f32] text-xs text-white rounded-lg p-2.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Slot 2 */}
                <div className="bg-[#111813] p-3.5 rounded-xl border border-[#1e2a21]">
                  <label className="block text-[11px] font-bold text-[#fceda7] uppercase tracking-wider mb-2">
                    2do Perfume (6 ml)
                  </label>
                  <select
                    value={customSlot2}
                    onChange={(e) => setCustomSlot2(e.target.value)}
                    className="w-full bg-[#0a0f0b] border border-[#2d3f32] text-xs text-white rounded-lg p-2.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Slot 3 */}
                <div className="bg-[#111813] p-3.5 rounded-xl border border-[#1e2a21]">
                  <label className="block text-[11px] font-bold text-[#fceda7] uppercase tracking-wider mb-2">
                    3er Perfume (6 ml)
                  </label>
                  <select
                    value={customSlot3}
                    onChange={(e) => setCustomSlot3(e.target.value)}
                    className="w-full bg-[#0a0f0b] border border-[#2d3f32] text-xs text-white rounded-lg p-2.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3 Perfumes Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {[product1, product2, product3].map((prod, index) => (
            <div
              key={`${prod.id}-${index}`}
              className="bg-[#0b110d] rounded-2xl border border-[#1b261e] hover:border-[#d4af37]/60 p-4 transition-all flex flex-col justify-between relative group shadow-xl"
            >
              {/* Slot Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-[#d4af37] text-black font-extrabold text-xs flex items-center justify-center shadow-md">
                  #{index + 1}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/80 text-[#fceda7] border border-[#d4af37]/40">
                  {prod.category}
                </span>
              </div>

              {/* Product Image */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#111813] mb-4 flex items-center justify-center border border-[#1b261e]">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] block">
                  {prod.brand} • Roll-on 6 ml
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mt-0.5 mb-1.5">
                  {prod.name}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-2 leading-relaxed mb-3">
                  {prod.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#1b261e]">
                  {prod.topNotes.slice(0, 2).map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#111a14] text-gray-300 border border-[#1f2e23]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Highlights and Guarantee */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 text-center">
          <div className="p-3.5 rounded-xl bg-[#0c120e] border border-[#1b261e]">
            <ShieldCheck className="w-5 h-5 text-[#d4af37] mx-auto mb-1.5" />
            <h5 className="text-xs font-bold text-white">100% Original</h5>
            <p className="text-[11px] text-gray-400">Casa perfumera Al Rehab</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0c120e] border border-[#1b261e]">
            <Sparkles className="w-5 h-5 text-[#fceda7] mx-auto mb-1.5" />
            <h5 className="text-xs font-bold text-white">Sin Alcohol</h5>
            <p className="text-[11px] text-gray-400">Aceite puro concentrado</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0c120e] border border-[#1b261e]">
            <Star className="w-5 h-5 text-[#d4af37] mx-auto mb-1.5" />
            <h5 className="text-xs font-bold text-white">8 a 14 Horas</h5>
            <p className="text-[11px] text-gray-400">Duración extrema en piel</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0c120e] border border-[#1b261e]">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
            <h5 className="text-xs font-bold text-white">Envíos Seguros</h5>
            <p className="text-[11px] text-gray-400">A todo México con guía</p>
          </div>
        </div>

        {/* Final Conversion Action Footer */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm tracking-wide shadow-xl shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Pedir Trío por WhatsApp ($549 MXN)</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] hover:brightness-110 text-black font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/20 cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>Agregar al Carrito de Compras</span>
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            ¿Deseas combinar con otros perfumes? Agrega el pack al carrito y suma más piezas individuales a solo $199 MXN c/u.
          </p>
        </div>
      </div>
    </section>
  );
};
