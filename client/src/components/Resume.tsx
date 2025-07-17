import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, FileText } from "lucide-react";
import { getAssetPath } from "@/lib/assetPaths";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement("a");
    link.href = getAssetPath("Kasuni_Abeynayake_Resume.pdf");
    link.download = "Kasuni_Abeynayake_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Resume
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
            Download my complete resume to learn more about my experience,
            education, and accomplishments.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="bg-card border border-border rounded-xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Kasuni Abeynayake - Resume
            </h3>
            <p className="text-muted-foreground mb-6">
              Complete professional profile including education, projects,
              skills, and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                Major Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">
                Technical Skills
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Study</div>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="hero-gradient text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
