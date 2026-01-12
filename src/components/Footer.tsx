import { Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="section-container">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <a href="#" className="font-display text-3xl font-light text-ivory">
            Aurelian
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-ivory/60 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-ivory/60 hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm tracking-widest uppercase text-ivory/60 hover:text-gold transition-colors duration-300"
            style={{ letterSpacing: "0.1em" }}
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-ivory/10 mb-12" />

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-4" style={{ letterSpacing: "0.15em" }}>
              Hotel
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#experience" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Amenities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-4" style={{ letterSpacing: "0.15em" }}>
              Discover
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#gallery" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-4" style={{ letterSpacing: "0.15em" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1234567890" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:reservations@aurelian.com" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  reservations@aurelian.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-ivory/40 mb-4" style={{ letterSpacing: "0.15em" }}>
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-ivory/60 hover:text-ivory transition-colors duration-300">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center">
          <p className="text-sm text-ivory/40">
            © {new Date().getFullYear()} Aurelian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
