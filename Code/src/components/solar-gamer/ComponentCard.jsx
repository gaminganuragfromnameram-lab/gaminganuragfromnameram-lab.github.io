import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ComponentCard({ component, index }) {
  const badgeStyles = {
    "Best Value": "bg-primary/20 text-primary border-primary/30",
    "Performance King": "bg-accent/20 text-accent border-accent/30",
    "Editor's Pick": "bg-secondary/20 text-secondary border-secondary/30",
    "Budget Champion": "bg-chart-5/20 text-chart-5 border-chart-5/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 neon-border-cyan hover:neon-border-magenta">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={component.image}
            alt={component.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          {/* Badge */}
          {component.badge && (
            <div className="absolute top-3 right-3">
              <Badge
                className={`${badgeStyles[component.badge] || ""} font-rajdhani text-xs tracking-wider border backdrop-blur-sm`}
              >
                {component.badge}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="font-rajdhani text-xs tracking-[0.2em] uppercase text-primary/60 mb-1">
            {component.category}
          </p>
          <h3 className="font-orbitron text-sm font-bold text-foreground mb-1">
            {component.name}
          </h3>
          <p className="font-rajdhani text-sm text-muted-foreground leading-relaxed mb-3">
            {component.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-orbitron text-lg font-bold text-primary">
              {component.price}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-4 rounded-full ${
                    i < component.rating ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hover glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
