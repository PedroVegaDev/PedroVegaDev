import React from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollY: number;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
  activeSection,
  scrollToSection,
}) => {
  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "habilidades", label: "Habilidades" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-indigo-300/50 dark:border-cyan-500/30 shadow-lg shadow-indigo-300/20 dark:shadow-cyan-500/20"
          : "bg-white/30 dark:bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-300"
          >
            PedroVegaDev
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:drop-shadow-lg hover:shadow-indigo-400/50 dark:hover:shadow-cyan-400/50 ${
                  activeSection === item.id
                    ? "text-indigo-600 dark:text-cyan-400 font-semibold drop-shadow-lg shadow-indigo-400/50 dark:shadow-cyan-400/50"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-indigo-500/20 dark:hover:bg-cyan-500/20 transition-colors text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-indigo-300/50 dark:border-cyan-500/30">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-indigo-500/20 dark:hover:bg-cyan-500/20 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
