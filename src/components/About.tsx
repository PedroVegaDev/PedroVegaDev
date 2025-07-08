import React from "react";
import { Code, Palette, Database, Globe } from "lucide-react";

const About: React.FC = () => {
  const techStack = [
    {
      name: "Frontend",
      icon: Code,
      techs: ["HTML", "CSS", "Sass", "JavaScript", "TypeScript"],
    },
    {
      name: "Frameworks",
      icon: Palette,
      techs: ["React", "Next.js", "Vue", "Nuxt"],
    },
    { name: "Backend", icon: Globe, techs: ["Node.js", "Express", "Nest.js"] },
    {
      name: "Bases de Datos",
      icon: Database,
      techs: ["MongoDB", "Firebase", "PostgreSQL"],
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 mx-auto mb-8 shadow-lg shadow-indigo-400/50 dark:shadow-cyan-400/50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Como desarrollador Frontend especializado, mi enfoque está en
              crear experiencias web excepcionales mediante el dominio de
              tecnologías fundamentales y frameworks modernos.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mi experiencia abarca desde las bases sólidas del desarrollo web
              con{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                HTML, CSS, Sass, JavaScript y TypeScript
              </span>
              , hasta la implementación de interfaces robustas y receptivas con
              frameworks como{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                React, Next.js, Vue y Nuxt
              </span>
              .
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              También tengo experiencia en el lado del servidor con{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Node.js, Express y Nest.js
              </span>
              , además de la gestión y manipulación de datos con{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                MongoDB, Firebase y PostgreSQL
              </span>
              , lo que me permite crear soluciones completas y escalables.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mi pasión radica en transformar ideas complejas en interfaces
              intuitivas y experiencias de usuario memorables, siempre
              manteniéndome actualizado con las últimas tendencias y mejores
              prácticas del desarrollo frontend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techStack.map((category, index) => (
              <div
                key={index}
                className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 border border-indigo-400/20 dark:border-cyan-400/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/50 dark:shadow-cyan-500/50">
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-indigo-500/20 dark:bg-cyan-500/20 text-indigo-700 dark:text-cyan-300 rounded-md text-sm font-medium border border-indigo-400/30 dark:border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 rounded-full mb-4 shadow-xl shadow-indigo-500/50 dark:shadow-cyan-500/50">
            <Code size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            +2 Años
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            de Experiencia como Frontend
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
