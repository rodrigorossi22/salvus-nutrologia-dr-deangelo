"use client";

import { MessageCircle } from "lucide-react";
import { getStoredUtmSummary } from "@/hooks/useUtmTracking";

export function FinalCTASection() {
    const whatsappNumber = "5511948445629";
    const baseMessage = "Olá! Gostaria de saber mais sobre a consulta de Nutrologia e Longevidade com o Dr. Deangelo Lima.";

    const handleWhatsAppClick = () => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "whatsapp_concierge_click", {
                event_category: "engagement",
                event_label: "final_cta_button",
            });
        }
        const utmRef = getStoredUtmSummary();
        const fullMessage = `${baseMessage}${utmRef}`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

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

                <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-xl font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-[#C5A059] to-[#D4B06A] hover:brightness-110 shadow-[0_0_35px_rgba(197,160,89,0.35)] transition-all duration-300 text-base md:text-lg border border-[#C5A059]/50 cursor-pointer"
                >
                    <MessageCircle className="w-6 h-6" />
                    Agendar Minha Consulta
                </button>

                <p className="mt-6 text-stone-400 text-sm">
                    Atendimento prioritário e confidencial via Concierge Salvus.
                </p>

                {/* Footnote */}
                <p className="mt-12 text-sm text-stone-600 font-medium tracking-wide">
                    Clínica Salvus © {new Date().getFullYear()} – Triple A Health Care <br />
                    Dr. Deangelo Lima · CRM 171085/SP
                </p>
            </div>
        </section>
    );
}
