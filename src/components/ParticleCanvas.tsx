"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 600 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = Math.random() * 3 + 1;
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    const pos = mesh.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i);
      pos.setY(i, y + Math.sin(state.clock.elapsedTime * 0.5 + i * 0.1) * 0.002);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} count={count} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#1A1A1A" transparent opacity={0.15} sizeAttenuation />
    </points>
  );
}

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
  });
  return (
    <group ref={groupRef} position={[3, 1, -3]}>
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="#FF2A2A" wireframe transparent opacity={0.08} />
      </mesh>
      <mesh position={[-2, -1, 1]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#2A2AFF" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function ParticleCanvas() {
  return (
    <div className="hero-canvas">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}>
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
