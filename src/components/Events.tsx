import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Info, Trophy, Users, X } from 'lucide-react';
import React, { useState } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  rules: string[];
  coordinator: {
    name: string;
    phone: string;
    email: string;
  };
  icon: string;
  gradient: string;
  participants: string;
  duration: string;
  prize: string;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 'mystic-morphs',
      title: 'Mystic Morphs',
      description: 'A magical transformation challenge that tests your creativity and teamwork.',
      fullDescription: 'Unleash your inner wizard! Teams will face a series of creative and logic-based transformation tasks inspired by the wizarding world. Collaboration and imagination are key to morphing your way to victory.',
      rules: [
        'Team size: 3 members',
        'All team members must participate in each round',
        'No use of electronic devices unless specified',
        'Judges’ decision is final',
        'Respect the spirit of fair play'
      ],
      coordinator: {
        name: 'Dr. Sarah Johnson',
        phone: '+91 98765 43210',
        email: 'sarah.johnson@sjce.ac.in'
      },
      icon: '🦄',
      gradient: 'from-cyan-500 to-blue-600',
      participants: 'Teams of 3',
      duration: '2 hours',
      prize: 'Exciting Prizes'
    },
    {
      id: 'portraits-of-perception',
      title: 'Portraits of Perception',
      description: 'A visual puzzle event where perception and observation are everything.',
      fullDescription: 'Decode, deduce, and draw! Teams will solve visual riddles and perception-based challenges, putting their observation skills to the ultimate test.',
      rules: [
        'Team size: 4 members',
        'No external help allowed',
        'Each round is elimination-based',
        'All answers must be submitted within the time limit',
        'Respect the event coordinators and other teams'
      ],
      coordinator: {
        name: 'Prof. Michael Chen',
        phone: '+91 87654 32109',
        email: 'michael.chen@sjce.ac.in'
      },
      icon: '😶‍🌫️',
      gradient: 'from-purple-500 to-pink-600',
      participants: 'Teams of 4',
      duration: '1.5 hours',
      prize: 'Exciting Prizes'
    },
    {
      id: 'azkaban-escape',
      title: 'Azkaban Escape',
      description: 'A thrilling escape room event inspired by the magical world of Azkaban.',
      fullDescription: 'Can you break out of Azkaban? Teams will solve a series of puzzles and riddles to escape the wizarding prison. Only the sharpest minds and best collaborators will succeed.',
      rules: [
        'Team size: 2-3 members',
        'No use of mobile phones or internet',
        'Hints will be provided at a penalty',
        'Time-bound event',
        'Any form of cheating leads to disqualification'
      ],
      coordinator: {
        name: 'Dr. Priya Sharma',
        phone: '+91 76543 21098',
        email: 'priya.sharma@sjce.ac.in'
      },
      icon: '☠️',
      gradient: 'from-green-500 to-teal-600',
      participants: 'Teams of 2-3',
      duration: '2 hours',
      prize: 'Exciting Prizes'
    },
    {
      id: 'triwizard-challenge',
      title: 'Triwizard Challenge',
      description: 'A multi-stage event inspired by the legendary Triwizard Tournament.',
      fullDescription: 'Face magical tasks, solve riddles, and complete physical and mental challenges in this ultimate test of wizarding skill and teamwork.',
      rules: [
        'Team size: 3 members',
        'Each stage must be completed to advance',
        'No outside assistance allowed',
        'Points awarded for creativity and teamwork',
        'Follow all safety instructions'
      ],
      coordinator: {
        name: 'Dr. Rajesh Kumar',
        phone: '+91 65432 10987',
        email: 'rajesh.kumar@sjce.ac.in'
      },
      icon: '🏆',
      gradient: 'from-orange-500 to-red-600',
      participants: 'Teams of 3',
      duration: '3 hours',
      prize: 'Exciting Prizes'
    },
    {
      id: 'gringotts-innovation-vault',
      title: 'Gringotts Innovation Vault',
      description: 'A treasure hunt for the most innovative minds, inspired by Gringotts Bank.',
      fullDescription: 'Crack clues, solve innovation challenges, and race against time to unlock the secrets of the Gringotts Vault. Only the most inventive teams will claim the treasure.',
      rules: [
        'Team size: 2 members',
        'All clues must be solved to proceed',
        'No internet or phone usage',
        'Respect the event area and props',
        'Winners determined by time and accuracy'
      ],
      coordinator: {
        name: 'Prof. Lisa Wong',
        phone: '+91 54321 09876',
        email: 'lisa.wong@sjce.ac.in'
      },
      icon: '🧙‍♂️',
      gradient: 'from-indigo-500 to-purple-600',
      participants: 'Teams of 2',
      duration: '1.5 hours',
      prize: 'Exciting Prizes'
    }
  ];

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
            Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Participate in cutting-edge competitions designed to challenge your AI and ML expertise
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <motion.div
                className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Event Icon */}
                <div className="text-6xl mb-4">{event.icon}</div>
                
                {/* Event Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                
                {/* Event Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                
                {/* Event Stats */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Users size={16} className="mr-2 text-cyan-400" />
                    {event.participants}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock size={16} className="mr-2 text-purple-400" />
                    {event.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy size={16} className="mr-2 text-yellow-400" />
                    {event.prize}
                  </div>
                </div>
                
                {/* Learn More Button */}
                <a
                  href="https://forms.gle/W15XosJ5qzrWvwKG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${event.gradient} rounded-lg text-white font-semibold text-sm transition-transform`}
                  style={{ textDecoration: 'none' }}
                >
                  <Info size={16} className="mr-2" />
                  Register
                </a>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>

              {/* Event Details */}
              <div className="mb-6">
                <div className="text-6xl mb-4">{selectedEvent.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4">{selectedEvent.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedEvent.fullDescription}</p>
                
                {/* Event Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Users className="text-cyan-400 mx-auto mb-2" size={24} />
                    <div className="text-white font-semibold">{selectedEvent.participants}</div>
                    <div className="text-gray-400 text-sm">Participants</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Clock className="text-purple-400 mx-auto mb-2" size={24} />
                    <div className="text-white font-semibold">{selectedEvent.duration}</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <Trophy className="text-yellow-400 mx-auto mb-2" size={24} />
                    <div className="text-white font-semibold">{selectedEvent.prize}</div>
                    <div className="text-gray-400 text-sm">Prize Money</div>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">Rules & Guidelines</h4>
                <ul className="space-y-2">
                  {selectedEvent.rules.map((rule, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-2">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coordinator */}
              <div className="border-t border-gray-700/50 pt-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Event Coordinator</h4>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="text-white font-semibold mb-2">{selectedEvent.coordinator.name}</div>
                  <div className="text-gray-300 text-sm mb-1">📞 {selectedEvent.coordinator.phone}</div>
                  <div className="text-gray-300 text-sm">📧 {selectedEvent.coordinator.email}</div>
                </div>
                {/* Registration Button */}
                <div className="mt-6 text-center">
                  <a
                    href="https://forms.gle/W15XosJ5qzrWvwKG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${selectedEvent.gradient} rounded-lg text-white font-semibold text-lg shadow-lg transition-transform`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Info size={20} className="mr-2" />
                    Register for this Event
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;