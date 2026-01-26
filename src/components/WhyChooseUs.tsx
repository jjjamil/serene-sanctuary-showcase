import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Mountain, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Field-Tested Materials",
    description: "Every product is rigorously tested in real-world conditions before deployment.",
  },
  {
    icon: Mountain,
    title: "Extreme Conditions Ready",
    description: "Built to perform from arctic cold to desert heat, our gear never fails you.",
  },
  {
    icon: Zap,
    title: "Mission-Critical Design",
    description: "Military and law enforcement inspired engineering for maximum effectiveness.",
  },
  {
    icon: Award,
    title: "Lifetime Durability Promise",
    description: "We stand behind our products with an industry-leading durability guarantee.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-subtitle text-primary mb-4 block">Why Vanguard</span>
            <h2 className="text-display-sm text-foreground mb-6">
              TRUSTED BY PROFESSIONALS
            </h2>
            <div className="divider-tactical mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              For over 15 years, Vanguard has been the trusted choice for military units, 
              law enforcement agencies, and tactical professionals worldwide. Our commitment 
              to quality isn't just a promise—it's built into every stitch, every seam, 
              every component.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with operators in the field to understand what they need. 
              The result? Gear that performs when it matters most.
            </p>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;