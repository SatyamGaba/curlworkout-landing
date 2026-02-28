'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { InstagramIcon, TiktokIcon, XIcon } from './Icons';

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
  { icon: XIcon, href: '#', label: 'X' },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-dark-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">Curl</span>
            </Link>
            <p className="text-sm text-dark-500 max-w-xs mb-4 font-light">
              The AI-powered workout tracker that helps you reach your fitness goals faster.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-dark-500 hover:text-white hover:border-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs text-dark-500 font-medium mb-3 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs text-dark-500 font-medium mb-3 tracking-wider uppercase">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <p className="text-dark-600 text-xs text-center">
            &copy; {currentYear} Curl Workout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
