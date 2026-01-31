'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { VerifiedIcon, QuoteIcon } from './Icons';

const testimonials = [
  {
    name: 'Marcus Chen',
    handle: '@marcusfit',
    quote: 'Make a healthier choice and use the Curl app to track your workouts. Game changer! 💪',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Sarah Williams',
    handle: '@sarahlifts',
    quote: 'Looking good as usual and my form is on point with Curl 🔥',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'David Park',
    handle: '@davidgains',
    quote:
      "Track with Curl app, if you're not tracking your workouts while going for your goals then you're doing it all wrong.",
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Emma Johnson',
    handle: '@emmafitness',
    quote: 'Curl can literally track any exercise 🤯',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    name: 'Mike Rodriguez',
    handle: '@miketrains',
    quote:
      "If you're tracking your exercises correctly with Curl, you can optimize every workout and still crush your goals.",
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Alex Thompson',
    handle: '@alexfit',
    quote: "Curl is literally the best workout tracker. Fastest and most accurate I've ever used.",
    gradient: 'from-violet-500 to-purple-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Influencers() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-white mb-4">
            Used by your favorite
            <br />
            <span className="gradient-text">fitness influencers</span>{' '}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              👀
            </motion.span>
          </h2>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
              }}
              className="card card-hover"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex-shrink-0 flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white truncate">{testimonial.name}</span>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <VerifiedIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    </motion.div>
                  </div>
                  <p className="text-dark-400 text-sm">{testimonial.handle}</p>
                </div>

                {/* Quote icon */}
                <QuoteIcon className="w-8 h-8 text-primary-500/30 flex-shrink-0" />
              </div>

              <p className="mt-4 text-dark-200 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
