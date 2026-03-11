"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Bruno Delorence",
        text: "De longe, a melhor experiência que já tive com um médico em toda a minha vida. Com sua orientação, consegui emagrecer de forma saudável e ganhar massa muscular, alcançando resultados que nunca imaginei serem possíveis. Ele não apenas entende de medicina, mas entende de gente — e isso faz toda a diferença.",
        highlight: true,
    },
    {
        name: "Thalita Garcia da Silva",
        text: "O atendimento é impecável desde o primeiro contato no WhatsApp até o atendimento final com o doutor. Me senti acolhida e ouvida, e fui muito bem direcionada para o melhor tratamento.",
    },
    {
        name: "Dirce Laplaca Viana",
        badge: "Local Guide",
        text: "Dr. Deangelo é um médico muito competente. Desde a minha primeira consulta ele e toda a equipe foram extremamente atenciosos... eu recuperei minha autoestima e qualidade de vida.",
    },
    {
        name: "Claudia Val",
        badge: "Local Guide",
        text: "Atendimento de excelência e humanizado. Dr. Deangelo é um profissional dedicado, atualizado e muito cuidadoso em todos os detalhes.",
    },
    {
        name: "Mical Machado",
        text: "Atendimento excepcional. Dr. sempre atencioso, ético, com procedimentos incríveis que me deixaram maravilhada e satisfeita. Recepção impecável. Com certeza recomendo e voltarei mais vezes!",
    },
    {
        name: "Kerah Kalins",
        text: "Dr. Deangelo é um excelente profissional e toda sua equipe é muito atenciosa e preparada para nos atender da melhor forma. Recomendo muito a clínica.",
    },
];

function Stars() {
    return (
        <div className="flex gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-stone-950 border-t border-stone-900 relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-[#C5A059] text-sm tracking-widest uppercase font-sans mb-4">
                        Avaliações Google
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-white">
                        O que dizem os <span className="italic text-stone-400">nossos pacientes</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`
                                relative p-7 rounded-2xl border flex flex-col
                                ${t.highlight
                                    ? "bg-stone-900 border-[#C5A059]/30 md:col-span-2 lg:col-span-1"
                                    : "bg-stone-900/60 border-stone-800"
                                }
                            `}
                        >
                            {t.highlight && (
                                <div className="absolute top-4 right-4 text-[#C5A059]/40">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            )}
                            <Stars />
                            <p className="text-stone-300 leading-relaxed text-sm flex-1 font-serif italic">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="mt-6 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-stone-300 text-sm font-semibold flex-shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-stone-200 text-sm font-medium">{t.name}</p>
                                    {t.badge && (
                                        <p className="text-[#C5A059] text-xs tracking-wide">{t.badge}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
