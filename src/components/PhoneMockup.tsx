'use client';

import { motion } from 'framer-motion';

/** Delay before floating cards appear (after phone mockup content finishes animating) */
const FLOATING_CARDS_START_DELAY = 1.4;

const floatingCards = [
  {
    icon: '🔥',
    value: '320',
    label: 'cal burned',
    position: 'top-[6%] -left-12 sm:-left-16 lg:-left-20',
    rotation: -2,
    stagger: 0,
    accent: 'primary',
  },
  {
    icon: '💪',
    value: '+12%',
    label: 'strength',
    position: 'top-[38%] -right-12 sm:-right-16 lg:-right-20',
    rotation: 2,
    stagger: 0.15,
    accent: 'green',
  },
  {
    icon: '⚡',
    value: '45 min',
    label: 'workout',
    position: 'bottom-[38%] -left-12 sm:-left-16 lg:-left-20',
    rotation: 2,
    stagger: 0.3,
    accent: 'primary',
  },
  {
    icon: '🎯',
    value: '75%',
    label: 'weekly goal',
    position: 'bottom-[6%] -right-12 sm:-right-16 lg:-right-20',
    rotation: -2,
    stagger: 0.45,
    accent: 'primary',
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center min-h-[520px] sm:min-h-[580px]">
      {/* Floating Cards – balanced around phone, one design system */}
      {floatingCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: FLOATING_CARDS_START_DELAY + card.stagger,
            duration: 1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{ rotate: card.rotation }}
          className={`absolute ${card.position} z-20 hidden sm:flex`}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.5 + index * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.25,
            }}
            whileHover={{ scale: 1.06, y: -4 }}
            className={`
              flex items-center gap-2.5 pl-2 pr-3.5 py-2.5 min-w-0
              bg-dark-800/80 backdrop-blur-xl rounded-2xl
              border border-dark-700/50
              shadow-lg shadow-black/20
              hover:border-primary-500/40 hover:shadow-primary-500/15
              transition-all duration-300
              ${card.accent === 'green' ? 'hover:border-green-500/40 hover:shadow-green-500/15' : ''}
            `}
          >
            <span
              className={`
                flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-lg
                ${card.accent === 'green' ? 'bg-green-500/25 text-green-400' : 'bg-primary-500/25 text-primary-400'}
              `}
            >
              {card.icon}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-white leading-tight">{card.value}</span>
              <span className="text-[11px] text-dark-400 leading-tight">{card.label}</span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-orange-600/30 rounded-[3rem] blur-3xl scale-110 pointer-events-none"
      />

      {/* Phone mockup */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[9/19] bg-gradient-to-br from-dark-800 to-dark-900 rounded-[2.5rem] p-2 border border-dark-700 shadow-2xl"
      >
        <div className="w-full h-full bg-dark-950 rounded-[2rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-dark-900 flex items-center justify-center">
            <div className="w-20 h-5 bg-dark-800 rounded-full" />
          </div>

          {/* App content mockup */}
          <div className="pt-12 px-4 pb-4 h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="w-24 h-4 bg-dark-800 rounded" />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-primary-500/20 rounded-full"
              />
            </motion.div>

            {/* Main content area */}
            <div className="flex-1 space-y-4">
              {/* Workout card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-primary-500/20 to-orange-600/10 rounded-2xl p-4 border border-primary-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-600 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <div className="w-20 h-3 bg-white/80 rounded mb-1" />
                    <div className="w-16 h-2 bg-dark-400 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg font-bold text-white"
                    >
                      45
                    </motion.div>
                    <div className="text-xs text-dark-400">mins</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="text-lg font-bold text-primary-400"
                    >
                      320
                    </motion.div>
                    <div className="text-xs text-dark-400">cal</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-lg font-bold text-white"
                    >
                      12
                    </motion.div>
                    <div className="text-xs text-dark-400">sets</div>
                  </div>
                </div>
              </motion.div>

              {/* Progress bars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-dark-300">Weekly Goal</span>
                    <span className="text-primary-400">75%</span>
                  </div>
                  <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-500 to-orange-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-dark-300">Strength</span>
                    <span className="text-green-400">+12%</span>
                  </div>
                  <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Exercise list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-2"
              >
                {[
                  { color: 'bg-blue-500/20', delay: 1.3 },
                  { color: 'bg-primary-500/20', delay: 1.4 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-2 bg-dark-800/50 rounded-xl"
                  >
                    <div className={`w-10 h-10 ${item.color} rounded-lg`} />
                    <div className="flex-1">
                      <div className="w-24 h-2 bg-dark-600 rounded mb-1" />
                      <div className="w-16 h-2 bg-dark-700 rounded" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: item.delay + 0.3, duration: 0.5 }}
                      className="text-xs text-green-400"
                    >
                      &#10003;
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom nav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-around pt-4 border-t border-dark-800"
            >
              {[true, false, false, false].map((active, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className={`w-6 h-6 rounded-full ${active ? 'bg-primary-500' : 'bg-dark-700'}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
