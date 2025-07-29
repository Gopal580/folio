import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Area Manager – Malwa Region',
    company: 'Tirth Agro Pvt. Ltd. (Shaktiman), Indore, MP',
    duration: 'Nov 2024 – Present',
    points: [
      'Managing rotavator sales and dealer operations across the Malwa region.',
      'Developed a network of 15+ active dealers, improving market reach.',
      'Organized 10+ product demos and farmer engagement programs.',
    ],
    color: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Sr. Sales Executive (L-1+ Grade)',
    company: 'Sonalika Industries (ICML), Chhattisgarh & MP',
    duration: 'April 2019 – Nov 2024',
    points: [
      'Handled complete territory sales operations in Chhattisgarh and MP (Nimar & Malwa).',
      'Successfully achieved and exceeded monthly sales targets by 15–20%.',
      'Expanded dealer network and provided training to dealer sales staff.',
      'Collaborated with marketing team to implement region-specific campaign.',
    ],
    color: 'from-yellow-500 to-pink-400',
  },
  {
    title: 'Production Intern',
    company: 'AVTEC Pvt. Ltd., Pithampur (MP)',
    duration: 'Oct 2018 – March 2019',
    points: [
      'Gained hands-on experience in automotive component manufacturing.',
      'Assisted in production line supervision and quality checks.',
    ],
    color: 'from-green-400 to-teal-500',
  },
  {
    title: 'Training Intern',
    company: 'Central Railway, Bhusawal (MH)',
    duration: '15-day Industrial Training',
    points: [
      'Learned fundamentals of mechanical maintenance and railway operations.',
    ],
    color: 'from-blue-500 to-indigo-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
};

const Projects = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-100" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-md">
          Professional Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300`}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Colorful top border */}
              <div
                className={`absolute -top-1 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${exp.color}`}
              />

              <h3 className="text-xl font-bold text-gray-800 mt-2">{exp.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{exp.company}</p>
              <p className="text-xs text-gray-400 mb-3">{exp.duration}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
