'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { CheckIcon } from './Icons';

const features = ['Auto-switch', 'OLED optimized', 'Battery saver'];

export default function DarkMode() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements – primary/orange theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-950 to-orange-900/20" />
      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-primary-400 rounded-full"
              />
              New feature
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dark Mode
              <br />
              for a sleek training
              <br />
              experience!{' '}
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                🌙
              </motion.span>
              <span>✨</span>
            </h2>

            <p className="text-lg text-dark-300 mb-8 max-w-lg">
              Easy on the eyes during those early morning or late night gym sessions. New features
              and improvements every week.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-dark-300"
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <CheckIcon className="w-5 h-5 text-green-400" />
                  </motion.div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Dark Mode Phone Mockup */}
          <AnimatedSection className="flex justify-center lg:justify-end" delay={0.2} direction="right">
            <div className="relative">
              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-orange-500/30 rounded-[3rem] blur-3xl scale-110"
              />

              {/* Phone */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-64 sm:w-72 md:w-80 aspect-[9/19] bg-gradient-to-br from-dark-800 to-dark-900 rounded-[2.5rem] p-2 border border-dark-700 shadow-2xl perspective-1000"
              >
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-black flex items-center justify-center">
                    <div className="w-20 h-5 bg-dark-900 rounded-full" />
                  </div>

                  {/* Dark mode content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs text-dark-500">Good evening</div>
                        <div className="text-sm font-semibold text-white">Ready to workout?</div>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"
                      />
                    </motion.div>

                    {/* Stats card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="bg-dark-900 rounded-2xl p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-dark-400">This Week</span>
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-xs text-primary-400"
                        >
                          +15%
                        </motion.span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-white">5</div>
                          <div className="text-xs text-dark-500">Workouts</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary-400">4.2h</div>
                          <div className="text-xs text-dark-500">Time</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">1.8k</div>
                          <div className="text-xs text-dark-500">Calories</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Quick actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="grid grid-cols-2 gap-2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-3 text-center cursor-pointer"
                      >
                        <svg
                          className="w-6 h-6 mx-auto text-white mb-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="text-xs text-white font-medium">Start</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-dark-900 rounded-xl p-3 text-center cursor-pointer"
                      >
                        <svg
                          className="w-6 h-6 mx-auto text-dark-400 mb-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                        </svg>
                        <div className="text-xs text-dark-400 font-medium">Scan</div>
                      </motion.div>
                    </motion.div>

                    {/* Recent */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="space-y-2"
                    >
                      <div className="text-xs text-dark-500 mb-2">Recent</div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 bg-dark-900 rounded-xl p-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <span className="text-sm">🏋️</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">Push Day</div>
                          <div className="text-xs text-dark-500">Yesterday</div>
                        </div>
                        <span className="text-xs text-green-400">Done</span>
                      </motion.div>
                    </motion.div>
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
