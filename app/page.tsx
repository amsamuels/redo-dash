import { HeroSection } from '@/components/landing/hero-section';
import { FeatureSection } from '@/components/landing/feature-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { CTASection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <FeatureSection />
          <PricingSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}