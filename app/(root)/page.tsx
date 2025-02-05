'use client'
import Grid from "@/components/Grid";
import HeroBanner from "@/components/Hero-Two";
import ValueProposition from "@/components/Value";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <div>
                <HeroBanner />
            </div>
            <div>
              <About />
            </div>
            {/* <div>
                <Mission />
            </div> */}
            <div className='flex flex-col my-10'>
                <Grid title="Our Core Services" services={services} link='/services' />
            </div>
            {/* <div>
                <ValueProposition />
            </div> */}
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
      title: "Commodity Aggregation",
      description: "Sourcing and consolidating high-quality commodities from trusted suppliers.",
      icon: "/assets/svg/commodity.svg",
      // link: "/services#commodity-aggregation"
  },
  {
      id: 2,
      title: "Global Trade & Export",
      description: "Connecting Africa’s rich resources to the global market with efficiency.",
      icon: "/assets/svg/global-trade1.svg",
      // link: "/services#global-trade"
  },
  {
      id: 3,
      title: "Logistics & Transportation",
      description: "Seamless logistics ensuring smooth transport from mine to market.",
      icon: "/assets/svg/logistics.svg",
      // link: "/services#logistics"
  },
  {
      id: 4,
      title: "Investment & Partnerships",
      description: "Strategic collaborations for sustainable business growth and expansion.",
      icon: "/assets/svg/investment.svg",
      // link: "/services#investment"
  },
];



// "use client";
// import React from "react";
// import { motion } from "framer-motion";

import { FaRecycle,  FaTree, FaIndustry, FaShippingFast, FaGlobe, FaHandshake } from "react-icons/fa";
import Image from "next/image";

const sustainabilityPoints = [
  {
    title: "Ethical Sourcing",
    description:
      "We prioritize responsible sourcing practices to ensure fair trade, environmental sustainability, and community welfare.",
    icon: <FaHandshake className="text-4xl text-blue-400" />,
  },
  {
    title: "Eco-Friendly Logistics",
    description:
      "Optimized shipping and transport solutions to reduce carbon footprints and enhance efficiency in commodity distribution.",
    icon: <FaShippingFast className="text-4xl text-green-400" />,
  },
  {
    title: "Recycling & Waste Reduction",
    description:
      "We implement recycling programs and sustainable waste management to minimize environmental impact.",
    icon: <FaRecycle className="text-4xl text-emerald-400" />,
  },
  {
    title: "Reforestation & Land Restoration",
    description:
      "Committed to reforestation projects and land rehabilitation efforts in mining and extraction regions.",
    icon: <FaTree className="text-4xl text-yellow-400" />,
  },
  {
    title: "Sustainable Trade Practices",
    description:
      "Our global trading network supports environmentally friendly policies, ensuring responsible and transparent business operations.",
    icon: <FaGlobe className="text-4xl text-gray-400" />,
  },
  {
    title: "Innovation in Commodity Processing",
    description:
      "Investing in modern, energy-efficient technologies for coal and commodity processing with reduced emissions.",
    icon: <FaIndustry className="text-4xl text-indigo-400" />,
  },
];


const SustainabilitySection = () => {
  return (
    <section className="py-16 dark:bg-[#01031a] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sustainable Trade & Responsible Sourcing
        </motion.h2>

        <p className="text-lg mb-12 text-gray-200">
          At Trust Box Global Investment, we are committed to sustainable sourcing, responsible logistics, and eco-conscious trade practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-white p-4 rounded-full shadow-md">{point.icon}</div>
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



const About = () => {
  return (
    <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">About Trust Box Global Investment</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We specialize in commodity aggregation, trading, and logistics, ensuring a seamless supply chain from Africa to global markets.
        </p>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <div className="flex flex-col items-center w-64">
            <FaIndustry size={50} className="text-yellow-500" />
            <p className="mt-2">Mining & Aggregation</p>
          </div>
          <div className="flex flex-col items-center w-64">
            <FaShippingFast size={50} className="text-blue-500" />
            <p className="mt-2">Logistics & Transportation</p>
          </div>
          <div className="flex flex-col items-center w-64">
            <FaGlobe size={50} className="text-green-500" />
            <p className="mt-2">Global Trade</p>
          </div>
          <div className="flex flex-col items-center w-64">
            <FaHandshake size={50} className="text-purple-500" />
            <p className="mt-2">Investment & Partnerships</p>
          </div>
        </div>
      </section>
  )
}

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
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={350}
                    height={350}
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
  
  