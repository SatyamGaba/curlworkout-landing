# Curl Workout Landing Page

A modern, animated landing page for Curl Workout - an AI-powered workout tracking app. Built with Next.js 14, TypeScript, React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, React 18
- **Beautiful UI**: Tailwind CSS with custom design system
- **Micro-animations**: Smooth animations powered by Framer Motion
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Performance Optimized**: Optimized fonts, images, and code splitting
- **SEO Ready**: Meta tags, Open Graph, and Twitter cards

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) via Next.js Font Optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/
│   ├── AnimatedSection.tsx  # Reusable scroll animation wrapper
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features grid
│   ├── WhyChoose.tsx        # Benefits section
│   ├── DarkMode.tsx         # Dark mode feature showcase
│   ├── Influencers.tsx      # Influencer testimonials
│   ├── Testimonials.tsx     # User reviews
│   ├── Ratings.tsx          # App store ratings
│   ├── CTA.tsx              # Call to action section
│   ├── Footer.tsx           # Footer
│   ├── PhoneMockup.tsx      # Animated phone mockup
│   └── Icons.tsx            # SVG icons
├── hooks/
│   └── useScrollAnimation.ts  # Custom intersection observer hook
└── lib/
    └── utils.ts             # Utility functions (cn)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint


## Deployment

The project is ready to deploy on Vercel:

```bash
npm run build
```

Or deploy directly via:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
