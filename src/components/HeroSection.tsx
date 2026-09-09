import React from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/content';
import { LazyImage } from './LazyImage';

interface HeroSectionProps {
  onOpenDispatchModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDispatchModal }) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#002c71] via-[#00378b] to-[#00255e] text-white pt-28 sm:pt-32 pb-20 md:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1d4ed8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Direct CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left"
          >
            {/* Category / Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Plantão 24h em BH e Região
            </div>

            {/* Headline matching inspiration style */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-white mb-5">
              Desentupimento Rápido <br className="hidden sm:inline" />
              e Eficiente em BH
            </h1>

            {/* Subtext - Short & Direct */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-lg mb-8 font-normal">
              Chegada rápida em até 30 minutos na Grande BH. Avaliação e orçamento gratuito no local, atendimento profissional e garantia do serviço.
            </p>

            {/* Action Buttons with Pill Style matching inspiration */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.getWhatsappUrl('Olá! Preciso de desentupimento com atendimento rápido em BH.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-white hover:brightness-105 active:scale-[0.98] font-heading font-bold text-base shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chamar no WhatsApp Agora</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#002c71] hover:bg-slate-100 active:scale-[0.98] font-heading font-bold text-base shadow-lg transition-all"
              >
                <PhoneCall className="w-5 h-5 text-[#002c71]" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Trust Indicators (3 icons in a row like bottom left of inspiration) */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 pt-2 border-t border-white/10 w-full">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#25D366]">
                  <Zap className="w-4 h-4" />
                </div>
                <span>Chegada em até 30 min</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#dae2ff]">
                  <Tag className="w-4 h-4" />
                </div>
                <span>Visita e Orçamento R$ 0,00</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#25D366]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Garantia do Serviço</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Plumber Technician matching inspiration visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] group">
              {/* Decorative back subtle glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#25D366]/20 to-[#3b82f6]/30 rounded-[36px] blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              {/* Card with rounded corners matching inspiration */}
              <div className="relative rounded-[32px] overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900">
                <LazyImage
                  src={ASSETS.heroTechnician}
                  alt="Técnico da Desentupidora BIG em Belo Horizonte"
                  wrapperClassName="w-full h-[420px] sm:h-[480px]"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Floating Status Pill over the image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    Atendimento de Plantão
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#25D366] text-white text-xs font-extrabold shadow-sm">
                    24 Horas
                  </div>
                </div>

                {/* Bottom info banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5 pt-10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-extrabold text-sm sm:text-base">Plantão em Toda BH</p>
                      <p className="text-xs text-slate-300">Barreiro, Savassi, Pampulha, Contagem e região</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] uppercase tracking-wider text-[#25D366] font-extrabold block">Visita</span>
                      <span className="font-heading font-black text-sm text-white">GRATUITA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

