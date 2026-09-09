import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { ASSETS, CONTACT_INFO, METRO_CITIES } from '../data/content';
import { LazyImage } from './LazyImage';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#00173d] text-slate-300 border-t border-slate-800 pt-14 pb-10">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-full shadow-sm">
                <img
                  src={ASSETS.logo}
                  alt="Desentupidora BIG"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                  DESENTUPIDORA BIG
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Plantão 24h Belo Horizonte e Região
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Serviço profissional de desentupimento em Belo Horizonte e região. Atendimento rápido 24 horas por dia, com avaliação e orçamento gratuito no local.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#25D366] font-semibold mt-1">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Garantia do Serviço e Atendimento Transparente</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos de Clientes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Plantão 24h Emergencial</a></li>
            </ul>
          </div>

          {/* Direct Contacts & Central (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Canais de Atendimento
            </h4>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-[#ffdcbd] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#ffdcbd] shrink-0" />
                <span className="font-heading font-bold">{CONTACT_INFO.phone}</span>
              </a>

              <a
                href={CONTACT_INFO.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-[#25D366]" />
                <span>WhatsApp 24h Imediato</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Belo Horizonte - MG e Região</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Segunda a Domingo: 24 horas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cities List */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400">
          <p className="mb-2 font-semibold text-slate-300">
            Regiões com atendimento rápido:
          </p>
          <p className="leading-relaxed">
            Belo Horizonte (Centro, Savassi, Buritis, Pampulha, Castelo, Sion, Barreiro, Gutierrez, Floresta e demais bairros) e Região Metropolitana ({METRO_CITIES.join(', ')}).
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Desentupidora BIG. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Orçamento 100% Grátis</span>
            <span>•</span>
            <span>Atendimento Rápido</span>
            <span>•</span>
            <span>Plantão 24 Horas BH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
