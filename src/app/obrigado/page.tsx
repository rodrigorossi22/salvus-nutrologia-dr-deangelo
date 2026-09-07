import { Suspense } from "react";
import { ObrigadoContent } from "./ObrigadoContent";

export const metadata = {
  title: "Avaliação Concluída | Clínica Salvus",
  description: "Redirecionando para o atendimento exclusivo da Clínica Salvus.",
};

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-stone-950 flex items-center justify-center p-4 selection:bg-stone-700 selection:text-white">
      <Suspense
        fallback={
          <div className="text-[#C5A059] font-serif text-lg animate-pulse">
            Carregando confirmação...
          </div>
        }
      >
        <ObrigadoContent />
      </Suspense>
    </main>
  );
}
