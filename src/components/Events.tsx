import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Clock, Trophy, Info } from 'lucide-react';

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
      id: 'prompt-quest',
      title: 'PROMPT QUEST',
      description: 'Master the art of AI prompt engineering in this creative challenge.',
      fullDescription: 'Dive deep into the world of prompt engineering where creativity meets artificial intelligence. Participants will craft ingenious prompts to achieve specific outcomes using various AI models.',
      rules: [
        'Teams of 2-3 members allowed',
        'Use provided AI tools only',
        'Submit within time limit',
        'Original prompts required',
        'Creativity and effectiveness will be judged'
      ],
      coordinator: {
        name: 'Dr. Sarah Johnson',
        phone: '+91 98765 43210',
        email: 'sarah.johnson@sjce.ac.in'
      },
      icon: '🔍',
      gradient: 'from-cyan-500 to-blue-600',
      participants: '50 teams',
      duration: '3 hours',
      prize: '₹15,000'
    },
    {
      id: 'binary-brawl',
      title: 'BINARY BRAWL',
      description: 'Ultimate coding competition testing your algorithmic prowess.',
      fullDescription: 'A high-intensity competitive programming event where participants solve complex algorithmic problems under time pressure. Test your coding skills against the best minds.',
      rules: [
        'Individual participation only',
        'Use any programming language',
        '5 problems of increasing difficulty',
        'Real-time leaderboard',
        'Plagiarism will lead to disqualification'
      ],
      coordinator: {
        name: 'Prof. Michael Chen',
        phone: '+91 87654 32109',
        email: 'michael.chen@sjce.ac.in'
      },
      icon: '💻',
      gradient: 'from-purple-500 to-pink-600',
      participants: '100 individual',
      duration: '4 hours',
      prize: '₹20,000'
    },
    {
      id: 'venture-vault',
      title: 'VENTURE VAULT',
      description: 'Pitch your innovative AI startup ideas to industry experts.',
      fullDescription: 'Present your groundbreaking AI startup concepts to a panel of industry veterans and investors. Turn your innovative ideas into potentially funded ventures.',
      rules: [
        'Teams of 3-5 members',
        '10-minute pitch presentation',
        'Business plan submission required',
        'Focus on AI/ML applications',
        'Q&A session with judges'
      ],
      coordinator: {
        name: 'Dr. Priya Sharma',
        phone: '+91 76543 21098',
        email: 'priya.sharma@sjce.ac.in'
      },
      icon: '💡',
      gradient: 'from-green-500 to-teal-600',
      participants: '25 teams',
      duration: '5 hours',
      prize: '₹30,000'
    },
    {
      id: 'brain-matrix',
      title: 'BRAIN MATRIX',
      description: 'Test your AI knowledge in this intense quiz competition.',
      fullDescription: 'A comprehensive quiz covering artificial intelligence, machine learning, deep learning, and recent technological advancements. Perfect for AI enthusiasts.',
      rules: [
        'Teams of 2 members only',
        'Multiple rounds: Prelims, Semi-finals, Finals',
        'Mixed format: MCQ, Rapid fire, Visual rounds',
        'Current affairs in AI included',
        'No electronic devices allowed'
      ],
      coordinator: {
        name: 'Dr. Rajesh Kumar',
        phone: '+91 65432 10987',
        email: 'rajesh.kumar@sjce.ac.in'
      },
      icon: '🧠',
      gradient: 'from-orange-500 to-red-600',
      participants: '75 teams',
      duration: '4 hours',
      prize: '₹12,000'
    },
    {
      id: 'tech-titans',
      title: 'TECH TITANS',
      description: 'Build revolutionary AI applications in this intensive hackathon.',
      fullDescription: '24-hour hackathon challenge where teams develop complete AI applications. From ideation to deployment, showcase your technical prowess and innovation.',
      rules: [
        'Teams of 3-4 members',
        '24-hour development window',
        'Use any AI/ML frameworks',
        'Demo and presentation required',
        'Code repository must be public'
      ],
      coordinator: {
        name: 'Prof. Lisa Wong',
        phone: '+91 54321 09876',
        email: 'lisa.wong@sjce.ac.in'
      },
      icon: '🚀',
      gradient: 'from-indigo-500 to-purple-600',
      participants: '40 teams',
      duration: '24 hours',
      prize: '₹50,000'
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
                <motion.div
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${event.gradient} rounded-lg text-white font-semibold text-sm`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Info size={16} className="mr-2" />
                  Learn More
                </motion.div>

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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;