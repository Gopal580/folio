import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className="min-h-screen py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100" id="about">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-800 leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-semibold text-pink-600">Hi, I'm Saachin Patel</span> — a results-driven{" "}
            <span className="text-purple-600 font-semibold">Area Sales Manager</span> with over 6 years of progressive experience in the 
            agricultural machinery sector, specializing in rotavator sales.
            <br /><br />
            Proven track record in territory development, dealer network expansion, and consistently exceeding sales targets. 
            Adept in building strong client relationships, conducting product demonstrations, and executing go-to-market strategies 
            across <span className="font-semibold text-yellow-600">Madhya Pradesh</span> and <span className="font-semibold text-yellow-600">Chhattisgarh</span>.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
