import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Sachin 👋
          </motion.h1>

          {/* Typing line with fixed size */}
          <div className="mt-6 text-xl text-gray-800 font-medium min-h-[64px] w-full flex justify-center">
            <span className="inline-block max-w-3xl text-center">
              <TypeAnimation
                sequence={[
                  'A results-driven Area Sales Manager with a strong focus on strategic growth and relationship-building in the agricultural machinery industry.',
                ]}
                speed={40}
                wrapper="span"
                repeat={0}
                cursor={true}
              />
            </span>
          </div>

          {/* Button */}
          <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            View My Work
          </Link>
        </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
