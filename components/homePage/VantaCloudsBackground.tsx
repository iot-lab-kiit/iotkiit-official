"use client";

import React, { useEffect, useRef } from "react";

const VantaCloudsBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;

    const initVanta = async () => {
      if (!vantaRef.current) return;

      // Dynamically import Three.js and Vanta to prevent SSR "window is not defined" errors
      const THREE = await import("three");
      
      // @ts-ignore - Vanta does not have official TypeScript definitions
      const { default: CLOUDS } = await import("vanta/dist/vanta.clouds.min");

      vantaEffect = CLOUDS({
        el: vantaRef.current,
        THREE, // Pass the dynamically imported THREE object
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        // Default Vanta Cloud Colors (Matches the website exactly)
        backgroundColor: 0xffffff,
        skyColor: 0x68b8d7,
        cloudColor: 0xadc1de,
        cloudShadowColor: 0x183550,
        sunColor: 0xff9919,
        sunGlareColor: 0xff6633,
        sunPosition: new THREE.Vector3(1.0, 2.0, 3.0),
        speed: 1.0, // Adjust animation speed here
      });
    };

    initVanta();

    // Cleanup function to prevent memory leaks and duplicate canvases on re-renders
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default VantaCloudsBackground;
