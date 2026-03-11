"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
    title: string;
    description: string;
    step: number;
    icon?: React.ReactNode;
}

export function TimelineItem({ title, description, step, icon }: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: step * 0.15 }}
            className="relative flex flex-col md:flex-row gap-8 items-start md:items-center py-8"
        >
            {/* Linha conectora vertical (visível apenas em mobile) */}
            <div className="absolute left-[27px] top-24 bottom-[-32px] w-[2px] bg-stone-800 md:hidden" />

            {/* Círculo com Número / Ícone */}
            <div className="z-10 flex-shrink-0 w-14 h-14 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 font-serif text-xl relative shadow-lg">
                {icon ? icon : step}
            </div>

            {/* Conteúdo */}
            <div className="flex-1 bg-stone-900/50 border border-stone-800 p-6 md:p-8 rounded-2xl hover:border-stone-600 transition-colors backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-stone-100 mb-3 font-serif tracking-wide">
                    {title}
                </h3>
                <p className="text-stone-400 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

interface TimelineProps {
    children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-12">
            {/* Linha conectora vertical (Desktop) */}
            <div className="hidden md:block absolute left-[27px] top-24 bottom-24 w-[2px] bg-stone-800" />
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </div>
    );
}
