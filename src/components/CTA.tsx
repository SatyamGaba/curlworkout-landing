'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function CTA() {
  return (
    <section id="try" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            whileHover={{ borderColor: 'rgba(249,115,22,0.2)', boxShadow: '0 0 40px rgba(249,115,22,0.08)' }}
            className="glass-card p-8 md:p-14 text-center transition-all duration-700 relative overflow-hidden"
          >
            {/* Subtle animated gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] via-transparent to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-14 h-14 mx-auto bg-white rounded-2xl flex items-center justify-center mb-8 cursor-pointer shadow-lg shadow-white/10"
            >
              <svg className="w-7 h-7 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Try <span className="gradient-text">Curl</span> today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-base text-dark-400 mb-8 max-w-md mx-auto font-light"
            >
              Start your AI-powered fitness journey in seconds. No app store required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-center mb-6"
            >
              <motion.a
                href="https://app.curlworkoutapp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249,115,22,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-base relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get started free
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-xs text-dark-500"
            >
              No commitment. Cancel anytime.
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
