import React from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Navigation,
  BadgeDollarSign,
  Wrench,
  FileCheck2,
  UserCheck,
} from 'lucide-react';
import { DIFFERENTIATORS } from '../data/content';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case '24h':
        return <Clock className="w-6 h-6 text-[#002c71]" />;
      case '30min':
        return <Navigation className="w-6 h-6 text-[#002c71]" />;
      case 'gratis':
        return <BadgeDollarSign className="w-6 h-6 text-[#002c71]" />;
      case 'sem-quebra':
        return <Wrench className="w-6 h-6 text-[#002c71]" />;
      case 'garantia':
        return <FileCheck2 className="w-6 h-6 text-[#002c71]" />;
      case 'uniformizados':
        return <UserCheck className="w-6 h-6 text-[#002c71]" />;
      default:
        return <Clock className="w-6 h-6 text-[#002c71]" />;
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#f2f3ff]" id="diferenciais">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="px-3.5 py-1 rounded-full bg-[#dae2fd] text-[#002c71] text-xs font-heading font-extrabold uppercase tracking-wider">
            Compromisso e Confiança
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight mt-3">
            Por que a Desentupidora BIG é a Escolha Mais Confiável de BH?
          </h2>
          <p className="text-base sm:text-lg text-[#49607e] mt-3 font-normal leading-relaxed">
            Transparência técnica, respeito ao seu patrimônio e equipamentos de padrão internacional para solucionar tudo na primeira visita.
          </p>
        </motion.div>

        {/* 6 Key Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-xs hover:shadow-md border border-slate-200/60 transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#eaedff] text-[#002c71] flex items-center justify-center">
                {getIcon(item.id)}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#002c71] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#49607e] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
