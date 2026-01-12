import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomVilla from "@/assets/room-villa.jpg";

const rooms = [
  {
    name: "Ocean Suite",
    description: "Panoramic views of the endless blue, where dawn paints the sky in watercolors.",
    image: roomSuite,
    size: "85 m²",
    feature: "Private Terrace",
  },
  {
    name: "Deluxe Room",
    description: "Elegant simplicity with floor-to-ceiling windows embracing the Mediterranean light.",
    image: roomDeluxe,
    size: "55 m²",
    feature: "Sea View Balcony",
  },
  {
    name: "Garden Villa",
    description: "A secluded retreat surrounded by tropical gardens and ancient olive trees.",
    image: roomVilla,
    size: "120 m²",
    feature: "Private Garden",
  },
];

const RoomCard = ({ room, index }: { room: typeof rooms[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group card-luxury"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            {room.size}
          </span>
          <span className="w-6 h-px bg-border" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            {room.feature}
          </span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-3">
          {room.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {room.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground group-hover:text-gold transition-colors duration-300"
          style={{ letterSpacing: "0.1em" }}
        >
          Inquire
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-24 md:py-32 bg-cream">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-subtitle mb-4">Accommodations</p>
          <h2 className="text-display text-foreground mb-6">
            Rooms & Suites
          </h2>
          <div className="divider-elegant" />
          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Each space is a sanctuary designed for restorative rest, 
            where natural materials and thoughtful details create an atmosphere 
            of understated refinement.
          </p>
        </motion.div>

        {/* Room Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.name} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
