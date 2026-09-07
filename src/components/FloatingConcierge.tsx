"use client";

import { MessageCircle } from "lucide-react";
import { getStoredUtmSummary } from "@/hooks/useUtmTracking";

const CONCIERGE_NUMBER = "5511948445629";

export function FloatingConcierge() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_concierge_click", {
        event_category: "engagement",
        event_label: "floating_concierge",
      });
    }

    const baseMsg = "Olá! Gostaria de tirar dúvidas com o Concierge sobre a consulta com o Dr. Deangelo Lima na Clínica Salvus.";
    const utmRef = getStoredUtmSummary();
    const fullMsg = `${baseMsg}${utmRef}`;
    e.currentTarget.href = `https://wa.me/${CONCIERGE_NUMBER}?text=${encodeURIComponent(fullMsg)}`;
  };

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${CONCIERGE_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group flex items-center gap-3 bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] py-3 px-5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]" />
        </span>
        <span className="text-xs md:text-sm font-medium tracking-wide">
          Dúvidas? <span className="text-[#C5A059] font-semibold">Fale no WhatsApp</span>
        </span>
        <div className="w-7 h-7 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-stone-950 transition-colors duration-300">
          <MessageCircle className="w-4 h-4" />
        </div>
      </a>
    </aside>
  );
}
