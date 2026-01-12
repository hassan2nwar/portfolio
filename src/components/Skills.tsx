import { Code, Users, BookOpen, Lightbulb } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Teaching Skills',
    icon: <BookOpen size={24} />,
    skills: [
      'ICT & Computer Science Instruction',
      'Lesson Planning & Curriculum Development',
      'Classroom Management',
      'Student Engagement & Differentiated Instruction',
      'Assessment & Feedback',
    ],
  },
  {
    title: 'Technical Skills',
    icon: <Code size={24} />,
    skills: [
      'Python Programming',
      'Scratch Programming',
      'OOP Concepts',
      'Data Structures',
      'Algorithms',
      'Basic AI Concepts',
    ],
  },
  {
    title: 'Communication',
    icon: <Users size={24} />,
    skills: [
      'Presentation Skills',
      'Team Collaboration',
      'Student Mentoring',
      'Arabic (Native)',
      'English (Very Good)',
    ],
  },
  {
    title: 'Core Competencies',
    icon: <Lightbulb size={24} />,
    skills: [
      'Problem Solving',
      'Logical Thinking',
      'Creativity Encouragement',
      'Interactive Learning',
      'Peer Learning Support',
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 text-white rounded-lg">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
