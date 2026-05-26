import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import StarfieldCanvas from "./StarfieldCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated starfield background */}
      <StarfieldCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Glowing orb behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-rajdhani text-sm md:text-base tracking-[0.4em] uppercase text-primary/80 mb-4">
            Enter the Cosmos
          </p>

          <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
            <span className="neon-text-cyan text-primary">SOLAR</span>
            <br />
            <span className="neon-text-magenta text-accent">GAMER</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-8 md:mt-12"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-rajdhani text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Forge your ultimate gaming rig with hardware that defies the
            boundaries of performance. From competitive esports to cinematic
            open worlds — dominate every frame, every fight, every universe.
            Your cosmic journey to peak gaming starts here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-16"
        >
          <button
            onClick={() =>
              document
                .getElementById("components")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-rajdhani text-xs tracking-[0.3em] uppercase">
              Explore
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
