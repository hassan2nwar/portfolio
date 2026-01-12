import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hassan Anwar
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-6">
            Computer Science & ICT Instructor
          </p>

          <p className="text-gray-500 max-w-xl mb-8">
            Passionate about teaching computer science, modern web technologies,
            and applied artificial intelligence with a strong focus on clarity,
            real-world skills, and career readiness.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-600 mb-8">
            <a
              href="mailto:hassancodeanwar@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm md:text-base">
                hassancodeanwar@gmail.com
              </span>
            </a>
            <a
              href="tel:+201062784604"
              className="flex items-center gap-3 hover:text-green-600 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm md:text-base">+20 106 278 4604</span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span className="text-sm md:text-base">Cairo, Egypt</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/hassancodeanwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/hassancodeanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-blue-100 blur-xl opacity-40" />
            <img
              src="/hassan_profile_image.png"
              alt="Hassan Anwar"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
