"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type AnswerType = string | null;

export function QuizSection() {
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
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
        setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
        }, 400); // pequeno timeout para ver a seleção antes de transicionarr
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
                                className="text-center bg-stone-800/30 p-10 rounded-2xl border border-stone-800"
                            >
                                <h2 className="text-3xl font-serif text-white mb-6">
                                    {result.headline}
                                </h2>
                                <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
                                    {result.sub}
                                </p>
                                <Button size="xl" variant="premium" onClick={() => {
                                    document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Ver a Jornada Completa
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
