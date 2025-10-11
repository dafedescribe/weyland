import { Play, Image as ImageIcon, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/content";

export function MediaGallery() {
  return (
    <section id="media" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            See{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              wey
            </span>{" "}
            in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Video tutorials, screenshots, and success stories
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Cards */}
          {siteConfig.media.videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
              data-testid={`card-video-${video.id}`}
            >
              <div className="relative aspect-video bg-muted/50 flex items-center justify-center">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-7 h-7 text-primary ml-1" />
                  </div>
                </div>

                <Badge className="absolute top-3 right-3">{video.duration}</Badge>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-1">{video.title}</h3>
                <Badge variant="outline" className="text-xs">
                  {video.category}
                </Badge>
              </div>
            </Card>
          ))}

          {/* Image Cards */}
          {siteConfig.media.images.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
              data-testid={`card-image-${image.id}`}
            >
              <div className="relative aspect-video bg-muted/50 flex items-center justify-center">
                {image.url ? (
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-1">{image.title}</h3>
                <Badge variant="outline" className="text-xs">
                  {image.category}
                </Badge>
              </div>
            </Card>
          ))}

          {/* Testimonial Cards */}
          {siteConfig.media.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-sm mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              <Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/10">
                {testimonial.results}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
