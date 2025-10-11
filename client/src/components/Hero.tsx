import { ArrowRight, Play } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Turn WhatsApp Numbers
              </span>
              <br />
              <span className="text-foreground">Into Trackable Links</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Create short links, track clicks, grow your business. All from WhatsApp.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              <Card className="p-4 text-center hover-elevate" data-testid="card-stat-bonus">
                <div className="text-2xl font-bold text-primary">
                  {siteConfig.stats.signupBonus.split(" ")[0]}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {siteConfig.stats.signupBonus.split(" ").slice(1).join(" ")}
                </div>
              </Card>
              <Card className="p-4 text-center hover-elevate" data-testid="card-stat-duration">
                <div className="text-2xl font-bold text-primary">
                  {siteConfig.stats.linkDuration.split(" ")[0]}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {siteConfig.stats.linkDuration.split(" ").slice(1).join(" ")}
                </div>
              </Card>
              <Card className="p-4 text-center hover-elevate" data-testid="card-stat-cost">
                <div className="text-2xl font-bold text-primary">
                  {siteConfig.stats.dailyCost.split(" ")[0]}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {siteConfig.stats.dailyCost.split(" ").slice(1).join(" ")}
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="gap-2 group"
                data-testid="button-start-creating"
              >
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="w-5 h-5" />
                  Start Creating Links
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2"
                data-testid="button-watch-demo"
              >
                <ScrollLink
                  to="media"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer flex items-center justify-center"
                >
                  <Play className="w-4 h-4" />
                  Watch Demo
                </ScrollLink>
              </Button>
            </div>
          </div>

          {/* Right Content - 40% Mockup */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto max-w-sm">
                <Card className="p-6 space-y-4 backdrop-blur-sm bg-card/90 border-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/custom-logo.png" 
                      alt="D-Wey Bot" 
                      className="w-12 h-12 object-contain rounded-full"
                    />
                    <div>
                      <div className="font-semibold">D-Wey Bot</div>
                      <div className="text-sm text-muted-foreground">Active now</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-lg p-3 ml-auto max-w-[80%]">
                      <p className="text-sm">create 08012345678</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm font-medium">✅ Link Created!</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        d-wey.com/abc123
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="text-xs text-muted-foreground text-center">
                      Type a message...
                    </div>
                  </div>
                </Card>

                {/* Floating Analytics Cards */}
                <Card className="absolute -right-4 top-8 p-3 backdrop-blur-sm bg-card/90 border animate-float" data-testid="card-analytics-1">
                  <div className="text-xs text-muted-foreground">Total Clicks</div>
                  <div className="text-2xl font-bold text-primary">1,234</div>
                </Card>

                <Card className="absolute -left-4 bottom-16 p-3 backdrop-blur-sm bg-card/90 border animate-float-delayed" data-testid="card-analytics-2">
                  <div className="text-xs text-muted-foreground">Unique Visitors</div>
                  <div className="text-2xl font-bold text-primary">856</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
