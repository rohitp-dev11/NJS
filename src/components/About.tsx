"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                {/* Left Content */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                            The Storyteller
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Directing the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                digital experience.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            My journey started with a camera and a vision. Over the past year, I&apos;ve specialized in high-impact video editing, completing <strong className="text-white">50+ projects</strong> for diverse clients using <strong className="text-white">Premiere Pro</strong> and <strong className="text-white">DaVinci Resolve</strong>.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            While my heart beats for cinematic storytelling, my mind is wired for logic. Currently pursuing a <strong className="text-white">BCA</strong>, I&apos;m an aspiring software engineer who uses code to build the stages where these visual stories live.
                        </p>

                        <a href="#projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group">
                            View My Showreel
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </motion.div>
                </div>

                {/* Right Visuals - Bento Grid Style */}
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[500px]">
                    {/* Tall Left Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl relative overflow-hidden group neon-card"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">Cinematic Perspective</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        {/* Top Right Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex-1 rounded-2xl relative overflow-hidden neon-card"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">Precision Editing</span>
                            </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex-1 rounded-2xl relative overflow-hidden neon-card"
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">Film Production Detail</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
