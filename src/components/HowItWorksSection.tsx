import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="como-funciona">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="px-3.5 py-1 rounded-full bg-[#c4dcff] text-[#002c71] text-xs font-heading font-extrabold uppercase tracking-wider">
            Sem Burocracia
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight mt-3">
            Como Funciona o Atendimento BIG em 3 Passos
          </h2>
        </motion.div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#faf8ff] border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#002c71] text-white font-heading font-black text-xl flex items-center justify-center mb-5 shadow-md ring-4 ring-[#eaedff]">
              1
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#002c71] mb-2">
              Chame no WhatsApp ou Ligue
            </h3>
            <p className="text-sm text-[#49607e] leading-relaxed">
              Em menos de 1 minuto você nos relata o problema. Nossa central encaminha o chamado direto para a van mais próxima da sua região.
            </p>
            <div className="mt-6">
              <a
                href={CONTACT_INFO.getWhatsappUrl('Olá! Gostaria de acionar o técnico da Desentupidora BIG agora.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#007028] font-heading font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Chamar agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#faf8ff] border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#002c71] text-white font-heading font-black text-xl flex items-center justify-center mb-5 shadow-md ring-4 ring-[#eaedff]">
              2
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#002c71] mb-2">
              Visita e Avaliação Grátis
            </h3>
            <p className="text-sm text-[#49607e] leading-relaxed">
              A van chega na sua porta. O técnico inspeciona a tubulação e informa o preço exato. Você só autoriza se concordar com o orçamento.
            </p>
            <div className="mt-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#eaedff] text-[#49607e] text-xs font-semibold">
                Sem taxa de deslocamento
              </span>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#faf8ff] border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#002c71] text-white font-heading font-black text-xl flex items-center justify-center mb-5 shadow-md ring-4 ring-[#eaedff]">
              3
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#002c71] mb-2">
              Execução e Garantia
            </h3>
            <p className="text-sm text-[#49607e] leading-relaxed">
              Desentupimento imediato no local com limpeza da área trabalhada, emissão de nota fiscal e certificado formal de garantia.
            </p>
            <div className="mt-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#25D366]/20 text-[#007028] text-xs font-heading font-bold">
                100% Resolvido na Hora
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
