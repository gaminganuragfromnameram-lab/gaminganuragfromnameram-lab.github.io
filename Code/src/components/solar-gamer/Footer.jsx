export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="font-orbitron text-lg font-bold">
          <span className="text-primary">SOLAR</span>{" "}
          <span className="text-accent">GAMER</span>
        </h3>
        <p className="font-rajdhani text-sm text-muted-foreground mt-2">
          Forge your cosmic gaming destiny.
        </p>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-4 mb-4" />
        <p className="font-inter text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Solar Gamer. All rights reserved. Not
          affiliated with any hardware manufacturer.
        </p>
      </div>
    </footer>
  );
}
