import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload any necessary assets here
    const preloadAssets = async () => {
      // Add any asset preloading logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Minimum loading time
    };

    preloadAssets();
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingScreen setIsLoading={setIsLoading} />
      ) : (
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App