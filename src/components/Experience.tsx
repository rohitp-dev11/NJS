"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
    year: string;
    role: string;
    company: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: "2023 - PRESENT",
        role: "Freelance Video Editor",
        company: "Freelance",
        description: [
            "Successfully delivered 50+ cinematic projects for global brands and creators.",
            "Specialized in advanced color grading using DaVinci Resolve and dynamic editing in Premiere Pro.",
            "Integrating modern AI tools to streamline post-production workflows."
        ]
    },
    {
        year: "CURRENT",
        role: "Aspiring Software Engineer",
        company: "BCA Student",
        description: [
            "Building a strong foundation in computer science and application development.",
            "Developing interactive web platforms with React and TypeScript.",
            "Applying creative design principles to software user interfaces."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                        Professional Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Experience.
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black"></span>

                            <div className="p-8 transition-colors duration-300 neon-card">
                                <span className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-2 block">{exp.year}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-gray-400 text-sm mb-6 italic">{exp.company}</p>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                                            <span className="text-blue-500 mr-3 mt-1.5 text-xs">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
