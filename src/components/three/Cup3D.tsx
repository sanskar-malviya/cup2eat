"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import { Suspense } from "react";
import CupGLB from "./CupGLB";

type Cup3DProps = {
  url?: string;
  tint?: string;
  glossy?: boolean;
  variant?: "hero" | "card";
  className?: string;
};

export default function Cup3D({
  url = "/models/cup-base.glb",
  tint,
  glossy,
  variant = "card",
  className,
}: Cup3DProps) {
  const hero = variant === "hero";

  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: hero ? [0, 0, 7] : [0, 1.1, 5], fov: hero ? 30 : 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <hemisphereLight args={["#fff4e0", "#20321f", 0.7]} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#c8a24b" />
        <pointLight position={[0, 3, 3]} intensity={0.6} color="#ffe8c0" />

        <Suspense fallback={null}>
          {hero ? (
            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
              <CupGLB
                url={url}
                tint={tint}
                glossy={glossy}
                anchor="center"
                targetHeight={2.0}
                scrollReact
                spin
              />
            </Float>
          ) : (
            <>
              <CupGLB
                url={url}
                tint={tint}
                glossy={glossy}
                anchor="base"
                targetHeight={2.1}
                spin
              />
              <ContactShadows
                position={[0, -1.28, 0]}
                opacity={0.45}
                scale={7}
                blur={2.6}
                far={4}
              />
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
