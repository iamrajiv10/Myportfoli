import { motion } from "framer-motion";
import { User, Code, Terminal, Cpu } from "lucide-react";
import { Card } from "../components/ui/Card";

const About = () => {
  const highlightItems = [
    {
      icon: <Terminal className="text-brand-primary" />,
      title: "5+ Years Exp.",
      desc: "Software Engineer with a focus on Frontend"
    },
    {
      icon: <Code className="text-brand-secondary" />,
      title: "Tech Stack",
      desc: "React.js, TypeScript, Next.js, Material-UI"
    },
    {
      icon: <Cpu className="text-brand-accent" />,
      title: "Problem Solver",
      desc: "Resolving real-time UI/UX challenges"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4 text-brand-primary font-medium tracking-wide">
              <User size={18} />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 text-white">
              Passion for developing <span className="text-gradient">seamless</span> user experiences.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a results-driven Frontend Developer dedicated to building responsive UIs 
                and scalable, user-centric web applications. My journey over the past 5 years 
                has been defined by a deep focus on performance, design consistency, and 
                collaboration in cross-functional teams.
              </p>
              <p>
                Currently, I am leveraging modern development practices and exploring 
                <span className="text-white"> Agentic AI capabilities</span> to improve workflow 
                automation and intelligent system interactions. I believe in continuous learning 
                to stay at the forefront of technology and drive business success.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlightItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={idx === 0 ? "sm:col-span-2" : ""}
              >
                <Card className="h-full group">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 transition-colors group-hover:bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
