import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Events from './components/Events';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Preloader from './components/Preloader';
import Registration from './components/Registration';
import Transport from './components/Transport';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-all duration-500`}>
      <div className="bg-gray-900 dark:bg-black text-white min-h-screen relative overflow-x-hidden">
        <ParticleBackground />
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="events">
            <Events />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
          
          <section id="transport">
            <Transport />
          </section>
          
          <section id="registration">
            <Registration />
          </section>
        </motion.main>
        
        <BackToTop />
      </div>
    </div>
  );
}

export default App;