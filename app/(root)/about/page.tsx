"use client"
import Mission from "@/components/Mission";
import { Teams } from "@/components/Team";
import ValueProposition from "@/components/Value";
import Image from "next/image";
import { motion } from "framer-motion";


export default function About () {
    return (
        <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <div>
                <Mission />
            </div>
            <div>
                <ValueProposition />
            </div>
            <div>
                <Clients />
            </div>
            <div>
                <Teams />
            </div>
        </div>
    )
}



const clients = [
  { name: "Corporate Affairs Commission", logo: "/assets/images/team/cac.png" },
  { name: "Ministry of Mines and Steel Development", logo: "/assets/images/team/ministy.png" },
  { name: "Extension Africa", logo: "/assets/images/team/extension.png" },
  { name: "PayRep Microfinance Bank", logo: "/assets/images/team/payrep.png" },
  { name: "Fal Gates Foods", logo: "/assets/images/team/falgate.png" },
  { name: "Umza Classic", logo: "/assets/images/team/umza.png" },
  { name: "AgroVesto", logo: "/assets/images/team/agrovesto.png" },
  { name: "Winich Farms", logo: "/assets/images/team/winich.png" },
];




function Clients() {
  return (
    <div className="bg-black-100 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Clients</h1>
          <p className="mt-4 text-lg md:text-xl">
            Proudly collaborating with leading organizations across industries.
          </p>
        </motion.div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Strategic Partnerships
      </h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0">
              <motion.div
                className="flex flex-col items-center justify-center bg-black-300 p-6 shadow-lg rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-20 h-20"
                />
              </motion.div>
              <p className="text-center mt-2 text-sm text-gray-300 font-bold">{client.name}</p>
            </div>
          ))}

          {/* Repeat logos for seamless scrolling */}
          {clients.map((client, index) => (
            <div key={index + clients.length} className="flex-shrink-0">
              <motion.div
                className="flex flex-col items-center justify-center bg-black-300 p-6 shadow-lg rounded-lg"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-20 h-20"
                />
              </motion.div>
              <p className="text-center mt-2 text-sm text-gray-700">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </div>
  );
}
