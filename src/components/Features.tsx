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
    description:
      'Take a photo of your workout and let AI instantly log your exercises, sets, and reps.',
  },
  {
    icon: ChartBarIcon,
    title: 'Progress Analytics',
    description:
      'Detailed charts and insights to visualize your strength gains, volume, and consistency.',
  },
  {
    icon: BoltIcon,
    title: 'AI Form Analysis',
    description:
      'Get real-time feedback on your exercise form to prevent injuries and maximize gains.',
  },
  {
    icon: ClockIcon,
    title: 'Workout Timer',
    description:
      'Built-in rest timers and workout duration tracking to optimize your training sessions.',
  },
  {
    icon: UserGroupIcon,
    title: 'Community',
    description: 'Connect with friends, share achievements, and compete on leaderboards.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Apple Watch & Wearables',
    description:
      'Sync with your smartwatch for seamless workout tracking and heart rate monitoring.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-white mb-4">
            What does <span className="font-cursive text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-400 via-orange-400 to-primary-500 bg-clip-text text-transparent inline-block pr-4">Curl</span> include?
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to track, analyze, and improve your fitness journey.
          </p>
        </AnimatedSection>

        {/* Features Grid with Center Phone */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card card-hover text-center lg:text-right"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-400 mb-4 lg:ml-auto"
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-dark-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Phone */}
          <AnimatedSection className="hidden lg:flex justify-center" delay={0.2}>
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-primary-500/20 rounded-[3rem] blur-3xl scale-110"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-72 aspect-[9/19] bg-gradient-to-br from-dark-800 to-dark-900 rounded-[2.5rem] p-2 border border-dark-700"
              >
                <div className="w-full h-full bg-dark-950 rounded-[2rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30"
                    >
                      <BoltIcon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="text-lg font-bold text-white mb-1">Curl Workout</div>
                    <div className="text-sm text-dark-400">AI-Powered Fitness</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            {features.slice(3, 6).map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: -10 }}
                className="card card-hover text-center lg:text-left"
              >
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-400 mb-4"
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-dark-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
