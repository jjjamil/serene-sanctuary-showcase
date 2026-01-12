import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import poolImage from "@/assets/pool.jpg";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-subtitle mb-4">The Experience</p>
            <h2 className="text-display text-foreground mb-8">
              A Legacy of<br />Quiet Luxury
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nestled along the sun-drenched Mediterranean coast, Aurelian is more 
                than a destination—it is a return to a time when travel was an art form, 
                when attention to detail was paramount, and when the journey itself was 
                as meaningful as the arrival.
              </p>
              <p>
                Here, we believe that true luxury whispers rather than shouts. 
                It lives in the warmth of terracotta tiles beneath bare feet, 
                in the scent of wild jasmine carried on the evening breeze, 
                in the unhurried pace of days that stretch toward golden horizons.
              </p>
              <p>
                Our commitment is simple: to create moments of extraordinary stillness 
                and beauty, curated for those who understand that the most precious 
                commodity is not extravagance, but peace.
              </p>
            </div>
            <motion.a
              href="#rooms"
              className="btn-luxury-outline mt-10 inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Accommodations
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={poolImage}
                alt="Infinity pool overlooking the Mediterranean"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
