"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import { motion } from "framer-motion";
import { FaGlobe, FaShip, FaHandshake, FaIndustry, FaLeaf, FaMapMarkedAlt, FaBullseye } from "react-icons/fa";

interface Props {
  description?: string;
  title?: string;
}

const content = [
  {
    title: "Global Reach",
    description: "Supplying high-quality coal to industries across the world with reliable logistics.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
        <FaGlobe size={50} className="text-cyan-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Global Reach</p>
      </div>
    ),
  },
  {
    title: "Sustainable Mining",
    description: "Committed to responsible extraction and environmental sustainability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaLeaf size={50} className="text-green-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Sustainability</p>
      </div>
    ),
  },
  {
    title: "Reliable Shipping",
    description: "Ensuring on-time coal deliveries through efficient supply chain management.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--gray-500))] flex items-center justify-center text-white">
        <FaShip size={50} className="text-blue-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Reliable Shipping</p>
      </div>
    ),
  },
  {
    title: "Strong Partnerships",
    description: "Building long-term relationships with global industries and suppliers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        <FaHandshake size={50} className="text-yellow-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Partnerships</p>
      </div>
    ),
  },
  {
    title: "Our Mission",
    description: "To be a trusted provider of premium coal, ensuring efficiency, sustainability, and responsible sourcing.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaBullseye size={50} className="text-cyan-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Mission</p>
      </div>
    ),
  },
  {
    title: "Our Vision",
    description: "To lead the global coal export market with innovation, transparency, and eco-friendly practices.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <FaMapMarkedAlt size={50} className="text-yellow-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Vision</p>
      </div>
    ),
  },
  {
    title: "Industry Expertise",
    description: "Decades of experience in mining, logistics, and international trade.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--black))] flex items-center justify-center text-white">
        <FaIndustry size={50} className="text-gray-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Industry Expertise</p>
      </div>
    ),
  },
];

export default function Mission({ title = "About Us", description = "We are a leading coal export company, dedicated to providing premium-quality coal to industries worldwide. With a strong commitment to sustainability, reliability, and responsible sourcing, we ensure efficient supply chain solutions that meet global energy demands." }: Props) {
  return (
    <section className="w-[100vw] space-y-4">
        <motion.h2
            className="text-3xl uppercase tracking-widest font-bold text-center text-white my-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
         {title} 
        </motion.h2>
        <div className="md:flex md:items-center md:justify-center">
          <div className="md:w-1/3">
          <motion.p
              className="text-lg text-white/80 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
          <div className="p-10 overflow-hidden">
            <StickyScroll content={content} />
          </div>
        </div>
  </section>
  );
}
