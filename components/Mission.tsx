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
    description: "Supplying high-quality coal and other commodities to industries worldwide through a reliable supply chain.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
        <FaGlobe size={50} className="text-cyan-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Global Reach</p>
      </div>
    ),
  },
  {
    title: "Sustainable Practices",
    description: "Promoting sustainability in our mining and trading processes while minimizing environmental impact.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaLeaf size={50} className="text-green-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Sustainability</p>
      </div>
    ),
  },
  {
    title: "Reliable Shipping",
    description: "Ensuring on-time deliveries of commodities worldwide, with a focus on efficiency and reliability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--gray-500))] flex items-center justify-center text-white">
        <FaShip size={50} className="text-blue-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Reliable Shipping</p>
      </div>
    ),
  },
  {
    title: "Strong Partnerships",
    description: "Building long-term relationships with global industries, suppliers, and partners to ensure mutual growth.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        <FaHandshake size={50} className="text-yellow-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Partnerships</p>
      </div>
    ),
  },
  {
    title: "Our Mission",
    description: "To be a leader in commodity trading, providing premium products with a commitment to sustainability and responsible sourcing.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <FaBullseye size={50} className="text-cyan-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Mission</p>
      </div>
    ),
  },
  {
    title: "Our Vision",
    description: "To become the most trusted global partner in commodity trading and supply chain solutions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <FaMapMarkedAlt size={50} className="text-yellow-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Our Vision</p>
      </div>
    ),
  },
  {
    title: "Industry Expertise",
    description: "Leveraging decades of experience in the global commodity trading and supply chain management sectors.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--black))] flex items-center justify-center text-white">
        <FaIndustry size={50} className="text-gray-400" />
        <p className="font-bold text-sm lg:text-3xl md:text-2xl">Industry Expertise</p>
      </div>
    ),
  },
];

export default function Mission({
  title = "About Trustbox Global Investment Limited",
  description = "Trustbox Global Investment Limited specializes in providing premium-quality commodities to industries worldwide. With a commitment to sustainability, reliable logistics, and responsible sourcing, we ensure efficient supply chain solutions that meet global energy and industrial demands.",
}: Props) {
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
