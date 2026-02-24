import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectsData } from "../data/projects";

export default function SelectedWork() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="py-32 bg-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
            Selected Work
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1]">
            Architecting solutions for{" "}
            <span className="text-white/40">complex problems.</span>
          </h3>
        </div>

        <div className="flex flex-col gap-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
            >
              <div
                className={`w-full lg:w-1/2 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                  <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-50 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <span className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
                  {project.subtitle}
                </span>
                <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
                  {project.title}
                </h4>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">
                      The Problem
                    </h5>
                    <p className="text-white/70 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">
                      Architecture
                    </h5>
                    <p className="text-white/70 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div>
                      <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">
                        Performance
                      </h5>
                      <p className="text-white font-medium">
                        {project.results}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">
                        Business Impact
                      </h5>
                      <p className="text-white font-medium">{project.impact}</p>
                    </div>
                  </div>
                  <div className="pt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
