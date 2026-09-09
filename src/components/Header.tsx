import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Menu, X, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, CONTACT_INFO } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#002c71]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-white px-3.5 py-1.5 rounded-full shadow-md flex items-center justify-center transition-transform group-hover:scale-[1.02]">
              <img
                src={ASSETS.logo}
                alt="Logo Desentupidora BIG"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </a>

          {/* 24h Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="text-xs font-semibold text-white tracking-wide">
              Plantão 24h em BH e Região
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
          <a href="#" className="hover:text-white transition-colors">Início</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-white transition-colors">Plantão 24h</a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          {/* Phone Pill */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white hover:bg-white/25 text-xs font-bold transition-all"
            title="Ligue agora"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{CONTACT_INFO.phone}</span>
          </a>

          {/* Primary Pill Button matching inspiration */}
          <a
            href={CONTACT_INFO.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#002c71] hover:bg-slate-100 font-heading font-extrabold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
            <span className="whitespace-nowrap">WhatsApp 24h</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#00255e] border-b border-white/10 px-6 py-5 flex flex-col gap-3.5 shadow-2xl text-white"
          >
            <div className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/10 text-xs font-bold text-[#dae2ff] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              Plantão 24 Horas em toda a Grande BH
            </div>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-sm font-semibold text-white hover:text-[#25D366]"
            >
              Início
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-sm font-semibold text-white hover:text-[#25D366]"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-sm font-semibold text-white hover:text-[#25D366]"
            >
              Plantão 24h BH
            </a>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#25D366]" />
                Ligar Agora: {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chamar no WhatsApp 24h
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

