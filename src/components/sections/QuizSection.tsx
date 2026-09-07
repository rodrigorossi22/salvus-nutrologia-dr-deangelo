"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type AnswerType = string | null;

export function QuizSection() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, AnswerType>>({});

    const questions = [
        {
            id: "q1",
            question: "Qual é o seu principal objetivo hoje?",
            options: [
                "Emagrecimento",
                "Hipertrofia",
                "Reposição Hormonal",
                "Longevidade",
            ],
        },
        {
            id: "q2",
            question: "Como você tem se sentido ultimamente?",
            options: [
                "Cansaço constante",
                "Dificuldade de perder peso",
                "Baixa libido",
                "Estacionado nos treinos",
                "Quero focar em prevenção",
            ],
        },
        {
            id: "q3",
            question: "Você possui exames de sangue recentes (últimos 3 meses)?",
            options: ["Sim", "Não"],
        },
    ];

    const handleAnswer = (questionId: string, answer: string) => {
        const updated = { ...answers, [questionId]: answer };
        setAnswers(updated);
        try {
            sessionStorage.setItem("salvus_quiz_answers", JSON.stringify(updated));
        } catch {
            // Ignorar fallback
        }
        setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
        }, 400); // pequeno timeout para ver a seleção antes de transicionar
    };

    const isCompleted = currentStep >= questions.length;

    const resultMap: Record<string, { headline: string; sub: string }> = {
        "Emagrecimento": {
            headline: "Seu foco é emagrecimento com precisão médica.",
            sub: "O Dr. Deangelo vai mapear seus hormônios, marcadores metabólicos e traçar um protocolo que vai além da dieta — tratando a causa raiz do seu peso.",
        },
        "Hipertrofia": {
            headline: "Seu objetivo é construir músculo de forma otimizada.",
            sub: "Com análise hormonal completa e modulação de nutrientes, o protocolo é desenhado para maximizar síntese proteica e performance no treino.",
        },
        "Reposição Hormonal": {
            headline: "Sua saúde merece equilíbrio hormonal de precisão.",
            sub: "Reposição hormonal individualizada, baseada em exames detalhados, para restaurar energia, libido e disposição com segurança médica.",
        },
        "Longevidade": {
            headline: "Você está investindo na sua saúde a longo prazo.",
            sub: "Protocolos de longevidade que monitoram marcadores de envelhecimento e otimizam sua bioquímica para anos extras de alta qualidade de vida.",
        },
    };

    const result = resultMap[answers["q1"] ?? ""] ?? {
        headline: "Excelente. Entendemos o seu momento.",
        sub: "Veja abaixo como o Dr. Deangelo vai construir o seu plano de resultados baseado no que você nos contou.",
    };

    return (
        <section id="quiz-section" className="py-24 bg-stone-900 border-t border-stone-800">
            <div className="container max-w-3xl mx-auto px-4">
                <div className="min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {!isCompleted ? (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <div className="mb-8">
                                    <span className="text-stone-500 text-sm font-medium tracking-wider uppercase mb-2 block">
                                        Passo {currentStep + 1} de {questions.length}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
                                        {questions[currentStep].question}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {questions[currentStep].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleAnswer(questions[currentStep].id, option)}
                                            className={`
                        text-left p-6 rounded-xl border transition-all duration-200
                        ${answers[questions[currentStep].id] === option
                                                    ? "bg-stone-800 border-stone-500 text-white shadow-[0_0_15px_rgba(168,162,158,0.2)]"
                                                    : "bg-stone-950/50 border-stone-800 text-stone-300 hover:border-stone-600 hover:bg-stone-900"
                                                }
                      `}
                                        >
                                            <span className="text-lg">{option}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="completed"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center bg-stone-900/80 p-8 md:p-12 rounded-3xl border border-stone-800 shadow-2xl"
                            >
                                <div className="inline-flex items-center rounded-full border border-[#C5A059]/30 bg-stone-900/80 px-3 py-1 text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-4">
                                    Perfil Mapeado
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                                    {result.headline}
                                </h2>
                                <p className="text-stone-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                                    {result.sub}
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button
                                        onClick={() => {
                                            router.push('/obrigado');
                                        }}
                                        className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-xl font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-[#C5A059] to-[#D4B06A] hover:brightness-110 shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 text-sm md:text-base border border-[#C5A059]/50 cursor-pointer w-full sm:w-auto"
                                    >
                                        Concluir Avaliação & Falar com Concierge
                                    </button>
                                    <button
                                        onClick={() => {
                                            document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-stone-400 hover:text-white text-sm tracking-wider uppercase underline underline-offset-4 py-3 px-4 transition-colors cursor-pointer"
                                    >
                                        Ver Metodologia Completa
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
