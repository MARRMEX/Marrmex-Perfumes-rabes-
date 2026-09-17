import React, { useState } from 'react';
import { MessageSquare, MapPin, Phone, Mail, ShieldCheck, Heart, Sparkles, X, Facebook } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/products';
import logoImg from '../assets/images/marrmex_logo_emblem_1789590014841.jpg';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer id="contacto" className="bg-[#050705] border-t border-[#1b261e] text-gray-400 text-xs pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#152018]">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#d4af37]/40 bg-[#0c120e] flex-shrink-0">
                  <img
                    src={logoImg}
                    alt="MARRMEX Perfumes Árabes"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    MARRMEX Perfumes Árabes
                  </h3>
                  <span className="text-[10px] text-[#fceda7] tracking-widest block uppercase font-bold">
                    Perfumes Árabes Originales
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                Especialistas en perfumería árabe original Al Rehab de 5 ml en México. Calidad concentrada en aceite, duración garantizada y atención personalizada.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  id="footer-whatsapp-btn"
                  href={`https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent('Hola MARRMEX Perfumes Árabes, me comunico desde la tienda online.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#064e3b]/40 hover:bg-[#064e3b]/70 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-emerald-400" />
                  <span>WhatsApp: {BUSINESS_CONFIG.displayPhone}</span>
                </a>

                <a
                  id="footer-facebook-btn"
                  href={BUSINESS_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/40 border border-[#1877F2]/50 text-[#bfdbfe] hover:text-white font-bold text-xs transition-colors shadow-sm"
                  title="Visítanos en Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current text-[#1877F2]" />
                  <span>Facebook Oficial</span>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => scrollTo('#inicio')} className="hover:text-[#fceda7] transition-colors">
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#catalogo')} className="hover:text-[#fceda7] transition-colors">
                    Perfumes (Catálogo completo)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#al-rehab')} className="hover:text-[#fceda7] transition-colors">
                    Sobre la marca Al Rehab
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#envios')} className="hover:text-[#fceda7] transition-colors">
                    Envíos y zonas de cobertura
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#nosotros')} className="hover:text-[#fceda7] transition-colors">
                    Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#contacto')} className="hover:text-[#fceda7] transition-colors">
                    Contacto directo
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Regional Hub & Shipping */}
            <div>
              <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Ubicación & Cobertura
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Bodega Central:</strong>
                    Centro, Huajuapan de León, Oaxaca, México
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Envíos a todo México:</strong>
                    Paqueterías express a cualquier estado
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Empaque & Rastreo:</strong>
                    Embalaje protegido y número de guía oficial para cada envío
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & Guarantee */}
            <div>
              <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Políticas & Transparencia
              </h4>
              <p className="text-xs text-[#cbd5e1] mb-4 leading-relaxed">
                Garantizamos autenticidad en cada frasco. Todos los pedidos se coordinan y confirman vía WhatsApp para brindarte atención humana y transparente.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="block text-gray-300 hover:text-[#fceda7] transition-colors underline"
                >
                  Política de privacidad
                </button>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="block text-gray-300 hover:text-[#fceda7] transition-colors underline"
                >
                  Términos y condiciones
                </button>
              </div>
            </div>
          </div>

          {/* SEO Keywords section for Google Search México */}
          <div className="pt-8 mt-8 border-t border-emerald-950/80 text-xs text-gray-400">
            <div className="bg-[#07130b]/60 border border-emerald-900/30 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2 text-[#d4af37] font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Búsquedas frecuentes en México (SEO)</span>
              </div>
              <p className="leading-relaxed text-[11px] text-gray-400">
                <strong className="text-gray-300">Perfumería Árabe en México:</strong> Perfumes árabes originales en México • Al Rehab México oficial • Comprar perfumes árabes Al Rehab • Al Rehab Choco Musk México • Aceite perfumado árabe roll-on • Perfumes en aceite concentrado 5ml y 6ml sin alcohol • Al Rehab Golden Sand • Al Rehab Lord Blue • Al Rehab Soft • Al Rehab Dalal • Al Rehab Silver • Attar árabe tradicional • Perfumes árabes duraderos para hombre y mujer • Envíos a Ciudad de México (CDMX), Guadalajara, Monterrey, Puebla, Oaxaca, Querétaro, Veracruz, Mérida, Tijuana, León, Cancún y toda la República Mexicana.
              </p>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-400">
            <div>
              <p>
                © {new Date().getFullYear()} <strong className="text-white">MARRMEX Perfumes Árabes</strong>. Todos los derechos reservados. Perfumes árabes originales en México.
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                Al Rehab es una marca registrada de sus respectivos dueños. MARRMEX Perfumes Árabes distribuye productos 100% auténticos con fotos oficiales de www.alrehab.com.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                id="footer-bottom-facebook"
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2]/15 hover:bg-[#1877F2]/30 border border-[#1877F2]/40 text-[#bfdbfe] hover:text-white transition-colors"
                title="Síguenos en Facebook"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2] fill-current" />
                <span className="text-xs font-semibold">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0d140f] border-2 border-[#d4af37]/50 rounded-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display font-bold text-lg text-white mb-4">
              Política de Privacidad
            </h3>
            <div className="text-xs text-[#cbd5e1] space-y-3 leading-relaxed">
              <p>
                En <strong className="text-white">MARRMEX Perfumes Árabes</strong>, la privacidad de nuestros clientes es una prioridad.
              </p>
              <p>
                <strong>1. Datos recopilados:</strong> Únicamente solicitamos tu nombre, teléfono/WhatsApp, ciudad y dirección con la finalidad exclusiva de cotizar el costo de envío y coordinar la entrega o despacho de tu pedido.
              </p>
              <p>
                <strong>2. Uso de la información:</strong> Tus datos no son vendidos, cedidos ni compartidos con terceros comerciales ajenos al servicio de mensajería o paquetería contratado.
              </p>
              <p>
                <strong>3. Contacto directo:</strong> Toda la comunicación y acuerdo de pago se realiza a través de WhatsApp oficial, garantizando que tengas control de la conversación y tus comprobantes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0d140f] border-2 border-[#d4af37]/50 rounded-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display font-bold text-lg text-white mb-4">
              Términos y Condiciones
            </h3>
            <div className="text-xs text-[#cbd5e1] space-y-3 leading-relaxed">
              <p>
                <strong>1. Originalidad:</strong> Todos los productos ofrecidos en MARRMEX Perfumes Árabes son 100% originales de la marca Al Rehab en presentación de 5 ml a precio oficial de $180 MXN. MARRMEX Perfumes Árabes no es fabricante de fragancias.
              </p>
              <p>
                <strong>2. Proceso de compra:</strong> La página genera un pedido formal que se envía por WhatsApp. El pedido se considera en firme una vez que nuestro equipo valida la disponibilidad en bodega, calcula el flete (o aplica envío gratis si supera $1,500 MXN) y el cliente confirma el pago acordado.
              </p>
              <p>
                <strong>3. Envíos y Logística:</strong> Despacho directo desde bodega en Huajuapan de León, Oaxaca por paquetería con número de guía oficial a cualquier destino de la República Mexicana.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
