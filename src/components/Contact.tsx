"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

                {/* Left Info */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                            Get in Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Let&apos;s create something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                legendary together.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className="ml-6">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Email Me</p>
                                    <a href="mailto:unnineeraj6@gmail.com" className="text-white text-lg font-medium hover:text-purple-400 transition-colors">
                                        unnineeraj6@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div className="ml-6">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Location</p>
                                    <p className="text-white text-lg font-medium">Kerala, India</p>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/918590193478"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all group mt-8 neon-glow"
                            >
                                <svg className="w-6 h-6 text-[#25D366] mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                <span className="font-bold text-[#25D366] group-hover:text-white transition-colors">Chat on WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 md:p-10 neon-card"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                    <input type="text" id="name" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                    <input type="email" id="email" placeholder="john@example.com" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                                <textarea id="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-900/20">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p>© 2026 Neeraj S. All rights reserved. Built with Gemini & React.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
                </div>
            </div>
        </section>
    );
}
