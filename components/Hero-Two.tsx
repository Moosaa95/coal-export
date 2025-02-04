'use client'

import { HeroParallax } from "./ui/HeroParallex"

export default function HeroBanner() {
    return (
        <div>
            <HeroParallax products={products} />
        </div>
    )
}

const products = [
    {
      title: "Coal-Powered Energy Solutions",
      link: "",
      thumbnail: "/assets/images/coal-energy-plant.jpg", // A coal power plant image
    },
    {
      title: "Coal Plant Inverter Installation",
      link: "",
      thumbnail: "/assets/images/coal-plant-inverter-installation.jpg", // An image of electrical systems or an inverter in the coal plant
    },
    {
      title: "Our Coal Engineering Team",
      link: "",
      thumbnail: "/assets/images/coal-engineering-team.jpg", // A professional team working on coal energy systems
    },
    {
      title: "Team Installing Coal Processing Equipment",
      link: "",
      thumbnail: "/assets/images/coal-processing-equipment.jpg", // Image of equipment installation or coal processing site
    },
    {
      title: "Coal-Fired Power Monitoring System",
      link: "",
      thumbnail: "/assets/images/coal-power-monitoring-system.jpg", // A close-up of a monitoring system at a coal power plant
    },
    {
      title: "Expert Coal Energy Team",
      link: "",
      thumbnail: "/assets/images/coal-energy-expert-team.jpg", // Image of experts or engineers working in the coal energy field
    },
  
    // Additional Products:
  
    {
      title: "Coal Transport Solutions",
      link: "",
      thumbnail: "/assets/images/truck1.jpeg", // Truck image for coal transportation
    },
    {
      title: "Efficient Coal Processing Systems",
      link: "",
      thumbnail: "/assets/images/coal-processing-systems.jpg", // Image of the coal processing plant or equipment
    },
    {
      title: "Coal Energy Infrastructure Design",
      link: "",
      thumbnail: "/assets/images/coal-infrastructure-design.jpg", // Image showing a design of energy infrastructure
    },
    {
      title: "Coal-Fueled Power Generation",
      link: "",
      thumbnail: "/assets/images/coal-power-generation.jpg", // A power plant or generator running on coal
    },
    {
      title: "Sustainable Coal Energy Solutions",
      link: "",
      thumbnail: "/assets/images/coal3.jpg", // Image of sustainable coal solutions, renewable aspects
    },
    {
      title: "Coal Supply Chain Management",
      link: "",
      thumbnail: "/assets/images/coal4.jpg", // An image showing coal supply chain or logistical flow
    },
  ];

  
// const products = [
//     {
//         title: "Coal-Powered Energy Solutions",
//         link: "",
//         thumbnail: "/assets/images/coal1.jpg",
//     },
//     {
//         title: "Coal Plant Inverter Installation",
//         link: "",
//         thumbnail: "/assets/images/coal2.jpg",
//     },
//     {
//         title: "Our Coal Engineering Team",
//         link: "",
//         thumbnail: "/assets/images/coal3.jpg",
//     },
//     {
//         title: "Team Installing Coal Processing Equipment",
//         link: "",
//         thumbnail: "/assets/images/coal4.jpg",
//     },
//     {
//         title: "Coal-Fired Power Monitoring System",
//         link: "",
//         thumbnail: "/assets/images/coal5.jpg",
//     },
//     {
//         title: "Expert Coal Energy Team",
//         link: "",
//         thumbnail: "/assets/images/coal6.jpg",
//     },
    
// ];
