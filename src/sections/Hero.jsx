import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../components/ui/Button";
import resumePdf from "../assets/Rajiv_Kumar (1) Resume..pdf";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-secondary/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-accent/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-primary font-medium tracking-wide mb-4 text-lg">
              Frontend Architect & UI Expert
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Building <span className="text-gradient">high-performance</span> digital experiences.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Hi, I'm <span className="text-white font-medium">Rajiv Kumar</span>. A result-driven Software Engineer 
              with 5+ years of experience in building scalable, user-centric web applications 
              using React.js and modern frontend technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="group w-full sm:w-auto rounded-full">
                View Work 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <a href={resumePdf} download="Rajiv_Kumar_Resume.pdf" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="rounded-full w-full">
                  Download Resume
                  <Download className="ml-2" size={20} />
                </Button>
              </a>
            </div>
            
            {/* Stats/Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8"
            >
              <div>
                <p className="text-3xl font-display font-bold text-white">5+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-display font-bold text-white">10+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Projects</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-display font-bold text-white">WFH</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Noida, India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
