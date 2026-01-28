"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { resumeData } from "@/lib/data";

export default function Education() {
    return (
        <section className="py-20" id="education">
            <h2 className="section-title">Education</h2>
            <div className="space-y-8">
                {resumeData.education.map((edu, idx) => (
                    <motion.div
                        key={edu.institution}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-6 relative"
                    >
                        {/* Timeline Line */}
                        {idx !== resumeData.education.length - 1 && (
                            <div className="absolute left-6 top-12 bottom-0 w-px bg-white/10 hidden md:block" />
                        )}

                        <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 items-center justify-center text-primary z-10 border border-primary/20">
                            <GraduationCap size={24} />
                        </div>

                        <div className="glass-card flex-1">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                                <h3 className="text-xl font-bold">{edu.institution}</h3>
                                <span className="text-primary font-bold">{edu.period}</span>
                            </div>
                            <p className="text-secondary font-medium mb-2">{edu.degree}</p>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1 text-secondary">
                                    <MapPin size={14} />
                                    {edu.location}
                                </div>
                                <div className="px-2 py-0.5 rounded bg-accent/10 text-accent font-bold">
                                    {edu.detail}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
