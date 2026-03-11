"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "+500", label: "Pacientes Atendidos" },
    { value: "5+", label: "Anos de Experiência" },
    { value: "4", label: "Especialidades Integradas" },
];

export function StatsBar() {
    return (
        <section className="py-10 bg-stone-950 border-t border-stone-900">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-3xl md:text-4xl font-serif text-[#C5A059] font-semibold">
                                {stat.value}
                            </span>
                            <span className="mt-1 text-xs md:text-sm text-stone-500 tracking-wider uppercase">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
