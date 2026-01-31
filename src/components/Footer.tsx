'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BoltIcon, InstagramIcon, TiktokIcon, XIcon } from './Icons';

const currentYear = new Date().getFullYear();

const footerLinks = {
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' },
  ],
  company: [
    { name: 'Contact', href: '#' },
    { name: 'About', href: '#' },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TiktokIcon, href: '#', label: 'TikTok' },
  { icon: XIcon, href: '#', label: 'X (Twitter)' },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-12 border-t border-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20"
              >
                <BoltIcon className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                Curl Workout
              </span>
            </Link>
            <p className="text-dark-400 max-w-xs mb-4">
              The AI-powered workout tracker that helps you reach your fitness goals faster.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-dark-800 hover:bg-dark-700 rounded-lg flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-dark-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-dark-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-dark-800"
        >
          <p className="text-dark-500 text-sm text-center">
            &copy; Copyright {currentYear}, All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
