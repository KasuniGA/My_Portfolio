import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'PyTorch', level: 75, icon: '🔥' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '📜' },
    { name: 'C#', level: 70, icon: '🔷' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'MySQL', level: 75, icon: '🗄️' },
    { name: 'Firebase', level: 80, icon: '🔥' },
    { name: 'Figma', level: 85, icon: '🎨' },
    { name: 'C', level: 70, icon: '⚡' },
    { name: 'PHP', level: 65, icon: '🐘' },
  ];

  useEffect(() => {
    if (inView) {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, index * 100);
      });
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive toolkit of modern technologies and frameworks
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</h3>
                </div>
                <motion.span 
                  className="text-sm text-muted-foreground group-hover:text-primary font-semibold transition-colors"
                  initial={{ opacity: 0 }}
                  animate={animatedSkills.includes(index) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="skill-progress">
                <div 
                  className="skill-progress-fill"
                  style={{ 
                    width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                    transition: 'width 1s ease-out'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
