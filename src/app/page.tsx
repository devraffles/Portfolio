import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-porto">
      <div className="mx-auto max-w-2xl px-6 sm:px-12">
        <Nav />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
