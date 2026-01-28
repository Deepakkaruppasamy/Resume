"use client";

import { motion } from "framer-motion";
import { Award, FileText, Trophy } from "lucide-react";
import { resumeData } from "@/lib/data";

export default function Extras() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
            {/* Certifications */}
            <section id="certifications">
                <h2 className="section-title">Certifications</h2>
                <div className="space-y-4">
                    {resumeData.certifications.map((cert) => (
                        <motion.div
                            key={cert.title}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-4 flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <Award size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-base">{cert.title}</h3>
                                <p className="text-xs text-secondary font-medium">{cert.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Achievements & Papers */}
            <section>
                <h2 className="section-title">Highlights</h2>
                <div className="space-y-6">
                    {resumeData.achievements.map((item) => (
                        <div key={item.title} className="glass-card border-l-4 border-l-primary">
                            <div className="flex items-center gap-2 mb-2 text-primary">
                                <Trophy size={18} />
                                <h3 className="font-bold">{item.title}</h3>
                            </div>
                            <p className="text-sm text-secondary mb-2 font-bold">{item.period}</p>
                            <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                        </div>
                    ))}

                    {resumeData.paperPresentations.map((item) => (
                        <div key={item.title} className="glass-card border-l-4 border-l-accent">
                            <div className="flex items-center gap-2 mb-2 text-accent">
                                <FileText size={18} />
                                <h3 className="font-bold">Paper Presentation: {item.title}</h3>
                            </div>
                            <p className="text-sm text-secondary mb-2 font-bold">{item.period}</p>
                            <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
