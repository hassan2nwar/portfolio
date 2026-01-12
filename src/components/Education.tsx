import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Bachelor of Computer Science
              </h3>
              <p className="text-lg text-blue-600 font-semibold mb-3">
                Higher Institution of Computer Science and Information Systems
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} />
                <span>Oct 2021 – Sep 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
