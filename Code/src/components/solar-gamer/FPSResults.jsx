import { motion } from "framer-motion";
import { Monitor, Gauge, Zap } from "lucide-react";

const tiers = [
  {
    key: "low",
    label: "Low",
    icon: Monitor,
    color: "text-chart-5",
    barColor: "bg-chart-5",
    glowColor: "shadow-chart-5/30",
  },
  {
    key: "medium",
    label: "Medium",
    icon: Gauge,
    color: "text-primary",
    barColor: "bg-primary",
    glowColor: "shadow-primary/30",
  },
  {
    key: "high",
    label: "High",
    icon: Zap,
    color: "text-accent",
    barColor: "bg-accent",
    glowColor: "shadow-accent/30",
  },
];

export default function FPSResults({ results, game }) {
  if (!results) return null;

  const maxFPS = Math.max(results.low, results.medium, results.high, 60);

  const getRating = (fps) => {
    if (fps >= 144) return { text: "Excellent", emoji: "🟢" };
    if (fps >= 60) return { text: "Smooth", emoji: "🟡" };
    if (fps >= 30) return { text: "Playable", emoji: "🟠" };
    return { text: "Struggle", emoji: "🔴" };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 neon-border-cyan">
        <div className="text-center mb-6">
          <p className="font-rajdhani text-xs tracking-[0.3em] uppercase text-primary mb-1">
            Results For
          </p>
          <h3 className="font-orbitron text-xl font-bold text-foreground">
            {game}
          </h3>
        </div>

        <div className="space-y-5">
          {tiers.map((tier, idx) => {
            const fps = results[tier.key];
            const rating = getRating(fps);
            const barWidth = Math.min((fps / maxFPS) * 100, 100);

            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 + 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <tier.icon className={`w-4 h-4 ${tier.color}`} />
                    <span className="font-rajdhani text-sm font-medium text-foreground">
                      {tier.label} Graphics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-rajdhani text-xs text-muted-foreground">
                      {rating.emoji} {rating.text}
                    </span>
                    <span
                      className={`font-orbitron text-lg font-bold ${tier.color}`}
                    >
                      {fps}
                    </span>
                    <span className="font-rajdhani text-xs text-muted-foreground">
                      FPS
                    </span>
                  </div>
                </div>

                {/* Bar */}
                <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${barWidth}%` }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.15 + 0.3,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full ${tier.barColor} shadow-lg ${tier.glowColor}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="font-inter text-xs text-muted-foreground text-center mt-6">
          * Estimated FPS at 1080p. Actual performance may vary based on driver
          versions, game patches, and system configuration.
        </p>
      </div>
    </motion.div>
  );
}
