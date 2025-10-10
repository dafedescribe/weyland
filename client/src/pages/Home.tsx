import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Guides } from "@/components/Guides";
import { Pricing } from "@/components/Pricing";
import { MediaGallery } from "@/components/MediaGallery";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Guides />
      <Pricing />
      <MediaGallery />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
