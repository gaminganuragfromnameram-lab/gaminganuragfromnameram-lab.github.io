import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let isVisible = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Pause animation when hero is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    const nebulae = [
      { x: 0.2, y: 0.3, radius: 300, color: "186, 100%, 50%", opacity: 0.03 },
      { x: 0.8, y: 0.6, radius: 250, color: "290, 80%, 55%", opacity: 0.025 },
      { x: 0.5, y: 0.8, radius: 350, color: "320, 85%, 55%", opacity: 0.02 },
    ];

    let frame = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach((n) => {
        const gradient = ctx.createRadialGradient(
          n.x * canvas.width,
          n.y * canvas.height,
          0,
          n.x * canvas.width,
          n.y * canvas.height,
          n.radius,
        );
        gradient.addColorStop(0, `hsla(${n.color}, ${n.opacity})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw and update stars
      stars.forEach((star) => {
        const twinkle =
          Math.sin(frame * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 240, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y < -5) {
          star.y = canvas.height + 5;
          star.x = Math.random() * canvas.width;
        }
      });
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
