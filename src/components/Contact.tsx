import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="section-container">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-display text-foreground mb-6">GEAR UP WITH CONFIDENCE</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ready to equip your team with mission-ready gear? Our sales specialists are 
            standing by to help you find the right solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sales@vanguardtactical.com" className="btn-tactical-primary">
              Contact Sales
            </a>
            <a href="#" className="btn-tactical-outline">
              Request Catalog
            </a>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 bg-background border border-border"
          >
            <Phone className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-foreground mb-2">CALL US</h3>
            <p className="text-muted-foreground">Mon–Fri, 8am–6pm EST</p>
            <a href="tel:+18005551234" className="text-primary hover:text-olive-light transition-colors mt-2 block">
              +1 (800) 555-1234
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-background border border-border"
          >
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-foreground mb-2">EMAIL US</h3>
            <p className="text-muted-foreground">Response within 24 hours</p>
            <a href="mailto:sales@vanguardtactical.com" className="text-primary hover:text-olive-light transition-colors mt-2 block">
              sales@vanguardtactical.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 bg-background border border-border"
          >
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-foreground mb-2">VISIT US</h3>
            <p className="text-muted-foreground">By appointment only</p>
            <p className="text-primary mt-2">
              1234 Tactical Way<br />
              Fort Worth, TX 76102
            </p>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="font-display text-2xl text-foreground mb-4">STAY MISSION-READY</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates on new gear, exclusive offers, and tactical insights.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border focus:border-primary"
              required
            />
            <Button type="submit" className="btn-tactical-primary px-6">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;