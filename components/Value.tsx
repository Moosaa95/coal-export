"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaShippingFast, FaRecycle, FaGlobe, FaHandshake } from "react-icons/fa";

const values = [
  {
    title: "High-Quality Coal Supply",
    description: "We provide premium-grade coal, ensuring efficiency and reliability for various industrial applications.",
    icon: <FaIndustry className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Efficient Logistics & Export",
    description: "Streamlined coal export processes, ensuring timely and cost-effective delivery worldwide.",
    icon: <FaShippingFast className="text-green-500 text-4xl" />,
  },
  {
    title: "Sustainable & Responsible Mining",
    description: "Committed to eco-friendly mining practices that minimize environmental impact.",
    icon: <FaRecycle className="text-blue-500 text-4xl" />,
  },
  {
    title: "Global Reach & Market Expertise",
    description: "Expanding our coal supply to international markets with strategic partnerships.",
    icon: <FaGlobe className="text-emerald-500 text-4xl" />,
  },
  {
    title: "Strong Industry Relationships",
    description: "Building trust with clients and partners through integrity and reliable services.",
    icon: <FaHandshake className="text-yellow-500 text-4xl" />,
  },
];

const ValueProposition = () => {
  return (
    <section className="py-16 dark:bg-[#01031a] text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl uppercase tracking-widest font-bold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Value Proposition
        </motion.h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          We deliver high-quality coal products through sustainable and efficient practices, ensuring reliability, environmental responsibility, and global reach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#020025] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                {value.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-gray-200 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
