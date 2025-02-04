'use client'
import Grid from "@/components/Grid";
import HeroBanner from "@/components/Hero-Two";
import Mission from "@/components/Mission";
import ValueProposition from "@/components/Value";

import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaBolt, FaFire, FaBuilding, FaShip } from "react-icons/fa";
import Image from "next/image";


export default function Home() {
    return (
        <div className="relative dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <div>
                <HeroBanner />
            </div>
            {/* <div>
                <Mission />
            </div> */}
            <div className='flex flex-col my-10'>
                <Grid title="Our Core Services" services={services} link='/services' />
            </div>
            <div>
                <ValueProposition />
            </div>
            <div>
            <SustainabilitySection />
            </div>
            <div>
            <SupplyChainSection />
            </div>
        </div>
    )
}

const services = [
    {
        id: 1,
        title: "Coal Mining & Extraction",
        description: "Efficient and sustainable coal mining operations ensuring high-quality output.",
        icon: "/assets/svg/coal-svg5.svg",
        // link: "/services#coal-mining"
    },
    {
        id: 2,
        title: "Coal Processing & Refining",
        description: "Advanced coal processing techniques to enhance fuel quality and reduce emissions.",
        icon: "/assets/svg/coal-svg3.svg",
        // link: "/services#coal-processing"
    },
    {
        id: 3,
        title: "Coal Export & Logistics",
        description: "Reliable coal export services with streamlined logistics for global delivery.",
        icon: "/assets/svg/coal-svg4.svg",
        // link: "/services#coal-export"
    },
];


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

import { FaRecycle, FaLeaf, FaWind, FaWater, FaTree } from "react-icons/fa";

const sustainabilityPoints = [
  {
    title: "Renewable Energy",
    description:
      "We prioritize the use of renewable energy sources to minimize our environmental footprint.",
    icon: <FaWind className="text-4xl text-blue-400" />,
  },
  {
    title: "Zero Waste",
    description:
      "Our operations are designed to reduce waste and promote recycling to maintain a cleaner environment.",
    icon: <FaRecycle className="text-4xl text-green-400" />,
  },
  {
    title: "Water Conservation",
    description:
      "We utilize water-efficient systems and practices to ensure sustainable water usage across our projects.",
    icon: <FaWater className="text-4xl text-teal-400" />,
  },
  {
    title: "Reforestation",
    description:
      "We are committed to supporting reforestation projects and increasing green cover to combat climate change.",
    icon: <FaTree className="text-4xl text-emerald-400" />,
  },
  {
    title: "Eco-friendly Materials",
    description:
      "We utilize sustainable materials and eco-conscious technologies to reduce our impact on the planet.",
    icon: <FaLeaf className="text-4xl text-lime-400" />,
  },
];

const SustainabilitySection = () => {
  return (
    <section className="py-16 dark:bg-[#01031a]  text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sustainability & Environmental Responsibility
        </motion.h2>

        <p className="text-lg mb-12  text-gray-200">
          Our commitment to sustainability guides our actions in every project we undertake, ensuring a greener future for all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {sustainabilityPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 dark:bg-[#020025] bg-opacity-30 rounded-lg shadow-md hover:bg-opacity-50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-md">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{point.title}</h3>
                <p className="mt-2 text-gray-300">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const logisticsSteps = [
    {
      title: "Inventory Management",
      description:
        "Streamlining the movement of goods through real-time tracking, efficient inventory systems, and global warehouse management.",
      image: "/assets/images/truck1.jpeg", // Replace with actual image path
    },
    {
      title: "Shipping & Transportation",
      description:
        "Reliable and timely shipping solutions with multiple modes of transport ensuring the fastest and safest delivery.",
      image: "/assets/images/shipping.jpg", // Replace with actual image path
    },
    {
      title: "Global Reach",
      description:
        "Connecting global markets with seamless logistics across borders through innovative routing and advanced technology.",
      image: "/assets/images/global.jpg", // Replace with actual image path
    },
    {
      title: "Real-Time Tracking",
      description:
        "Monitor your shipments in real-time, giving you full visibility on delivery status and precise arrival times.",
      image: "/assets/images/real-time.jpg", // Replace with actual image path
    },
    {
      title: "Efficient Delivery",
      description:
        "Maximizing delivery speed and efficiency by using optimized routes and state-of-the-art logistics technology.",
      image: "/assets/images/efficient-delivery.jpg", // Replace with actual image path
    },
  ];
  
  const SupplyChainSection = () => {
    return (
      <section className="py-24 bg-gray-800 dark:bg-[#01031a] dark:text-white">
        <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center">
        <motion.h2
            className="text-4xl font-bold uppercase tracking-widest mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            Supply Chain & Logistics Solutions
            </motion.h2>

            <p className="text-lg mb-12 text-gray-200">
            Our comprehensive supply chain and logistics services ensure that your products
            move efficiently from suppliers to customers, reducing delays and costs. With real-time tracking,
            custom solutions, and a global network, we offer seamless logistics for businesses of all sizes.
            </p>
        </div>
          {/* Logistics Process Steps */}
          <div className="space-y-16">
            {logisticsSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Image */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "order-2" : "order-1"}`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[350px] object-cover rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
                  />
                </div>
  
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "order-1" : "order-2"}`}
                >
                  <div className="p-6 bg-white dark:bg-[#020025] rounded-lg shadow-lg">
                    <h3 className="text-3xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  