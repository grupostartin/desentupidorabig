import React from 'react';
import { motion } from 'motion/react';
import { Check, Wrench, Droplets, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/content';
import { LazyImage } from './LazyImage';

export const FleetTechSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white" id="tecnologia">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Modern Service Van matching inspiration layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[520px]">
              {/* Subtle background glow circle */}
              <div className="absolute inset-0 bg-blue-50/80 rounded-full blur-2xl -z-10 transform scale-90" />
              
              <LazyImage
                src={ASSETS.fleetVanIsolated}
                alt="Van de atendimento equipada da Desentupidora BIG"
                wrapperClassName="w-full h-auto drop-shadow-xl"
                className="w-full h-auto object-contain"
              />

              {/* Float Pill Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-md whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                Unidades Móveis de Prontidão em BH
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features with Circular Blue Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#0047a5] mb-2">
              Tecnologia Avançada
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight mb-3">
              Desentupimento sem Quebra-Quebra
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Maquinário profissional que desobstrui qualquer encanamento de forma limpa, rápida e sem quebrar pisos ou azulejos.
            </p>

            {/* 3 Circular Icon Feature Items matching inspiration */}
            <div className="flex flex-col gap-5 w-full mb-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0047a5] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#002c71] leading-tight mb-1">
                    Sondas Rotativas Roto-Rooter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Raspagem mecânica precisa que contorna as curvas do cano e elimina o bloqueio na hora.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0047a5] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Droplets className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#002c71] leading-tight mb-1">
                    Hidrojateamento de Alta Pressão
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Água sob alta pressão para desobstrução profunda e lavagem completa da tubulação.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0047a5] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Video className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#002c71] leading-tight mb-1">
                    Vídeo Inspeção Computadorizada
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Microcâmera que localiza o ponto exato da obstrução em tempo real, sem adivinhações.
                  </p>
                </div>
              </div>
            </div>

            {/* Pill CTA button */}
            <a
              href={CONTACT_INFO.getWhatsappUrl('Olá! Gostaria de entender como funciona o desentupimento sem quebrar pisos da BIG.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002c71] text-white hover:bg-[#00388d] active:scale-95 text-sm font-bold shadow-md transition-all"
            >
              <span>Solicitar Avaliação Gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
