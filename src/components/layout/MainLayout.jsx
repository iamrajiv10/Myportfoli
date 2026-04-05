import React from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-dark text-slate-200">
      <Navbar />
      <main>{children}</main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 mt-20">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-display font-bold text-white tracking-tighter">
            RAJIV<span className="text-brand-primary">.</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Rajiv Kumar. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
