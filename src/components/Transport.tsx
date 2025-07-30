import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Bus, Train, MapPin, Clock, IndianRupee } from 'lucide-react';

interface TransportRoute {
  from: string;
  mode: 'bus' | 'train' | 'metro';
  routes: {
    name: string;
    duration: string;
    cost: string;
    frequency: string;
    instructions: string[];
  }[];
}

const Transport: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const transportRoutes: TransportRoute[] = [
    {
      from: 'Chennai Central Railway Station',
      mode: 'bus',
      routes: [
        {
          name: 'MTC Bus Routes',
          duration: '45-60 minutes',
          cost: '₹15-25',
          frequency: 'Every 10-15 minutes',
          instructions: [
            'Take Bus No. 5, 5A, or 5C from Central Bus Stand',
            'Get down at Thoraipakkam Signal',
            'Take Bus No. 576 or 577 to SJCE',
            'College will be on your right side'
          ]
        },
        {
          name: 'Private Buses',
          duration: '40-55 minutes',
          cost: '₹20-35',
          frequency: 'Every 5-10 minutes',
          instructions: [
            'Take any OMR bound bus from Central',
            'Get down at Thoraipakkam Junction',
            'Take auto or walk 1km to college',
            'College is located near Sholinganallur'
          ]
        }
      ]
    },
    {
      from: 'Chennai Airport',
      mode: 'bus',
      routes: [
        {
          name: 'Airport Shuttle + Local Bus',
          duration: '60-80 minutes',
          cost: '₹50-80',
          frequency: 'Every 20-30 minutes',
          instructions: [
            'Take Airport Express to Koyambedu',
            'Board MTC Bus 576 or 577',
            'Get down at SJCE bus stop',
            'Walk 200m to main gate'
          ]
        },
        {
          name: 'Taxi/Cab Services',
          duration: '35-50 minutes',
          cost: '₹400-600',
          frequency: 'On demand',
          instructions: [
            'Book Ola/Uber from airport',
            'Take ECR route via OMR',
            'Direct drop at college gate',
            'Share ride option available'
          ]
        }
      ]
    },
    {
      from: 'Koyambedu Bus Terminal',
      mode: 'bus',
      routes: [
        {
          name: 'Direct MTC Routes',
          duration: '50-70 minutes',
          cost: '₹20-30',
          frequency: 'Every 15-20 minutes',
          instructions: [
            'Take Bus No. 576, 577, or 578',
            'Board from Platform 15-18',
            'Journey via OMR corridor',
            'Get down at SJCE stop'
          ]
        }
      ]
    },
    {
      from: 'Velachery Metro Station',
      mode: 'metro',
      routes: [
        {
          name: 'Metro + Bus Combination',
          duration: '45-60 minutes',
          cost: '₹35-50',
          frequency: 'Metro: Every 5 minutes',
          instructions: [
            'Take Blue Line to Velachery',
            'Exit and take Bus 576/577',
            'Travel via Medavakkam route',
            'Get down at college junction'
          ]
        }
      ]
    },
    {
      from: 'Tambaram Railway Station',
      mode: 'train',
      routes: [
        {
          name: 'Train + Bus Connection',
          duration: '60-80 minutes',
          cost: '₹25-40',
          frequency: 'Train: Every 10 minutes',
          instructions: [
            'Take local train to Velachery',
            'Exit station and board MTC bus',
            'Take OMR route buses',
            'Alight at SJCE bus stop'
          ]
        }
      ]
    }
  ];

  const toggleAccordion = (from: string) => {
    setActiveAccordion(activeAccordion === from ? null : from);
  };

  const getIcon = (mode: 'bus' | 'train' | 'metro') => {
    switch (mode) {
      case 'bus':
        return <Bus size={24} className="text-green-400" />;
      case 'train':
        return <Train size={24} className="text-blue-400" />;
      case 'metro':
        return <Train size={24} className="text-purple-400" />;
    }
  };

  return (
    <div className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Transport Guide
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Easy navigation routes from major Chennai hubs to reach SJCE for GENAISIS
          </p>
        </motion.div>

        {/* College Location Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl p-6 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin size={32} className="text-cyan-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Destination</h3>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-white mb-2">St. Joseph's College of Engineering</p>
            <p className="text-gray-300">OMR, Sholinganallur, Chennai - 600119</p>
          </div>
        </motion.div>

        {/* Transport Routes Accordion */}
        <div className="space-y-4">
          {transportRoutes.map((route, index) => (
            <motion.div
              key={route.from}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden"
            >
              {/* Accordion Header */}
              <motion.button
                onClick={() => toggleAccordion(route.from)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-700/20 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-4">
                  {getIcon(route.mode)}
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{route.from}</h3>
                    <p className="text-gray-400 capitalize">{route.mode} routes available</p>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: activeAccordion === route.from ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-gray-400" />
                </motion.div>
              </motion.button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeAccordion === route.from && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700/50"
                  >
                    <div className="p-6 space-y-6">
                      {route.routes.map((routeOption, optionIndex) => (
                        <motion.div
                          key={routeOption.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: optionIndex * 0.1 }}
                          className="bg-gray-700/30 rounded-xl p-6"
                        >
                          <h4 className="text-lg font-semibold text-cyan-400 mb-4">{routeOption.name}</h4>
                          
                          {/* Route Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <Clock size={20} className="text-blue-400 mx-auto mb-1" />
                              <p className="text-white font-semibold text-sm">{routeOption.duration}</p>
                              <p className="text-gray-400 text-xs">Duration</p>
                            </div>
                            <div className="text-center">
                              <IndianRupee size={20} className="text-green-400 mx-auto mb-1" />
                              <p className="text-white font-semibold text-sm">{routeOption.cost}</p>
                              <p className="text-gray-400 text-xs">Cost</p>
                            </div>
                            <div className="text-center">
                              <Bus size={20} className="text-purple-400 mx-auto mb-1" />
                              <p className="text-white font-semibold text-sm">{routeOption.frequency}</p>
                              <p className="text-gray-400 text-xs">Frequency</p>
                            </div>
                          </div>

                          {/* Instructions */}
                          <div>
                            <h5 className="text-white font-semibold mb-3">Step-by-step directions:</h5>
                            <ol className="space-y-2">
                              {routeOption.instructions.map((instruction, instructionIndex) => (
                                <li key={instructionIndex} className="flex items-start text-gray-300 text-sm">
                                  <span className="bg-cyan-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                                    {instructionIndex + 1}
                                  </span>
                                  {instruction}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Important Notes</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <p className="mb-2">• <strong>Peak Hours:</strong> 7-10 AM and 5-8 PM (expect delays)</p>
              <p className="mb-2">• <strong>Event Day:</strong> Special buses will be arranged</p>
            </div>
            <div>
              <p className="mb-2">• <strong>Parking:</strong> Limited on-campus parking available</p>
              <p className="mb-2">• <strong>Contact:</strong> +91 44 2450 3000 for transport queries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transport;