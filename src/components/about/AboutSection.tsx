import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../../data/portfolioData';
import { Brain, Code, Database, Server } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate Software Engineering Technology student specializing in Artificial Intelligence. 
              My journey in tech is driven by a fascination with how AI can solve complex real-world problems 
              and transform industries.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong foundation in both traditional software engineering and cutting-edge AI technologies, 
              I bring a unique perspective to every project I undertake.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">{edu.degree}</h4>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">AI/ML</h4>
            <p className="text-gray-600 dark:text-gray-300">Deep learning and Neural Networks</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <Code className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Development</h4>
            <p className="text-gray-600 dark:text-gray-300">Full-Stack Development</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <Database className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Data Science</h4>
            <p className="text-gray-600 dark:text-gray-300">Data analysis and visualization</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <Server className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Cloud Computing</h4>
            <p className="text-gray-600 dark:text-gray-300">Cloud-native solutions</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;