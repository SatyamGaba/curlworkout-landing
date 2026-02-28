'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/* ───────────── SVG Icons ───────────── */
const DumbbellIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5l11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l-4-4" /><path d="M6 10l-4-4" /><path d="M14 6l4-4" /><path d="M22 18l-4-4" /><path d="M10 6l-4-4" /></svg>
);
const FlameIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" /></svg>
);
const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const ScaleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M12 6v12" /><path d="M8 18h8" /><path d="M5 6v2a7 7 0 0 0 14 0V6" /></svg>
);
const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
);
const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);
const HomeIcon = ({ className, active }: { className?: string; active?: boolean }) => active ? (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
) : (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const ClipboardIcon = ({ className, active }: { className?: string; active?: boolean }) => active ? (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
) : (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
);
const UserIcon = ({ className, active }: { className?: string; active?: boolean }) => active ? (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
) : (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const SunIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
);
const MoonIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
);
const MonitorIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
);

/* ───────────── TYPES ───────────── */
type ViewState = { type: 'tabs'; tab: number } | { type: 'new_routine' } | { type: 'workout_detail'; title: string };
type ScreenProps = { navigate: (state: ViewState) => void; showToast: (msg: string) => void };

/* ───────────── SCREENS (Exact Match to Screenshots) ───────────── */
function HomeScreen({ navigate, showToast }: ScreenProps) {
    return (
        <div className="h-full bg-[#faf5f0] flex flex-col font-sans overflow-y-auto scrollbar-hide pb-28 text-[#0f0f0f]">
            <div className="flex items-center justify-between px-5 pt-8 pb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center"><span className="text-white text-[15px] font-bold">C</span></div>
                    <span className="font-semibold text-[17px]">CurlAI</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-full shadow-sm border border-black/5">
                    <span className="text-[14px]">🔥</span><span className="text-[13px] font-bold">1</span>
                </div>
            </div>
            <div className="flex justify-between px-5 pb-5">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <span className={`text-[12px] font-semibold ${i === 5 ? 'text-[#111]' : 'text-[#a1a1aa]'}`}>{d}</span>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium ${i === 5 ? 'bg-[#111] text-white shadow-md' : 'text-[#a1a1aa]'}`}>{[23, 24, 25, 26, 27, 28, 1][i]}</div>
                    </div>
                ))}
            </div>
            <div className="mx-5 bg-white rounded-[20px] p-5 mb-3.5 shadow-sm border border-black/[0.04]">
                <div className="flex items-center justify-between">
                    <div><div className="text-[36px] font-medium leading-none">12,450</div><div className="text-[13px] text-[#71717a] mt-2 font-medium">Volume this week</div></div>
                    <div className="w-16 h-16 rounded-full bg-[#f4f4f5]/50 flex items-center justify-center"><DumbbellIcon className="w-6 h-6 text-[#111] -rotate-45" /></div>
                </div>
            </div>
            <div className="flex gap-3 px-5 mb-5">
                {[{ v: '34', l: 'Sets done', icon: <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center"><CheckIcon className="w-4 h-4 text-red-500" /></div> }, { v: '412', l: 'Reps done', icon: <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center"><FlameIcon className="w-4 h-4 text-orange-500" /></div> }, { v: '4/4', l: 'Workouts', icon: <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center"><DumbbellIcon className="w-4 h-4 text-blue-500 -rotate-45" /></div> }].map((s, i) => (
                    <div key={i} className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-black/[0.04]">
                        <div className="text-[18px] font-medium mb-1">{s.v}</div>
                        <div className="text-[11px] text-[#71717a] font-medium mb-3 whitespace-nowrap">{s.l}</div>
                        <div>{s.icon}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-1.5 mb-5"><div className="w-1.5 h-1.5 rounded-full bg-[#e4e4e7]" /><div className="w-1.5 h-1.5 rounded-full bg-[#111]" /></div>
            <div className="px-5 flex-1">
                <div className="text-[17px] font-semibold mb-3">Recently logged</div>
                {[{ name: 'Apex Push: 30-Min Upper Body Blast', t: 'Sat, Feb 7 • 0:16', p: 'Push' }, { name: 'Heavy Metal Pull: Back & Bicep Power', t: 'Tue, Feb 3 • 0:16', p: 'Pull' }].map((w, i) => (
                    <div key={i} onClick={() => navigate({ type: 'workout_detail', title: w.name })} className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-black/[0.04] flex items-center justify-between cursor-pointer hover:bg-gray-50 active:scale-[0.98] transition-all">
                        <div className="flex-1 pr-3"><div className="text-[14px] font-semibold leading-tight mb-1">{w.name}</div><div className="text-[12px] text-[#71717a]">{w.t}</div></div>
                        <div className="flex items-center gap-2"><span className="bg-[#f4f4f5] text-[#52525b] text-[11px] font-semibold px-2.5 py-1 rounded-full">{w.p}</span><ChevronRightIcon className="w-4 h-4 text-[#d4d4d8]" /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RoutinesScreen({ navigate, showToast }: ScreenProps) {
    return (
        <div className="h-full bg-[#faf5f0] flex flex-col font-sans overflow-y-auto scrollbar-hide pb-28 text-[#0f0f0f]">
            <div className="px-5 pt-10 pb-4"><div className="text-[24px] font-bold mb-1">Routines</div><div className="text-[14px] text-[#71717a]">Manage your workouts</div></div>
            <div className="px-5 space-y-3.5">
                {[{ name: 'Apex Push: 30-Minute Upper Body Blast', tags: [['Push', 'bg-red-50 text-red-600'], ['Medium', 'bg-yellow-50 text-yellow-600']], ex: '5 exercises', min: '~30 min' }, { name: 'Heavy Metal Pull: Back & Bicep Power', tags: [['Pull', 'bg-blue-50 text-blue-600'], ['Heavy', 'bg-red-50 text-red-600']], ex: '3 exercises', min: '~30 min' }, { name: 'The Back & Bicep Builder', tags: [['Pull', 'bg-blue-50 text-blue-600'], ['Medium', 'bg-yellow-50 text-yellow-600']], ex: '5 exercises', min: '~30 min' }].map((r, i) => (
                    <div key={i} onClick={() => navigate({ type: 'workout_detail', title: r.name })} className="bg-white rounded-[20px] p-5 shadow-sm border border-black/[0.04] cursor-pointer hover:opacity-80 active:scale-[0.98] transition-all">
                        <div className="text-[15px] font-bold leading-tight mb-3">{r.name}</div>
                        <div className="flex gap-2 mb-4">{r.tags.map(([t, c], j) => <span key={j} className={`text-[11px] px-2.5 py-1 rounded-full font-semibold ${c}`}>{t}</span>)}</div>
                        <div className="flex justify-between text-[13px] text-[#71717a] font-medium"><span>{r.ex}</span><span>{r.min}</span></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function HistoryScreen({ navigate, showToast }: ScreenProps) {
    return (
        <div className="h-full bg-[#faf5f0] flex flex-col font-sans overflow-y-auto scrollbar-hide pb-28 text-[#0f0f0f]">
            <div className="px-5 pt-10 pb-4"><div className="text-[24px] font-bold mb-1">Workout History</div><div className="text-[14px] text-[#71717a]">Review your past workouts</div></div>
            <div className="px-5 pb-4"><div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-black/[0.08] rounded-lg"><span className="text-[14px] font-semibold">All Workouts</span><ChevronDownIcon className="w-4 h-4 text-[#71717a]" /></div></div>
            <div className="px-5 space-y-5">
                {[{ d: 'Sat, Feb 7, 2026', n: 'Apex Push: 30-Minute Upper Body Blast', t: 'Push', tc: 'bg-red-50 text-red-600', time: '8:47 PM', dur: '0:16', sets: '15/15 sets', vol: '3,918 kg' }, { d: 'Tue, Feb 3, 2026', n: 'Heavy Metal Pull: Back & Bicep Power', t: 'Pull', tc: 'bg-blue-50 text-blue-600', time: '2:58 PM', dur: '0:16', sets: '6/9 sets', vol: '2,430 kg' }, { d: 'Sun, Feb 1, 2026', n: 'The Back & Bicep Builder', t: 'Pull', tc: 'bg-blue-50 text-blue-600', time: '8:39 PM', dur: '0:38', sets: '13/15 sets', vol: '3,830 kg' }].map((item, i) => (
                    <div key={i}>
                        <div className="text-[13px] text-[#71717a] font-medium mb-2">{item.d}</div>
                        <div onClick={() => navigate({ type: 'workout_detail', title: item.n })} className="bg-white rounded-[20px] p-5 shadow-sm border border-black/[0.04] cursor-pointer hover:bg-gray-50 active:scale-[0.98] transition-all">
                            <div className="flex items-start justify-between mb-2"><div className="text-[15px] font-bold leading-tight pr-4">{item.n}</div><span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${item.tc}`}>{item.t}</span></div>
                            <div className="text-[13px] text-[#71717a] mb-3">{item.d} at {item.time}</div>
                            <div className="flex items-center gap-4 text-[13px] text-[#71717a]"><span className="flex items-center gap-1.5"><ClockIcon className="w-4 h-4" />{item.dur}</span><span className="flex items-center gap-1.5"><CheckCircleIcon className="w-4 h-4" />{item.sets}</span><span className="flex items-center gap-1.5"><ScaleIcon className="w-4 h-4" />{item.vol}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProfileScreen({ navigate, showToast }: ScreenProps) {
    return (
        <div className="h-full bg-[#faf5f0] flex flex-col font-sans overflow-y-auto scrollbar-hide pb-28 text-[#0f0f0f]">
            <div className="px-5 pt-10 pb-4"><div className="text-[24px] font-bold mb-1">Profile</div><div className="text-[14px] text-[#71717a]">Manage your profile and preferences</div></div>
            <div className="px-5 space-y-4">
                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-black/[0.04]">
                    <div className="text-[15px] font-bold mb-4">Profile Information</div>
                    <div className="flex items-center gap-4"><div className="w-[52px] h-[52px] rounded-full bg-[#5c993a] flex items-center justify-center text-white text-[22px]">V</div><div><div className="text-[15px] font-bold mb-0.5">Vansh Sood</div><div className="text-[13px] text-[#71717a]">f20221453@goa.bits-pilani.ac.in</div></div></div>
                </div>
                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-black/[0.04]">
                    <div className="text-[15px] font-bold mb-0.5">Appearance</div><div className="text-[13px] text-[#71717a] mb-4">Choose your preferred theme</div>
                    <div className="flex gap-2 p-1 bg-[#f4f4f5] rounded-xl">{[<SunIcon key="s" className="w-4 h-4" />, <MoonIcon key="m" className="w-4 h-4" />, <MonitorIcon key="d" className="w-4 h-4" />].map((icon, i) => <div key={i} className={`flex-1 py-2 flex items-center justify-center rounded-lg ${i === 0 ? 'bg-white shadow-sm' : 'text-[#71717a]'}`}>{icon}</div>)}</div>
                </div>
                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-black/[0.04]">
                    <div className="text-[15px] font-bold mb-4">Your Progress</div>
                    <div className="grid grid-cols-2 gap-3">{[{ v: '1', l: 'Current Streak' }, { v: '1', l: 'Longest Streak' }].map((s, i) => <div key={i} className="text-center bg-[#faf5f0] rounded-xl py-4"><div className="text-[24px] font-bold leading-none mb-1">{s.v}</div><div className="text-[12px] text-[#71717a]">{s.l}</div></div>)}</div>
                </div>
            </div>
        </div>
    );
}

const navItems = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Routines', icon: ClipboardIcon },
    { label: 'History', icon: ClockIcon },
    { label: 'Profile', icon: UserIcon },
];
const screens = [HomeScreen, RoutinesScreen, HistoryScreen, ProfileScreen];

/* ───────────── OVERLAY SCREENS ───────────── */
function CreateRoutineScreen({ navigate, showToast }: ScreenProps) {
    return (
        <div className="absolute inset-0 z-[60] bg-[#faf5f0] flex flex-col font-sans overflow-y-auto scrollbar-hide text-[#0f0f0f]">
            <div className="sticky top-0 pt-12 pb-4 px-5 bg-[#faf5f0] z-10 flex flex-col gap-1">
                <button onClick={() => navigate({ type: 'tabs', tab: 1 })} className="absolute top-12 left-5 -ml-2 p-2 rounded-full hover:bg-black/5 active:bg-black/10">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <div className="text-[24px] font-bold mt-8">Create New Routine</div>
                <div className="text-[14px] text-[#71717a]">Generate a personalized workout with AI</div>
            </div>

            <div className="px-5 pb-8 space-y-4">
                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-black/[0.04]">
                    <div className="text-[15px] font-bold mb-4">Workout Configuration</div>

                    <div className="space-y-4">
                        <div>
                            <div className="text-[13px] font-semibold text-[#3f3f46] mb-1.5">Workout Type</div>
                            <div className="relative">
                                <select className="w-full appearance-none bg-white border border-[#e4e4e7] rounded-xl px-4 py-2.5 text-[15px] outline-none">
                                    <option>Push</option>
                                    <option>Pull</option>
                                    <option>Legs</option>
                                    <option>Full Body</option>
                                </select>
                                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a] pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <div className="text-[13px] font-semibold text-[#3f3f46] mb-1.5">Intensity</div>
                            <div className="relative">
                                <select className="w-full appearance-none bg-white border border-[#e4e4e7] rounded-xl px-4 py-2.5 text-[15px] outline-none">
                                    <option>Medium</option>
                                    <option>High</option>
                                    <option>Low</option>
                                </select>
                                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a] pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <div className="text-[13px] font-semibold text-[#3f3f46] mb-1.5">Duration</div>
                            <div className="relative w-1/2">
                                <select className="w-full appearance-none bg-white border border-[#e4e4e7] rounded-xl px-4 py-2.5 text-[15px] outline-none">
                                    <option>1 hour</option>
                                    <option>45 min</option>
                                    <option>30 min</option>
                                </select>
                                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a] pointer-events-none" />
                            </div>
                        </div>

                        <button onClick={() => showToast('Get the app to try all features')} className="w-full bg-[#18181b] text-white font-semibold text-[15px] py-3.5 rounded-xl mt-2 active:scale-[0.98] transition-all">
                            Generate Routine with AI
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkoutDetailScreen({ navigate, title }: { navigate: (s: ViewState) => void, title: string }) {
    return (
        <div className="absolute inset-0 z-[60] bg-[#faf5f0] flex flex-col font-sans overflow-y-auto scrollbar-hide pb-10 text-[#0f0f0f]">
            <div className="sticky top-0 pt-12 pb-4 px-5 bg-[#faf5f0] z-10 flex flex-col gap-2">
                <button onClick={() => navigate({ type: 'tabs', tab: 0 })} className="flex items-center gap-1 text-[14px] text-[#52525b] hover:text-black">
                    <ChevronLeftIcon className="w-4 h-4" /> Back to History
                </button>
                <div className="text-[24px] font-bold leading-tight mt-2 pr-4">{title}</div>
                <div className="text-[14px] text-[#71717a]">Sat, Feb 7, 2026</div>
            </div>

            <div className="px-5 grid grid-cols-2 gap-3 mb-6">
                {[{ l: 'Duration', v: '0:16' }, { l: 'Sets Completed', v: '15/15' }, { l: 'Total Volume', v: '3,918', s: 'kg' }, { l: 'Completion', v: '100%' }].map((s, i) => (
                    <div key={i} className="bg-white rounded-[20px] p-4 text-center shadow-sm border border-black/[0.04]">
                        <div className="text-[12px] text-[#71717a] mb-1">{s.l}</div>
                        <div className="text-[22px] font-bold">{s.v} {s.s && <span className="text-[13px] font-normal">{s.s}</span>}</div>
                    </div>
                ))}
            </div>

            <div className="px-5 space-y-4">
                <div className="bg-white rounded-[24px] p-1 shadow-sm border border-black/[0.04] overflow-hidden">
                    <div className="px-4 py-3 border-b border-[#f4f4f5] flex justify-between items-center">
                        <div className="text-[16px] font-bold">Exercises (5)</div>
                        <span className="bg-red-50 text-red-600 text-[11px] px-2.5 py-1 rounded-full font-semibold">Push</span>
                    </div>

                    <div className="p-3 space-y-3">
                        {/* Ex 1 */}
                        <div className="bg-[#f0fdf4] rounded-xl p-3">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center"><CheckIcon className="w-3.5 h-3.5 text-white" /></div>
                                    <div className="text-[14px] font-bold">Incline Bench Press</div>
                                </div>
                                <div className="text-[12px] text-[#52525b]">3/3 sets</div>
                            </div>
                            <div className="space-y-1.5">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex justify-between items-center bg-[#dcfce7] px-3 py-1.5 rounded-lg text-[13px]">
                                        <div className="text-[#166534] opacity-70">Set {i}</div>
                                        <div className="font-semibold text-[#166534]">10 reps × 45 kg</div>
                                        <CheckIcon className="w-3.5 h-3.5 text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ex 2 */}
                        <div className="bg-[#f0fdf4] rounded-xl p-3">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center"><CheckIcon className="w-3.5 h-3.5 text-white" /></div>
                                    <div className="text-[14px] font-bold">Dumbbell Bench Press</div>
                                </div>
                                <div className="text-[12px] text-[#52525b]">3/3 sets</div>
                            </div>
                            <div className="space-y-1.5">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex justify-between items-center bg-[#dcfce7] px-3 py-1.5 rounded-lg text-[13px]">
                                        <div className="text-[#166534] opacity-70">Set {i}</div>
                                        <div className="font-semibold text-[#166534]">10 reps × 22.5 kg</div>
                                        <CheckIcon className="w-3.5 h-3.5 text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ───────────── Phone Shell ───────────── */
function PhoneMockup({ viewState, setViewState, showToast }: { viewState: ViewState; setViewState: (s: ViewState) => void; showToast: (msg: string) => void }) {
    const activeTab = viewState.type === 'tabs' ? viewState.tab : 0;
    const ActiveScreen = screens[activeTab];

    return (
        <div className="w-full h-full bg-[#111] rounded-[44px] p-[6px] shadow-2xl">
            <div className="relative w-full h-full bg-[#faf5f0] rounded-[38px] overflow-hidden flex flex-col font-sans">
                {/* Dynamic Island */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50"><div className="w-[100px] h-[26px] bg-[#111] rounded-b-[14px]" /></div>
                {/* Screen */}
                <div className="flex-1 relative">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="absolute inset-0">
                            <ActiveScreen navigate={setViewState} showToast={showToast} />
                        </motion.div>
                    </AnimatePresence>

                    {/* OVERLAYS */}
                    <AnimatePresence>
                        {viewState.type === 'new_routine' && (
                            <motion.div initial={{ y: '100%' }} animate={{ y: '0%' }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="absolute inset-0 z-50">
                                <CreateRoutineScreen navigate={setViewState} showToast={showToast} />
                            </motion.div>
                        )}
                        {viewState.type === 'workout_detail' && (
                            <motion.div initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="absolute inset-0 z-50">
                                <WorkoutDetailScreen navigate={setViewState} title={viewState.title} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* Bottom Nav */}
                <div className="absolute bottom-0 inset-x-0 z-40 px-4 pb-4 pt-2 bg-gradient-to-t from-[#faf5f0] via-[#faf5f0] to-transparent">
                    <div onClick={() => setViewState({ type: 'new_routine' })} className="absolute right-5 -top-4 w-12 h-12 bg-[#111] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <div className="bg-white w-full rounded-full h-[58px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/[0.04] flex items-center justify-between px-2">
                        {navItems.map((item, i) => {
                            const Icon = item.icon;
                            const isActive = viewState.type === 'tabs' && activeTab === i;
                            return (
                                <button key={i} onClick={() => setViewState({ type: 'tabs', tab: i })} className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-colors ${isActive ? 'bg-[#f4f4f5] text-[#111]' : 'text-[#a1a1aa] hover:text-[#555]'}`}>
                                    <Icon active={isActive} className="w-5 h-5 mb-0.5" />
                                    <span className="text-[9px] font-semibold">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ───────────── MAIN EXPORT: Hero + Scroll Experience ───────────── */
export default function HeroScrollExperience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [viewState, setViewState] = useState<ViewState>({ type: 'tabs', tab: 0 });
    const [toast, setToast] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleShowToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    /*
     * PHASE 1 (0 → 0.25): Hero "Meet Curl" text visible, phone hidden below viewport
     * PHASE 2 (0.25 → 0.55): Hero fades, phone RISES from bottom & rotates in 3D into CENTER
     * PHASE 3 (0.55 → 0.75): Phone slides RIGHT, left text slides IN
     * PHASE 4 (0.75 → 1): Everything settled, user can interact with mockup
     */

    // Hero text
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0.15, 0.3], [0, -60]);

    // Background glow intensity
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

    // Phone: starts way below, comes to center, then slides right
    const phoneOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
    const phoneYPercent = useTransform(scrollYProgress, [0.2, 0.5], [80, 0]); // percent of vh
    const phoneY = useTransform(phoneYPercent, (v) => `${v}vh`);
    const phoneRotX = useTransform(scrollYProgress, [0.2, 0.5], [25, 0]);
    const phoneRotY = useTransform(scrollYProgress, [0.2, 0.5], [-15, 0]);
    const phoneRotZ = useTransform(scrollYProgress, [0.2, 0.5], [8, 0]);

    // Scale up slightly on mobile so it's not too small
    const phoneScale = useTransform(scrollYProgress, [0.2, 0.5], [0.65, isMobile ? 0.85 : 0.75]);
    const phoneXPercent = useTransform(scrollYProgress, [0.55, 0.75], [0, isMobile ? 0 : 15]);
    const phoneX = useTransform(phoneXPercent, (v) => `${v}vw`);

    // Left panel (Description Text)
    const panelOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
    const panelX = useTransform(scrollYProgress, [0.6, 0.75], [isMobile ? 0 : -40, 0]);
    const panelY = useTransform(scrollYProgress, [0.6, 0.75], [isMobile ? 20 : 0, 0]);

    // Scroll hint
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <div ref={containerRef} className="relative bg-[#050505]" style={{ height: '350vh' }}>
            {/* Background Blend at bottom perfectly merging into #050505 background */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />

            {/* Global Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-white text-black font-semibold rounded-full shadow-2xl flex items-center gap-2 pointer-events-none"
                    >
                        <span className="text-xl">✨</span>
                        {toast}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: '1200px' }}>

                {/* Glow that intensifies as phone appears */}
                <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 z-[1] pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[120px]" />
                    <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
                </motion.div>

                {/* ═══ HERO TEXT ═══ */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full text-[#a1a1aa] text-xs font-semibold mb-8 uppercase tracking-widest bg-white/[0.02]"
                    >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                        AI-Powered Fitness
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-5"
                    >
                        <span className="text-white">Meet </span>
                        <span className="gradient-text font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[140px]" style={{ display: 'inline-block', paddingRight: '0.35em' }}>Curl</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl sm:text-2xl text-[#a1a1aa] max-w-2xl font-medium"
                    >
                        Track your workouts with just a prompt.
                    </motion.p>

                    {/* Scroll hint */}
                    <motion.div style={{ opacity: scrollHintOpacity }} className="absolute bottom-12 flex flex-col items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#71717a] font-semibold">Scroll</span>
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-[2px] h-8 bg-gradient-to-b from-[#71717a] to-transparent rounded-full" />
                    </motion.div>
                </motion.div>

                {/* ═══ 3D PHONE ═══ */}
                <motion.div
                    style={{
                        opacity: phoneOpacity,
                        y: phoneY,
                        rotateX: phoneRotX,
                        rotateY: phoneRotY,
                        rotateZ: phoneRotZ,
                        scale: phoneScale,
                        x: phoneX,
                    }}
                    className="absolute z-20 top-1/2 lg:top-[60%] left-1/2 w-[320px] h-[680px] -ml-[160px] -mt-[340px] origin-center lg:origin-[center_right] xl:origin-[center_top] flex items-center justify-center transform-gpu"
                >
                    <PhoneMockup viewState={viewState} setViewState={setViewState} showToast={handleShowToast} />
                </motion.div>

                {/* ═══ LEFT PANEL (description text) ═══ */}
                <motion.div
                    style={{ opacity: panelOpacity, x: panelX, y: panelY }}
                    className="absolute z-30 lg:z-10 bottom-0 left-0 right-0 lg:bottom-auto lg:top-[60%] lg:-translate-y-1/2 lg:left-[12%] xl:left-[18%] lg:w-[400px] lg:max-w-[40vw] text-center lg:text-left pt-32 pb-8 px-5 lg:p-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent lg:bg-none pointer-events-none lg:pointer-events-auto"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={viewState.type === 'tabs' ? viewState.tab : 0}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-4 lg:space-y-5 pointer-events-auto"
                        >
                            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white mx-auto lg:mx-0">
                                {(() => { const Icon = navItems[viewState.type === 'tabs' ? viewState.tab : 0].icon; return <Icon className="w-5 h-5" active />; })()}
                            </div>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                                {['Track workouts\nnaturally.', 'Your personalized\nroutines.', 'Every set,\nremembered.', 'Your fitness\nidentity.'][viewState.type === 'tabs' ? viewState.tab : 0].split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
                            </h2>
                            <p className="text-base md:text-lg font-light text-[#a1a1aa] leading-relaxed max-w-sm mx-auto lg:mx-0">
                                {['Snap a photo, speak, or type — Curl parses exactly what you did.', 'Build and crush templates for your goals with auto-tracked volume.', 'Every PR, every pump. Deep insights from your workout history.', 'Your streak, your theme, your workflow — fully customized.'][viewState.type === 'tabs' ? viewState.tab : 0]}
                            </p>
                            <div className="h-[2px] w-10 bg-blue-500 rounded-full mt-6 mx-auto lg:mx-0 hidden lg:block" />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
