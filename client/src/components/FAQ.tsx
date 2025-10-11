import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = siteConfig.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Everything you need to know about wey
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-faq-search"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {filteredFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
              data-testid={`accordion-item-${faq.id}`}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No questions found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-display font-bold mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help via WhatsApp
          </p>
          <Button asChild data-testid="button-contact-support">
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
