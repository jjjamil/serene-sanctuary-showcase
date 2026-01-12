import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal">
      <div ref={ref} className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p 
            className="text-sm tracking-widest uppercase mb-4"
            style={{ letterSpacing: "0.2em", color: "hsl(var(--gold-light))" }}
          >
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-6">
            We Await Your Arrival
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="max-w-xl mx-auto text-ivory/70 leading-relaxed mb-12">
            Our dedicated team is available to assist with reservations, 
            special requests, and crafting your perfect Mediterranean escape.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
        >
          <a
            href="tel:+1234567890"
            className="group p-6 border border-ivory/20 hover:border-gold/50 hover:bg-ivory/5 transition-all duration-300"
          >
            <Phone className="w-6 h-6 mx-auto mb-4 text-gold" strokeWidth={1.5} />
            <p className="text-xs tracking-widest uppercase text-ivory/50 mb-2">Phone</p>
            <p className="text-ivory group-hover:text-gold transition-colors duration-300">
              +1 (234) 567-890
            </p>
          </a>

          <a
            href="mailto:reservations@aurelian.com"
            className="group p-6 border border-ivory/20 hover:border-gold/50 hover:bg-ivory/5 transition-all duration-300"
          >
            <Mail className="w-6 h-6 mx-auto mb-4 text-gold" strokeWidth={1.5} />
            <p className="text-xs tracking-widest uppercase text-ivory/50 mb-2">Email</p>
            <p className="text-ivory group-hover:text-gold transition-colors duration-300">
              reservations@aurelian.com
            </p>
          </a>

          <a
            href="#"
            className="group p-6 border border-ivory/20 hover:border-gold/50 hover:bg-ivory/5 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mx-auto mb-4 text-gold" strokeWidth={1.5} />
            <p className="text-xs tracking-widest uppercase text-ivory/50 mb-2">Chat</p>
            <p className="text-ivory group-hover:text-gold transition-colors duration-300">
              Live Concierge
            </p>
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="mailto:reservations@aurelian.com?subject=Reservation%20Inquiry"
            className="btn-luxury border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Make an Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
