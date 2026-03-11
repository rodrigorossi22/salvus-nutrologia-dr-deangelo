import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Stethoscope, ClipboardList, Pill, PhoneIcon, Activity } from "lucide-react";

export function JourneySection() {
    const steps = [
        {
            title: "A Escuta Ativa",
            description: "Consulta sem pressa. Análise do seu histórico, rotina e exame avançado. Foco na causa raiz, não apenas no sintoma externo.",
            icon: <Stethoscope className="w-6 h-6 text-stone-300" />,
        },
        {
            title: "A Investigação",
            description: "Se você já tem exames, o protocolo começa na hora. Caso contrário, mapeamos minuciosamente seus hormônios, vitaminas e marcadores metabólicos.",
            icon: <ClipboardList className="w-6 h-6 text-stone-300" />,
        },
        {
            title: "O Protocolo",
            description: "Prescrição médica exata e individualizada de medicamentos, suplementação e modulação hormonal, respeitando completamente a sua realidade.",
            icon: <Pill className="w-6 h-6 text-stone-300" />,
        },
        {
            title: "O Acesso Contínuo",
            description: "Durante todo o período do seu tratamento, você tem acesso direto, via WhatsApp pessoal, ao Dr. Deangelo para dúvidas e ajustes necessários.",
            icon: <PhoneIcon className="w-6 h-6 text-stone-300" />,
        },
        {
            title: "A Evolução Constante",
            description: "Retorno estratégico (em até 30 dias) para análise fina de exames e um acompanhamento contínuo a cada 45 dias para lapidar os seus resultados finais.",
            icon: <Activity className="w-6 h-6 text-stone-300" />,
        },
    ];

    return (
        <section id="journey-section" className="py-24 bg-stone-950 relative overflow-hidden">
            {/* Decorative Blur BG */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-stone-800/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                        A Jornada para a <span className="italic text-stone-400">Sua Melhor Versão</span>
                    </h2>
                    <p className="text-stone-400 text-lg">
                        Um processo desenhado não para te prender a dietas que você não vai seguir, mas para mapear o seu biológico e orquestrar resultados reais.
                    </p>
                </div>

                <Timeline>
                    {steps.map((step, index) => (
                        <TimelineItem
                            key={index}
                            step={index + 1}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                        />
                    ))}
                </Timeline>
            </div>
        </section>
    );
}
