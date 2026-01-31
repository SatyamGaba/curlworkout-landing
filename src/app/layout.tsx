import type { Metadata } from 'next';
import { Outfit, Caveat } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Curl Workout - AI-Powered Workout Tracking',
  description:
    'Track your workouts with just a picture. Curl Workout uses AI to analyze your exercises and help you reach your fitness goals.',
  keywords: ['workout', 'fitness', 'AI', 'tracking', 'exercise', 'gym'],
  authors: [{ name: 'Curl Workout' }],
  openGraph: {
    title: 'Curl Workout - AI-Powered Workout Tracking',
    description:
      'Track your workouts with just a picture. Curl Workout uses AI to analyze your exercises and help you reach your fitness goals.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curl Workout - AI-Powered Workout Tracking',
    description:
      'Track your workouts with just a picture. Curl Workout uses AI to analyze your exercises and help you reach your fitness goals.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${caveat.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
