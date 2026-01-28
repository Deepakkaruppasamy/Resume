"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

const skillCategories = [
    { title: "Languages", skills: resumeData.skills.languages },
    { title: "Frontend", skills: resumeData.skills.frontend },
    { title: "Backend", skills: resumeData.skills.backend },
    { title: "Database", skills: resumeData.skills.database },
    { title: "Other Frameworks & Libraries", skills: resumeData.skills.other },
    { title: "Concepts", skills: resumeData.skills.concepts },
    { title: "Tools Known", skills: resumeData.skills.tools },
];

export default function Skills() {
    return (
        <section className="py-20" id="skills">
            <h2 className="section-title">Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card"
                    >
                        <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span key={skill} className="badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
