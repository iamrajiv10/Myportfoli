import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor } from "lucide-react";
import { PROJECTS } from "../constants";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group h-full flex flex-col p-0 overflow-hidden border-white/5 hover:border-brand-primary/30">
        {/* Project Visual */}
        <div className="relative aspect-video overflow-hidden bg-slate-800">
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 to-brand-secondary/10 group-hover:from-brand-primary/20 group-hover:to-brand-secondary/20 transition-all duration-500" />
          <div className="flex items-center justify-center h-full text-slate-600 group-hover:text-slate-500 group-hover:scale-105 transition-all duration-700">
            <Monitor size={64} strokeWidth={1} />
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-slate-500 font-medium">{project.duration}</span>
          </div>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Links Section */}
          <div className="flex items-center gap-3 mb-6">
            <a href={project.link} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="primary" size="sm" className="w-full h-10 rounded-xl gap-2 font-semibold">
                <ExternalLink size={16} />
                Live Demo
              </Button>
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="sm" className="w-10 h-10 rounded-xl flex items-center justify-center p-0">
                <Github size={18} />
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="default" className="text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand-secondary font-medium tracking-wide mb-4">
              <span className="h-[1.5px] w-8 bg-brand-secondary" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Creative <span className="text-gradient">Solutions</span> & Projects.
            </h2>
          </div>
          <Button variant="ghost" className="text-brand-primary hover:text-brand-primary/80 group">
            View All Projects
            <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
