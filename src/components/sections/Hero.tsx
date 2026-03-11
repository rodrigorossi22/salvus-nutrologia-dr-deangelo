"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-stone-950">
            {/* Background overlay premium */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-stone-800/20 via-stone-950 to-stone-950 z-0" />

            {/* Container Principal */}
            <div className="container px-4 md:px-6 relative z-10 w-full py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Esquerda: Texto */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">

                        {/* Etiqueta / Tagline */}
                        <div className="inline-flex items-center rounded-full border border-[#C5A059]/30 bg-stone-900/60 px-3 py-1 text-sm font-medium text-stone-300 backdrop-blur-sm mb-8 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-[#C5A059] mr-2"></span>
                            Clínica Salvus | Nutrologia Avançada
                        </div>

                        {/* Título Principal */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white max-w-4xl mb-6 leading-[1.1] animate-fade-in-up animation-delay-100">
                            Sua saúde não aceita <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#A29382] italic">
                                protocolos genéricos.
                            </span>
                        </h1>

                        {/* Subtítulo / Copy */}
                        <p className="max-w-xl text-stone-400 md:text-xl leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
                            Medicina investigativa em Emagrecimento, Hipertrofia, Reposição Hormonal e Longevidade. O Dr. Deangelo Lima ouve sua história antes de prescrever qualquer protocolo.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
                            <Button variant="premium" size="xl" onClick={() => {
                                document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Iniciar Minha Avaliação
                            </Button>
                        </div>
                    </div>

                    {/* Direita: Foto (apenas desktop) */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                            <Image
                                src="/Dr Deangelo -103.jpg"
                                alt="Dr. Deangelo Lima — Nutrólogo Clínica Salvus"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Fade lateral para fundir com o fundo escuro */}
                            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/10 to-transparent pointer-events-none" />
                            {/* Fade inferior */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent pointer-events-none" />
                        </div>
                        {/* Acento champagne decorativo */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C5A059]/30 rounded-br-3xl -z-10" />
                    </div>

                </div>
            </div>

            {/* Ícone de Scroll */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-600 hidden md:flex">
                <ArrowDown className="w-6 h-6" />
            </div>
        </section>
    );
}
