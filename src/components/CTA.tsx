'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { BoltIcon } from './Icons';

export default function CTA() {
  return (
    <section id="try" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-dark-950 to-dark-950" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-dark-700/50 text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30"
            >
              <BoltIcon className="w-10 h-10 text-white" />
            </motion.div>

            {/* Text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Try <span className="gradient-text">Curl Workout</span> now
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-dark-300 mb-8 max-w-xl mx-auto"
            >
              Start your AI-powered fitness journey in seconds. No app store required.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center mb-8"
            >
              <motion.a
                href="https://app.curlworkoutapp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/30"
              >
                Try out now
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-dark-400"
            >
              By signing up, you agree to our{' '}
              <a href="#" className="text-primary-400 hover:underline hover:text-primary-300 transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-400 hover:underline hover:text-primary-300 transition-colors">
                Privacy Policy
              </a>
              . No commitment. Cancel anytime.
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
