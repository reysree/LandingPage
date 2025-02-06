"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Certifications = ({ props }) => {
  return (
    <section className="py-20 bg-white" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AWS Certified Associate Developer",
              link: "https://www.credly.com/badges/b718ea7d-5b1b-4370-af8c-d837780e0dcb/public_url",
              img: "/AWS-badge.png",
            },
            {
              title: "Oracle Certified JAVA SE 8 Associate",
              link: "https://www.credly.com/badges/91411d1d-c3a6-4238-9c2d-e68e3565b5f0/public_url",
              img: "/Oracle_Associates_Badge.png",
            },
            {
              title: "CodePath Advanced Technical Interview Prep",
              link: "/CodePath_Certificate.pdf",
              img: "/CodePath.png",
            },
          ].map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex-col p-6 bg-white rounded-lg shadow-lg border border-gray-100"
            >
              <Image
                width={200}
                height={200}
                src={cert.img}
                alt={cert.title}
                className="w-50 h-50 flex justify-center object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {cert.title}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-blue-500"
              >
                View Certification
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
