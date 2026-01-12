import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Utensils, Waves, Leaf, Dumbbell, Car } from "lucide-react";
import spaImage from "@/assets/spa.jpg";
import diningImage from "@/assets/dining.jpg";

const amenities = [
  {
    icon: Sparkles,
    title: "The Sanctuary Spa",
    description: "Ancient healing traditions meet modern wellness in our award-winning spa.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Farm-to-table cuisine celebrating the finest Mediterranean ingredients.",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "A seamless horizon where azure waters meet the endless sky.",
  },
  {
    icon: Leaf,
    title: "Botanical Gardens",
    description: "Curated landscapes featuring rare Mediterranean flora and ancient trees.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Pavilion",
    description: "State-of-the-art equipment with panoramic views and personal trainers.",
  },
  {
    icon: Car,
    title: "Concierge Services",
    description: "Private excursions, yacht charters, and bespoke experiences await.",
  },
];

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-subtitle mb-4">Services</p>
          <h2 className="text-display text-foreground mb-6">
            Amenities & Experiences
          </h2>
          <div className="divider-elegant" />
        </motion.div>

        {/* Featured Images */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src={spaImage}
              alt="The Sanctuary Spa"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs tracking-widest uppercase text-ivory/70 mb-2">
                Wellness
              </p>
              <h3 className="font-display text-3xl text-ivory font-light">
                The Sanctuary Spa
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src={diningImage}
              alt="Fine Dining Restaurant"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs tracking-widest uppercase text-ivory/70 mb-2">
                Culinary
              </p>
              <h3 className="font-display text-3xl text-ivory font-light">
                Terre & Mer Restaurant
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                  <amenity.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-foreground mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
