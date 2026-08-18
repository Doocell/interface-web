import { useEffect, useState } from "react";

export default function BackgroundPattern() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) return;

    // Throttled scroll handler for parallax effect
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate scattered shapes with random positions
  const shapes = [
    // Squares
    { type: "square", top: "8%", left: "12%", size: 50, rotation: 45, delay: 0 },
    { type: "square", top: "15%", left: "78%", size: 40, rotation: 30, delay: 2 },
    { type: "square", top: "35%", left: "5%", size: 45, rotation: 60, delay: 4 },
    { type: "square", top: "52%", left: "88%", size: 55, rotation: 15, delay: 1 },
    { type: "square", top: "72%", left: "15%", size: 48, rotation: 75, delay: 3 },
    { type: "square", top: "85%", left: "70%", size: 42, rotation: 20, delay: 5 },
    
    // Circles
    { type: "circle", top: "12%", left: "45%", size: 60, rotation: 0, delay: 1.5 },
    { type: "circle", top: "28%", left: "82%", size: 50, rotation: 0, delay: 3.5 },
    { type: "circle", top: "45%", left: "25%", size: 55, rotation: 0, delay: 2.5 },
    { type: "circle", top: "68%", left: "50%", size: 45, rotation: 0, delay: 4.5 },
    { type: "circle", top: "78%", left: "92%", size: 52, rotation: 0, delay: 0.5 },
    
    // Diamonds (rotated squares)
    { type: "diamond", top: "20%", left: "62%", size: 48, rotation: 45, delay: 2.5 },
    { type: "diamond", top: "42%", left: "42%", size: 50, rotation: 30, delay: 4.5 },
    { type: "diamond", top: "58%", left: "65%", size: 46, rotation: 60, delay: 1.5 },
    { type: "diamond", top: "80%", left: "38%", size: 44, rotation: 45, delay: 3.5 },
  ];

  return (
    <>
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -12px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 8px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, 10px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, -6px); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, 5px); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5px, -10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-shape {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "#685ABB",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {shapes.map((shape, index) => {
          const animationType = (index % 6) + 1;
          const duration = 20 + (index % 5) * 5; // 20-40s
          
          // Subtle parallax offset based on scroll
          const parallaxOffset = scrollY * 0.02 * ((index % 3) - 1);

          return (
            <div
              key={index}
              className="bg-shape absolute"
              style={{
                top: shape.top,
                left: shape.left,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                background: "#4F429F",
                opacity: 0.3,
                borderRadius: shape.type === "circle" ? "50%" : shape.type === "diamond" ? "8px" : "4px",
                transform: `rotate(${shape.rotation}deg) translateY(${parallaxOffset}px)`,
                animation: `float-${animationType} ${duration}s ease-in-out infinite`,
                animationDelay: `${shape.delay}s`,
                willChange: "transform",
              }}
            />
          );
        })}
      </div>
    </>
  );
}