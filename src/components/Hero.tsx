import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import heroImg from '../assets/images/marrmex_hero_perfumes_1789590005202.jpg';

interface HeroProps {
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  const benefits = [
    { text: '100% Originales Al Rehab (5 ml)', icon: ShieldCheck },
    { text: 'Envíos rápidos a todo México', icon: Truck },
    { text: 'Empaque seguro y protegido', icon: CheckCircle2 },
    { text: 'Atención personalizada por WhatsApp', icon: MessageCircle },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#1b261e]">
      {/* Ambient background glow: Emerald and Gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-600/15 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-[320px] h-[320px] bg-[#d4af37]/15 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy and CTA */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0d140f] border border-[#d4af37]/50 text-white tracking-wide mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-white">Perfumería Árabe Concentrada • <strong className="text-[#fceda7]">5 ml Roll-on</strong></span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.15] mb-5">
              Perfumes Árabes <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Originales en México</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#e2e8f0] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Descubre la esencia de <strong className="text-white">Al Rehab</strong> y encuentra tu nueva fragancia favorita. Presentación práctica de <strong className="text-[#fceda7]">5 ml</strong> a tan solo <strong className="text-emerald-400">$180 MXN</strong>, con fijación legendaria y aromas envolventes.
            </p>

            {/* Buttons: Gold and Emerald */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8">
              <button
                id="hero-buy-perfumes-btn"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#d4af37]/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Comprar perfumes</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                id="hero-view-catalog-btn"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#064e3b] border border-emerald-500/50 hover:bg-[#047857] text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-950/40"
              >
                <span>Ver catálogo ($180 MXN)</span>
              </button>
            </div>

            <p className="text-xs text-[#cbd5e1] flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Envíos rápidos y seguros a cualquier rincón de México</span>
            </p>
          </div>

          {/* Right Column: Visual Imagery Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 shadow-2xl shadow-black bg-[#0c100d]">
                <img
                  src={heroImg}
                  alt="Colección de perfumes árabes Al Rehab en MARRMEX Perfumes Árabes"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070907] via-transparent to-transparent opacity-60" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#090d0af2] backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] block">
                      Catálogo Al Rehab
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Más de 20 fragancias disponibles
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-300 block">Precio único</span>
                    <span className="font-display font-extrabold text-[#f5e7b8] text-sm sm:text-base">
                      $180 MXN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Strip below */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#1b261e]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0d130f] border border-[#1b261e] hover:border-emerald-500/40 hover:bg-[#111a14] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#064e3b]/60 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-[#fceda7]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {b.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
