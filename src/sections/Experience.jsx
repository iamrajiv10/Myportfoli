import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../constants";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
const ExperienceCard = ({ exp, index, progress }) => {
  const opacity = useTransform(progress, [index * 0.33, index * 0.33 + 0.1, (index + 1) * 0.33 - 0.1, (index + 1) * 0.33], [0, 1, 1, 0]);
  const scale = useTransform(progress, [index * 0.33, index * 0.33 + 0.1, (index + 1) * 0.33 - 0.1, (index + 1) * 0.33], [0.8, 1, 1, 0.8]);
  const y = useTransform(progress, [index * 0.33, index * 0.33 + 0.1, (index + 1) * 0.33 - 0.1, (index + 1) * 0.33], [50, 0, 0, -50]);
  
  const glowColors = ["var(--color-brand-primary)", "var(--color-brand-secondary)", "var(--color-brand-accent)"];
  const currentGlow = glowColors[index] || "var(--color-brand-primary)";

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
    >
      <Card className="max-w-4xl w-full glass p-8 md:p-12 relative overflow-hidden group">
        {/* Dynamic background glow */}
        <div 
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 transition-all duration-700" 
          style={{ backgroundColor: currentGlow }}
        />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-primary mb-2">
                <Briefcase size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">{exp.role}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                {exp.company}
              </h3>
            </div>
            <div className="text-right flex flex-col items-end">
              <Badge variant="primary" className="mb-2 text-sm px-3 py-1">
                {exp.duration}
              </Badge>
              <div className="flex items-center gap-1 text-slate-500 text-sm">
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {exp.description.map((point, i) => (
              <div key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                <ChevronRight className="text-brand-secondary shrink-0 mt-1" size={18} />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {exp.tech.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 hover:border-brand-accent/50 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const TimelineItem = ({ idx, exp, progress }) => {
  const start = idx * 0.33;
  const end = (idx + 1) * 0.33;

  const labelColor = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    ["rgba(148, 163, 184, 0.5)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(148, 163, 184, 0.5)"]
  );

  const labelScale = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [1, 1.05, 1.05, 1]
  );

  const scaleXProgress = useTransform(progress, [start, end], [0, 1]);

  return (
    <div className="flex-1">
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          style={{ 
            scaleX: scaleXProgress,
            originX: 0
          }}
          className="h-full bg-linear-to-r from-brand-primary via-brand-secondary to-brand-accent"
        />
      </div>
      <motion.p 
        style={{ color: labelColor, scale: labelScale }}
        className="mt-3 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all"
      >
        {exp.company}
      </motion.p>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative h-[300vh] mb-20"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Progress Bar Header */}
        <div className="section-container pt-24 relative z-20">
          <div className="flex items-center gap-3 text-brand-primary mb-4">
            <span className="h-[1px] w-8 bg-brand-primary" />
            <span className="text-sm font-bold uppercase tracking-widest">Career Journey</span>
          </div>
          <h2 className="text-4xl font-display font-bold text-white mb-12">
            Work <span className="text-gradient">Experience</span>.
          </h2>

          {/* Timeline Indicator */}
          <div className="hidden md:flex gap-4 mb-12">
            {EXPERIENCE.map((exp, idx) => (
              <TimelineItem 
                key={exp.company} 
                idx={idx} 
                exp={exp} 
                progress={smoothProgress} 
              />
            ))}
          </div>
        </div>

        {/* Dynamic Cards Container */}
        <div className="relative flex-1">
          {EXPERIENCE.map((exp, idx) => (
            <ExperienceCard 
              key={exp.company} 
              exp={exp} 
              index={idx} 
              progress={smoothProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
