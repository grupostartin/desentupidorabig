import React from 'react';
import { motion } from 'motion/react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      value: '+15.000',
      label: 'Desentupimentos Realizados',
      description: 'Casas, apartamentos, empresas e condomínios em toda a Grande BH.',
    },
    {
      value: '20 a 30 min',
      label: 'Tempo Médio de Chegada',
      description: 'Deslocamento ágil para atender chamados em toda a capital e região.',
    },
    {
      value: 'R$ 0,00',
      label: 'Taxa de Visita e Avaliação',
      description: 'Avaliação feita no local sem cobrança de deslocamento ou taxa de visita.',
    },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-14">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="rounded-[32px] bg-gradient-to-r from-[#00255e] via-[#00388d] to-[#00255e] text-white p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden border border-white/10"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index !== stats.length - 1 ? 'md:border-r md:border-white/15' : ''
              } pb-6 md:pb-0`}
            >
              <span className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-2">
                {item.value}
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-100 mb-1">
                {item.label}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 max-w-[260px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
