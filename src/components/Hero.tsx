import React from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-10 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 p-2 shadow-2xl shadow-indigo-500/50 dark:shadow-cyan-500/50">
            <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center overflow-hidden border-2 border-indigo-400/30 dark:border-cyan-400/30">
              <img
                src="https://avatars.githubusercontent.com/u/60680972?v=4"
                alt="Pedro Vega"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-2xl leading-tight md:leading-snug lg:leading-normal">
            Pedro Vega
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-indigo-600 dark:text-cyan-300 mb-6 font-medium drop-shadow-lg">
            Frontend Developer
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Creo experiencias digitales hermosas, funcionales y centradas en el
            usuario que dan vida a las ideas a través del código y el diseño.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("proyectos")}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 text-white rounded-full font-semibold text-base hover:shadow-xl hover:shadow-indigo-500/50 dark:hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 border border-indigo-400/30 dark:border-cyan-400/30"
          >
            Ver Mi Trabajo
          </button>
          <a
            href="/CV_PedroVega.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/60 dark:bg-black/60 backdrop-blur-sm text-pink-600 dark:text-pink-400 rounded-full font-semibold border border-pink-400/50 hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center text-base"
          >
            <Download size={20} />
            Descargar CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/PedroVegaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-full hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-indigo-500/50 dark:hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 border border-indigo-400/30 dark:border-cyan-400/30"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/PedroVegaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-full hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 border border-purple-400/30"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:pedro.vega.damian@gmail.com"
            className="p-4 bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-full hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 border border-pink-400/30"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection("sobre-mi")}
            className="text-indigo-600 dark:text-cyan-400 hover:text-indigo-500 dark:hover:text-cyan-300 transition-colors p-2 drop-shadow-lg"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
