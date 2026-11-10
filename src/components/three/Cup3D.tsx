"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Float } from "@react-three/drei";
import { Suspense } from "react";
import CupGLB, { CupGLBProps } from "./CupGLB";

type Cup3DProps = Omit<CupGLBProps, "url"> & {
  url?: string;
  interactive?: boolean;
  className?: string;
};

export default function Cup3D({
  interactive = false,
  className,
  url = "/models/cup-base.glb",
  ...cupProps
}: Cup3DProps) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1.2, 5], fov: 38 }}
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
          {interactive ? (
            <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
              <CupGLB url={url} {...cupProps} />
            </Float>
          ) : (
            <CupGLB url={url} {...cupProps} />
          )}

          <ContactShadows
            position={[0, -1.28, 0]}
            opacity={0.5}
            scale={8}
            blur={2.6}
            far={4}
          />
        </Suspense>

        {interactive && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.9}
          />
        )}
      </Canvas>
    </div>
  );
}
