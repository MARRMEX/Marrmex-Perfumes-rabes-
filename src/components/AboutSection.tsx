import React from 'react';
import { Phone, ShieldCheck, MapPin, Sparkles, Droplets, Facebook } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/products';
import logoImg from '../assets/images/marrmex_logo_emblem_1789590014841.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-[#070907] border-b border-[#1b261e] relative overflow-hidden">
      {/* Subtle background element: Emerald & Gold */}
      <div className="absolute -right-24 bottom-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 bg-[#0d140f] p-6 shadow-2xl shadow-black">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-lg mb-6 bg-[#111713]">
                <img
                  src={logoImg}
                  alt="MARRMEX Perfumes Árabes Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-xl text-white">
                  MARRMEX Perfumes Árabes
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold block mt-0.5">
                  Distribuidor de Perfumes Árabes Al Rehab
                </span>
                <p className="text-xs text-[#cbd5e1] mt-2 flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Bodega: Centro, Huajuapan de León, Oaxaca</span>
                </p>
              </div>

              {/* Legitimacy pill badges */}
              <div className="space-y-2.5 pt-4 border-t border-[#1b261e] text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-white">100% Productos Originales Al Rehab</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Droplets className="w-4 h-4 text-emerald-400" />
                  <span className="text-white">Concentrados roll-on de 5 ml de larga duración</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-white">Atención cercana, mexicana y personalizada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#d4af37] block mb-2">
              Nuestra Historia & Misión
            </span>

            {/* Mandatory Title */}
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mb-6">
              Conoce MARRMEX Perfumes Árabes
            </h2>

            {/* Mandatory Exact Body Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed mb-8">
              <p>
                Somos una tienda mexicana especializada en perfumes árabes originales <strong className="text-white">Al Rehab</strong>, ofreciendo fragancias en presentación concentrada roll-on de <strong className="text-[#fceda7]">5 ml</strong> para quienes buscan descubrir diferentes aromas exquisitos y llevarlos fácilmente a cualquier lugar.
              </p>
              <p>
                Despachamos cada pedido desde nuestra bodega en <strong className="text-white">Huajuapan de León, Oaxaca</strong>, con envíos rápidos, protegidos y seguros a todo México.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 italic pt-2 border-t border-[#1b261e]">
                Nota de autenticidad: MARRMEX Perfumes Árabes no es fabricante de perfumes. Todos nuestros productos provienen directamente de la reconocida casa perfumera árabe <strong className="text-white">Al Rehab</strong> con fotos oficiales de presentación de www.alrehab.com, garantizando su fórmula original concentrada y libre de adulteraciones.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                id="about-whatsapp-btn"
                href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent('Hola MARRMEX Perfumes Árabes, me gustaría conocer más sobre sus perfumes Al Rehab y asesoría sobre fragancias.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a
                id="about-facebook-btn"
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/50 text-[#bfdbfe] hover:text-white text-sm font-bold transition-all flex items-center justify-center gap-2 text-center shadow-md"
              >
                <Facebook className="w-4 h-4 text-[#60a5fa] fill-current" />
                <span>Facebook Oficial</span>
              </a>

              <a
                href="#catalogo"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#064e3b] border border-emerald-500/50 hover:bg-[#047857] text-white text-sm font-bold transition-colors text-center shadow-md shadow-emerald-950/40"
              >
                Ver catálogo ($180 MXN)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
