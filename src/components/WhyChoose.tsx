'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ClockIcon, LinkIcon, TrendingUpIcon } from './Icons';

const benefits = [
  {
    icon: ClockIcon,
    title: 'Free up your time',
    description:
      'Curl automatically tracks your exercises, sets, reps, and rest time. No need to manually log everything. Just workout and let AI do the rest.',
    gradient: 'from-primary-500 to-orange-600',
  },
  {
    icon: LinkIcon,
    title: 'Integrate with your fitness ecosystem',
    description:
      'Curl syncs with Apple Health, Google Fit, and your favorite fitness wearables. All your data in one place.',
    gradient: 'from-amber-500 to-primary-600',
  },
  {
    icon: TrendingUpIcon,
    title: 'Reach your goals effortlessly',
    description:
      'Snap a photo with Curl, and our AI analyzes your form and tracks your progress. Smart recommendations help you hit PRs faster.',
    gradient: 'from-primary-500 to-red-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-white mb-4">
            Why choose <span className="font-cursive text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-400 via-orange-400 to-primary-500 bg-clip-text text-transparent inline-block pr-4">Curl</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Curl is the most advanced AI workout tracker on the market.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-dark-800/30 backdrop-blur-sm rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}
                />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 shadow-lg`}
                >
                  <benefit.icon className="w-10 h-10" />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="relative text-dark-300 leading-relaxed">{benefit.description}</p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
