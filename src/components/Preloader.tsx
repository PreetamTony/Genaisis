import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import splashBackground from '../assets/splash-background.jpg';
import aiWizard from '../assets/ai-wizard.jpg';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing your journey into the world of GENAISIS...");

  const loadingTexts = [
    "Initializing your journey into the world of GENAISIS...",
    "Summoning magical algorithms...",
    "Preparing the halls of artificial intelligence...",
    "Opening the gates to machine learning mysteries...",
    "Loading the symposium spells..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        
        const newProgress = prev + 1;
        
        // Change text based on progress
        if (newProgress >= 80) setCurrentText(loadingTexts[4]);
        else if (newProgress >= 60) setCurrentText(loadingTexts[3]);
        else if (newProgress >= 40) setCurrentText(loadingTexts[2]);
        else if (newProgress >= 20) setCurrentText(loadingTexts[1]);
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${splashBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Magical Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -50, 50],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Steam Train Animation */}
        <motion.div
          className="absolute top-1/4 w-32 h-16 opacity-40"
          initial={{ x: -200 }}
          animate={{ x: window.innerWidth + 200 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg relative">
            <div className="absolute top-2 left-2 w-4 h-4 bg-primary rounded-full animate-glow-pulse" />
            <div className="absolute bottom-2 left-4 w-2 h-6 bg-muted rounded" />
            <div className="absolute bottom-2 right-4 w-2 h-6 bg-muted rounded" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* AI Wizard Character */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <img
                src={aiWizard}
                alt="AI Wizard"
                className="w-48 h-72 object-cover rounded-2xl shadow-magical border-2 border-primary/30"
              />
              <motion.div
                className="absolute -inset-4 rounded-2xl border-2 border-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.div
            className="text-center mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1 className="font-magical text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4">
              <motion.span
                className="inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(45 95% 60% / 0.5)",
                    "0 0 40px hsl(45 95% 60% / 0.8)",
                    "0 0 20px hsl(45 95% 60% / 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome to
              </motion.span>
            </h1>
            <h2 className="font-magical text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              GENAISIS
            </h2>
            <p className="font-enchanted text-xl md:text-2xl text-foreground/80 mt-4 max-w-2xl mx-auto">
              Where Artificial Intelligence meets Ancient Magic
            </p>
          </motion.div>

          {/* Loading Progress */}
          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="mb-4">
              <p className="text-center text-foreground/70 font-enchanted text-lg mb-2">
                {currentText}
              </p>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-primary/30">
                <motion.div
                  className="h-full bg-gradient-gold relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
              <p className="text-center text-primary font-bold mt-2 font-enchanted">
                {progress.toFixed(0)}% Complete
              </p>
            </div>
          </motion.div>

          {/* Magical Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary text-2xl"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;