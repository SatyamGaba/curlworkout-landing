'use client';

import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

const stats = [
  { value: '5M+', label: 'Users' },
  { value: '4.9', label: 'Rating' },
  { value: '100K+', label: 'Reviews' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Orange Radial Gradient Background */}
      <div className="absolute inset-0 bg-dark-950" />
      
      {/* Main orange radial glow from center-top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-gradient-radial from-orange-600/40 via-orange-900/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Secondary orange glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary-500/30 via-orange-800/10 to-transparent rounded-full blur-3xl"
      />
      
      {/* Side orange accents */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-orange-700/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-orange-700/20 rounded-full blur-3xl" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <div className="flex -space-x-2">
                {['from-primary-400 to-primary-600', 'from-pink-400 to-pink-600', 'from-amber-400 to-amber-600'].map(
                  (gradient, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: -20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} border-2 border-dark-950`}
                    />
                  )
                )}
              </div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-dark-300"
              >
                Loved by <strong className="text-white">5M users</strong> with{' '}
                <span className="text-yellow-400">&#9733;</span> 4.9 rating
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Meet{' '}
              <span className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary-400 via-orange-400 to-primary-500 bg-clip-text text-transparent inline-block pr-4">
                Curl
              </span>
              <br />
              Track your workouts
              <br />
              <span className="text-primary-400">with just a picture</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Meet Curl, the AI-powered app for easy workout tracking. Snap a photo, analyze your
              form, or log your exercises and get instant feedback and progress insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </motion.a>
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full sm:w-auto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end perspective-1000"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
