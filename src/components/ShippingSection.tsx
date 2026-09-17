import React from 'react';
import { Truck, MapPin, CheckCircle, Clock, Zap, Sparkles } from 'lucide-react';

export const ShippingSection: React.FC = () => {
  return (
    <section id="envios" className="py-14 sm:py-20 bg-[#080b09] border-b border-[#1b261e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] block mb-2">
            Cobertura & Logística
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Envíos a todo México
          </h2>
          <p className="text-sm text-[#cbd5e1] mt-3 leading-relaxed">
            Nuestra bodega central en el corazón de <strong className="text-white">Huajuapan de León, Oaxaca</strong> despacha pedidos diariamente con los más altos estándares de embalaje y cuidado.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* 3 Regional Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Bodega Origen */}
          <div className="p-6 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 hover:bg-[#111813] transition-all duration-300 relative group overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7] mb-4 group-hover:scale-110 transition-transform shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>

            <div className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#064e3b]/30 text-emerald-300 border border-emerald-500/30 mb-3">
              Bodega Central
            </div>

            <h3 className="font-display font-bold text-lg text-white mb-2">
              Huajuapan de León, Oaxaca
            </h3>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
              Cada pedido sale directamente desde nuestra bodega en el Centro de Huajuapan de León, verificado en stock y preparado minuciosamente para su viaje.
            </p>

            <ul className="text-xs text-gray-300 space-y-1.5 pt-3 border-t border-[#1b261e]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Inspección de calidad previa al envío</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Despacho continuo de lunes a sábado</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Paqueterías a todo México */}
          <div className="p-6 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 hover:bg-[#111813] transition-all duration-300 relative group overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7] mb-4 group-hover:scale-110 transition-transform shadow-sm">
              <Truck className="w-6 h-6" />
            </div>

            <div className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#1d1a0e] text-[#f5e7b8] border border-[#d4af37]/30 mb-3">
              Cobertura Nacional
            </div>

            <h3 className="font-display font-bold text-lg text-white mb-2">
              Envíos a todo México
            </h3>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
              Entregas a domicilio en los 32 estados de la República Mexicana a través de las paqueterías líderes (FedEx, DHL, Estafeta, Redpack).
            </p>

            <ul className="text-xs text-gray-300 space-y-1.5 pt-3 border-t border-[#1b261e]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Tiempo de entrega estimado de 2 a 5 días hábiles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Llegamos a cualquier código postal del país</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Rastreo & Empaque Protegido */}
          <div className="p-6 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 hover:bg-[#111813] transition-all duration-300 relative group overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7] mb-4 group-hover:scale-110 transition-transform shadow-sm">
              <Clock className="w-6 h-6" />
            </div>

            <div className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#064e3b]/30 text-emerald-300 border border-emerald-500/30 mb-3">
              Seguimiento Seguro
            </div>

            <h3 className="font-display font-bold text-lg text-white mb-2">
              Guía de Rastreo y Embalaje
            </h3>

            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
              Protección acolchada multicapa especial para frascos de vidrio y viales de 5 ml, garantizando que lleguen impecables a tus manos.
            </p>

            <ul className="text-xs text-gray-300 space-y-1.5 pt-3 border-t border-[#1b261e]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Número de guía enviado directo a tu WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Embalaje resistente a golpes y traslados</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Free Shipping Policy Notice Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0c120e] via-[#121c15] to-[#0c120e] border-2 border-[#d4af37]/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#d4af37] text-[#fceda7] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                Envío GRATIS en compras mayores a $1,500 MXN
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd5e1] mt-0.5">
                En compras menores a $1,500 MXN, el costo de envío se calcula antes del pago de acuerdo con tu código postal.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-black font-extrabold text-xs tracking-wider uppercase shadow-md">
              Ahorra en tu pedido
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
