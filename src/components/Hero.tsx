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

/** Deterministic "random" from seed - same result on server and client to avoid hydration mismatch */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

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
              left: `${seededRandom(i * 3) * 100}%`,
              top: `${seededRandom(i * 3 + 1) * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + seededRandom(i * 3 + 2) * 2,
              repeat: Infinity,
              delay: seededRandom(i * 3 + 3) * 2,
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
                Created by experts with<strong className="text-white"> over 10 years of experience</strong>
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              With{' '}
              <span className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary-400 via-orange-400 to-primary-500 bg-clip-text text-transparent inline-block pr-4">
                Curl
              </span>
              <br />
              Plan, Execute and Track 
              <br />
              your
              <span className="text-primary-400"> gym workouts</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              With Curl, plan with AI, track and execute your workout at gym. Chat with AI, to analyze, modify your
              workout, or log your exercises and get instant feedback and progress insights.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="https://app.curlworkoutapp.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto"
              >
                Try out now
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
