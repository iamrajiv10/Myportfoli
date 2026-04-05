import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../constants";
import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";
import resumePdf from "../../assets/Rajiv_Kumar (1) Resume..pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "top-2" : "top-0"
      )}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto rounded-2xl transition-all duration-300",
          scrolled ? "glass shadow-2xl py-2 px-6" : "bg-transparent py-4 px-4"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold text-white tracking-tighter"
          >
            RAJIV<span className="text-brand-primary">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Socials & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <a href={resumePdf} download="Rajiv_Kumar_Resume.pdf">
              <Button variant="primary" size="sm" className="hidden md:flex rounded-full">
                Resume
              </Button>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 glass rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-5xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white border-b border-white/5 pb-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-2">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  <Github size={24} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-white">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
