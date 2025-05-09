import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import HomeThreeScene from '../three/HomeThreeScene';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HomeThreeScene />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            AI Developer & Engineer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Transforming ideas into intelligent solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
            <a
              href="src/components/home/KalashTejendraGajjar_Resume.pdf"
              download="KalashTejendraGajjar_Resume.pdf"
              className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="h-8 w-8 text-gray-900 dark:text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;