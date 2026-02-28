'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ClockIcon, LinkIcon, TrendingUpIcon } from './Icons';

const benefits = [
  {
    icon: ClockIcon,
    title: 'Free up your time',
    description: 'Curl automatically tracks your exercises, sets, reps, and rest time. No need to manually log everything. Just workout and let AI do the rest.',
    hoverColor: 'hover:border-cyan-500/30 hover:shadow-cyan-500/10',
    hoverBg: 'group-hover:bg-cyan-500/20',
    hoverIcon: 'group-hover:text-cyan-400',
  },
  {
    icon: LinkIcon,
    title: 'Integrate with your ecosystem',
    description: 'Curl syncs with Apple Health, Google Fit, and your favorite fitness wearables. All your data in one place.',
    hoverColor: 'hover:border-purple-500/30 hover:shadow-purple-500/10',
    hoverBg: 'group-hover:bg-purple-500/20',
    hoverIcon: 'group-hover:text-purple-400',
  },
  {
    icon: TrendingUpIcon,
    title: 'Reach your goals effortlessly',
    description: 'Snap a photo with Curl, and our AI analyzes your form and tracks your progress. Smart recommendations help you hit PRs faster.',
    hoverColor: 'hover:border-orange-500/30 hover:shadow-orange-500/10',
    hoverBg: 'group-hover:bg-orange-500/20',
    hoverIcon: 'group-hover:text-orange-400',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] text-dark-500 tracking-[0.3em] uppercase font-medium mb-4 block">Advantages</span>
          <h2 className="section-title text-white mb-4">
            Why choose{' '}
            <span className="font-cursive text-4xl md:text-5xl lg:text-6xl gradient-text">Curl</span>?
          </h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 relative w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative glass-card p-6 lg:p-8 transition-all duration-500 cursor-pointer hover:shadow-lg ${benefit.hoverColor} flex-1 md:w-[280px] lg:w-[320px]`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${benefit.hoverBg} transition-all duration-500`}
                >
                  <benefit.icon className={`w-6 h-6 text-white/70 ${benefit.hoverIcon} transition-colors duration-500`} />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed font-light">{benefit.description}</p>
              </motion.div>

              {/* Arrow Connector */}
              {index < benefits.length - 1 && (
                <>
                  {/* Desktop Right Arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="hidden md:flex text-dark-500 flex-shrink-0"
                  >
                    <svg className="w-8 h-8 opacity-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                  {/* Mobile Down Arrow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="md:hidden text-dark-500 my-2 flex-shrink-0"
                  >
                    <svg className="w-6 h-6 opacity-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
