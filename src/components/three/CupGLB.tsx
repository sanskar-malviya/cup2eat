"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export type CupGLBProps = {
  url: string;
  /** optional colour multiply to differentiate flavours */
  tint?: string;
  glossy?: boolean;
  spin?: boolean;
  /** target height in world units */
  targetHeight?: number;
};

export default function CupGLB({
  url,
  tint,
  glossy = false,
  spin = true,
  targetHeight = 2.5,
}: CupGLBProps) {
  const { scene } = useGLTF(url);
  const group = useRef<THREE.Group>(null);

  // clone the scene + materials so each instance tints independently,
  // then normalise scale and drop its base onto y=0.
  const { object, scale, yOffset } = useMemo(() => {
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
    box.getSize(size);
    const s = targetHeight / (size.y || 1);
    const yOff = -box.min.y * s; // base at y=0
    return { object: obj, scale: s, yOffset: yOff };
  }, [scene, tint, glossy, targetHeight]);

  useFrame((_, dt) => {
    if (spin && group.current) group.current.rotation.y += dt * 0.5;
  });

  return (
    <group ref={group} position={[0, yOffset - 1.25, 0]} scale={scale}>
      <primitive object={object} />
    </group>
  );
}

useGLTF.preload("/models/cup-base.glb");
useGLTF.preload("/models/cup-choc.glb");
