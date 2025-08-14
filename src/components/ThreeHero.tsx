import React, { Suspense, useEffect, useMemo, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import heroFallback from "@/assets/hero-fallback.png";

function SpinningTorus() {
  const color = useMemo(() => "hsl(145 80% 45% / 0.9)", []);
  return (
    <mesh rotation={[0.4, 0.2, 0.1]}>
      <torusKnotGeometry args={[1.3, 0.35, 220, 32]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={0.6} color={"#1B263B"} metalness={0.4} roughness={0.2} />
    </mesh>
  );
}

class ErrorBoundary extends React.Component<{ fallback: ReactNode; children?: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() {}
  render() { return this.state.hasError ? (this.props.fallback as any) : (this.props.children as any); }
}

const supportsWebGL = (): boolean => {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl" as any));
  } catch {
    return false;
  }
};

const prefersReduced = (): boolean => {
  if (typeof window === "undefined" || !("matchMedia" in window)) return false;
  try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; }
};

export const ThreeHero = () => {
  const [webgl] = useState<boolean>(() => supportsWebGL());
  const [reduced, setReduced] = useState<boolean>(() => prefersReduced());

  useEffect(() => {
    if (!("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const fallback = (
    <img src={heroFallback} alt="DevPerfection hero background with abstract neon accents" className="w-full h-[420px] object-cover rounded-xl ring-1 ring-border shadow-[var(--shadow-elegant)]" loading="eager" />
  );

  if (reduced || !webgl) return fallback;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden ring-1 ring-border shadow-[var(--shadow-elegant)]">
      <ErrorBoundary fallback={fallback}>
        <Canvas camera={{ position: [0, 0, 4] }} style={{ height: 420 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Suspense fallback={null}>
            <SpinningTorus />
            <Stars radius={100} depth={50} saturation={0} fade speed={0.5} count={1500} />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        </Canvas>
      </ErrorBoundary>
    </motion.div>
  );
};

