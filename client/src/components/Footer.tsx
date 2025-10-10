import { SiWhatsapp, SiTwitter, SiInstagram } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import { siteConfig } from "@/config/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <SiWhatsapp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-white">
                {siteConfig.siteName}
              </span>
            </div>
            <p className="text-sm text-slate-400">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                data-testid="link-social-twitter"
              >
                <SiTwitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary transition-colors flex items-center justify-center"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {siteConfig.footer.product.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <ScrollLink
                      to={link.href.slice(1)}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-sm hover:text-white transition-colors cursor-pointer"
                      data-testid={`link-footer-product-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                      data-testid={`link-footer-product-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {siteConfig.footer.resources.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <ScrollLink
                      to={link.href.slice(1)}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-sm hover:text-white transition-colors cursor-pointer"
                      data-testid={`link-footer-resources-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                      data-testid={`link-footer-resources-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {siteConfig.footer.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    data-testid={`link-footer-company-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {currentYear} {siteConfig.siteName}. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              Made in Nigeria <span className="text-lg">🇳🇬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
