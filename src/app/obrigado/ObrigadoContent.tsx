"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { getStoredUtmSummary } from "@/hooks/useUtmTracking";

const CONCIERGE_NUMBER = "5511948445629";

export function ObrigadoContent() {
  const [seconds, setSeconds] = useState(3);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    // 1. Evitar disparo duplicado de conversão
    if (!sessionStorage.getItem("salvus_nutro_conversion_registered")) {
      sessionStorage.setItem("salvus_nutro_conversion_registered", "true");

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        const adsConfig = window.SALVUS_ADS_CONFIG;
        if (adsConfig?.GOOGLE_ADS_ID && adsConfig?.NUTRO_CONVERSION_LABEL) {
          window.gtag("event", "conversion", {
            send_to: `${adsConfig.GOOGLE_ADS_ID}/${adsConfig.NUTRO_CONVERSION_LABEL}`,
          });
        }
      }
    }

    // 2. Montar mensagem com respostas do quiz + UTMs
    let baseMsg = "Olá! Concluí minha avaliação de Nutrologia no site da Clínica Salvus e gostaria de saber como funciona a consulta com o Dr. Deangelo Lima.";
    try {
      const savedQuiz = sessionStorage.getItem("salvus_quiz_answers");
      if (savedQuiz) {
        const answers = JSON.parse(savedQuiz);
        if (answers.q1) {
          baseMsg = `Olá! Concluí minha avaliação no site da Salvus com foco em *${answers.q1}* e gostaria de agendar uma consulta com o Dr. Deangelo Lima.`;
        }
      }
    } catch {
      // Ignorar fallback
    }

    const utmRef = getStoredUtmSummary();
    const fullText = `${baseMsg}${utmRef}`;
    const targetUrl = `https://wa.me/${CONCIERGE_NUMBER}?text=${encodeURIComponent(fullText)}`;
    setWhatsappUrl(targetUrl);

    // 3. Contagem regressiva de 3s para auto-redirecionamento
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = targetUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-xl w-full mx-auto text-center bg-stone-900/80 border border-stone-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
      <div className="w-16 h-16 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-2">
        Avaliação Concluída com Sucesso
      </p>

      <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
        Conectando com o Concierge...
      </h1>

      <p className="text-stone-400 text-sm md:text-base mb-8 leading-relaxed">
        Você está sendo transferido para o atendimento prioritário e confidencial do Dr. Deangelo Lima no WhatsApp em{" "}
        <span className="text-[#C5A059] font-bold text-lg">{seconds}s</span>.
      </p>

      {/* Barra de Progresso Dourada */}
      <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden mb-8">
        <div
          className="bg-gradient-to-r from-[#C5A059] to-[#E6C98A] h-full transition-all duration-1000 ease-linear rounded-full"
          style={{ width: `${((3 - seconds) / 3) * 100}%` }}
        />
      </div>

      {/* Botão Fallback de Ação Imediata */}
      <a
        href={whatsappUrl || `https://wa.me/${CONCIERGE_NUMBER}`}
        className="inline-flex items-center justify-center gap-3 w-full py-4 px-8 rounded-xl font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-[#C5A059] to-[#D4B06A] hover:brightness-110 shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 text-sm md:text-base"
      >
        <MessageCircle className="w-5 h-5" />
        Abrir WhatsApp Agora
      </a>

      <p className="text-xs text-stone-500 mt-6">
        Dr. Deangelo Lima · CRM 171085/SP · Clínica Salvus
      </p>
    </div>
  );
}
