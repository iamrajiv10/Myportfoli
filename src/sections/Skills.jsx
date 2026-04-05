import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative gradient behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-3xl rounded-full" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="primary" className="mb-4 uppercase tracking-widest text-xs px-4 py-1.5">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Core <span className="text-gradient">Proficiencies</span> & Skills.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A comprehensive overview of my technical toolkit, ranging from core front-end languages 
            to modern frameworks and databases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-white/5 hover:border-brand-accent/30 hover:bg-white/5 transition-all">
                <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-accent" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Badge key={item} variant="outline" className="bg-white/5 border-white/10 hover:border-brand-secondary/50 transition-colors">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
