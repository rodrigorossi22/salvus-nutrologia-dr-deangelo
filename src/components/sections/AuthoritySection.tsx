import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AuthoritySection() {
    const credentials = [
        "Diretor Técnico da Clínica Salvus",
        "Pós-graduado em Nutrologia (ABRAN)",
        "Pós-graduado em Ciências da Obesidade e Sarcopenia",
        "Membro da ABESO (Assoc. Bras. para Estudo da Obesidade)",
        "Pós-graduando em Medicina do Esporte — Hospital Albert Einstein",
    ];

    return (
        <section className="py-24 bg-stone-900 border-t border-stone-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Foto Secção */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-stone-700 relative group">
                            <Image
                                src="/Dr Deangelo -74.jpg"
                                alt="Dr. Deangelo Lima — Nutrólogo Clínica Salvus"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient inferior sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                        {/* Decoração luxo com acento champagne */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#C5A059]/30 rounded-br-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#C5A059]/30 rounded-tl-3xl -z-10" />
                    </div>

                    {/* Texto / Credenciais */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <p className="text-stone-500 text-sm tracking-widest uppercase mb-4 font-sans">
                                Sobre o Especialista
                            </p>
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                                "Ouço sua história, entendo seus objetivos, construímos <span className="text-[#C5A059] italic">seu sucesso.</span>"
                            </h2>
                            <p className="text-2xl font-serif text-stone-300">
                                Dr. Deangelo Lima
                                <span className="block text-sm font-sans tracking-widest text-stone-500 mt-1 uppercase">CRM 171085/SP</span>
                            </p>
                            <div className="w-20 h-[1px] bg-[#C5A059]/40 my-6" />
                            <p className="text-stone-400 leading-relaxed">
                                Nutrólogo com formação pela ABRAN e pós-graduação em Ciências da Obesidade e Sarcopenia, o Dr. Deangelo Lima combina uma abordagem investigativa com protocolos individualizados. Atende pacientes que buscam mais do que uma prescrição — buscam um médico que entenda sua bioquímica, sua rotina e seus objetivos reais.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {credentials.map((cred, idx) => (
                                <li key={idx} className="flex items-start text-stone-400">
                                    <span className="mt-1 mr-4 text-stone-500">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </span>
                                    <span className="text-lg leading-relaxed">{cred}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
