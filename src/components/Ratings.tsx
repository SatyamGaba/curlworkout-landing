'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { StarIcon } from './Icons';

export default function Ratings() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-primary-950/20 to-dark-950" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Laurel and stars */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Left laurel */}
            <motion.svg
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 text-primary-500/50"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M20 8c-4 8-6 16-6 24 0 6 1 12 4 18-6-4-10-12-10-20 0-10 5-18 12-22z" />
              <path d="M16 16c-3 6-4 12-4 18 0 4 1 8 3 12-4-3-7-9-7-14 0-7 3-13 8-16z" />
              <path d="M14 26c-2 4-3 8-3 12 0 3 1 6 2 8-3-2-5-6-5-10 0-5 2-9 6-10z" />
            </motion.svg>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <StarIcon className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg" />
                </motion.div>
              ))}
            </div>

            {/* Right laurel */}
            <motion.svg
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 text-primary-500/50 transform scale-x-[-1]"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M20 8c-4 8-6 16-6 24 0 6 1 12 4 18-6-4-10-12-10-20 0-10 5-18 12-22z" />
              <path d="M16 16c-3 6-4 12-4 18 0 4 1 8 3 12-4-3-7-9-7-14 0-7 3-13 8-16z" />
              <path d="M14 26c-2 4-3 8-3 12 0 3 1 6 2 8-3-2-5-6-5-10 0-5 2-9 6-10z" />
            </motion.svg>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            Over <span className="gradient-text">100k</span> 5-star ratings
          </motion.h2>

          {/* User rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center"
              >
                <StarIcon className="w-7 h-7 text-yellow-400" />
              </motion.div>
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-white"
                >
                  4.8/5
                </motion.div>
                <div className="text-sm text-dark-400">Rated by users</div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
