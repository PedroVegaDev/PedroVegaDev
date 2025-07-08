import React from "react";
import { Code, Globe } from "lucide-react";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Desarrollo Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Desarrollo Web",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Desarrollo Backend",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="habilidades"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 dark:from-purple-900/50 dark:to-cyan-900/50 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Habilidades y Experiencia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 mx-auto mb-8 shadow-lg shadow-indigo-400/50 dark:shadow-cyan-400/50"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trabajo con una amplia gama de tecnologías para crear soluciones
            digitales integrales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 border border-indigo-400/20 dark:border-cyan-400/20">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                >
                  <skill.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-4">
                  {skill.name}
                </h3>
                <div className="space-y-2">
                  <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-300`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/30 transition-all duration-300 border border-indigo-400/20 dark:border-cyan-400/20">
            <h4 className="text-2xl font-bold text-indigo-600 dark:text-cyan-400 mb-2">
              Frontend
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              React, Vue.js, Next.js, Nuxt, TypeScript, Tailwind CSS
            </p>
          </div>
          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 border border-purple-400/20">
            <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              Backend
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Node.js, Express, Nest.js, MongoDB, Firebase, PostgreSQL
            </p>
          </div>
          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 border border-pink-400/20">
            <h4 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">
              Herramientas
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Git, Sass, Webpack, Vite, Figma
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
