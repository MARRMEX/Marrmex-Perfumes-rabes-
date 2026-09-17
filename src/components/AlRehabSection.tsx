import React from 'react';
import { Sparkles, Shield, HeartHandshake, Compass, Flame, Droplet } from 'lucide-react';

export const AlRehabSection: React.FC = () => {
  const highlights = [
    {
      icon: Droplet,
      title: 'Aceite Concentrado (Attar)',
      desc: 'Formulación pura sin alcohol. Su textura en aceite penetra en la piel permitiendo una fijación que perdura de 8 a 14 horas continuas.',
    },
    {
      icon: Compass,
      title: 'Práctico Formato Roll-On 5 ml',
      desc: 'Tamaño ideal para llevar en el bolsillo, bolso o automóvil. Su aplicador de balín de acero dosifica la cantidad exacta sin derrames.',
    },
    {
      icon: Flame,
      title: 'Aromas Icónicos & Exóticos',
      desc: 'Desde el ultra goloso Choco Musk y el irresistible French Coffee hasta los frescos Silver y Sultan con maderas de cedro.',
    },
    {
      icon: Shield,
      title: 'Tradición Árabe 100% Original',
      desc: 'Al Rehab es una de las casas de perfumería más legendarias de Arabia Saudita y Emiratos Árabes, con más de 40 años de maestría olfativa.',
    },
  ];

  return (
    <section id="al-rehab" className="py-16 sm:py-20 bg-[#080b09] border-b border-[#1b261e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] block mb-2">
            La Marca Líder
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
            ¿Por qué elegir perfumes Al Rehab?
          </h2>
          <p className="text-sm text-[#cbd5e1] mt-3 leading-relaxed">
            Reconocidos mundialmente por su relación calidad-precio inigualable, potencia olfativa y versatilidad diaria.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 hover:bg-[#111813] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7] mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Banner */}
        <div className="p-6 rounded-2xl bg-[#0d140f] border border-[#d4af37]/50 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h4 className="font-display font-bold text-lg text-white mb-1">
              Todos los modelos al mismo precio accesible: <span className="text-[#fceda7]">$180 MXN</span>
            </h4>
            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              En MARRMEX Perfumes Árabes mantenemos un precio uniforme y transparente para que puedas experimentar múltiples familias olfativas sin complicaciones.
            </p>
          </div>
          <a
            href="#catalogo"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-black font-extrabold text-xs tracking-wider uppercase hover:brightness-110 transition-all whitespace-nowrap shadow-md shadow-[#d4af37]/20"
          >
            Explorar las 20+ fragancias
          </a>
        </div>
      </div>
    </section>
  );
};
