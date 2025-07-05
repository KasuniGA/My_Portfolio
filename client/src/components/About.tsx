import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getAssetPath } from '@/lib/assetPaths';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am a dynamic Computer Science undergraduate with a passion for
                creating innovative technological solutions. My journey in
                technology is driven by curiosity, creativity, and a commitment
                to excellence.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With strong teamwork, communication, and problem-solving skills,
                I thrive in collaborative environments where I can contribute to
                meaningful projects. Whether developing web applications,
                implementing AI solutions, or designing user interfaces, I
                approach each challenge with enthusiasm and dedication.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I am currently seeking opportunities to apply my skills in a
                vibrant technology context, where I can continue learning,
                growing, and making a positive impact through innovative
                solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                <img
                  src={getAssetPath('profile.jpg')}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
