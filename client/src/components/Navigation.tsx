import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Moon, Sun } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/config/content";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", to: "features" },
    { label: "How It Works", to: "how-it-works" },
    { label: "Guides", to: "guides" },
    { label: "Pricing", to: "pricing" },
    { label: "Sponsors", to: "sponsors" },
    { label: "FAQ", to: "faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-1.5">
              <img 
                src="/custom-logo.png" 
                alt={siteConfig.siteName} 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {siteConfig.siteName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                activeClass="text-primary"
                data-testid={`link-nav-${item.to}`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              asChild
              className="gap-2"
              data-testid="button-start-free-nav"
            >
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-4 h-4" />
                Start Free
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-2"
                  activeClass="text-primary"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-nav-mobile-${item.to}`}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <Button
                asChild
                className="gap-2 mt-2"
                data-testid="button-start-free-mobile"
              >
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="w-4 h-4" />
                  Start Free
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
