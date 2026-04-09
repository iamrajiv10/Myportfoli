import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../constants";
import { Badge } from "../components/ui/Badge";

const SPACING_ANGLE = 360 / EXPERIENCE.length; // Distribute nodes evenly across 360 degrees

const PillNode = ({ exp, index, activeIndex, radius, rotation, onClick }) => {
  const isActive = activeIndex === index;
  // Node's fixed position angle along the parent circle. 
  const offsetAngle = index * SPACING_ANGLE;
  
  // To strictly follow the parent's absolute accumulated rotation, 
  // global angle is just offset + absolute rotation.
  const globalRotation = offsetAngle + rotation;
  const counterRotation = -globalRotation;

  return (
    <div 
      className="absolute top-1/2 left-1/2 -ml-[1px] -mt-[1px] origin-center z-30"
      style={{ 
        transform: `rotate(${offsetAngle}deg) translateX(${radius}px)` 
      }}
    >
      <motion.div
        animate={{ rotate: counterRotation }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center rounded-full"
        onClick={onClick}
      >
        <div className={`relative px-5 py-2.5 md:px-7 md:py-3.5 rounded-full flex items-center justify-center transition-all duration-500 shadow-md border-2
          ${isActive 
            ? 'glass border-brand-primary/60 text-white shadow-[0_0_30px_rgba(var(--color-brand-primary),0.3)] scale-110' 
            : 'bg-slate-900/90 border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20'}`}
        >
          <span className={`font-semibold whitespace-nowrap tracking-wide text-sm md:text-base transition-colors ${isActive ? 'text-brand-primary' : ''}`}>
            {exp.company}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [layoutConfig, setLayoutConfig] = useState({ radius: 210 });

  const handleNodeClick = (idx) => {
    if (idx === activeIndex) return;

    // Calculate target angle to bring this node to the 0 degree mark
    const targetMod = -idx * SPACING_ANGLE;
    
    // Determine the shortest clockwise path (positive rotation difference)
    let diff = (targetMod - rotation) % 360;
    if (diff <= 0) {
      diff += 360; // Force strictly clockwise positive increase
    }

    setRotation(r => r + diff);
    setActiveIndex(idx);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLayoutConfig({ radius: 110 });
      } else if (window.innerWidth < 1024) {
        setLayoutConfig({ radius: 160 });
      } else {
        setLayoutConfig({ radius: 210 }); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeExp = EXPERIENCE[activeIndex] || EXPERIENCE[0];

  return (
    <section id="experience" className="relative py-24 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="section-container relative z-20 mb-16 md:mb-24">
        <div className="flex items-center gap-3 text-brand-primary mb-4 lg:ml-8">
          <span className="h-[1px] w-8 bg-brand-primary" />
          <span className="text-sm font-bold uppercase tracking-widest">Career Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 lg:mb-12 lg:ml-8">
          Work <span className="text-gradient">Experience</span>.
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
         
         {/* LEFT COLUMN: ARC SELECTOR */}
         <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center">
            <div 
              className="relative flex items-center justify-center transition-all duration-500 rounded-full"
              style={{
                width: layoutConfig.radius * 2,
                height: layoutConfig.radius * 2
              }}
            >
              {/* Visible arc dashed tracks */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
              <div className="absolute inset-[6%] rounded-full border border-white/5" />
              <div className="absolute inset-[12%] rounded-full border border-white/5 opacity-50" />

              {/* The Rotating Canvas */}
              <motion.div 
                className="w-full h-full absolute inset-0 origin-center"
                animate={{ rotate: rotation }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {EXPERIENCE.map((exp, idx) => (
                  <PillNode
                    key={exp.company}
                    exp={exp}
                    index={idx}
                    activeIndex={activeIndex}
                    radius={layoutConfig.radius}
                    rotation={rotation}
                    onClick={() => handleNodeClick(idx)}
                  />
                ))}
              </motion.div>
            </div>
         </div>

         {/* RIGHT COLUMN: DETAIL CARD */}
         <div className="relative z-20 flex justify-center lg:justify-end w-full">
            <div className="p-6 md:p-10 rounded-[2.5rem] backdrop-blur-2xl bg-slate-950/60 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-xl relative overflow-hidden group">
               {/* Ambient Glow Effects */}
               <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] opacity-70 group-hover:bg-brand-primary/30 transition-colors duration-700 pointer-events-none" />
               <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[80px] opacity-70 group-hover:bg-brand-secondary/30 transition-colors duration-700 pointer-events-none" />
               
               <div className="relative z-10 w-full">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndex}
                     initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                     animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                     exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="w-full flex flex-col items-start text-left"
                   >
                     <div className="flex flex-wrap items-center gap-3 text-brand-primary mb-5 w-full">
                       <Briefcase size={18} className="shrink-0" />
                       <span className="text-sm font-semibold uppercase tracking-wider">{activeExp.role}</span>
                       <div className="ml-auto">
                         <Badge variant="outline" className="px-3 py-1.5 border-white/10 bg-white/5 text-xs text-slate-300">
                           {activeExp.duration}
                         </Badge>
                       </div>
                     </div>
                     
                     <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-6">
                       {activeExp.company}
                     </h3>
                     
                     <div className="space-y-4 w-full bg-white/5 rounded-2xl p-5 border border-white/5">
                       {activeExp.description.map((point, i) => (
                          <div key={i} className="flex gap-4 text-slate-300 text-sm md:text-base leading-relaxed">
                            <ChevronRight className="text-brand-secondary shrink-0 mt-1" size={16} />
                            <p className="text-slate-300/90 leading-relaxed">{point}</p>
                          </div>
                       ))}
                     </div>

                     {/* Tech stack */}
                     {activeExp.tech && activeExp.tech.length > 0 && (
                       <div className="flex flex-wrap gap-2 pt-6 mt-2 w-full">
                         {activeExp.tech.map((skill) => (
                           <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 hover:border-brand-primary/50 text-xs py-1.5 px-3 transition-colors">
                             {skill}
                           </Badge>
                         ))}
                       </div>
                     )}
                   </motion.div>
                 </AnimatePresence>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Experience;
