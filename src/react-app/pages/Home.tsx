import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Stats from '@/react-app/components/Stats';
import ValueProposition from '@/react-app/components/ValueProposition';
import WhoThrives from '@/react-app/components/WhoThrives';
import Process from '@/react-app/components/Process';
import Benefits from '@/react-app/components/Benefits';
import Testimonials from '@/react-app/components/Testimonials';
import FinalCTA from '@/react-app/components/FinalCTA';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ValueProposition />
        <WhoThrives />
        <Process />
        <Benefits />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
