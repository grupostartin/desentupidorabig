import React from 'react';
import { motion } from 'motion/react';
import {
  Gauge,
  CheckCircle2,
  MessageCircle,
  Zap,
  Droplets,
  ShieldCheck,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

const BENEFITS = [
  {
    icon: Zap,
    title: 'Pressão de até 4.000 PSI',
    desc: 'Jato ultrapotente que elimina gordura petrificada, raízes e crostas calcárias sem danificar a tubulação.',
  },
  {
    icon: Building2,
    title: 'Ideal para Prédios e Indústrias',
    desc: 'Galerias de esgoto, prumadas prediais, redes industriais e tubulações de grande diâmetro.',
  },
  {
    icon: Droplets,
    title: 'Lavagem Interna da Tubulação',
    desc: 'Além de desobstruir, o hidrojato higieniza o interior do cano, prevenindo novas ocorrências.',
  },
  {
    icon: ShieldCheck,
    title: 'Sem Quebra de Piso ou Parede',
    desc: 'Acesso pela inspeção existente. Zero demolição, zero sujeira. Obra preservada 100%.',
  },
];

const STATS = [
  { value: '4.000', unit: 'PSI', label: 'Pressão máxima do equipamento' },
  { value: '98%', unit: '', label: 'Taxa de resolução na 1ª visita' },
  { value: '30min', unit: '', label: 'Tempo médio de chegada em BH' },
];

export const HydroJetSection: React.FC = () => {
  return (
    <section
      id="hidrojateamento"
      className="w-full relative overflow-hidden bg-[#00173d] py-16 sm:py-20"
    >
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#6eaaff_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-40 -left-20 w-[520px] h-[520px] rounded-full bg-[#0047a5]/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-[#25D366]/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── TOP BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-heading font-extrabold uppercase tracking-widest">
            <Gauge className="w-3.5 h-3.5" />
            Serviço Premium de Alta Pressão
          </span>
        </motion.div>

        {/* ── HEADING ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Hidrojateamento{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6eaaff] to-[#25D366]">
                de Alta Pressão
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#6eaaff] to-[#25D366] opacity-60" />
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            A solução mais eficiente para desobstruções severas: jato d'água ultrapotente que
            elimina qualquer bloqueio e higieniza toda a tubulação por dentro — sem quebrar nada.
          </p>
        </motion.div>

        {/* ── STATS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-14"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-none">
                {s.value}
                <span className="text-[#6eaaff] text-lg ml-0.5">{s.unit}</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-tight">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── MAIN CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT – visual block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#0047a5]/50 to-[#25D366]/20 blur-2xl" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#0047a5] to-[#002c71] border-4 border-[#6eaaff]/30 shadow-[0_0_60px_rgba(37,211,102,0.25)] flex items-center justify-center">
                <Gauge className="w-20 h-20 sm:w-28 sm:h-28 text-white drop-shadow-lg" strokeWidth={1.4} />
              </div>

              <div className="flex gap-3 flex-wrap justify-center">
                {['Alta Pressão', 'Limpa por Dentro', 'Zero Quebra'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 border border-white/15 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Animated water-bar decoration */}
              <div className="flex items-end gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-[#25D366] to-[#6eaaff]"
                    style={{ height: `${12 + i * 6}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT – benefits + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6eaaff]/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0047a5] to-[#003380] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/50 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-snug mb-1">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <a
                href={CONTACT_INFO.getWhatsappUrl(
                  'Olá! Preciso de hidrojateamento de alta pressão. Podem me passar mais informações?'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-heading font-bold text-sm shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Solicitar Hidrojateamento
              </a>
              <a
                href="#contato"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/15 text-white font-bold text-sm hover:bg-white/15 active:scale-[0.98] transition-all"
              >
                Ver todos os serviços
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM TRUST BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-white/10"
        >
          {[
            { icon: CheckCircle2, text: 'Orçamento gratuito no local', color: 'text-[#25D366]' },
            { icon: ShieldCheck, text: 'Garantia formal por escrito', color: 'text-[#6eaaff]' },
            { icon: Zap, text: 'Atendimento em até 30 min', color: 'text-[#ffdcbd]' },
          ].map(({ icon: Icon, text, color }) => (
            <div key={text} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
              <Icon className={`w-4 h-4 ${color} shrink-0`} />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
