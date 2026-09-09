import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, MapPin, Clock, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, BH_REGIONS, SERVICES_LIST } from '../data/content';

interface QuickDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickDispatchModal: React.FC<QuickDispatchModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].title);
  const [selectedRegion, setSelectedRegion] = useState(BH_REGIONS[0]);
  const [customBairro, setCustomBairro] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'alta'>('alta');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bairroFinal = customBairro.trim() ? customBairro.trim() : selectedRegion;
    const msg = `Olá, Desentupidora BIG! Gostaria de agendar/solicitar atendimento urgente:
- Serviço: ${selectedService}
- Região/Bairro: ${bairroFinal}
- Urgência: ${urgency === 'alta' ? 'IMEDIATA (Plantão 24h)' : 'Hoje'}
- Orçamento: Confirmo que a visita é 100% gratuita.`;

    window.open(CONTACT_INFO.getWhatsappUrl(msg), '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header */}
          <div className="bg-[#002c71] text-white p-5 sm:p-6 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-heading font-extrabold uppercase tracking-wider mb-1">
                <Zap className="w-3 h-3 text-[#ffdcbd]" />
                Simulador de Chamado Rápido
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Prontidão BH 24 Horas
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col gap-4 text-slate-800">
            {/* Service selector */}
            <div>
              <label className="block text-xs font-heading font-bold text-[#002c71] uppercase tracking-wider mb-1.5">
                Qual o problema?
              </label>
              <select
                value={selectedService}
                onChange={e => setSelectedService(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#faf8ff] border border-slate-200 text-sm focus:ring-2 focus:ring-[#002c71]/20 focus:border-[#002c71] outline-hidden text-slate-800 font-medium"
              >
                {SERVICES_LIST.map(s => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Region selector */}
            <div>
              <label className="block text-xs font-heading font-bold text-[#002c71] uppercase tracking-wider mb-1.5">
                Sua região ou bairro em BH:
              </label>
              <select
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#faf8ff] border border-slate-200 text-sm focus:ring-2 focus:ring-[#002c71]/20 focus:border-[#002c71] outline-hidden text-slate-800 font-medium mb-2"
              >
                {BH_REGIONS.map(r => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
                <option value="Contagem">Contagem / Região Metropolitana</option>
                <option value="Betim">Betim / Região Metropolitana</option>
                <option value="Nova Lima">Nova Lima / Alphaville</option>
                <option value="Outra Cidade">Outro Município</option>
              </select>

              <input
                type="text"
                placeholder="Ou digite o nome do seu bairro específico..."
                value={customBairro}
                onChange={e => setCustomBairro(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#faf8ff] border border-slate-200 text-xs focus:ring-2 focus:ring-[#002c71]/20 focus:border-[#002c71] outline-hidden text-slate-700"
              />
            </div>

            {/* Live Estimation Info Box */}
            <div className="p-3.5 rounded-xl bg-[#f2f3ff] border border-slate-200/80 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#002c71]" /> Previsão de chegada:
                </span>
                <span className="font-heading font-bold text-[#002c71]">20 a 35 minutos</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" /> Taxa de visita técnica:
                </span>
                <span className="font-heading font-extrabold text-[#25D366]">R$ 0,00 (Gratuita)</span>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-heading font-bold text-sm sm:text-base hover:brightness-105 shadow-md active:scale-98 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Acionar Técnico no WhatsApp Agora</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-center text-xs text-slate-500 hover:text-slate-700 font-medium transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
