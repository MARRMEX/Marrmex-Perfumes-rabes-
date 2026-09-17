import React from 'react';
import { Sparkles, Compass, Castle, SunMedium } from 'lucide-react';
import palaceImg from '../assets/images/arab_palace_design_1789592348565.jpg';
import desertImg from '../assets/images/arab_desert_oasis_1789592357761.jpg';
import soukImg from '../assets/images/arab_souk_perfumes_1789592367482.jpg';

export const ArabianHeritageSection: React.FC = () => {
  const heritageCards = [
    {
      image: palaceImg,
      title: 'Palacios & Arquitectura Oriental',
      badge: 'Tradición Real',
      desc: 'La majestuosidad de los patios árabes y arcos geométricos donde la realeza perfumaba sus túnicas con mezclas exclusivas de almizcle, azafrán y maderas sagradas.',
      icon: Castle,
    },
    {
      image: desertImg,
      title: 'Dunas Doradas & Oasis del Desierto',
      badge: 'Misticismo Árabe',
      desc: 'El encanto cálido del crepúsculo oriental, fuente de inspiración de fragancias densas como Golden Sand y notas ambaradas que evocan la calidez de las arenas milenarias.',
      icon: SunMedium,
    },
    {
      image: soukImg,
      title: 'Zocos Tradicionales & Casas de Attar',
      badge: 'Cuna de Al Rehab',
      desc: 'Los legendarios bazares de esencias de Arabia Saudita y Emiratos, donde los maestros perfumistas destilan aceites concentrados roll-on puros de fijación insuperable.',
      icon: Compass,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#080c09] via-[#0a0f0c] to-[#070907] border-b border-[#1b261e] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#064e3b]/30 border border-emerald-500/40 text-emerald-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#fceda7]" />
            <span>Herencia & Paisajes del Mundo Árabe</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            La Magia de Oriente en Cada Gota
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
            Cada perfume roll-on de <strong className="text-white">Al Rehab</strong> encapsula siglos de cultura, arquitectura y arte perfumista originario de los más bellos lugares de la Península Arábiga.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-5" />
        </div>

        {/* 3 Places Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heritageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-[#0d140f] border border-[#1b261e] hover:border-[#d4af37]/70 transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1.5"
              >
                {/* Photo container */}
                <div className="relative h-60 w-full overflow-hidden bg-[#070907]">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d140f] via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/70 backdrop-blur-md text-[#fceda7] border border-[#d4af37]/40 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#fceda7] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1b261e] flex items-center justify-between text-xs text-[#d4af37]">
                    <span className="font-semibold tracking-wider uppercase text-[11px]">100% Tradición Árabe</span>
                    <span className="text-emerald-400 font-bold">5 ml Roll-on</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
