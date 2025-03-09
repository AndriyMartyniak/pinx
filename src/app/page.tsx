import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Reviews } from "./components/Reviews";
import { Details } from "./components/Details";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <CTA />
      <Details />
    </main>
  );
}
