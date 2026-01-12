import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in teaching opportunities, collaborations, or
            professional discussions? I’m always open to meaningful
            conversations.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:hassancodeanwar@gmail.com"
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm
            hover:shadow-md transition"
          >
            <Mail className="text-blue-600 mb-4" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-sm text-gray-500 group-hover:text-blue-600 transition">
              hassancodeanwar@gmail.com
            </p>
          </a>

          <a
            href="tel:+201062784604"
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm
            hover:shadow-md transition"
          >
            <Phone className="text-green-600 mb-4" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-sm text-gray-500 group-hover:text-green-600 transition">
              +20 106 278 4604
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/hassancodeanwar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm
            hover:shadow-md transition"
          >
            <Linkedin className="text-blue-700 mb-4" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
            <p className="text-sm text-gray-500 group-hover:text-blue-700 transition">
              linkedin.com/in/hassancodeanwar
            </p>
          </a>

          <a
            href="https://github.com/hassancodeanwar"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm
            hover:shadow-md transition"
          >
            <Github className="text-gray-800 mb-4" size={24} />
            <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-800 transition">
              github.com/hassancodeanwar
            </p>
          </a>
        </div>

        {/* Location */}
        <div className="mt-12 flex justify-center text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Cairo, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
}
