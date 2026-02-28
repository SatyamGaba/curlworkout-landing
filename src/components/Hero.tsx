'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ─── Floating Workout Figure ─── */
function FloatingFigure({
  emoji,
  label,
  value,
  className,
  delay,
  duration,
}: {
  emoji: string;
  label: string;
  value: string;
  className: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={`absolute z-30 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-panel bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/30 transition-all duration-500 cursor-default backdrop-blur-md"
      >
        <span className="text-3xl drop-shadow-md">{emoji}</span>
        <div>
          <div className="text-sm font-bold text-white leading-tight mb-0.5">{value}</div>
          <div className="text-[11px] text-blue-200/70 uppercase tracking-wider font-semibold leading-tight">{label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroScrollSection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Hero Content Anim
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.4]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroBlur = useTransform(scrollYProgress, [0.15, 0.3], ['blur(0px)', 'blur(10px)']);

  // Mockup Anim
  const mockupOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const mockupScale = useTransform(scrollYProgress, [0.1, 0.4], [0.7, 1]);
  const mockupY = useTransform(scrollYProgress, [0.1, 0.4], ['60vh', '0vh']);
  const mockupRotateX = useTransform(scrollYProgress, [0.1, 0.4], [15, 0]);
  const mockupShadow = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ['0px 0px 0px rgba(59,130,246,0)', '0px 20px 100px rgba(59,130,246,0.25)']
  );

  // Floating elements parallax
  const floatYLeft = useTransform(scrollYProgress, [0, 0.4], [0, -300]);
  const floatYRight = useTransform(scrollYProgress, [0, 0.4], [0, -200]);
  const floatOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  // Bottom scroll hint
  const scrollHintY = useTransform(scrollYProgress, [0, 0.1], [0, 50]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center pt-10 perspective-[1000px]">

        {/* Animated Background Glowing Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-[100px] z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/10 to-transparent rounded-full blur-[100px] z-0"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-sky-500/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"
        />

        {/* Hero Text Layer */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            filter: heroBlur,
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
              className="inline-flex items-center gap-2.5 px-5 py-2 glass-panel border border-blue-500/20 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.1)] rounded-full text-blue-100 text-[11px] font-bold mb-8 tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              AI-Powered Fitness
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.0] tracking-tight mb-5"
            >
              <span className="text-white drop-shadow-sm">Meet </span>
              <span className="font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[140px] gradient-text drop-shadow-lg pr-4">Curl</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-50 mb-6 tracking-tight drop-shadow-sm"
            >
              Track your workouts with just a prompt
            </motion.h2>

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              AI-powered fitness tracking that understands you. Snap, speak, or type — Curl logs it all seamlessly.
            </motion.p>
          </div>
        </motion.div>

        {/* Floating Workout Figures (Parallax) */}
        <motion.div style={{ y: floatYLeft, opacity: floatOpacity }} className="absolute inset-0 z-30 pointer-events-none">
          <FloatingFigure emoji="🔥" label="cal burned" value="320" className="top-[15%] left-[8%] hidden xl:block" delay={0.8} duration={4} />
          <FloatingFigure emoji="⚡" label="workout" value="45 min" className="bottom-[35%] left-[10%] hidden lg:block" delay={1.2} duration={5} />
          <FloatingFigure emoji="🏋️" label="volume" value="12.5k kg" className="top-[45%] left-[2%] hidden 2xl:block" delay={1.6} duration={4.2} />
        </motion.div>
        <motion.div style={{ y: floatYRight, opacity: floatOpacity }} className="absolute inset-0 z-30 pointer-events-none">
          <FloatingFigure emoji="💪" label="strength" value="+12%" className="top-[25%] right-[8%] hidden xl:block" delay={1.0} duration={4.5} />
          <FloatingFigure emoji="🎯" label="weekly goal" value="75%" className="bottom-[30%] right-[10%] hidden lg:block" delay={1.4} duration={3.8} />
          <FloatingFigure emoji="📈" label="PR streak" value="6 weeks" className="top-[55%] right-[2%] hidden 2xl:block" delay={1.8} duration={4.8} />
        </motion.div>

        {/* Phone Mockup Layer */}
        <motion.div
          style={{
            opacity: mockupOpacity,
            scale: mockupScale,
            y: mockupY,
            rotateX: mockupRotateX,
            boxShadow: mockupShadow,
          }}
          className="absolute z-40 origin-bottom transform-gpu rounded-[3rem]"
        >
          {children}
        </motion.div>

        {/* Scroll indicator overlay */}
        <motion.div
          style={{ opacity: scrollHintOpacity, y: scrollHintY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50 pointer-events-none"
        >
          <span className="text-[10px] text-blue-300/80 tracking-[0.3em] font-medium uppercase drop-shadow-md">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1.5px] h-10 bg-gradient-to-b from-blue-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
