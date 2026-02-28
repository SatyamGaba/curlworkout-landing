'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { CheckIcon } from './Icons';

const features = ['Auto-switch', 'OLED optimized', 'Battery saver'];

export default function DarkMode() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection className="text-center lg:text-left">
            <span className="text-[11px] text-dark-500 tracking-[0.3em] uppercase font-medium mb-4 block">New Feature</span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Dark Mode
              <br />
              <span className="text-dark-300">for a sleek training</span>
              <br />
              <span className="text-dark-300">experience</span>
            </h2>

            <p className="text-base text-dark-400 mb-8 max-w-lg font-light leading-relaxed">
              Easy on the eyes during those early morning or late night gym sessions. New features
              and improvements every week.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-dark-300"
                >
                  <CheckIcon className="w-4 h-4 text-white/50" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Phone */}
          <AnimatedSection className="flex justify-center lg:justify-end" delay={0.2} direction="right">
            <div className="relative">
              <div className="absolute -inset-12 bg-gradient-radial from-white/[0.02] to-transparent rounded-full" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-56 sm:w-64 md:w-72 aspect-[9/19] bg-gradient-to-b from-dark-600 to-dark-800 rounded-[2rem] p-[2px] shadow-2xl shadow-black/50"
              >
                <div className="w-full h-full bg-black rounded-[1.9rem] overflow-hidden">
                  <div className="h-7 bg-black flex items-center justify-center">
                    <div className="w-16 h-4 bg-dark-900 rounded-full" />
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[8px] text-dark-500">Good evening</div>
                        <div className="text-[10px] font-semibold text-white">Ready to workout?</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-dark-700" />
                    </div>
                    <div className="bg-dark-900 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[8px] text-dark-400">This Week</span>
                        <span className="text-[8px] text-white/50">+15%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {[{ v: '5', l: 'Workouts' }, { v: '4.2h', l: 'Time' }, { v: '1.8k', l: 'Calories' }].map((s, i) => (
                          <div key={i}>
                            <div className="text-sm font-bold text-white">{s.v}</div>
                            <div className="text-[7px] text-dark-500">{s.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-xl p-2.5 text-center">
                        <div className="text-[8px] text-dark-900 font-medium">▶ Start</div>
                      </div>
                      <div className="bg-dark-900 rounded-xl p-2.5 text-center">
                        <div className="text-[8px] text-dark-400 font-medium">📷 Scan</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[7px] text-dark-500 mb-1.5">Recent</div>
                      <div className="flex items-center gap-2 bg-dark-900 rounded-xl p-2">
                        <div className="w-7 h-7 rounded-lg bg-dark-700 flex items-center justify-center text-[9px]">🏋️</div>
                        <div className="flex-1">
                          <div className="text-[9px] text-white">Push Day</div>
                          <div className="text-[7px] text-dark-500">Yesterday</div>
                        </div>
                        <span className="text-[7px] text-dark-400">Done</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
