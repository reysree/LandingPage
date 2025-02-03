"use client";

import { motion } from "framer-motion";

const Contacts = ({ props }) => {
  return (
    <section className="py-20 bg-gray-50" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:sreeram.bangaroo@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          Send me a message
        </motion.a>
      </div>
    </section>
  );
};

export default Contacts;
