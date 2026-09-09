import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, PhoneCall, CheckCircle2, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-16 bg-gradient-to-b from-[#002c71] to-[#001b47] text-white relative overflow-hidden" id="contato">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#dae2ff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00419e]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Emergency Alert Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#25D366] text-xs font-heading font-extrabold uppercase tracking-wider mb-4 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Atendimento 24 Horas
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
            Precisa de Desentupimento Agora?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto mt-3 leading-relaxed font-normal">
            Atendimento ágil com chegada em até 30 minutos em toda a capital e região metropolitana. Visita e orçamento sem custo.
          </p>

          {/* Action Conversion CTAs with Pill Style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-7">
            <a
              href={CONTACT_INFO.getWhatsappUrl('Olá! Preciso de desentupimento de urgência em BH!')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-white font-heading font-bold text-base shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#002c71] font-heading font-bold text-base hover:bg-slate-100 active:scale-[0.98] transition-all shadow-md"
            >
              <PhoneCall className="w-5 h-5 text-[#002c71]" />
              <span>Ligar: {CONTACT_INFO.phone}</span>
            </a>
          </div>

          {/* Reassurance Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-[#dae2ff]">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#ffdcbd]" />
              <span>Chegada em até 30 min</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Sem taxa de visita</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ffdcbd]" />
              <span>Garantia formal</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4 text-white" />
              <span>Em até 12x no cartão</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
