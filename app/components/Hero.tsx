"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { resumeData } from "@/lib/data";

export default function Hero() {
    return (
        <section className="py-20 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
                    <span className="text-gradient">{resumeData.name.split(' ')[0]}</span> {resumeData.name.split(' ')[1]}
                </h1>
                <p className="text-xl md:text-2xl text-secondary font-medium mb-8 max-w-2xl mx-auto">
                    {resumeData.role}
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail size={18} />
                        <span className="hidden sm:inline">{resumeData.contact.email}</span>
                    </a>
                    <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone size={18} />
                        <span className="hidden sm:inline">{resumeData.contact.phone}</span>
                    </a>
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Github size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Linkedin size={18} />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl mx-auto p-8 glass-card"
                >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center">
                        Objective
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed">
                        {resumeData.objective}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
