'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { VerifiedIcon } from './Icons';

const testimonials = [
  {
    name: 'Marcus Chen',
    handle: '@marcusfit',
    quote: 'Make a healthier choice and use the Curl app to track your workouts. Game changer! 💪',
    avatarColor: 'from-orange-400 to-red-500',
  },
  {
    name: 'Sarah Williams',
    handle: '@sarahlifts',
    quote: 'Looking good as usual and my form is on point with Curl 🔥',
    avatarColor: 'from-pink-400 to-rose-500',
  },
  {
    name: 'David Park',
    handle: '@davidgains',
    quote: "Track with Curl app, if you're not tracking your workouts while going for your goals then you're doing it all wrong.",
    avatarColor: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Emma Johnson',
    handle: '@emmafitness',
    quote: 'Curl can literally track any exercise 🤯',
    avatarColor: 'from-violet-400 to-purple-500',
  },
  {
    name: 'Mike Rodriguez',
    handle: '@miketrains',
    quote: "If you're tracking your exercises correctly with Curl, you can optimize every workout and still crush your goals.",
    avatarColor: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Alex Thompson',
    handle: '@alexfit',
    quote: "Curl is literally the best workout tracker. Fastest and most accurate I've ever used.",
    avatarColor: 'from-amber-400 to-orange-500',
  },
];

const hoverColors = [
  { border: 'hover:border-orange-500/30', shadow: 'hover:shadow-orange-500/10', bg: 'hover:bg-orange-500/[0.04]' },
  { border: 'hover:border-pink-500/30', shadow: 'hover:shadow-pink-500/10', bg: 'hover:bg-pink-500/[0.04]' },
  { border: 'hover:border-cyan-500/30', shadow: 'hover:shadow-cyan-500/10', bg: 'hover:bg-cyan-500/[0.04]' },
  { border: 'hover:border-violet-500/30', shadow: 'hover:shadow-violet-500/10', bg: 'hover:bg-violet-500/[0.04]' },
  { border: 'hover:border-emerald-500/30', shadow: 'hover:shadow-emerald-500/10', bg: 'hover:bg-emerald-500/[0.04]' },
  { border: 'hover:border-amber-500/30', shadow: 'hover:shadow-amber-500/10', bg: 'hover:bg-amber-500/[0.04]' },
];

export default function Influencers() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] text-dark-500 tracking-[0.3em] uppercase font-medium mb-4 block">Social Proof</span>
          <h2 className="section-title text-white mb-4">
            Used by your favorite
            <br />
            <span className="text-dark-300">fitness influencers</span>
          </h2>
        </AnimatedSection>

        <div className="relative flex overflow-hidden group py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 min-w-max pr-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => {
              const hoverTheme = hoverColors[index % hoverColors.length];
              return (
                <motion.div
                  key={`${t.name}-${index}`}
                  whileHover={{ y: -6 }}
                  className={`glass-card p-5 w-[350px] flex-shrink-0 transition-all duration-500 cursor-pointer ${hoverTheme.border} ${hoverTheme.shadow} ${hoverTheme.bg} hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold shadow-lg transition-transform duration-300 hover:scale-110`}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-white">{t.name}</span>
                        <VerifiedIcon className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <p className="text-xs text-dark-500">{t.handle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-dark-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
