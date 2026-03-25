import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
        company: 'Westview International Language School (WILS)',
        role: 'ICT Teacher / Coding for American High School',
        period: 'Fab 2026 – Present',
        location: 'Giza',
        responsibilities: [
          'Teaching Python, managing databases, developing desktop applications, and introducing AI concepts to students.',
        ],        
  },
  {
    company: 'Black Horse Courses',
    role: 'Programming Instructor',
    period: 'May 2025 – Nov 2025',
    location: 'Cairo',
    responsibilities: [
      'Facilitated engaging programming classes for students aged 6–18, focusing on Python and Scratch',
      'Provided personalized feedback to enhance students\' coding skills and understanding',
      'Fostered a positive and inclusive classroom environment that encouraged collaboration and creativity',
    ],
  },
  {
    company: 'MS 4-BIT Academy',
    role: 'Kids Programming Instructor',
    period: 'Jan 2024 – Oct 2024',
    location: 'Egypt',
    responsibilities: [
      'Taught Scratch programming and basic computer science concepts to students aged 6–12',
      'Introduced Python programming fundamentals, OOP concepts, and basic data structures to students aged 13–15',
      'Encouraged creativity and logical thinking through interactive coding activities',
    ],
  },
  {
    company: 'Microsoft Student Partner (MSP)',
    role: 'AI Team Leader',
    period: 'Oct 2023 – Dec 2024',
    location: 'Cairo',
    responsibilities: [
      'Led and mentored students through workshops and hands-on learning sessions',
      'Explained complex technical concepts in a clear and engaging teaching style',
      'Supported peer learning and collaborative problem-solving',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Teaching Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
