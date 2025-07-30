import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Preloader: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          GENAISIS
        </motion.div>
        
        <div className="text-cyan-400 text-xl mb-8">
          <TypeAnimation
            sequence={[
              'Initializing Genaisis...',
              1000,
              'Loading AI Symposium...',
              1000,
              'Preparing Future Tech...',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        
        <motion.div
          className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;