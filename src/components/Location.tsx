import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Plane, Ship } from "lucide-react";

const nearbyAttractions = [
  {
    name: "Historic Old Town",
    distance: "5 minutes",
    description: "Cobblestone streets, artisan boutiques, and centuries of history.",
  },
  {
    name: "Coastal Cliffs Trail",
    distance: "10 minutes",
    description: "Breathtaking hiking paths along dramatic Mediterranean cliffs.",
  },
  {
    name: "Local Vineyards",
    distance: "20 minutes",
    description: "Award-winning wineries offering private tastings and tours.",
  },
  {
    name: "Ancient Ruins",
    distance: "30 minutes",
    description: "Remarkably preserved Roman and Greek archaeological sites.",
  },
];

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Map Placeholder & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-subtitle mb-4">Find Us</p>
            <h2 className="text-display text-foreground mb-8">
              Your Journey<br />Begins Here
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />

            {/* Location Card */}
            <div className="bg-cream p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 text-gold mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Coastal Road 1<br />
                    Mediterranean Bay, 12345<br />
                    Southern Coast
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-gold mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Airport</p>
                    <p className="text-sm text-muted-foreground">45 min drive</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ship className="w-4 h-4 text-gold mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Marina</p>
                    <p className="text-sm text-muted-foreground">10 min walk</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Complimentary airport transfers available for all suite reservations.
            </p>
          </motion.div>

          {/* Right - Nearby Attractions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-subtitle mb-8">Nearby</p>
            <div className="space-y-8">
              {nearbyAttractions.map((attraction, index) => (
                <motion.div
                  key={attraction.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border-b border-border pb-8 last:border-0 last:pb-0 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      {attraction.distance}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-light text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {attraction.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {attraction.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
