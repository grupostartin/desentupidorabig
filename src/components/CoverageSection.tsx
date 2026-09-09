import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation2, CheckCircle2, MessageCircle, Search } from 'lucide-react';
import { BH_REGIONS, METRO_CITIES, CONTACT_INFO, ASSETS } from '../data/content';
import { LazyImage } from './LazyImage';

export const CoverageSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRegions = BH_REGIONS.filter(region =>
    region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCities = METRO_CITIES.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="atendimento">
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
            Cobertura Total
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight mt-3">
            Plantão Emergencial 24h em Toda BH e Região Metropolitana
          </h2>
          <p className="text-base sm:text-lg text-[#49607e] mt-2.5">
            Bairros com viaturas em ronda contínua para garantir chegada em até 30 minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Regions List & Search Filter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Quick Search */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Buscar bairro ou cidade em BH e Grande BH..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#faf8ff] border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#002c71]/20 focus:border-[#002c71] transition-all text-slate-800"
              />
            </div>

            {/* BH Regions Group */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#49607e] mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#002c71]" />
                Regiões de Belo Horizonte
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredRegions.length > 0 ? (
                  filteredRegions.map(region => (
                    <div
                      key={region}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#f2f3ff] border border-slate-200/60 hover:bg-[#eaedff] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#007028] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#002c71]">{region}</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#007028] bg-white px-2 py-0.5 rounded-md shadow-2xs">
                        ~25 min
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-xs text-slate-500 italic py-2">
                    Nenhuma região encontrada com esse termo. Mas atendemos toda BH!
                  </div>
                )}
              </div>
            </div>

            {/* Metropolitan Area Group */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#49607e] mb-3 flex items-center gap-1.5">
                <Navigation2 className="w-4 h-4 text-[#002c71]" />
                Cidades da Região Metropolitana
              </h3>
              <div className="flex flex-wrap gap-2">
                {filteredCities.map(city => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Neighborhood WhatsApp check action */}
            <div className="p-4 rounded-xl bg-[#f0f9ff] border border-[#bae6fd] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-[#0369a1]">
                <strong className="block text-sm font-heading font-bold text-[#0c4a6e] mb-0.5">
                  Não achou seu bairro na lista?
                </strong>
                Nossa frota atende 100% de BH e cidades vizinhas. Consulte seu endereço!
              </div>
              <a
                href={CONTACT_INFO.getWhatsappUrl('Olá! Quero saber se vocês atendem no meu bairro agora.')}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#002c71] hover:bg-[#00419e] text-white font-heading font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar no WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Live Radar Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 aspect-4/3 sm:aspect-16/11">
              {/* Map background image with lazy loading */}
              <LazyImage
                src={ASSETS.mapBg}
                alt="Mapa de cobertura em Belo Horizonte"
                className="w-full h-full object-cover opacity-80"
                wrapperClassName="w-full h-full"
              />

              {/* Pulsing GPS Pins overlayed */}
              <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white shadow-md" />
                </span>
                <span className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 text-white text-[10px] font-bold shadow">
                  Pampulha
                </span>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-80" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-rose-600 border-2 border-white shadow-lg" />
                </span>
                <span className="mt-1 px-2.5 py-0.5 rounded bg-[#002c71] text-white text-[11px] font-heading font-extrabold shadow-lg">
                  Centro / Savassi
                </span>
              </div>

              <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white shadow-md" />
                </span>
                <span className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 text-white text-[10px] font-bold shadow">
                  Buritis / Oeste
                </span>
              </div>

              {/* Bottom Live Dispatch Status Bar */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-xs font-heading font-bold">
                    6 equipes volantes em trânsito
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#ffdcbd]">
                  Tempo médio: ~25 min
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
