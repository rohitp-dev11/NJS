"use client";

import { motion } from "framer-motion";

const services = [
    "Video Editing",
    "Graphics Designing",
    "Photo Editing",
    "Poster Making",
    "Animations",
];

const tools = [
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "DaVinci Resolve",
];

export default function Skills() {
    return (
        <section id="skills" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-2 block">
                        Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Services Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">Services</h3>
                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex items-center"
                                >
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-4 group-hover:scale-150 transition-transform"></span>
                                    <span className="text-xl md:text-2xl text-gray-300 font-medium group-hover:text-white transition-colors">
                                        {service}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">Tools & Software</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 transition-all group neon-card"
                                >
                                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{tool}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
