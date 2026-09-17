import React from 'react';
import { Award, Plane, Clock, MessageSquareText } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustItems = [
    {
      title: 'Solo Al Rehab original',
      description: 'Productos 100% auténticos de la marca árabe Al Rehab en presentación única de 5 ml roll-on. No réplicas ni imitaciones.',
      icon: Award,
      badge: 'Al Rehab 5 ml',
    },
    {
      title: 'Envíos a todo México',
      description: 'Envíos rápidos y seguros a través de paqueterías líderes a cualquier estado de la República Mexicana.',
      icon: Plane,
      badge: 'Cobertura Nacional',
    },
    {
      title: 'Empaque protegido',
      description: 'Embalaje acolchado especial para frascos de 5 ml y entrega de número de guía oficial para rastrear tu paquete.',
      icon: Clock,
      badge: 'Guía de Rastreo',
    },
    {
      title: 'Atención por WhatsApp',
      description: 'Asesoría y atención personalizada para verificar disponibilidad, dudas olfativas y cotizar el envío antes de pagar.',
      icon: MessageSquareText,
      badge: 'Trato Directo y Seguro',
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#080b09] border-b border-[#1b261e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] block mb-2">
            Garantía y Seguridad
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Compra con confianza
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 hover:bg-[#111813] transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7] group-hover:scale-110 group-hover:bg-[#064e3b] transition-all duration-300 mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#064e3b]/30 text-emerald-300 border border-emerald-500/30 mb-3">
                  {item.badge}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#f3e5ab] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#cbd5e1] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
