import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 dark:from-purple-900/50 dark:to-cyan-900/50 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">Trabajemos Juntos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 mx-auto mb-8 shadow-lg shadow-indigo-400/50 dark:shadow-cyan-400/50"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres discutir oportunidades? Me encantaría escucharte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 dark:shadow-cyan-500/50">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">pedro.vega.damian@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 dark:shadow-cyan-500/50">
                <Github size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300">@PedroVegaDev</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 dark:shadow-cyan-500/50">
                <Linkedin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300">PedroVegaDev</p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/80 dark:hover:bg-black/80 hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/30 transition-all duration-300 border border-indigo-400/20 dark:border-cyan-400/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-indigo-400/30 dark:border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 focus:border-indigo-500 dark:focus:border-cyan-500 transition-colors bg-white/60 dark:bg-black/60 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tu Nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-indigo-400/30 dark:border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 focus:border-indigo-500 dark:focus:border-cyan-500 transition-colors bg-white/60 dark:bg-black/60 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-indigo-400/30 dark:border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 focus:border-indigo-500 dark:focus:border-cyan-500 transition-colors bg-white/60 dark:bg-black/60 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tu mensaje..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 border border-indigo-400/30 dark:border-cyan-400/30"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;