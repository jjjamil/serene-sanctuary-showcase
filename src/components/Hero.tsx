import { motion } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import heroImage from "@/assets/hero-tactical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tactical operator at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-subtitle text-primary">Built for Real-World Operations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display text-foreground mb-6"
          >
            MISSION-READY GEAR
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="divider-tactical mb-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Premium tactical equipment designed for military, law enforcement, 
            and elite operators. Field-tested durability. Uncompromising performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#categories" className="btn-tactical-primary">
              Explore the Gear
            </a>
            <a href="#contact" className="btn-tactical-outline">
              Contact Sales
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-border"
      >
        <div className="section-container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-2xl md:text-3xl text-primary">15+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-primary">50K+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Units Deployed</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-primary">30+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Countries Served</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-primary">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Field Tested</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;