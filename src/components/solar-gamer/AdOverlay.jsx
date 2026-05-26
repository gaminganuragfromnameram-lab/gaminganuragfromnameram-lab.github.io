import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function AdOverlay({ isOpen, onClose }) {
  const [progress, setProgress] = useState(0);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setCanSkip(false);
      return;
    }

    const totalDuration = 4000;
    const skipDelay = 3000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));

      if (elapsed >= skipDelay) setCanSkip(true);
      if (elapsed >= totalDuration) {
        clearInterval(timer);
        onClose();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md w-full mx-6"
          >
            {/* Ad container */}
            <div className="rounded-xl border border-border/50 bg-card p-8 text-center neon-border-cyan">
              {/* Skip button */}
              <div className="absolute top-3 right-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  disabled={!canSkip}
                  className={`h-8 w-8 rounded-full transition-all ${
                    canSkip
                      ? "text-foreground hover:text-primary hover:bg-primary/10"
                      : "text-muted-foreground/30 cursor-not-allowed"
                  }`}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="font-rajdhani text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Sponsored Content
              </p>

              {/* Ad placeholder */}
              <div className="w-[300px] h-[250px] mx-auto rounded-lg border border-dashed border-border/50 bg-muted/30 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                  </div>
                  <p className="font-rajdhani text-sm text-muted-foreground">
                    Ad Space — 300×250
                  </p>
                </div>
              </div>

              {/* Loading section */}
              <div className="space-y-3">
                <p className="font-rajdhani text-sm text-primary tracking-wider">
                  Analyzing hardware performance...
                </p>
                <Progress value={progress} className="h-1.5 bg-muted" />
                <p className="font-rajdhani text-xs text-muted-foreground">
                  {canSkip ? (
                    <button
                      onClick={onClose}
                      className="text-primary hover:underline"
                    >
                      Skip →
                    </button>
                  ) : (
                    `Skip available in ${Math.max(0, Math.ceil((3000 - (progress / 100) * 4000) / 1000))}s`
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
