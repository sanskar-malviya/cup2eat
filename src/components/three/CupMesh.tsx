"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type CupMeshProps = {
  /** outer wall colour (biscuit, chocolate, etc.) */
  color?: string;
  /** liquid surface colour; omit for an empty cup */
  drinkColor?: string;
  /** glossy chocolate-coated finish */
  glossy?: boolean;
  spin?: boolean;
};

/**
 * Procedural edible "kulhad" cup built from a lathe profile.
 * Placeholder standing in for the Meshy GLB — same look & slot, swapped later.
 */
export default function CupMesh({
  color = "#b06a3a",
  drinkColor,
  glossy = false,
  spin = true,
}: CupMeshProps) {
  const group = useRef<THREE.Group>(null);

  // profile points (radius, height) revolved around Y -> hollow cup w/ thick base
  const geometry = useMemo(() => {
    const p = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.56, 0.0),
      new THREE.Vector2(0.64, 0.5),
      new THREE.Vector2(0.73, 1.4),
      new THREE.Vector2(0.78, 1.95),
      new THREE.Vector2(0.8, 2.0),
      new THREE.Vector2(0.7, 2.0),
      new THREE.Vector2(0.66, 1.6),
      new THREE.Vector2(0.58, 0.6),
      new THREE.Vector2(0.42, 0.35),
      new THREE.Vector2(0.0, 0.35),
    ];
    const g = new THREE.LatheGeometry(p, 96);
    g.computeVertexNormals();
    return g;
  }, []);

  useFrame((_, dt) => {
    if (spin && group.current) group.current.rotation.y += dt * 0.5;
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color={color}
          roughness={glossy ? 0.18 : 0.72}
          metalness={glossy ? 0.25 : 0.05}
          flatShading={false}
        />
      </mesh>

      {drinkColor && (
        <mesh position={[0, 1.78, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.7, 64]} />
          <meshStandardMaterial
            color={drinkColor}
            roughness={0.25}
            metalness={0.1}
          />
        </mesh>
      )}
    </group>
  );
}
