"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const Section = ({
    children,
    opacity,
    y,
    align = "center",
    className = "",
}: {
    children: React.ReactNode;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
    align?: "left" | "center" | "right";
    className?: string;
}) => {
    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-start pt-20 md:pt-28 pointer-events-none z-10 overflow-y-auto ${className}`}
        >
            <div className={`max-w-7xl mx-auto w-full px-4 md:px-6 pb-8 flex flex-col ${alignmentClasses[align]}`}>
                {children}
            </div>
        </motion.div>
    );
};

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Section 1: Hero - stays visible while scrolling, fades near end of hero section
    const opacity1 = useTransform(scrollYProgress, [0, 0.06, 0.1], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.1], ["0%", "-10%"]);



    return (
        <>
            <Section opacity={opacity1} y={y1} align="left" className="pointer-events-auto">
                <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                    <span className="text-xs font-medium text-purple-300 tracking-wider">AVAILABLE FOR CREATIVE DIRECTION</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight tracking-tight mb-4 md:mb-6">
                    Crafting <br />
                    stories in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        every frame
                    </span> <br />
                    & line.
                </h1>

                <p className="max-w-xl text-sm md:text-lg text-gray-400 mb-4 md:mb-8 leading-relaxed">
                    I&apos;m Neeraj S, a Freelance Video Editor and BCA student. I use my technical foundation to push the boundaries of visual storytelling, turning raw footage into cinematic experiences and ideas into digital reality.
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4 pointer-events-auto">
                    <a href="#projects" className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-black text-sm md:text-base font-bold rounded-full hover:bg-gray-200 transition-colors">
                        Watch My Work
                    </a>
                    <a
                        href="https://wa.me/918590193478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 relative overflow-hidden group rounded-full neon-border"
                    >
                        <span className="relative z-10 text-white font-medium group-hover:text-purple-300 transition-colors">Start a Project</span>
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                    </a>
                </div>

                <div className="mt-6 md:mt-10 flex gap-6 md:gap-12">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">50+</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Cinematic Edits</p>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Aspiring</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Engineer</p>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">BCA</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Student</p>
                    </div>
                </div>
            </Section>

            {/* Card removed per user request */}
        </>
    );
}
