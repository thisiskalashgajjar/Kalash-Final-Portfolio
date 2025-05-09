import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'three/src/math/MathUtils';

function ParticleField() {
  const ref = useRef<any>();
  
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  const count = 5000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = random.randFloatSpread(20);
    positions[i * 3 + 1] = random.randFloatSpread(20);
    positions[i * 3 + 2] = random.randFloatSpread(20);
  }

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#88ccff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const HomeThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <ParticleField />
    </Canvas>
  );
};

export default HomeThreeScene;