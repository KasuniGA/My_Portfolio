import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "EnFauna",
      description: "Integrated Wildlife Conservation Platform - A mobile-first web app unifying wildlife awareness, incident reporting, and conservation fundraising in Sri Lanka.",
      techStack: ["React", "Node.js", "MongoDB", "PyTorch", "Firebase"],
      type: "Individual Project",
      highlight: "AI-Powered Species Recognition",
      gradient: "from-emerald-400 to-blue-500",
    },
    {
      title: "Flixora",
      description: "Cinema Booking System with dynamic seat selection, real-time updates, and comprehensive admin interface for seamless movie theater management.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "AWS S3"],
      type: "Team Project",
      highlight: "Real-time Seat Selection",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "VistaRoom",
      description: "Web-Based Interior Design Visualizer with 3D room layout designer, cross-platform responsiveness, and intuitive user interface for interior design planning.",
      techStack: ["React", "Three.js", "Tailwind CSS", "Firebase", "Zustand"],
      type: "Team Lead",
      highlight: "3D Room Designer",
      gradient: "from-teal-400 to-blue-500",
    },
    {
      title: "GreenStay",
      description: "Student Accommodation Finder with comprehensive search functionality, Google Maps integration, and robust database system for managing student housing.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Team Project",
      highlight: "Maps Integration",
      gradient: "from-green-400 to-teal-500",
    },
  ];

  const techStackColors: { [key: string]: string } = {
    "React": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "PyTorch": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Firebase": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "Socket.IO": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "AWS S3": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Three.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Tailwind CSS": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "Zustand": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "HTML": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "CSS": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "JavaScript": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "PHP": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "MySQL": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
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
            Innovative solutions built with modern technologies
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {project.type}
                  </span>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${techStackColors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{project.highlight}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
