'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { StarIcon } from './Icons';

const reviews = [
  { username: 'gym_life_mike', content: "im ngl I've gained 15 lbs of muscle with it 💪 doesn't need to be exact it's pretty decent", avatar: 'M', avatarColor: 'from-blue-400 to-indigo-500', hoverColor: 'hover:border-blue-500/30 hover:shadow-blue-500/10' },
  { username: 'fitnessjoe_2024', content: "IVE BEEN HITTING PRs FOR 6 MONTHS STRAIGHT W THIS APP FR 👏👏👏", avatar: 'F', avatarColor: 'from-orange-400 to-red-500', hoverColor: 'hover:border-orange-500/30 hover:shadow-orange-500/10' },
  { username: '2026fitjourney', content: "I love this app it helps me keep track of my workouts without overthinking everything 💓", avatar: '2', avatarColor: 'from-pink-400 to-rose-500', hoverColor: 'hover:border-pink-500/30 hover:shadow-pink-500/10' },
  { username: 'matthias_lifts', content: "I started to use it yesterday and im already giving it 5⭐️", avatar: 'L', avatarColor: 'from-emerald-400 to-teal-500', hoverColor: 'hover:border-emerald-500/30 hover:shadow-emerald-500/10' },
  { username: 'workoutqueen', content: 'For people that want to level up their fitness game @curlworkout is the app for you 🙌🔥', avatar: 'W', avatarColor: 'from-violet-400 to-purple-500', hoverColor: 'hover:border-violet-500/30 hover:shadow-violet-500/10' },
  { username: 'gainz_central', content: "The AI form checker is insane. Caught issues with my deadlift I didn't even know I had 🔥", avatar: 'G', avatarColor: 'from-amber-400 to-orange-500', hoverColor: 'hover:border-amber-500/30 hover:shadow-amber-500/10' },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] text-dark-500 tracking-[0.3em] uppercase font-medium mb-4 block">Reviews</span>
          <h2 className="section-title text-white mb-4">
            Thousands of users
            <br />
            <span className="text-dark-300">talk about us</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.username}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card p-5 transition-all duration-500 cursor-pointer hover:shadow-lg ${review.hoverColor}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                >
                  {review.avatar}
                </motion.div>
                <div>
                  <div className="text-sm font-medium text-white">{review.username}</div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-2.5 h-2.5 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-dark-300 leading-relaxed">&ldquo;{review.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
