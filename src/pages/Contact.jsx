import { motion } from "framer-motion";
import { Mail, Github, MessageSquare } from "lucide-react";
import Navbar from "@/components/solar-gamer/Navbar";
import Footer from "@/components/solar-gamer/Footer";

const contact = [
  {
    icon: Mail,
    label: "Email",
    value: "gaminganuragfromnameram@gmail.com",
    href: "mailto:gaminganuragfromnameram@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "gaminganuragfromnameram-lab",
    href: "https://github.com/gaminganuragfromnameram-lab",
  },
  {
    icon: MessageSquare,
    label: "Discord",
    value: "anuragg_",
    href: "#",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-rajdhani text-sm tracking-[0.4em] uppercase text-primary/80 mb-3">
              Get In Touch
            </p>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold">
              <span className="text-foreground">Contact </span>
              <span className="text-accent neon-text-magenta">Me</span>
            </h1>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-8 md:p-10 neon-border-magenta mb-10"
          >
            <p className="font-rajdhani text-lg text-muted-foreground text-center leading-relaxed">
              I'm always open to chatting about games, dev, or just geeking
              out. Feel free to reach out — I'll reply when I can.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contact.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm p-6 text-center hover:border-primary/30 hover:bg-card/60 transition-all"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-orbitron text-sm font-bold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="font-inter text-xs text-muted-foreground break-all">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
