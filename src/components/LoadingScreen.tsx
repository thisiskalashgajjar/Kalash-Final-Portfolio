import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const LoadingBall = () => {
  return (
    <Sphere args={[1, 32, 32]} scale={2}>
      <MeshDistortMaterial
        color="#4299e1"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const LoadingScreen = ({ setIsLoading }: { setIsLoading: (value: boolean) => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, setIsLoading]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      >
        <div className="relative w-full max-w-md p-8 text-center">
          <div className="h-64 mb-8">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <LoadingBall />
            </Canvas>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-2 bg-blue-500 rounded-full"
          />
          <p className="mt-4 text-xl font-semibold text-white">{progress}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;