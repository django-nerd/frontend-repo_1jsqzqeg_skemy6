import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

// Full-screen 3D buildings background that subtly moves with scroll
export default function BuildingsBackground({ scrollY = 0 }) {
  // Parallax translate based on scroll
  const translateY = useMemo(() => {
    // gentle movement: 20% of scroll
    return Math.min(scrollY * 0.2, 400); // cap so it doesn't drift too far
  }, [scrollY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: 'transform 0.1s linear',
          willChange: 'transform',
        }}
      >
        <Spline
          scene="https://prod.spline.design/1TqjzqP5-0Y4u5U8/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve contrast; pointer-events-none so 3D remains interactive */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </div>
  );
}
