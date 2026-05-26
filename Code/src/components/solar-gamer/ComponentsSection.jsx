import { motion } from "framer-motion";
import ComponentCard from "./ComponentCard";

const components = [
  {
    category: "Processor",
    name: "AMD Ryzen 7 7800X3D",
    description:
      "The ultimate gaming CPU with 3D V-Cache technology. Unmatched frame rates across all titles.",
    price: "$349",
    rating: 5,
    badge: "Performance King",
    image:
      "https://media.base44.com/images/public/6a1583a29cda5e799d2b6c3c/2132b452a_generated_68259b15.png",
  },
  {
    category: "Graphics Card",
    name: "NVIDIA RTX 4070 Super",
    description:
      "Sweet-spot GPU for 1440p gaming. Ray tracing & DLSS 3 power at an incredible price point.",
    price: "$599",
    rating: 5,
    badge: "Best Value",
    image:
      "https://media.base44.com/images/public/6a1583a29cda5e799d2b6c3c/3f2ef1448_generated_5d37ee38.png",
  },
  {
    category: "Memory",
    name: "G.Skill Trident Z5 32GB DDR5",
    description:
      "6000MHz CL30 — blazing fast DDR5 kit optimized for AMD and Intel platforms.",
    price: "$109",
    rating: 4,
    badge: "Editor's Pick",
    image:
      "https://media.base44.com/images/public/6a1583a29cda5e799d2b6c3c/07ea31a7d_generated_c8042611.png",
  },
  {
    category: "Storage",
    name: "Samsung 990 Pro 2TB NVMe",
    description:
      "PCIe 4.0 speeds with 7,450 MB/s reads. Load games in the blink of an eye.",
    price: "$149",
    rating: 5,
    badge: "Best Value",
    image:
      "https://media.base44.com/images/public/6a1583a29cda5e799d2b6c3c/a6d04c367_generated_098ddf0a.png",
  },
  {
    category: "Motherboard",
    name: "MSI MAG B650 Tomahawk",
    description:
      "Feature-rich AM5 board with robust VRMs, DDR5 support, and premium connectivity.",
    price: "$199",
    rating: 4,
    badge: "Budget Champion",
    image:
      "https://media.base44.com/images/public/6a1583a29cda5e799d2b6c3c/5220d018d_generated_5378c8f2.png",
  },
  {
    category: "Power Supply",
    name: "Corsair RM850x (2024)",
    description:
      "80+ Gold certified, fully modular, with zero-RPM fan mode for silent operation.",
    price: "$139",
    rating: 4,
    badge: "Editor's Pick",
    image:
      "https://media.base44.com/images/public/6a1583a29cda5e799d2b6c3c/c9bfe8bae_generated_3b4bf5ad.png",
  },
];

export default function ComponentsSection() {
  return (
    <section id="components" className="relative py-24 md:py-32 px-6">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-rajdhani text-sm tracking-[0.4em] uppercase text-accent mb-3">
            Curated Hardware
          </p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Component </span>
            <span className="text-primary neon-text-cyan">Arsenal</span>
          </h2>
          <p className="font-rajdhani text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Handpicked for exceptional price-to-performance. Every piece of
            hardware here has been tested and verified to deliver the best value
            for competitive and immersive gaming.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((comp, idx) => (
            <ComponentCard key={comp.name} component={comp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
