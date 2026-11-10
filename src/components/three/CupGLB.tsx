"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export type CupGLBProps = {
  url: string;
  tint?: string;
  glossy?: boolean;
  spin?: boolean;
  targetHeight?: number;
  anchor?: "center" | "base";
  /** rotate/tilt a little as the page scrolls (hero only) */
  scrollReact?: boolean;
};

export default function CupGLB({
  url,
  tint,
  glossy = false,
  spin = true,
  targetHeight = 2.1,
  anchor = "center",
  scrollReact = false,
}: CupGLBProps) {
  const { scene } = useGLTF(url);
  const group = useRef<THREE.Group>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    if (!scrollReact) return;
    const onScroll = () => {
      scrollY.current = window.scrollY || 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollReact]);

  const { object, scale, offsetY } = useMemo(() => {
    const obj = scene.clone(true);
    obj.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = true;
        const mat = (m.material as THREE.MeshStandardMaterial).clone();
        if (tint) mat.color = new THREE.Color(tint);
        if (glossy) {
          mat.roughness = 0.22;
          mat.metalness = 0.3;
        }
        mat.needsUpdate = true;
        m.material = mat;
      }
    });
    const box = new THREE.Box3().setFromObject(obj);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const s = targetHeight / (size.y || 1);
    const off = anchor === "base" ? -box.min.y * s : -center.y * s;
    return { object: obj, scale: s, offsetY: off };
  }, [scene, tint, glossy, targetHeight, anchor]);

  const baseY = anchor === "base" ? -1.25 : 0;

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    if (spin) g.rotation.y += dt * 0.35;
    if (scrollReact) {
      g.rotation.y += scrollY.current * 0.0006;
      g.rotation.x = Math.sin(scrollY.current * 0.0012) * 0.12;
      g.position.y =
        offsetY + baseY + Math.sin(state.clock.elapsedTime * 1.1) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0, offsetY + baseY, 0]} scale={scale}>
      <primitive object={object} />
    </group>
  );
}

useGLTF.preload("/models/cup-base.glb");
useGLTF.preload("/models/cup-choc.glb");
