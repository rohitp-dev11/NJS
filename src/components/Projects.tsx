"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Cinematic Reel 2024",
        description: "A compilation of high-end commercial video edits showcasing advanced color grading and motion graphics.",
        tags: ["PREMIERE PRO", "DAVINCI RESOLVE", "AFTER EFFECTS"],
    },
    {
        title: "AI Synthesis Engine",
        description: "A platform that leverages LLMs to synthesize large-scale enterprise data into actionable insights.",
        tags: ["REACT", "TYPESCRIPT", "GEMINI API", "TAILWIND"],
    },
    {
        title: "Dynamic Promo Series",
        description: "Social media advertisement series focused on fast-paced transitions and sound design.",
        tags: ["PREMIERE PRO", "SOUND DESIGN", "MOTION GRAPHICS"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative z-20 w-full bg-[#121212] py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex justify-between items-end"
                >
                    <div>
                        <span className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Selected Works.
                        </h2>
                    </div>
                    <a href="#" className="hidden md:block text-blue-500 font-medium hover:text-blue-400 text-sm">
                        View All Projects →
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl transition-colors neon-card"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-zinc-900 w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center text-white text-sm font-medium group-hover:translate-x-1 transition-transform cursor-pointer">
                                    Explore Project <span className="text-blue-500 ml-1">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-blue-500 font-medium hover:text-blue-400 text-sm">
                        View All Projects →
                    </a>
                </div>
            </div>
        </section>
    );
}
