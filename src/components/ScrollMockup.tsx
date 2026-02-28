'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

/* ─── App Screens ─── */

function HomeScreen() {
    return (
        <div className="h-full bg-[#fafafa] text-dark-900 flex flex-col text-left">
            <div className="flex items-center justify-center pt-2 pb-1">
                <div className="w-16 h-4 bg-dark-900 rounded-full" />
            </div>
            <div className="flex items-center justify-between px-3 pt-2 pb-2">
                <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 bg-dark-900 rounded-full flex items-center justify-center">
                        <span className="text-white text-[7px] font-bold">C</span>
                    </div>
                    <span className="font-bold text-[10px]">CurlAI</span>
                </div>
                <div className="flex items-center gap-0.5">
                    <span className="text-[9px]">🔥</span>
                    <span className="text-[8px] font-bold">1</span>
                </div>
            </div>
            <div className="flex justify-between px-3 pb-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <span className={`text-[6px] ${i === 4 ? 'font-bold' : 'text-dark-400'}`}>{d}</span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[7px] ${i === 4 ? 'bg-dark-900 text-white' : 'text-dark-500'}`}>
                            {[23, 24, 25, 26, 27, 28, 1][i]}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mx-3 bg-white rounded-xl p-2.5 mb-2 shadow-sm">
                <div className="text-xl font-bold leading-none">12,500</div>
                <div className="text-[7px] text-dark-400 mt-0.5">Volume this week</div>
            </div>
            <div className="flex gap-1.5 px-3 mb-2">
                {[{ v: '15', l: 'Sets done' }, { v: '180', l: 'Reps done' }, { v: '2/4', l: 'Workouts' }].map((s, i) => (
                    <div key={i} className="flex-1 bg-white rounded-lg p-1.5 shadow-sm">
                        <div className="text-[10px] font-bold">{s.v}</div>
                        <div className="text-[6px] text-dark-400">{s.l}</div>
                    </div>
                ))}
            </div>
            <div className="px-3 flex-1">
                <div className="text-[8px] font-semibold mb-1">Recently logged</div>
                {['Apex Push: 30-Min Upper Body', 'Heavy Metal Pull: Back & Bicep'].map((n, i) => (
                    <div key={i} className="bg-white rounded-lg p-2 mb-1 shadow-sm">
                        <div className="text-[8px] font-semibold truncate">{n}</div>
                        <div className="text-[6px] text-dark-400">Feb {7 - i * 4}, 2026</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-around py-1.5 border-t border-dark-200 mt-auto">
                {['🏠', '📋', '🕐', '👤'].map((icon, i) => (
                    <span key={i} className={`text-[9px] ${i === 0 ? '' : 'opacity-40'}`}>{icon}</span>
                ))}
            </div>
        </div>
    );
}

function RoutinesScreen() {
    return (
        <div className="h-full bg-[#fafafa] text-dark-900 flex flex-col text-left">
            <div className="flex items-center justify-center pt-2 pb-1">
                <div className="w-16 h-4 bg-dark-900 rounded-full" />
            </div>
            <div className="px-3 pt-2 pb-1">
                <div className="text-sm font-bold">Routines</div>
                <div className="text-[7px] text-dark-400">Manage your workouts</div>
            </div>
            <div className="px-3 pt-2 flex-1 space-y-2">
                {[
                    { name: 'Apex Push: 30-Min Upper Body Blast', tags: [['Push', 'bg-red-100 text-red-600'], ['Medium', 'bg-yellow-100 text-yellow-700']], ex: 5 },
                    { name: 'Heavy Metal Pull: Back & Bicep Power', tags: [['Pull', 'bg-purple-100 text-purple-600'], ['Heavy', 'bg-red-100 text-red-600']], ex: 3 },
                    { name: 'The Back & Bicep Builder', tags: [['Pull', 'bg-purple-100 text-purple-600'], ['Medium', 'bg-yellow-100 text-yellow-700']], ex: 5 },
                ].map((r, i) => (
                    <div key={i} className="bg-white rounded-xl p-2.5 shadow-sm">
                        <div className="text-[9px] font-bold mb-1">{r.name}</div>
                        <div className="flex gap-1 mb-1.5">
                            {r.tags.map(([t, c], j) => (
                                <span key={j} className={`text-[6px] px-1.5 py-0.5 rounded-full font-medium ${c}`}>{t}</span>
                            ))}
                        </div>
                        <div className="flex justify-between text-[7px] text-dark-400">
                            <span>{r.ex} exercises</span>
                            <span>~30 min</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-around py-1.5 border-t border-dark-200 mt-auto">
                {['🏠', '📋', '🕐', '👤'].map((icon, i) => (
                    <span key={i} className={`text-[9px] ${i === 1 ? '' : 'opacity-40'}`}>{icon}</span>
                ))}
            </div>
        </div>
    );
}

function HistoryScreen() {
    return (
        <div className="h-full bg-[#fafafa] text-dark-900 flex flex-col text-left">
            <div className="flex items-center justify-center pt-2 pb-1">
                <div className="w-16 h-4 bg-dark-900 rounded-full" />
            </div>
            <div className="px-3 pt-2 pb-1">
                <div className="text-sm font-bold">Workout History</div>
                <div className="text-[7px] text-dark-400">Review your past workouts</div>
            </div>
            <div className="px-3 pt-1 flex-1 space-y-2 overflow-hidden">
                {[
                    { date: 'Sat, Feb 7', name: 'Apex Push: Upper Body Blast', tag: 'Push', tc: 'bg-red-100 text-red-600', stats: '15/15 sets • 3,918 kg' },
                    { date: 'Tue, Feb 3', name: 'Heavy Metal Pull: Back & Bicep', tag: 'Pull', tc: 'bg-purple-100 text-purple-600', stats: '6/9 sets • 2,430 kg' },
                    { date: 'Sun, Feb 1', name: 'The Back & Bicep Builder', tag: 'Pull', tc: 'bg-purple-100 text-purple-600', stats: '13/15 sets • 3,830 kg' },
                ].map((item, i) => (
                    <div key={i}>
                        <div className="text-[6px] text-dark-400 mb-0.5 font-medium">{item.date}</div>
                        <div className="bg-white rounded-xl p-2.5 shadow-sm">
                            <div className="flex items-start justify-between mb-0.5">
                                <div className="text-[8px] font-bold flex-1 pr-2">{item.name}</div>
                                <span className={`text-[6px] px-1.5 py-0.5 rounded-full font-medium ${item.tc}`}>{item.tag}</span>
                            </div>
                            <div className="text-[6px] text-dark-400">{item.stats}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-around py-1.5 border-t border-dark-200 mt-auto">
                {['🏠', '📋', '🕐', '👤'].map((icon, i) => (
                    <span key={i} className={`text-[9px] ${i === 2 ? '' : 'opacity-40'}`}>{icon}</span>
                ))}
            </div>
        </div>
    );
}

/* ─── Section Content ─── */
const scrollSections = [
    {
        label: '01',
        title: 'Track your workouts\nwith just a prompt',
        description: 'Snap a photo, analyze your form, or log your exercises and get instant feedback and progress insights. Curl understands natural language — just tell it what you did.',
    },
    {
        label: '02',
        title: 'Organize routines\nbuilt for you',
        description: 'Create, manage, and follow personalized workout routines. Tag exercises by type and intensity. Your entire training plan, always in your pocket.',
    },
    {
        label: '03',
        title: 'Every rep recorded.\nEvery PR celebrated.',
        description: 'Full workout history with detailed stats — sets completed, total volume, and session duration. Watch your progress unfold over weeks and months.',
    },
];

const screens = [HomeScreen, RoutinesScreen, HistoryScreen];

/* ─── Main Component ─── */
export default function ScrollMockup() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const idx = Math.min(Math.floor(latest * 3), 2);
        if (idx !== activeIndex) setActiveIndex(idx);
    });

    const phoneOpacity = useTransform(scrollYProgress, [0, 0.02, 0.95, 1], [0, 1, 1, 0]);
    const phoneScale = useTransform(scrollYProgress, [0, 0.04, 0.95, 1], [0.9, 1, 1, 0.9]);

    return (
        <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
            {/* Sticky layer */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Very subtle bg */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full" />

                    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text column */}
                        <div className="flex-1 relative min-h-[300px] flex items-center order-2 lg:order-1">
                            {scrollSections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        y: activeIndex === index ? 0 : 30,
                                    }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                                    className="absolute inset-0 flex flex-col justify-center text-center lg:text-left"
                                    style={{ pointerEvents: activeIndex === index ? 'auto' : 'none' }}
                                >
                                    {/* Section number */}
                                    <motion.span
                                        className="text-[11px] text-dark-500 tracking-[0.3em] uppercase font-medium mb-4 block"
                                    >
                                        {section.label}
                                    </motion.span>

                                    {/* Title */}
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6 whitespace-pre-line">
                                        {section.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-base lg:text-lg text-dark-400 leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                                        {section.description}
                                    </p>

                                    {/* Decorative line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                                        className="h-[1px] bg-gradient-to-r from-white/20 to-transparent mt-8 origin-left max-w-[200px] mx-auto lg:mx-0"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Phone */}
                        <motion.div
                            style={{ opacity: phoneOpacity, scale: phoneScale }}
                            className="relative flex-shrink-0 order-1 lg:order-2"
                        >
                            {/* Soft glow behind phone */}
                            <div className="absolute -inset-10 bg-gradient-radial from-white/[0.04] to-transparent rounded-full blur-2xl" />

                            {/* Phone frame */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative w-48 sm:w-56 md:w-64 aspect-[9/19.5] bg-gradient-to-b from-dark-600 to-dark-800 rounded-[2rem] p-[2px] shadow-2xl shadow-black/50"
                            >
                                <div className="w-full h-full bg-[#fafafa] rounded-[1.9rem] overflow-hidden relative">
                                    {screens.map((Screen, index) => (
                                        <motion.div
                                            key={index}
                                            animate={{
                                                opacity: activeIndex === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                            className="absolute inset-0"
                                        >
                                            <Screen />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: activeIndex === i ? 24 : 8,
                                    backgroundColor: activeIndex === i ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.15)',
                                }}
                                className="w-[2px] rounded-full"
                                transition={{ duration: 0.4 }}
                            />
                        ))}
                    </div>

                    {/* Section counter */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-dark-500 tracking-widest">
                        <motion.span key={activeIndex} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="tabular-nums">
                            0{activeIndex + 1}
                        </motion.span>
                        <span className="mx-2 text-dark-700">/</span>
                        <span>03</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
