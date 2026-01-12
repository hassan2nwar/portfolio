import { Mail, Download } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-8 py-10 md:px-12">
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            ICT and Computer Science Instructor with experience teaching students aged 6–18.
            Skilled in Scratch, Python, and core computer science concepts. Focused on
            structured learning, problem-solving, and building strong digital foundations
            for academic and future success.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/10J_9PkYs8D3abNrbZez7cpG27MUpCUhM/view?usp=sharing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                         rounded-lg hover:bg-blue-700 transition shadow"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="mailto:hassancodeanwar@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300
                         text-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
