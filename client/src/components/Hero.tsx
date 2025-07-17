import { useState, useEffect } from "react";
import { ArrowDown, Code, Sparkles, Zap } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const controls = useAnimationControls();

  const titles = [
    "Computer Science Undergraduate",
    "Fullstack Developer",
    "Frontend Developer",
    "Web Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = titles[currentTitle];
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at end
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Deleting speed (faster)
      } else {
        // Finished deleting, move to next title
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentTitle, titles]);

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements - Symmetrically positioned */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        initial={{ scale: 1.1, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <FloatingParticles />
      </motion.div>

      {/* Floating Icons - Symmetrically positioned to avoid text overlap */}
      <motion.div
        className="absolute top-1/4 left-12 text-primary/20 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code size={32} />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-12 text-primary/20 hidden lg:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-12 text-primary/20 hidden lg:block"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Zap size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-12 text-primary/20 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Code size={26} />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Animated Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.span
              className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Name Title - Centered and Balanced */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Kasuni
            </motion.span>
            <motion.span
              className="block text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Abeynayake
            </motion.span>
          </motion.h1>

          {/* Rotating Titles with Typewriter Effect */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center">
              <span className="typewriter-text">
                {displayedText}
              </span>
              <motion.span
                className="inline-block w-0.5 h-8 bg-primary ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Description - Centered and Balanced */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Passionate about creating innovative solutions and advancing
              technology through teamwork and problem-solving.
            </motion.span>
          </motion.p>

          {/* Action Buttons - Centered and Balanced */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="hero-gradient text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <motion.span className="flex items-center justify-center gap-2">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="bg-background text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-primary"
              whileHover={{
                scale: 1.05,
                borderColor: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary) / 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Perfectly Centered */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
