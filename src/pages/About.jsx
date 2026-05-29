import { motion } from "framer-motion";
import {
  Code2,
  Gamepad2,
  Palette,
  Video,
  User,
  Brain,
} from "lucide-react";
import Navbar from "@/components/solar-gamer/Navbar";
import Footer from "@/components/solar-gamer/Footer";

const traits = [
  {
    icon: Code2,
    label: "Python Developer",
    desc: "I write clean, efficient Python code for tools, scripts, and game logic.",
  },
  {
    icon: Gamepad2,
    label: "Indie Game Developer",
    desc: "Working on my own game — designing mechanics, building worlds, and bringing ideas to life.",
  },
  {
    icon: Palette,
    label: "Artist",
    desc: "Good at art and visual design — from concept sketches to pixel art and UI.",
  },
  {
    icon: Video,
    label: "Video Editor",
    desc: "I edit gameplay trailers, dev logs, and creative content for my projects.",
  },
  {
    icon: User,
    label: "Introvert \u{1F609}",
    desc: "I thrive in quiet, focused environments. My best work happens when I'm deep in the code.",
  },
  {
    icon: Brain,
    label: "Gamer",
    desc: "Gaming is both my passion and my teacher — it's what inspired me to start making games.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-rajdhani text-sm tracking-[0.4em] uppercase text-primary/80 mb-3">
              Who I Am
            </p>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold">
              <span className="text-foreground">About </span>
              <span className="text-accent neon-text-magenta">Me</span>
            </h1>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-8 md:p-10 neon-border-cyan mb-12"
          >
            <p className="font-rajdhani text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hey there! I'm <span className="text-primary font-bold">Anurag Singh</span>, an
              undergraduate student and indie game developer who loves
              building things that people enjoy. I code in Python, make art,
              edit videos, and I'm currently working on my own game. I'm an
              introvert by nature, which means I pour that quiet energy into
              creative work — whether it's designing a game mechanic or
              tweaking a shader until it feels just right. This site is my
              corner of the internet to share what I'm building and learning.
            </p>
          </motion.div>

          {/* Traits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-6 hover:border-primary/30 transition-colors"
              >
                <trait.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-orbitron text-sm font-bold text-foreground mb-2">
                  {trait.label}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
