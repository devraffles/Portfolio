import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingCTA } from '@/components/ui/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-porto">
      <main className="mx-auto max-w-5xl px-6 sm:px-12">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
      <FloatingCTA />
    </div>
  );
}
