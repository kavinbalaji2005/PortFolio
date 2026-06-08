import { useRef, useState } from "react";

/**
 * SpotlightCard — glassmorphic card with mouse-tracking spotlight.
 * Responds to mouse position with radial gradient highlight.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.08)",
}) {
  const divRef = useRef(null);
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setSpotlightOpacity(1);
  };

  const handleMouseLeave = () => {
    setSpotlightOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 shadow-2xl transition-shadow duration-500 hover:shadow-[0_16px_80px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Spotlight radial gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500"
        style={{
          opacity: spotlightOpacity,
          background: `radial-gradient(700px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Edge glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
        style={{
          opacity: spotlightOpacity * 0.5,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.02)`,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
