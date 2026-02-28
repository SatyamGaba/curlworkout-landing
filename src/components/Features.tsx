'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import {
  CameraIcon,
  ChartBarIcon,
  BoltIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowPathIcon,
} from './Icons';

const features = [
  {
    icon: CameraIcon,
    title: 'Snap & Track',
    description: 'Take a photo of your workout and let AI instantly log your exercises, sets, and reps.',
    hoverColor: 'hover:border-cyan-500/30 hover:shadow-cyan-500/10',
    hoverBg: 'group-hover:bg-cyan-500/20',
    hoverIcon: 'group-hover:text-cyan-400',
    glowColor: 'cyan',
  },
  {
    icon: ChartBarIcon,
    title: 'Progress Analytics',
    description: 'Detailed charts and insights to visualize your strength gains, volume, and consistency.',
    hoverColor: 'hover:border-green-500/30 hover:shadow-green-500/10',
    hoverBg: 'group-hover:bg-green-500/20',
    hoverIcon: 'group-hover:text-green-400',
    glowColor: 'green',
  },
  {
    icon: BoltIcon,
    title: 'AI Form Analysis',
    description: 'Get real-time feedback on your exercise form to prevent injuries and maximize gains.',
    hoverColor: 'hover:border-orange-500/30 hover:shadow-orange-500/10',
    hoverBg: 'group-hover:bg-orange-500/20',
    hoverIcon: 'group-hover:text-orange-400',
    glowColor: 'orange',
  },
  {
    icon: ClockIcon,
    title: 'Workout Timer',
    description: 'Built-in rest timers and workout duration tracking to optimize your training sessions.',
    hoverColor: 'hover:border-violet-500/30 hover:shadow-violet-500/10',
    hoverBg: 'group-hover:bg-violet-500/20',
    hoverIcon: 'group-hover:text-violet-400',
    glowColor: 'violet',
  },
  {
    icon: UserGroupIcon,
    title: 'Community',
    description: 'Connect with friends, share achievements, and compete on leaderboards.',
    hoverColor: 'hover:border-pink-500/30 hover:shadow-pink-500/10',
    hoverBg: 'group-hover:bg-pink-500/20',
    hoverIcon: 'group-hover:text-pink-400',
    glowColor: 'pink',
  },
  {
    icon: ArrowPathIcon,
    title: 'Apple Watch & Wearables',
    description: 'Sync with your smartwatch for seamless workout tracking and heart rate monitoring.',
    hoverColor: 'hover:border-amber-500/30 hover:shadow-amber-500/10',
    hoverBg: 'group-hover:bg-amber-500/20',
    hoverIcon: 'group-hover:text-amber-400',
    glowColor: 'amber',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] text-dark-500 tracking-[0.3em] uppercase font-medium mb-4 block">Features</span>
          <h2 className="section-title text-white mb-4">
            What does{' '}
            <span className="font-cursive text-4xl md:text-5xl lg:text-6xl gradient-text">Curl</span>{' '}
            include?
          </h2>
          <p className="section-subtitle mx-auto font-light">
            Everything you need to track, analyze, and improve your fitness journey.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group glass-card p-6 transition-all duration-500 cursor-pointer hover:shadow-lg ${feature.hoverColor}`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 ${feature.hoverBg} transition-all duration-500`}
              >
                <feature.icon className={`w-5 h-5 text-white/70 ${feature.hoverIcon} transition-colors duration-500`} />
              </motion.div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-dark-400 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
