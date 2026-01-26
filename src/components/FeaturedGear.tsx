import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import carrierImage from "@/assets/featured-carrier.jpg";
import packImage from "@/assets/featured-pack.jpg";
import jacketImage from "@/assets/featured-jacket.jpg";
import beltImage from "@/assets/featured-belt.jpg";

const featuredProducts = [
  {
    name: "VANGUARD MODULAR PLATE CARRIER",
    category: "Body Armor",
    image: carrierImage,
    specs: [
      "500D Cordura® Construction",
      "Laser-cut MOLLE webbing",
      "Quick-release system",
      "Adjustable cummerbund",
    ],
  },
  {
    name: "RANGER 3-DAY ASSAULT PACK",
    category: "Load Bearing",
    image: packImage,
    specs: [
      "45L Capacity",
      "Hydration compatible",
      "Reinforced grab handles",
      "Ventilated back panel",
    ],
  },
  {
    name: "PHANTOM FIELD JACKET",
    category: "Apparel",
    image: jacketImage,
    specs: [
      "Ripstop nylon shell",
      "DWR water resistance",
      "Concealed carry pockets",
      "Articulated elbows",
    ],
  },
  {
    name: "OPERATOR DUTY RIG",
    category: "Accessories",
    image: beltImage,
    specs: [
      "1.75\" Duty belt system",
      "Polymer quick-release",
      "MOLLE-compatible",
      "Padded inner belt",
    ],
  },
];

const FeaturedGear = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="featured" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-subtitle text-primary mb-4 block">Featured Gear</span>
          <h2 className="text-display-sm text-foreground mb-6">SIGNATURE EQUIPMENT</h2>
          <div className="divider-tactical mx-auto" />
        </motion.div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-tactical group"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center bg-card">
                  <span className="text-xs uppercase tracking-widest text-primary mb-2">
                    {product.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <button className="text-sm text-primary uppercase tracking-wider font-medium hover:text-olive-light transition-colors duration-300 text-left group/btn">
                    Learn More
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGear;