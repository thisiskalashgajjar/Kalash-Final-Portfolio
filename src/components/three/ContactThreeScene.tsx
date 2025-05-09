import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodesCount = 50;
  const nodes = Array(nodesCount).fill(null).map(() => ({
    position: new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(10),
      THREE.MathUtils.randFloatSpread(10),
      THREE.MathUtils.randFloatSpread(10)
    ),
    speed: THREE.MathUtils.randFloat(0.1, 0.3)
  }));

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      nodes.forEach((node, i) => {
        const sphere = groupRef.current!.children[i];
        sphere.position.y = node.position.y + Math.sin(clock.getElapsedTime() * node.speed) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Sphere key={i} position={node.position.toArray()} args={[0.1, 16, 16]}>
          <meshPhongMaterial color="#4299e1" />
        </Sphere>
      ))}
    </group>
  );
}

const ContactThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <NeuralNetwork />
    </Canvas>
  );
};

export default ContactThreeScene;