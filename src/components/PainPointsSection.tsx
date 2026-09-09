import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ShieldAlert, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const PainPointsSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-xs font-heading font-extrabold uppercase tracking-wider mb-3">
            Não adie o problema
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight">
            Pia entupida? Vaso transbordando? Mau cheiro no ralo?
          </h2>
          <p className="text-base sm:text-lg text-[#49607e] mt-3 font-normal leading-relaxed">
            A cada minuto de esgoto retornado ou água parada, aumentam os riscos de infiltrações estruturais e proliferação de bactérias. A Desentupidora BIG atua rápido para erradicar o problema pela raiz.
          </p>
        </motion.div>

        {/* 3 Danger & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Danger Card 1: Dano Material */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 p-6 sm:p-7 rounded-2xl bg-[#f2f3ff] border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shadow-xs">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#002c71]">
              Dano Material &amp; Infiltração
            </h3>
            <p className="text-sm text-[#49607e] leading-relaxed">
              A pressão da água retida rompe emendas de tubos dentro de paredes e lajes, causando mofo, estufamento de pisos cerâmicos e prejuízos que custam até 10x mais que a desobstrução preventiva.
            </p>
            <div className="mt-auto pt-3 flex items-center gap-2 text-[#ba1a1a] text-xs font-bold border-t border-slate-200/60">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Risco crítico de vazamento oculto</span>
            </div>
          </motion.div>

          {/* Danger Card 2: Risco à Saúde */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 p-6 sm:p-7 rounded-2xl bg-[#f2f3ff] border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shadow-xs">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#002c71]">
              Risco à Saúde e Higiene
            </h3>
            <p className="text-sm text-[#49607e] leading-relaxed">
              O refluxo de esgoto atrai pragas urbanas como baratas e ratos, além de espalhar gases tóxicos e bactérias patogênicas que provocam infecções respiratórias e gastrointestinais na sua família.
            </p>
            <div className="mt-auto pt-3 flex items-center gap-2 text-[#ba1a1a] text-xs font-bold border-t border-slate-200/60">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Contaminação do ambiente familiar</span>
            </div>
          </motion.div>

          {/* Solution Card 3: Solução BIG Sem Quebra-Quebra */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 p-6 sm:p-7 rounded-2xl bg-[#002c71] text-white shadow-xl relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-[#002c71] flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-[#00419e]" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              Solução BIG: Sem Quebra-Quebra
            </h3>
            <p className="text-sm text-[#dae2ff] leading-relaxed">
              Desobstrução cirúrgica com sondas rotativas industriais e hidrojateamento de alta performance. Removemos 100% dos resíduos e gorduras sem quebrar um único azulejo ou piso.
            </p>
            <div className="mt-auto pt-3 flex items-center justify-between border-t border-white/15">
              <div className="flex items-center gap-2 text-[#ffdcbd] text-xs font-bold">
                <CheckCircle className="w-4 h-4 shrink-0 text-[#25D366]" />
                <span>Solução definitiva com garantia formal</span>
              </div>
              <a
                href={CONTACT_INFO.getWhatsappUrl('Olá! Quero resolver meu problema de entupimento sem quebrar nada.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-white transition-colors"
                title="Chamar técnico"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
