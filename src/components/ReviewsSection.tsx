import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS_LIST } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full pt-10 sm:pt-14 pb-12 bg-white" id="depoimentos">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header matching inspiration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#0047a5] mb-2 inline-block">
            Depoimentos
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#002c71] tracking-tight">
            Avaliações de Clientes em BH
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2.5">
            Veja como resolvemos emergências hidráulicas com rapidez, preço justo e sem transtornos.
          </p>
        </motion.div>

        {/* 3 Review Cards Grid matching inspiration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_LIST.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#FFB800] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>

                {/* Bold Review / Service Title */}
                <h3 className="font-heading font-bold text-base text-[#002c71] mb-2.5 leading-snug">
                  {review.title || 'Atendimento Impecável'}
                </h3>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author and Location */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#002c71]">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {review.location}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#25D366] bg-green-50 px-2 py-0.5 rounded-full">
                  Verificado
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

