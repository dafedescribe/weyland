import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
          Ready to Transform Your WhatsApp Marketing?
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands using wey to grow their business
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="text-center" data-testid="stat-users">
            <div className="text-3xl md:text-4xl font-bold text-white">
              {siteConfig.stats.activeUsers}
            </div>
            <div className="text-sm text-white/80 mt-1">Active Users</div>
          </div>
          <div className="text-center" data-testid="stat-links">
            <div className="text-3xl md:text-4xl font-bold text-white">
              {siteConfig.stats.linksCreated}
            </div>
            <div className="text-sm text-white/80 mt-1">Links Created</div>
          </div>
          <div className="text-center" data-testid="stat-clicks">
            <div className="text-3xl md:text-4xl font-bold text-white">
              {siteConfig.stats.clicksTracked}
            </div>
            <div className="text-sm text-white/80 mt-1">Clicks Tracked</div>
          </div>
        </div>

        {/* Primary CTA */}
        <Button
          size="lg"
          asChild
          className="bg-white text-primary hover:bg-white/90 gap-2 group text-lg px-8 h-14 mb-6"
          data-testid="button-cta-main"
        >
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
            <SiWhatsapp className="w-5 h-5" />
            Start Creating Links Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        {/* Secondary Text */}
        <p className="text-sm text-white/70">
          No credit card required • 1000 free tums • Cancel anytime
        </p>
      </div>
    </section>
  );
}
