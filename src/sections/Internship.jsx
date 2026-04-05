import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, Database, Globe, Layers } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const Internship = () => {
  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-[100px] animate-pulse" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: Illustration/Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <div className="relative p-8 glass rounded-3xl aspect-square flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary/20 via-transparent to-brand-accent/20 group-hover:scale-110 transition-transform duration-700" />
                <GraduationCap size={120} strokeWidth={0.5} className="text-white relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 text-brand-secondary mb-4 uppercase tracking-widest text-sm font-bold">
                <span className="h-[2px] w-6 bg-brand-secondary" />
                Internship
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                Full Stack <span className="text-gradient">Foundation</span> at FunctionUp.
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                <p>
                  During my intensive Full Stack Developer residency, I mastered the core of modern web 
                  development, building end-to-end applications from scratch.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Database size={20} className="text-brand-primary" />
                    <span className="text-slate-300">MongoDB & AWS S3</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-brand-secondary" />
                    <span className="text-slate-300">Node.js Ecosystem</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers size={20} className="text-brand-accent" />
                    <span className="text-slate-300">Scalable REST APIs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink size={20} className="text-slate-500" />
                    <span className="text-slate-300">E-Commerce Dashboards</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="glass" className="px-4 py-2 border-brand-primary/30">React</Badge>
                <Badge variant="glass" className="px-4 py-2 border-brand-secondary/30">Node.js</Badge>
                <Badge variant="glass" className="px-4 py-2 border-brand-accent/30">MongoDB</Badge>
                <Badge variant="glass" className="px-4 py-2 border-white/10">AWS S3</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
