import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-hotel.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomVilla from "@/assets/room-villa.jpg";
import spaImage from "@/assets/spa.jpg";
import diningImage from "@/assets/dining.jpg";
import poolImage from "@/assets/pool.jpg";

const galleryImages = [
  { src: heroImage, alt: "Hotel exterior at sunset", span: "col-span-2 row-span-2" },
  { src: roomSuite, alt: "Ocean Suite interior", span: "col-span-1 row-span-1" },
  { src: diningImage, alt: "Fine dining experience", span: "col-span-1 row-span-1" },
  { src: spaImage, alt: "Spa treatment room", span: "col-span-1 row-span-2" },
  { src: poolImage, alt: "Infinity pool sunset", span: "col-span-1 row-span-1" },
  { src: roomVilla, alt: "Garden villa", span: "col-span-1 row-span-1" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-subtitle mb-4">Visual Journey</p>
          <h2 className="text-display text-foreground mb-6">
            Gallery
          </h2>
          <div className="divider-elegant" />
        </motion.div>

        {/* Gallery Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
