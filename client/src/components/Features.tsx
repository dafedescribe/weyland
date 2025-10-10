import { Link, BarChart, MessageSquare, RefreshCw, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/content";

const iconMap: Record<string, any> = {
  Link,
  BarChart,
  MessageSquare,
  RefreshCw,
  Users,
  Zap,
};

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you grow your WhatsApp business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={feature.id}
                className="p-6 lg:p-8 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 group"
                data-testid={`card-feature-${feature.id}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
