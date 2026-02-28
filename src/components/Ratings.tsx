'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { StarIcon } from './Icons';

export default function Ratings() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.3, rotate: 15 }}
                className="cursor-pointer"
              >
                <StarIcon className="w-7 h-7 md:w-9 md:h-9 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]" />
              </motion.div>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Over <span className="gradient-text">100k</span> 5-star ratings
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3"
          >
            <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">4.8</div>
            <div className="text-left">
              <div className="text-xs text-dark-500">/5</div>
              <div className="text-xs text-dark-500">Rated by users</div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
