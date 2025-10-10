import { useState } from "react";
import { Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { siteConfig } from "@/config/content";

export function Pricing() {
  const [activeLinks, setActiveLinks] = useState(10);

  const dailyCost = activeLinks * siteConfig.pricing.dailyMaintenance;
  const weeklyCost = dailyCost * 7;
  const monthlyCost = dailyCost * 30;

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pay only for what you use. Get started free!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Free Tier */}
          <Card className="p-8 relative hover-elevate transition-all duration-300" data-testid="card-pricing-free">
            <Badge className="absolute top-6 right-6 bg-accent text-accent-foreground">
              Popular
            </Badge>

            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Free Tier</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  {siteConfig.pricing.signupBonus}
                </span>
                <span className="text-muted-foreground">Tums Free</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Perfect to get started
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Create unlimited links",
                "Full analytics access",
                "24-hour link duration",
                "Daily coupon codes",
                "WhatsApp support",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full gap-2" data-testid="button-start-free">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-4 h-4" />
                Start Free Now
              </a>
            </Button>
          </Card>

          {/* Pay Per Use */}
          <Card className="p-8 hover-elevate transition-all duration-300" data-testid="card-pricing-payperuse">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Pay Per Use</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  From {siteConfig.pricing.dailyMaintenance}
                </span>
                <span className="text-muted-foreground">Tums/Day</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Only pay for active links
              </p>
            </div>

            <div className="space-y-2 mb-8 text-sm">
              <div className="flex justify-between items-center p-2 rounded bg-muted/50">
                <span className="text-muted-foreground">Create link</span>
                <span className="font-medium">{siteConfig.pricing.createLink} tums</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-muted/50">
                <span className="text-muted-foreground">Daily renewal</span>
                <span className="font-medium">{siteConfig.pricing.dailyMaintenance} tums</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-muted/50">
                <span className="text-muted-foreground">Check stats</span>
                <span className="font-medium">{siteConfig.pricing.checkStats} tums</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-muted/50">
                <span className="text-muted-foreground">Set redirect</span>
                <span className="font-medium">{siteConfig.pricing.setRedirect} tums</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-muted/50">
                <span className="text-muted-foreground">Reactivate</span>
                <span className="font-medium">{siteConfig.pricing.reactivate} tums</span>
              </div>
            </div>

            <Button asChild variant="outline" className="w-full gap-2" data-testid="button-get-tums">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                Get Free Tums
              </a>
            </Button>
          </Card>
        </div>

        {/* Cost Calculator */}
        <Card className="p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            Calculate Your Costs
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium">Number of Active Links</label>
                <Badge variant="outline" className="text-lg font-mono" data-testid="badge-link-count">
                  {activeLinks}
                </Badge>
              </div>
              <Slider
                value={[activeLinks]}
                onValueChange={(value) => setActiveLinks(value[0])}
                min={1}
                max={100}
                step={1}
                className="mb-2"
                data-testid="slider-active-links"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 link</span>
                <span>100 links</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center" data-testid="cost-daily">
                <div className="text-sm text-muted-foreground mb-1">Daily Cost</div>
                <div className="text-2xl font-bold text-primary">{dailyCost}</div>
                <div className="text-xs text-muted-foreground">tums</div>
              </div>
              <div className="text-center" data-testid="cost-weekly">
                <div className="text-sm text-muted-foreground mb-1">Weekly Cost</div>
                <div className="text-2xl font-bold text-primary">{weeklyCost}</div>
                <div className="text-xs text-muted-foreground">tums</div>
              </div>
              <div className="text-center" data-testid="cost-monthly">
                <div className="text-sm text-muted-foreground mb-1">Monthly Cost</div>
                <div className="text-2xl font-bold text-primary">{monthlyCost}</div>
                <div className="text-xs text-muted-foreground">tums</div>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                💰 Get Free Tums Daily! Check our WhatsApp status for fresh coupon codes every day!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
