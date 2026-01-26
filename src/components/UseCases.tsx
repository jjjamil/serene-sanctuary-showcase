import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Mountain, Target, Building2 } from "lucide-react";

import militaryImage from "@/assets/usecase-military.jpg";
import outdoorImage from "@/assets/usecase-outdoor.jpg";

const useCases = [
  {
    icon: Shield,
    title: "Military & Law Enforcement",
    description: "Purpose-built gear for active duty personnel and first responders requiring mission-critical reliability.",
  },
  {
    icon: Mountain,
    title: "Outdoor & Survival",
    description: "Rugged equipment designed for extreme environments, from mountain expeditions to wilderness survival.",
  },
  {
    icon: Target,
    title: "Training & Range",
    description: "Durable training gear built to withstand repeated use in shooting ranges and tactical courses.",
  },
  {
    icon: Building2,
    title: "Urban Tactical",
    description: "Low-profile tactical solutions for urban environments and professional security operations.",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-subtitle text-primary mb-4 block">Applications</span>
          <h2 className="text-display-sm text-foreground mb-6">BUILT FOR EVERY MISSION</h2>
          <div className="divider-tactical mx-auto" />
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden aspect-[4/3] group"
          >
            <img
              src={militaryImage}
              alt="Military operations"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-display text-2xl text-foreground">FIELD OPERATIONS</h3>
              <p className="text-sm text-muted-foreground">Trusted in the most demanding environments</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden aspect-[4/3] group"
          >
            <img
              src={outdoorImage}
              alt="Outdoor survival"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-display text-2xl text-foreground">WILDERNESS READY</h3>
              <p className="text-sm text-muted-foreground">Engineered for extreme conditions</p>
            </div>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <useCase.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-foreground mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;