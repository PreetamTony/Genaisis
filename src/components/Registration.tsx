import { motion } from 'framer-motion';
import React from 'react';

interface FormData {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  department: string;
  
  // Step 2: Event Selection
  selectedEvents: string[];
  teamName: string;
  teamSize: number;
  
  // Step 3: Additional Info
  experience: string;
  expectations: string;
  dietaryRestrictions: string;
}

const Registration: React.FC = () => {
  return (
    <div className="py-20 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join GENAISIS 2025 - Register now for an unforgettable AI & ML symposium experience
          </p>
          <a
            href="https://forms.gle/W15XosJ5qzrWvwKG8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-bold text-xl shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-transform"
            style={{ textDecoration: 'none' }}
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;