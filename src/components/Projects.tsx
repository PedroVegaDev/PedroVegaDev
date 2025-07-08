import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Plataforma E-commerce Orimi",
      description:
        "Orimi es tu tienda online ideal, diseñada para ofrecerte una experiencia de compra excepcional. Nuestro sitio web de comercio electrónico es moderno y adaptable, garantizando un recorrido de compra fluido y agradable.",
      tech: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      image: "/orimi.png",
      github: "https://github.com/PedroVegaDev/Orimi",
      demo: "https://orimi.vercel.app/",
    },
    {
      title: "Musical Space",
      description:
        "Este proyecto es un reproductor de canciones intuitivo y fácil de usar, diseñado para que puedas disfrutar de tu música favorita en cualquier momento y lugar. Olvídate de las restricciones; con este reproductor, tienes el control total para escuchar tus canciones preferidas justo cuando quieras.",
      tech: ["Vue.js", "TypeScript", "Pinia", "Firebase"],
      image: "/musical-space.png",
      demo: "https://musical-space.vercel.app",
    },
    {
      title: "Pizza Web",
      description:
        "Este proyecto es el desarrollo de una página web completa para una pizzería, diseñada para atraer a los amantes de la pizza y simplificar el proceso de pedido. La plataforma ofrece a los clientes una manera fácil e intuitiva de explorar el menú.",
      tech: ["React", "Sass", "Next.js"],
      image: "/pizza-web.png",
      github: "https://github.com/PedroVegaDev/maquetacion-pizza-web",
      demo: "https://pizza-web.vercel.app",
    },
    {
      title: "Travesía de Sabores",
      description:
        "Travesía de Sabores es una plataforma interactiva que permite a los usuarios explorar una variedad de recetas peruanas. La página está diseñada para ser intuitiva y fácil de navegar, ofreciendo varias funcionalidades para mejorar la experiencia del usuario.",
      tech: ["Nuxt.js", "TypeScript", "Vue", "Tailwind CSS"],
      image: "/travesia-de-sabores.png",
      github: "https://github.com/PedroVegaDamian/travesia-de-sabores",
      demo: "https://travesia-de-sabores.vercel.app",
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 mx-auto mb-8 shadow-lg shadow-indigo-400/50 dark:shadow-cyan-400/50"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aquí tienes algunos de mis proyectos recientes que muestran mis
            habilidades y pasión por crear experiencias digitales excepcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 border border-indigo-400/20 dark:border-cyan-400/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-500/20 dark:bg-cyan-500/20 text-indigo-700 dark:text-cyan-300 rounded-full text-sm border border-indigo-400/30 dark:border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    Código
                  </a>
                  <a
                    target="_blank"
                    href={project.demo}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
