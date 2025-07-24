import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll<HTMLElement>(".timeline-item");
    elements?.forEach((el: HTMLElement, index: number) => {
      el.style.animationDelay = `${index * 0.2}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      year: "2022-2025",
      institution: "Plymouth University, affiliated with NSBM Green University",
      degree: "Bachelor of Science with Honours in Computer Science",
      class: "Class: Second Class Upper Division",
      type: "University",
      status: "Current",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2022-2023",
      institution: "ESOFT Metro Campus",
      degree: "Pearson Assured Diploma in Information Technology (DiTEC)",
      grade: "Grade: Distinction",
      type: "Diploma",
      status: "Completed",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2022",
      institution: "ESOFT Metro Campus",
      degree: "Pearson Assured Diploma in English (DiE)",
      grade: "Grade: Distinction",
      type: "Diploma",
      status: "Completed",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2018-2020",
      institution: "Sri Rahula Balika Maha Vidyalaya, Malabe",
      degree:
        "Successfully Completed GCE Advanced Level Examination in Biological Science Stream",
      type: "A-Level",
      status: "Completed",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2017",
      institution: "Sri Rahula Balika Maha Vidyalaya, Malabe",
      degree: "Successfully Completed GCE Ordinary Level Examination",
      type: "O-Level",
      status: "Completed",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2015",
      institution: "ESOL College International",
      degree:
        "Successfully Completed Cambridge Young Learners English (YLE) Flyers",
      type: "Certificate",
      status: "Completed",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 relative overflow-hidden"
    >
      <style>{`
        .animate-slide-in {
          animation: slideInTimeline 0.8s ease-out forwards;
        }
        
        @keyframes slideInTimeline {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .timeline-line {
          background: linear-gradient(to bottom, 
            transparent 0%, 
            #008080 10%, 
            #008080 90%, 
            transparent 100%
          );
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 128, 128, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .dark .glass-card {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 128, 128, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(0, 128, 128, 0.3);
          border-color: rgba(0, 128, 128, 0.5);
          transform: translateY(-2px);
        }
        
        .pulse-dot {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-l from-teal-600/10 to-transparent rounded-full blur-3xl"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-600/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008080' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-teal-600 dark:text-teal-400 text-lg font-semibold tracking-wider uppercase">
              My Journey
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Educational{" "}
            <span className="bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent">
              Background
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my academic achievements and educational
            milestones
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 timeline-line transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center opacity-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 rounded-full transform md:-translate-x-3 border-4 border-white dark:border-gray-900 shadow-lg z-10 pulse-dot"></div>

                {/* Year Badge */}
                <div
                  className={`mb-4 md:mb-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:order-2"
                  }`}
                >
                  <div className="ml-20 md:ml-0 inline-block">
                    <div className="glass-card rounded-2xl p-4 hover-glow transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="bg-gradient-to-r from-teal-600 to-teal-800 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent font-black text-lg">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Current"
                              ? "bg-green-100 text-green-700 border border-green-300 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30"
                              : "bg-teal-100 text-teal-700 border border-teal-300 dark:bg-teal-500/20 dark:text-teal-400 dark:border-teal-500/30"
                          }`}
                        >
                          {item.status}
                        </span>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 border border-teal-300 dark:bg-teal-500/20 dark:text-teal-400 dark:border-teal-500/30 rounded-full text-xs font-semibold">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1"
                  }`}
                >
                  <div className="ml-20 md:ml-0 glass-card rounded-3xl p-8 hover-glow transition-all duration-300 group">
                    {/* Institution Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Sri Lanka</span>
                        </div>
                      </div>
                    </div>

                    {/* Degree */}
                    <div className="mb-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {item.degree}
                      </p>
                    </div>

                    {/* Grade (if exists) */}
                    {item.grade && (
                      <div className="pt-4 border-t border-teal-200 dark:border-teal-400/20">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                          <span className="text-teal-600 dark:text-teal-400 font-bold">
                            {item.grade}
                          </span>
                        </div>
                      </div>
                    )}
                    {item.class && (
                      <div className="pt-4 border-t border-teal-200 dark:border-teal-400/20">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                          <span className="text-teal-600 dark:text-teal-400 font-bold">
                            {item.class}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full pulse-dot"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            The journey continues...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
