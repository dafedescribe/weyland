import { SiWhatsapp } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/content";

export function Sponsors() {
  if (!siteConfig.sponsors || siteConfig.sponsors.length === 0) {
    return null;
  }

  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Trusted{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Partners & Sponsors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Supporting businesses to grow through WhatsApp
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.sponsors.map((sponsor) => (
            <Card
              key={sponsor.id}
              className="p-6 hover-elevate transition-all duration-300 group"
              data-testid={`card-sponsor-${sponsor.id}`}
            >
              {/* Logo */}
              <div className="mb-4 flex items-center justify-center">
                {sponsor.logo ? (
                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {sponsor.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-display font-bold">
                  {sponsor.name}
                </h3>
                
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {sponsor.service}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {sponsor.description}
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <Button
                  asChild
                  className="w-full gap-2 group-hover:scale-105 transition-transform"
                  data-testid={`button-contact-${sponsor.id}`}
                >
                  <a
                    href={`https://wa.me/${sponsor.whatsappNumber}?text=${encodeURIComponent(sponsor.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
