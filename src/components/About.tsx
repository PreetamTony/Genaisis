import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const timelineEvents = [
    { year: '2021', event: 'Department of AI & ML Founded', description: 'Established with a vision to lead in artificial intelligence education' },
    { year: '2022', event: 'First Research Projects', description: 'Initiated cutting-edge research in machine learning applications' },
    { year: '2023', event: 'Industry Partnerships', description: 'Collaborated with leading tech companies for practical exposure' },
    { year: '2024', event: 'GENAISIS Symposium', description: 'Launching our flagship AI & ML symposium event' },
  ];

  const cards = [
    {
      icon: <Eye size={32} />,
      title: 'Vision',
      content: 'To be a premier center of excellence in Artificial Intelligence and Machine Learning, fostering innovation and creating future-ready professionals.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Target size={32} />,
      title: 'Mission',
      content: 'To provide world-class education, conduct cutting-edge research, and develop AI solutions that address real-world challenges.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Goals',
      content: 'Excellence in AI education, groundbreaking research, industry collaboration, and nurturing the next generation of AI leaders.',
      gradient: 'from-green-500 to-teal-600'
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
            About Department
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Department of Artificial Intelligence and Machine Learning at St. Joseph's College of Engineering 
            is at the forefront of technological innovation, preparing students for the AI-driven future.
          </p>
        </motion.div>

        {/* Vision, Mission, Goals Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {card.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.content}</p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our Journey</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-center mb-2">
                      <Calendar className="text-cyan-400 mr-2" size={16} />
                      <span className="text-cyan-400 font-bold text-lg">{event.year}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">{event.event}</h4>
                    <p className="text-gray-300">{event.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-ping opacity-75" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;