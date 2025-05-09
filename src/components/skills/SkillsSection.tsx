import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolioData';

const SkillsSection = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const categories = [
    { id: 'ai', title: 'AI & Machine Learning', color: 'from-purple-500 to-pink-500' },
    { id: 'web', title: 'Web Development', color: 'from-blue-500 to-teal-500' },
    { id: 'cloud', title: 'Cloud Computing & ML', color: 'from-green-500 to-emerald-500' },
    { id: 'tools', title: 'Tools & Technologies', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 hover:shadow-xl transition-shadow"
                    >
                      <div className="text-3xl">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;