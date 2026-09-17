import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ShieldCheck, Sparkles, Plus, Minus, CheckCircle, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderFormState } from '../types';
import { BUSINESS_CONFIG } from '../data/products';

export const OrderModal: React.FC = () => {
  const {
    cart,
    totalItems,
    subtotal,
    isFreeShipping,
    isOrderModalOpen,
    setIsOrderModalOpen,
    clearCart,
  } = useCart();

  const [form, setForm] = useState<OrderFormState>({
    nombre: '',
    cantidad: totalItems > 0 ? totalItems : 1,
    informacionPedido: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [sentSuccess, setSentSuccess] = useState(false);

  // Synchronize or prefill default order information whenever the modal opens or cart changes
  useEffect(() => {
    if (isOrderModalOpen) {
      const initialQty = totalItems > 0 ? totalItems : 1;
      let initialInfo = form.informacionPedido;

      if (!initialInfo && cart.length > 0) {
        const productList = cart
          .map((item) => `${item.quantity}x ${item.product.name} (5 ml)`)
          .join(', ');
        initialInfo = `Perfumes seleccionados: ${productList}. Favor de coordinar envío.`;
      }

      setForm((prev) => ({
        ...prev,
        cantidad: initialQty,
        informacionPedido: initialInfo,
      }));
    }
  }, [isOrderModalOpen, cart, totalItems]);

  if (!isOrderModalOpen) return null;

  const currentPricePerUnit = BUSINESS_CONFIG.singlePrice;
  const computedTotal = form.cantidad * currentPricePerUnit;
  const isFreeShip = computedTotal >= BUSINESS_CONFIG.freeShippingThreshold;

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!form.nombre.trim() || form.nombre.trim().length < 2) {
      errs.nombre = 'Por favor ingresa tu nombre.';
    }

    if (!form.cantidad || form.cantidad < 1) {
      errs.cantidad = 'La cantidad mínima es 1 frasco de 5 ml.';
    }

    if (!form.informacionPedido.trim() || form.informacionPedido.trim().length < 5) {
      errs.informacionPedido = 'Ingresa la información de tu pedido (perfumes deseados, ciudad/dirección de envío).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleQuantityChange = (delta: number) => {
    setForm((prev) => {
      const nextQty = Math.max(1, prev.cantidad + delta);
      return { ...prev, cantidad: nextQty };
    });
  };

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the formatted WhatsApp order text
    const messageLines = [
      `🌟 *NUEVO PEDIDO — MARRMEX PERFUMES ÁRABES* 🌟`,
      ``,
      `👤 *Nombre:* ${form.nombre.trim()}`,
      `📦 *Cantidad:* ${form.cantidad} frasco(s) de 5 ml`,
      `💰 *Total estimado:* $${computedTotal} MXN ($${currentPricePerUnit} MXN c/u)`,
      `🚚 *Envío:* ${isFreeShip ? '¡GRATIS! (Supera los $1,500 MXN)' : 'A coordinar por paquetería express'}`,
      ``,
      `📝 *INFORMACIÓN DEL PEDIDO:*`,
      `${form.informacionPedido.trim()}`,
      ``,
      `📍 *Tienda:* MARRMEX Perfumes Árabes (Al Rehab 5 ml)`,
      `Hola, deseo confirmar la disponibilidad de mi pedido y recibir los datos para el pago y despacho. ¡Gracias!`
    ];

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodedMessage}`;

    setSentSuccess(true);
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      clearCart();
      setIsOrderModalOpen(false);
      setSentSuccess(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsOrderModalOpen(false)}
      />

      {/* Modal Dialog */}
      <div
        id="order-checkout-modal"
        className="relative w-full max-w-lg bg-[#0a0f0c] border-2 border-[#d4af37]/60 rounded-3xl shadow-2xl shadow-emerald-950/40 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#1b261e] bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#064e3b] text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black/30 border border-[#d4af37]/50 flex items-center justify-center text-[#fceda7]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white leading-tight">
                Formulario de Compra
              </h2>
              <span className="text-xs text-[#fceda7] font-semibold">
                Atención directa vía WhatsApp ({BUSINESS_CONFIG.displayPhone})
              </span>
            </div>
          </div>

          <button
            id="close-order-modal-btn"
            onClick={() => setIsOrderModalOpen(false)}
            className="p-2 text-white/80 hover:text-white hover:bg-black/20 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSendWhatsAppOrder} className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Quick Notice */}
          <div className="p-3.5 rounded-2xl bg-[#064e3b]/25 border border-emerald-500/30 flex items-center gap-3 text-xs text-gray-200">
            <Sparkles className="w-4 h-4 text-[#fceda7] flex-shrink-0" />
            <span>
              Ingresa tus datos a continuación. Al confirmar se abrirá WhatsApp con el pedido listo para enviar a <strong className="text-[#fceda7]">{BUSINESS_CONFIG.displayPhone}</strong>.
            </span>
          </div>

          {/* Campo 1: Nombre */}
          <div>
            <label htmlFor="order-nombre-input" className="block text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
              Nombre <span className="text-red-400">*</span>
            </label>
            <input
              id="order-nombre-input"
              type="text"
              required
              value={form.nombre}
              onChange={(e) => {
                setForm({ ...form, nombre: e.target.value });
                if (errors.nombre) setErrors({ ...errors, nombre: '' });
              }}
              placeholder="Ej. Juan Pérez García"
              className={`w-full px-4 py-3 rounded-xl bg-[#111813] border ${
                errors.nombre ? 'border-red-500 ring-1 ring-red-500' : 'border-[#1b261e] focus:border-[#d4af37]'
              } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all`}
            />
            {errors.nombre && <p className="text-xs text-red-400 mt-1.5">{errors.nombre}</p>}
          </div>

          {/* Campo 2: Cantidad */}
          <div>
            <label htmlFor="order-cantidad-input" className="block text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
              Cantidad de Perfumes (5 ml) <span className="text-red-400">*</span>
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#1b261e] bg-[#111813] rounded-xl overflow-hidden">
                <button
                  type="button"
                  id="order-qty-minus-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={form.cantidad <= 1}
                  className="p-3 text-gray-300 hover:text-white hover:bg-black/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  id="order-cantidad-input"
                  type="number"
                  min="1"
                  max="200"
                  required
                  value={form.cantidad}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setForm({ ...form, cantidad: isNaN(val) ? 1 : Math.max(1, val) });
                    if (errors.cantidad) setErrors({ ...errors, cantidad: '' });
                  }}
                  className="w-16 text-center bg-transparent text-white font-bold text-base focus:outline-none"
                />
                <button
                  type="button"
                  id="order-qty-plus-btn"
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 text-gray-300 hover:text-white hover:bg-black/30 transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 bg-[#111813] border border-[#1b261e] px-4 py-2.5 rounded-xl flex items-center justify-between text-xs">
                <span className="text-gray-400">Total estimado:</span>
                <span className="font-display font-extrabold text-[#fceda7] text-sm">
                  ${computedTotal} MXN
                </span>
              </div>
            </div>
            {errors.cantidad && <p className="text-xs text-red-400 mt-1.5">{errors.cantidad}</p>}
            {isFreeShip ? (
              <p className="text-xs text-emerald-400 font-medium mt-1.5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                ¡Tu pedido califica para Envío Gratis a todo México!
              </p>
            ) : (
              <p className="text-[11px] text-gray-400 mt-1">
                Añade {Math.ceil((BUSINESS_CONFIG.freeShippingThreshold - computedTotal) / currentPricePerUnit)} más para obtener <strong className="text-emerald-300">Envío Gratis</strong>.
              </p>
            )}
          </div>

          {/* Campo 3: Información del Pedido */}
          <div>
            <label htmlFor="order-info-input" className="block text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">
              Información del Pedido <span className="text-red-400">*</span>
            </label>
            <textarea
              id="order-info-input"
              rows={4}
              required
              value={form.informacionPedido}
              onChange={(e) => {
                setForm({ ...form, informacionPedido: e.target.value });
                if (errors.informacionPedido) setErrors({ ...errors, informacionPedido: '' });
              }}
              placeholder="Indica las fragancias Al Rehab que deseas, tu dirección de entrega o cualquier nota especial..."
              className={`w-full px-4 py-3 rounded-xl bg-[#111813] border ${
                errors.informacionPedido ? 'border-red-500 ring-1 ring-red-500' : 'border-[#1b261e] focus:border-[#d4af37]'
              } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all resize-none`}
            />
            {errors.informacionPedido && (
              <p className="text-xs text-red-400 mt-1.5">{errors.informacionPedido}</p>
            )}
            <p className="text-[11px] text-gray-400 mt-1">
              Ejemplo: "Quiero 1 Choco Musk y 1 French Coffee. Enviar a Puebla, Calle 5 de Mayo #123."
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              id="submit-order-whatsapp-btn"
              disabled={sentSuccess}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] hover:brightness-110 active:scale-95 text-black font-extrabold text-sm tracking-wide shadow-xl shadow-[#25D366]/25 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{sentSuccess ? 'Abriendo WhatsApp...' : 'Hacer pedido'}</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-gray-400">
            <span className="flex items-center gap-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              100% Originales Al Rehab
            </span>
            <span>•</span>
            <span className="text-gray-300">Sin pagos automáticos</span>
            <span>•</span>
            <span className="text-gray-300">Atención personalizada</span>
          </div>
        </form>
      </div>
    </div>
  );
};
