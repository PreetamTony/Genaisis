import { motion } from 'framer-motion';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('');

  const coordinators = [
    {
      name: 'Ms. Kiruba Wesley',
      role: 'Faculty Coordinator',
      phone: '+91 9884646387',
      email: '@sjce.ac.in',
      avatar: '',
      gradient: 'from-cyan-500 to-blue-600'
    },
     {
      name: 'Ms. Adlin Layola J.A',
      role: 'Faculty Coordinator',
      phone: '+91 8148677917',
      email: 'rajesh.kumar@sjce.ac.in',
      avatar: '',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Preetam Tony J',
      role: 'Event Coordinator',
      phone: '+91 8925249376',
      email: '22am133@stjosephs.ac.in',
      avatar: '',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Annapoorani V',
      role: 'Event Coordinator',
      phone: '+91 7871774998',
      email: 'priya.sharma@sjce.ac.in',
      avatar: '',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Nilavezhil Oviya V P',
      role: 'Event Coordinator',
      phone: '+91 9342526470',
      email: 'rajesh.kumar@sjce.ac.in',
      avatar: '',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for any queries or assistance regarding GENAISIS
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* College Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* College Address */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">College Address</h3>
              </div>
              
              <div className="text-gray-300 leading-relaxed mb-6">
                <p className="font-semibold text-white mb-2">St. Joseph's College of Engineering</p>
                <p>Department of Artificial Intelligence & Machine Learning</p>
                <p>OMR, Chennai - 600119</p>
                <p>Tamil Nadu, India</p>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="relative h-48 bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500">Click to view in Google Maps</p>
                  </div>
                </div>
                
                {/* Map overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10" />
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard('+91 44 2450 3000')}
                >
                  <Phone size={20} className="text-green-400 mr-3" />
                  <div className="flex-1">
                    <p className="text-white font-semibold">Main Office</p>
                    <p className="text-gray-400">+91 44 2450 3000</p>
                  </div>
                  {copiedText === '+91 44 2450 3000' ? (
                    <Check size={20} className="text-green-400" />
                  ) : (
                    <Copy size={20} className="text-gray-400" />
                  )}
                </motion.div>

                <motion.div
                  className="flex items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard('genaisis@sjce.ac.in')}
                >
                  <Mail size={20} className="text-blue-400 mr-3" />
                  <div className="flex-1">
                    <p className="text-white font-semibold">Event Email</p>
                    <p className="text-gray-400">genaisis@sjce.ac.in</p>
                  </div>
                  {copiedText === 'genaisis@sjce.ac.in' ? (
                    <Check size={20} className="text-green-400" />
                  ) : (
                    <Copy size={20} className="text-gray-400" />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Coordinators */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Event Coordinators</h3>
            
            <div className="space-y-6">
              {coordinators.map((coordinator, index) => (
                <motion.div
                  key={coordinator.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 overflow-hidden">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${coordinator.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4">
                      {/* Avatar */}
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={coordinator.avatar}
                          alt={coordinator.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                        />
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${coordinator.gradient} opacity-20`} />
                      </motion.div>

                      {/* Info */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{coordinator.name}</h4>
                        <p className="text-gray-400 mb-3">{coordinator.role}</p>
                        
                        {/* Contact Details */}
                        <div className="space-y-2">
                          <motion.div
                            className="flex items-center text-sm cursor-pointer hover:text-cyan-400 transition-colors"
                            whileHover={{ x: 5 }}
                            onClick={() => copyToClipboard(coordinator.phone)}
                          >
                            <Phone size={14} className="mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{coordinator.phone}</span>
                            {copiedText === coordinator.phone ? (
                              <Check size={14} className="ml-2 text-green-400" />
                            ) : (
                              <Copy size={14} className="ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </motion.div>
                          
                          <motion.div
                            className="flex items-center text-sm cursor-pointer hover:text-cyan-400 transition-colors"
                            whileHover={{ x: 5 }}
                            onClick={() => copyToClipboard(coordinator.email)}
                          >
                            <Mail size={14} className="mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{coordinator.email}</span>
                            {copiedText === coordinator.email ? (
                              <Check size={14} className="ml-2 text-green-400" />
                            ) : (
                              <Copy size={14} className="ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;