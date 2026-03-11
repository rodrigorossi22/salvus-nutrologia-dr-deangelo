import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FinalCTASection() {
    const whatsappNumber = "5511949872408";
    const message = "Olá! Fiz a avaliação no site e gostaria de saber como funciona a consulta com o Dr. Deangelo Lima.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="py-24 bg-stone-950 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-stone-900/30" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

            <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                <p className="text-[#C5A059] text-sm tracking-widest uppercase font-sans mb-6">
                    Consulta Presencial · São Paulo
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                    Dê o primeiro passo para a <br className="hidden md:block" />
                    <span className="italic text-[#C5A059]">sua melhor versão.</span>
                </h2>

                <p className="text-sm text-stone-500 tracking-widest uppercase mb-12 font-sans">
                    Av. Bernardino de Campos, 327 · Sala 13 · Paraíso · São Paulo
                </p>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button size="xl" className="bg-green-700 hover:bg-green-600 text-white border border-green-600/50 hover:border-green-400/50 shadow-[0_0_30px_rgba(22,163,74,0.2)] hover:shadow-[0_0_40px_rgba(22,163,74,0.4)] transition-all duration-300 flex items-center gap-3 text-lg px-8 tracking-wide">
                        <MessageCircle className="w-6 h-6" />
                        Agendar Minha Consulta
                    </Button>
                </a>

                <p className="mt-6 text-stone-600 text-sm">Sem compromisso — respondemos em até 24h úteis.</p>

                {/* Footnote */}
                <p className="mt-12 text-sm text-stone-700 font-medium tracking-wide">
                    Clínica Salvus © {new Date().getFullYear()} – Triple A Health Care <br />
                    Dr. Deangelo Lima · CRM 171085/SP
                </p>
            </div>
        </section>
    );
}
