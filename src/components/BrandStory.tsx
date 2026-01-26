import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-subtitle text-primary mb-4 block"
          >
            Our Story
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-sm text-foreground mb-8"
          >
            PRECISION. DISCIPLINE. PERFORMANCE.
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divider-tactical mx-auto mb-12"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              Vanguard was founded on a simple belief: those who protect and serve 
              deserve equipment that never fails. Our team of former military operators 
              and tactical engineers understand what it takes to build gear that performs 
              under pressure.
            </p>
            <p>
              Every product we create is born from real-world experience. We've been in 
              the field, we've felt the weight of unreliable equipment, and we've designed 
              our gear to be different. From the reinforced stitching to the battle-tested 
              materials, every detail is intentional.
            </p>
            <p>
              When you choose Vanguard, you're not just buying tactical gear—you're 
              investing in equipment that's been refined through countless hours of 
              field testing, operator feedback, and uncompromising quality standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-12"
          >
            <div className="text-center">
              <p className="font-display text-4xl text-primary">2009</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Founded</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl text-primary">USA</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Made In</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl text-primary">∞</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Durability Promise</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;