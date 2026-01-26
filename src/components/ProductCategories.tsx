import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import apparelImage from "@/assets/category-apparel.jpg";
import carrierImage from "@/assets/category-carrier.jpg";
import backpackImage from "@/assets/category-backpack.jpg";
import bootsImage from "@/assets/category-boots.jpg";
import accessoriesImage from "@/assets/category-accessories.jpg";

const categories = [
  {
    title: "Tactical Apparel",
    description: "Combat shirts, pants, and outerwear engineered for mobility and protection.",
    image: apparelImage,
  },
  {
    title: "Plate Carriers & Vests",
    description: "Modular armor systems designed for customizable load configurations.",
    image: carrierImage,
  },
  {
    title: "Backpacks & Load Gear",
    description: "Mission-ready packs built to haul essential equipment in any environment.",
    image: backpackImage,
  },
  {
    title: "Boots & Footwear",
    description: "High-performance boots engineered for all-terrain operations.",
    image: bootsImage,
  },
  {
    title: "Accessories",
    description: "Belts, gloves, eyewear, and essential tactical accessories.",
    image: accessoriesImage,
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-subtitle text-primary mb-4 block">Product Categories</span>
          <h2 className="text-display-sm text-foreground mb-6">TACTICAL GEAR LINEUP</h2>
          <div className="divider-tactical mx-auto" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-tactical group cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-square"}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
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

export default ProductCategories;