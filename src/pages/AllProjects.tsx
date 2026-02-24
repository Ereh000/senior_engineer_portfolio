import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projectsData } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-white/20 selection:text-white font-sans flex flex-col pt-24">
      <Navbar />
      <main className="grow">
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-white/40 hover:text-white transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance mb-4">
                All <span className="text-white/40">Projects.</span>
              </h1>
              <p className="text-white/70 max-w-2xl text-lg">
                A comprehensive collection of storefronts, applications, and
                digital experiences engineered for performance and conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <span className="text-xs font-medium text-white/40 uppercase tracking-widest mb-2">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
