import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, GraduationCap, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

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
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    department: '',
    selectedEvents: [],
    teamName: '',
    teamSize: 1,
    experience: '',
    expectations: '',
    dietaryRestrictions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = [
    { id: 'prompt-quest', name: 'PROMPT QUEST', icon: '🔍', teamSize: '2-3' },
    { id: 'binary-brawl', name: 'BINARY BRAWL', icon: '💻', teamSize: 'Individual' },
    { id: 'venture-vault', name: 'VENTURE VAULT', icon: '💡', teamSize: '3-5' },
    { id: 'brain-matrix', name: 'BRAIN MATRIX', icon: '🧠', teamSize: '2' },
    { id: 'tech-titans', name: 'TECH TITANS', icon: '🚀', teamSize: '3-4' }
  ];

  const handleInputChange = (field: keyof FormData, value: string | number | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEventSelection = (eventId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedEvents: prev.selectedEvents.includes(eventId)
        ? prev.selectedEvents.filter(id => id !== eventId)
        : [...prev.selectedEvents, eventId]
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && 
               formData.phone && formData.college && formData.year && formData.department;
      case 2:
        return formData.selectedEvents.length > 0;
      case 3:
        return true; // Optional fields
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="w-32 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle size={64} className="text-white" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for registering for GENAISIS 2024. We'll send confirmation details to your email.
            </p>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Registration Summary</h3>
              <div className="space-y-2 text-left">
                <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Events:</strong> {formData.selectedEvents.length}</p>
                <p><strong>College:</strong> {formData.college}</p>
              </div>
            </div>

            {/* Celebration Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  initial={{
                    x: '50%',
                    y: '50%',
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                    scale: Math.random() * 2 + 1,
                    opacity: 0
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join GENAISIS 2024 - Register now for an unforgettable AI & ML symposium experience
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-cyan-400 text-white'
                        : 'border-gray-600 text-gray-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step}
                  </motion.div>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 ml-4 transition-colors duration-300 ${
                      currentStep > step ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-400">
            <span>Personal Information</span>
            <span>Event Selection</span>
            <span>Final Details</span>
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          layout
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <User className="mr-3 text-cyan-400" size={24} />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">College/Institution</label>
                    <input
                      type="text"
                      value={formData.college}
                      onChange={(e) => handleInputChange('college', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your college name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Year of Study</label>
                    <select
                      value={formData.year}
                      onChange={(e) => handleInputChange('year', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="pg">Post Graduate</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Department</label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="e.g., Computer Science, AI & ML, etc."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Event Selection */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="mr-3 text-purple-400" size={24} />
                  Event Selection
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {events.map((event) => (
                    <motion.div
                      key={event.id}
                      className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        formData.selectedEvents.includes(event.id)
                          ? 'border-cyan-400 bg-cyan-400/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleEventSelection(event.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl">{event.icon}</div>
                        {formData.selectedEvents.includes(event.id) && (
                          <CheckCircle size={24} className="text-cyan-400" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">{event.name}</h4>
                      <p className="text-gray-400 text-sm">Team Size: {event.teamSize}</p>
                      
                      {formData.selectedEvents.includes(event.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 border-2 border-cyan-400 rounded-xl pointer-events-none"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {formData.selectedEvents.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-300 mb-2">Team Name (if applicable)</label>
                      <input
                        type="text"
                        value={formData.teamName}
                        onChange={(e) => handleInputChange('teamName', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="Enter your team name"
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Step 3: Final Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap className="mr-3 text-green-400" size={24} />
                  Additional Information
                </h3>
                
                <div>
                  <label className="block text-gray-300 mb-2">Previous AI/ML Experience</label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors h-24 resize-none"
                    placeholder="Brief description of your experience with AI/ML (optional)"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">What do you expect from GENAISIS?</label>
                  <textarea
                    value={formData.expectations}
                    onChange={(e) => handleInputChange('expectations', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors h-24 resize-none"
                    placeholder="Your expectations and goals (optional)"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Dietary Restrictions/Special Requirements</label>
                  <input
                    type="text"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Any dietary restrictions or special needs (optional)"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700/50">
            <motion.button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
              whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
              whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
            >
              <ArrowLeft size={20} className="mr-2" />
              Previous
            </motion.button>

            {currentStep < 3 ? (
              <motion.button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={isStepValid() ? { scale: 1.05 } : {}}
                whileTap={isStepValid() ? { scale: 0.95 } : {}}
              >
                Next
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            ) : (
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} className="mr-2" />
                    Submit Registration
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;