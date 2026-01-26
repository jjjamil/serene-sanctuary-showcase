import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="section-container">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <a href="#" className="font-display text-3xl text-foreground">
            VANGUARD<span className="text-primary">.</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-12" />

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#categories" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Tactical Apparel
                </a>
              </li>
              <li>
                <a href="#categories" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Plate Carriers
                </a>
              </li>
              <li>
                <a href="#categories" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Backpacks
                </a>
              </li>
              <li>
                <a href="#categories" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#story" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  ITAR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vanguard Tactical. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ITAR Registered • Made in USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;