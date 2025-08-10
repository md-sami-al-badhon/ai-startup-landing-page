import { WaitlistProvider } from '@/components/WaitlistProvider';
import { CallToAction } from '@/sections/CallToAction';
import { Features } from '@/sections/Features';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Testimonials } from '@/sections/Testimonials';
import WaitlistModal from '@/sections/WaitlistModal';

export default function Home() {
  return (
    <>
      <WaitlistProvider>
        <Header />
        <Hero />
        <LogoTicker />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
        <WaitlistModal />
      </WaitlistProvider>
    </>
  );
}
