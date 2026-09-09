import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_LIST, CONTACT_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#f2f3ff]" id="faq">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="px-3.5 py-1 rounded-full bg-[#dae2fd] text-[#002c71] text-xs font-heading font-extrabold uppercase tracking-wider">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight mt-3">
            Perguntas Frequentes sobre Nossos Serviços
          </h2>
          <p className="text-base text-[#49607e] mt-2.5">
            Tudo o que você precisa saber antes de solicitar um desentupidor em BH.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-3.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-white border border-slate-200/70 overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#002c71] hover:text-[#00419e] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#faf8ff] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#e2e7ff]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[#002c71]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-[#49607e] leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#e2e7ff] text-[#002c71] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-[#002c71]">
                Ainda ficou com alguma dúvida sobre seu caso?
              </p>
              <p className="text-xs text-[#49607e]">
                Nossos atendentes técnicos estão online 24h prontos para orientar você.
              </p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.getWhatsappUrl('Olá! Tenho uma dúvida sobre desentupimento da Desentupidora BIG.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-heading font-bold text-xs sm:text-sm hover:brightness-105 shadow-sm transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
