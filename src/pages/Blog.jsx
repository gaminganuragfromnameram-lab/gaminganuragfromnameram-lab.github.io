import { motion } from "framer-motion";
import {
  Lightbulb,
  Wrench,
  Gamepad2,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/solar-gamer/Navbar";
import Footer from "@/components/solar-gamer/Footer";

const posts = [
  {
    icon: Lightbulb,
    date: "May 2026",
    title: "Starting Your First Indie Game",
    excerpt:
      "The hardest step is starting. Pick a small scope, use a engine you enjoy (Godot, Unity, or even Pygame), and focus on a core mechanic that's fun. Don't try to build an MMO alone — make a tiny, polished game first. My first project was a simple 2D platformer, and I learned more from that than any tutorial.",
  },
  {
    icon: Gamepad2,
    date: "April 2026",
    title: "Why Python is Great for Game Prototyping",
    excerpt:
      "Python + Pygame or Arcade lets you iterate fast. You can prototype a gameplay idea in hours instead of days. It won't ship a AAA title, but it's perfect for testing mechanics, building tools, and learning game dev fundamentals. I use Python for all my early-stage prototypes before moving to a more performant engine.",
  },
  {
    icon: Wrench,
    date: "March 2026",
    title: "PC Building Tips for Indie Devs",
    excerpt:
      "You don't need a top-tier rig to make games. A mid-range CPU (Ryzen 5 or Core i5), 16GB RAM, and a decent GPU (RTX 3060 class) will run most engines fine. Invest in a good monitor and comfortable chair — you'll be sitting for hours. And always use an NVMe SSD; the load time difference is massive.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-rajdhani text-sm tracking-[0.4em] uppercase text-primary/80 mb-3">
              Thoughts &amp; Tips
            </p>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold">
              <span className="text-foreground">The </span>
              <span className="text-primary neon-text-cyan">Blog</span>
            </h1>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Posts */}
          <div className="space-y-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center shrink-0">
                    <post.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground/60" />
                      <span className="font-inter text-xs text-muted-foreground/60">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-orbitron text-lg md:text-xl font-bold text-foreground mb-3">
                      {post.title}
                    </h2>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
