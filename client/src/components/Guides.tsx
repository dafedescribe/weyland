import { useState } from "react";
import { Play, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/content";

const difficultyColors = {
  Beginner: "bg-green-500/10 text-green-500 hover:bg-green-500/10",
  Intermediate: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/10",
  Advanced: "bg-red-500/10 text-red-500 hover:bg-red-500/10",
};

export function Guides() {
  const [selectedTab, setSelectedTab] = useState(siteConfig.guides[0].id);

  return (
    <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Learn Everything About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              wey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From basics to advanced features - we've got you covered
          </p>
        </div>

        {/* Tabs Interface */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2 bg-transparent">
            {siteConfig.guides.map((guide) => (
              <TabsTrigger
                key={guide.id}
                value={guide.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2"
                data-testid={`tab-guide-${guide.id}`}
              >
                <span className="truncate">{guide.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {siteConfig.guides.map((guide) => (
            <TabsContent key={guide.id} value={guide.id} className="mt-6">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Video Placeholder */}
                  <div className="relative aspect-video bg-muted/50 flex items-center justify-center group cursor-pointer hover-elevate">
                    {guide.thumbnail ? (
                      <img
                        src={guide.thumbnail}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Video tutorial coming soon
                        </p>
                      </div>
                    )}
                    
                    {guide.thumbnail && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="w-8 h-8 text-primary ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Duration Badge */}
                    <Badge className="absolute top-4 right-4 gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.duration}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}
                      >
                        <Award className="w-3 h-3 mr-1" />
                        {guide.difficulty}
                      </Badge>
                      <Badge variant="outline">{guide.duration}</Badge>
                    </div>

                    <h3 className="text-2xl font-display font-bold">
                      {guide.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {guide.description}
                    </p>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm leading-relaxed">
                        {guide.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
