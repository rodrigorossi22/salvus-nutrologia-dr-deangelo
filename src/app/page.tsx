import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { QuizSection } from "@/components/sections/QuizSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FloatingConcierge } from "@/components/FloatingConcierge";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 selection:bg-stone-700 selection:text-white font-sans">
      <Hero />
      <StatsBar />
      <QuizSection />
      <JourneySection />
      <AuthoritySection />
      <TestimonialsSection />
      <FinalCTASection />
      <FloatingConcierge />
    </main>
  );
}
