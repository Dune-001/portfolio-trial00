import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skills = [
    { name: 'React', level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-green-600' },
    { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-500' },
    { name: 'Python', level: 70, color: 'from-blue-600 to-indigo-600' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Image & Personal Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold">
                      Your Photo
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Muddy Foxx 001</h3>
                    <p className="text-blue-600 font-medium">Full-Stack Developer</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Download CV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '15+', label: 'Projects Completed' },
                { number: '5+', label: 'Happy Clients' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                variants={itemVariants}
              >
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
              </motion.h2>

              <motion.p className="text-lg text-gray-600 leading-relaxed mb-6" variants={itemVariants}>
                I'm a passionate full-stack developer with over almost one year of experience creating
                digital solutions that make a difference. I believe in writing clean, efficient
                code and creating intuitive user experiences.
              </motion.p>

              <motion.p className="text-lg text-gray-600 leading-relaxed mb-8" variants={itemVariants}>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community. I'm always
                excited to take on new challenges and learn something new.
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;