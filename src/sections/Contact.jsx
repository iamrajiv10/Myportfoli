import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 opacity-50" />
          
          <div className="relative z-10">
            <Badge variant="primary" className="mb-8 uppercase tracking-widest text-xs px-4 py-1.5">
              Let's Connect
            </Badge>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter leading-tight">
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, or just a friendly conversation about frontend 
              architecture and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full group">
                  Send an Email
                  <Mail className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                </Button>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-full group">
                  LinkedIn Profile
                  <Linkedin className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 pt-12 border-t border-white/5">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <div className="w-[1px] h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-slate-400">
                <MessageCircle size={20} className="text-brand-secondary" />
                <span className="font-medium">+91 9038830454</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
