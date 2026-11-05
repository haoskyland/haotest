import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const points = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = window.innerWidth < 700 ? 1000 : 2600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const gold = new THREE.Color("#c7a56a");
    const cyan = new THREE.Color("#36d9e8");
    for (let i = 0; i < count; i++) {
      const radius = 1.4 + Math.random() * 2.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      const c = Math.random() > 0.82 ? cyan : gold;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.035;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.12;
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} vertexColors transparent opacity={0.82} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export function ParticleField() {
  return (
    <div className="particle-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 52 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <Particles />
      </Canvas>
    </div>
  );
}