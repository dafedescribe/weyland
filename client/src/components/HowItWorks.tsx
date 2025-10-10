import { MessageCircle, Link as LinkIcon, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/content";

const iconMap: Record<string, any> = {
  MessageCircle,
  Link: LinkIcon,
  TrendingUp,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to tracking clicks in minutes
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-secondary transform -translate-y-1/2 opacity-20" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {siteConfig.howItWorks.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="relative" data-testid={`step-${step.id}`}>
                  <Card className="p-6 lg:p-8 h-full hover-elevate transition-all duration-300">
                    {/* Number Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <Badge className="text-lg font-bold px-3 py-1 bg-primary/10 text-primary hover:bg-primary/10">
                        {step.number}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Code Example */}
                    {step.code && (
                      <div className="mt-4 p-3 bg-muted/50 rounded-md font-mono text-sm text-primary border border-primary/20">
                        {step.code}
                      </div>
                    )}
                  </Card>

                  {/* Arrow - Desktop */}
                  {index < siteConfig.howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <div className="w-4 h-4 rotate-45 bg-primary/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
