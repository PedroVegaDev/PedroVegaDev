import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-gray-800 dark:text-white border-t border-indigo-300/50 dark:border-cyan-500/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          Pedro Vega
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          © {new Date().getFullYear()} Pedro Vega. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/PedroVegaDev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors hover:drop-shadow-lg">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/PedroVegaDev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:drop-shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="mailto:pedro.vega.damian@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors hover:drop-shadow-lg">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;