import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Mini notification label */}
      <motion.a
        href={CONTACT_INFO.getWhatsappUrl('Olá! Gostaria de um orçamento gratuito e sem compromisso para desentupimento em BH.')}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white shadow-lg border border-slate-200 text-xs font-heading font-bold text-[#002c71] hover:bg-slate-50 transition-all"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
        </span>
        <span>Plantão 24h WhatsApp</span>
      </motion.a>

      {/* Floating Action Button */}
      <motion.a
        href={CONTACT_INFO.getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.45)] hover:brightness-105 transition-all group"
        aria-label="Falar pelo WhatsApp 24h"
        title="Falar pelo WhatsApp 24h"
      >
        {/* Pulsing ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </motion.a>
    </div>
  );
};
