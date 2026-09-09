import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  UtensilsCrossed,
  Bath,
  Layers,
  GitCommit,
  Waves,
  Building2,
  Gauge,
  MoonStar,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_LIST, CONTACT_INFO } from '../data/content';

export const ServicesSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  // Mapping icons dynamically to lucide
  const renderIcon = (id: string) => {
    switch (id) {
      case 'pias-ralos':
        return <UtensilsCrossed className="w-6 h-6 text-[#002c71]" />;
      case 'vasos-sanitarios':
        return <Bath className="w-6 h-6 text-[#002c71]" />;
      case 'caixas-gordura':
        return <Layers className="w-6 h-6 text-[#002c71]" />;
      case 'redes-esgoto':
        return <GitCommit className="w-6 h-6 text-[#002c71]" />;
      case 'caixas-dagua':
        return <Waves className="w-6 h-6 text-[#002c71]" />;
      case 'prumadas-prediais':
        return <Building2 className="w-6 h-6 text-[#002c71]" />;
      case 'hidrojateamento':
        return <Gauge className="w-6 h-6 text-[#002c71]" />;
      case 'plantao-noturno':
        return <MoonStar className="w-6 h-6 text-[#ffdcbd]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#002c71]" />;
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#faf8ff]" id="servicos">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and "Consultar Outro Serviço" Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1 rounded-full bg-[#dae2fd] text-[#002c71] text-xs font-heading font-extrabold uppercase tracking-wider">
              Soluções Técnicas Completas
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight mt-2.5">
              Nossos Serviços Especializados 24 Horas
            </h2>
            <p className="text-base text-[#49607e] max-w-2xl mt-2 font-normal">
              Atendimento residencial, comercial, industrial e condominial em toda Belo Horizonte com técnicos certificados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="shrink-0"
          >
            <a
              href={CONTACT_INFO.getWhatsappUrl('Olá! Gostaria de consultar um serviço específico da Desentupidora BIG.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#e2e7ff] text-[#002c71] hover:bg-[#dae2fd] font-heading font-bold text-sm transition-all shadow-xs"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Consultar Outro Serviço</span>
            </a>
          </motion.div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_LIST.map((service, index) => {
            const isNightShift = service.isEmergency;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 ${
                  isNightShift
                    ? 'bg-[#002c71] text-white shadow-xl hover:shadow-2xl border border-[#00419e]'
                    : 'bg-white text-[#131b2e] shadow-sm hover:shadow-md border border-slate-200/60'
                }`}
              >
                <div>
                  {/* Service Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isNightShift
                        ? 'bg-white/15 text-[#ffdcbd] backdrop-blur-sm'
                        : 'bg-[#eaedff] text-[#002c71]'
                    }`}
                  >
                    {renderIcon(service.id)}
                  </div>

                  <h3
                    className={`font-heading font-bold text-lg mb-2 ${
                      isNightShift ? 'text-white' : 'text-[#002c71]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isNightShift ? 'text-[#dae2ff]' : 'text-[#49607e]'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* WhatsApp Action Link */}
                <a
                  href={CONTACT_INFO.getWhatsappUrl(
                    `Olá! Preciso de atendimento para o serviço de ${service.title} em BH.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-between font-heading font-bold text-sm group pt-3 border-t ${
                    isNightShift
                      ? 'text-[#ffdcbd] border-white/10 hover:text-white'
                      : 'text-[#25D366] border-slate-100 hover:text-[#007028]'
                  }`}
                >
                  <span>{isNightShift ? 'Acionar Plantão 24h' : 'Pedir no WhatsApp'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
