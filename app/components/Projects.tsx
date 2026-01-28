"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { resumeData } from "@/lib/data";

export default function Projects() {
    return (
        <section className="py-20" id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8">
                {resumeData.projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card flex flex-col md:flex-row gap-8 overflow-hidden group"
                    >
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-secondary font-medium">{project.period}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-all">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-6 text-accent">
                                <Code2 size={16} />
                                <span className="text-sm font-semibold">{project.techStack}</span>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {project.points.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-secondary text-sm">
                                        <span className="text-primary mt-1">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 border-t border-white/5">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                                >
                                    View Repository <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
