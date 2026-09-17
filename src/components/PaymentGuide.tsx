import React from 'react';
import { CheckCircle2, CreditCard, Send, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';

export const PaymentGuide: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Disponibilidad',
      desc: 'Verificamos inmediatamente el stock en bodega de cada uno de tus perfumes Al Rehab seleccionados.',
    },
    {
      number: '2',
      title: 'Datos del pedido',
      desc: 'Validamos tu dirección completa y número de contacto para asegurar una entrega perfecta.',
    },
    {
      number: '3',
      title: 'Costo de envío',
      desc: 'Si tu compra es mayor a $1,500 MXN es GRATIS. Si es menor, te cotizamos la tarifa más conveniente.',
    },
    {
      number: '4',
      title: 'Total final',
      desc: 'Recibes el resumen detallado con el importe exacto a liquidar, sin cargos ocultos ni sorpresas.',
    },
    {
      number: '5',
      title: 'Método e instrucciones de pago',
      desc: 'Te proporcionamos los datos oficiales para Transferencia SPEI o Depósito en tiendas OXXO sin comisiones extra.',
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#080b09] border-b border-[#1b261e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] block mb-2">
            Proceso transparente y seguro
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            ¿Cómo pago mi pedido?
          </h2>
          <p className="text-sm text-[#cbd5e1] mt-3 leading-relaxed">
            Después de enviar tu pedido por WhatsApp, nuestro equipo te confirmará en minutos cada uno de estos 5 pasos:
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 hover:bg-[#111813] transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-black font-black text-sm flex items-center justify-center mb-4 shadow-md">
                  {s.number}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0d140f] border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#064e3b] border border-emerald-500/40 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <MessageSquare className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm sm:text-base text-white">
                Coordinación directa y confiable por WhatsApp
              </h4>
              <p className="text-xs text-[#cbd5e1]">
                Aceptamos transferencias bancarias mexicanas (SPEI de cualquier banco) y depósitos en efectivo en tiendas OXXO de todo el país.
              </p>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#064e3b]/40 text-emerald-300 border border-emerald-500/40 whitespace-nowrap">
            100% Sin Comisiones Extra
          </span>
        </div>
      </div>
    </section>
  );
};
