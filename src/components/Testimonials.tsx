'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { StarIcon } from './Icons';

const reviews = [
  {
    username: 'gym_life_mike',
    content:
      "im ngl I've gained 15 lbs of muscle with it 💪 doesn't need to be exact it's pretty decent",
    avatar: 'M',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    username: 'fitnessjoe_2024',
    content: "IVE BEEN HITTING PRs FOR 6 MONTHS STRAIGHT W THIS APP FR 👏👏👏",
    avatar: 'F',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    username: '2026fitjourney',
    content:
      "I love this app it helps me keep track of my workouts without overthinking everything and gives me a visual of my progress plus it's so aesthetic 💓",
    avatar: '2',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    username: 'matthias_lifts',
    content: "I started to use it yesterday and im already giving it 5⭐️",
    avatar: 'L',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    username: 'workoutqueen',
    content: 'For people that want to level up their fitness game @curlworkout is the app for you 🙌🔥',
    avatar: 'W',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    username: 'gainz_central',
    content:
      "The AI form checker is insane. Caught issues with my deadlift I didn't even know I had 🔥",
    avatar: 'G',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-white mb-4">
            Thousands of users
            <br />
            <span className="gradient-text">talk about us</span>
          </h2>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.username}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.1)',
              }}
              className="card card-hover"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {review.avatar}
                </motion.div>
                <div>
                  <div className="font-medium text-white">{review.username}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <StarIcon className="w-3 h-3 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-dark-200 leading-relaxed">&ldquo;{review.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
