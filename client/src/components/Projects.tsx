import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star } from "lucide-react";
import { getAssetPath } from "@/lib/assetPaths";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "EnFauna",
      description:
        "EnFauna is a mobile-first web application designed to support wildlife conservation in Sri Lanka by uniting awareness, reporting, and fundraising into a single digital platform. It empowers users—ranging from locals and tourists to researchers and NGOs—to learn about endangered species, report wildlife sightings or threats with geotagged media, and contribute to conservation campaigns.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "AI/ML",
        "Google Maps API",
      ],
      type: "Individual Project",
      highlight: "AI-Powered Species Recognition",
      gradient: "from-emerald-400 to-blue-500",
      image: getAssetPath("images/projects/enfauna.jpg"),
      githubLink: "https://github.com/KasuniGA/EnFauna--WebApp.git",
    },
    {
      title: "MedSync",
      description:
        "MedSync is a digital Medical Information Management System (MIMS) designed to modernize patient data handling in public healthcare facilities. It replaces inefficient manual record-keeping with a secure, centralized system enhanced by QR code identification for instant and accurate access to patient records.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "QR Code API"],
      type: "Group Project",
      highlight: "Secure Patient Management",
      gradient: "from-blue-400 to-indigo-500",
      image: getAssetPath("images/projects/medsync.png"),
      githubLink: "https://github.com/KasuniGA/MedSync.git",
    },
    {
      title: "Flixora",
      description:
        "A full-stack web application designed to streamline the movie ticket booking experience for users and theater operators. Built with React, Node.js, Express.js, and MongoDB, it features real-time seat selection using Socket.IO, secure JWT-based authentication, contactless payment integration (LKR and PayPal), and dynamic pricing.",
      techStack: ["React", "Tailwind CSS", "MongoDB", "Node.js", "PayPal"],
      type: "Group Project",
      highlight: "Real-time Seat Selection",
      gradient: "from-purple-400 to-pink-500",
      image: getAssetPath("images/projects/flixora.jpeg"),
      githubLink:
        "https://github.com/Plymouth-University/coursework-group_65.git",
    },
    {
      title: "VistaRoom",
      description:
        "VistaRoom is a web-based interior design tool that enables users to create and visualize room layouts in real-time using both 2D and 3D views. Designed for homeowners and designers, it features drag-and-drop furniture placement, customizable room dimensions, a modern furniture library, and design saving capabilities.",
      techStack: ["React", "Node.js", "Express.js", "Firebase", "Three.js"],
      type: "Group Project",
      highlight: "3D Room Designer",
      gradient: "from-teal-400 to-blue-500",
      image: getAssetPath("images/projects/vistaroom.jpg"),
      githubLink: "https://github.com/KaviruDeSilva08/Group_53_Vista_Room.git",
    },
    {
      title: "GreenStay",
      description:
        "A web-based platform designed to assist new students of NSBM Green University in finding nearby accommodation. Registered landlords and rental agencies can list their properties with photos, details, location, and rental prices. The university warden reviews and approves listings to ensure quality.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
      type: "Group Project",
      highlight: "Student Accommodation Platform",
      gradient: "from-green-400 to-teal-500",
      image: getAssetPath("images/projects/greenstay.jpg"),
      githubLink: "https://github.com/username/greenstay",
    },
    {
      title: "Ready Steady Go",
      description:
        "Ready Steady Go is a modern social media platform designed for automotive enthusiasts, built with collaborative front-end and back-end development. It features a sleek dark theme, user profiles, posts, likes, comments, and a community-driven interface tailored for car lovers.",
      techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      type: "Group Project",
      highlight: "Social Media Platform",
      gradient: "from-indigo-400 to-fuchsia-500",
      image: getAssetPath("images/projects/ready-steady-go.jpg"),
      githubLink: "https://github.com/KasuniGA/ready-steady-go.git",
    },
    {
      title: "Green Ride",
      description:
        "GreenRide is a user-friendly transport solution designed for students, staff, and professors of NSBM Green University. The app provides real-time public bus schedules, route planning, and convenient carpooling options to optimize daily commutes.",
      techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "REST API"],
      type: "Group Project",
      highlight: "Mobile Transport Solution",
      gradient: "from-green-400 to-lime-500",
      image: getAssetPath("images/projects/green-ride.jpg"),
      githubLink: "https://github.com/KasuniGA/Git-GreenRide.git",
    },
  ];

  const techStackColors: { [key: string]: string } = {
    React: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Node.js":
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    MongoDB:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Express.js":
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    "AI/ML":
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "GoogleMap API":
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    Firebase: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "Socket.IO":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "Three.js":
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Tailwind CSS":
      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    Bootstrap:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    HTML: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    CSS: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    JavaScript:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    PHP: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    MySQL: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "QR Code API":
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    "REST API":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Flutter: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Dart: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    PayPal: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Google Maps API":
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
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
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-64 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
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
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.title === "EnFauna" && (
                    <motion.div
                      className="flex items-center mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 text-sm font-medium">
                        Featured Project
                      </span>
                    </motion.div>
                  )}
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
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        techStackColors[tech] ||
                        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      }`}
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
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
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
