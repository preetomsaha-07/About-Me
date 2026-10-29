
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Mesh, Points } from 'three';

function FloatingShapes() {
  const group = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);
  const particles = useRef<Points>(null);

  const positions = useMemo(() => {
    const values = new Float32Array(240 * 3);

    for (let i = 0; i < 240; i++) {
      const angle = (i / 240) * Math.PI * 2;
      const radius = 2.2 + ((i % 17) * 0.18);
      const height = ((i % 13) - 6) * 0.55;

      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = height;
      values[i * 3 + 2] = Math.sin(angle) * radius * 0.7;
    }

    return values;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.x += delta * 0.15;
      group.current.rotation.y += delta * 0.25;
      group.current.position.y = Math.sin(t * 0.7) * 0.25;
      group.current.position.x +=
        (state.pointer.x * 0.5 - group.current.position.x) *
        Math.min(delta, 0.05);
    }

    if (ring.current) {
      ring.current.rotation.x = 1.1 + state.pointer.y * 0.15;
      ring.current.rotation.z += delta * 0.12;
    }

    if (particles.current) {
      particles.current.rotation.y += delta * 0.015;
      particles.current.rotation.x = state.pointer.y * 0.04;
    }
  });

  return (
    <>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#60a5fa"
          size={0.035}
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      <mesh ref={group} position={[2.5, 0, 0]}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          emissive="#2563eb"
          emissiveIntensity={0.35}
        />
      </mesh>

      <mesh ref={ring} position={[2.5, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 8, 100]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.8}
        />
      </mesh>

      <ambientLight intensity={1.2} />
      <pointLight position={[3, 2, 4]} intensity={2} color="#38bdf8" />
      <pointLight position={[-3, -2, 2]} intensity={1.5} color="#8b5cf6" />
    </>
  );
}

export function DynamicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.06] via-transparent to-violet-500/[0.08]" />

      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
