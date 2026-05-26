import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  MonitorDot,
  MemoryStick,
  HardDrive,
  ScreenShare,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DropdownField from "./DropdownField";
import AdOverlay from "./AdOverlay";
import FPSResults from "./FPSResults";
import {
  cpuOptions,
  gpuOptions,
  ramOptions,
  storageOptions,
  displayOptions,
  gameOptions,
  calculateFPS,
} from "@/lib/calculatorData";

export default function CalculatorSection() {
  const [selections, setSelections] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    display: "",
    game: "",
  });
  const [error, setError] = useState("");
  const [showAd, setShowAd] = useState(false);
  const [results, setResults] = useState(null);

  const handleChange = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  const handleCalculate = () => {
    const empty = Object.entries(selections).filter(([, v]) => !v);
    if (empty.length > 0) {
      setError(
        "Please fill out all hardware specifications before calculating.",
      );
      return;
    }
    setError("");
    setResults(null);
    setShowAd(true);
  };

  const handleAdClose = useCallback(() => {
    setShowAd(false);
    const fps = calculateFPS(selections);
    setResults(fps);
  }, [selections]);

  return (
    <section id="calculator" className="relative py-24 md:py-32 px-6">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-rajdhani text-sm tracking-[0.4em] uppercase text-accent mb-3">
            System Analysis
          </p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Can Your Device </span>
            <span className="text-primary neon-text-cyan">Run The Game?</span>
          </h2>
          <p className="font-rajdhani text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Select your hardware specs and see estimated FPS across different
            quality settings.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Glassmorphic form container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-6 md:p-8 neon-border-cyan"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <DropdownField
              label="CPU"
              icon={Cpu}
              value={selections.cpu}
              onValueChange={(v) => handleChange("cpu", v)}
              options={cpuOptions}
              placeholder="Select your processor"
            />
            <DropdownField
              label="GPU"
              icon={MonitorDot}
              value={selections.gpu}
              onValueChange={(v) => handleChange("gpu", v)}
              options={gpuOptions}
              placeholder="Select your graphics card"
            />
            <DropdownField
              label="RAM"
              icon={MemoryStick}
              value={selections.ram}
              onValueChange={(v) => handleChange("ram", v)}
              options={ramOptions}
              placeholder="Select RAM configuration"
            />
            <DropdownField
              label="Storage"
              icon={HardDrive}
              value={selections.storage}
              onValueChange={(v) => handleChange("storage", v)}
              options={storageOptions}
              placeholder="Select storage type"
            />
            <DropdownField
              label="Display"
              icon={ScreenShare}
              value={selections.display}
              onValueChange={(v) => handleChange("display", v)}
              options={displayOptions}
              placeholder="Select refresh rate"
            />
            <DropdownField
              label="Game"
              icon={Gamepad2}
              value={selections.game}
              onValueChange={(v) => handleChange("game", v)}
              options={gameOptions}
              placeholder="Select a game"
            />
          </div>

          {/* Error message */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-center font-rajdhani text-sm text-destructive"
            >
              {error}
            </motion.p>
          )}

          {/* Calculate button */}
          <div className="mt-8 text-center">
            <Button
              onClick={handleCalculate}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron text-sm tracking-wider px-10 py-6 rounded-xl animate-pulse-neon transition-all"
            >
              Calculate
            </Button>
          </div>
        </motion.div>

        {/* FPS Results */}
        {results && <FPSResults results={results} game={selections.game} />}
      </div>

      {/* Ad overlay */}
      <AdOverlay isOpen={showAd} onClose={handleAdClose} />
    </section>
  );
}
