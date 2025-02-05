import React from "react";


export function Teams() {
  const boardOfDirectors = [
    { image: "/assets/images/team/md.jpg", name: "Mohammed Ismail", title: "Managing Director", description: "Mohammed Ismail is proficient in designing comprehensive training manuals for Agents and Agent Network Managers, ensuring streamlined processes and optimal performance." },
    { image: "/assets/images/team/salim.jpg", name: "Salim Alhassan", title: "Chief Operation Officer", description: "Salim brings extensive experience in investment strategy, trade operations, and asset management. With a strong background in Commodity aggregation and trading within emerging markets." },
    { image: "/assets/images/team/abiola.png", name: "Abiola Jimoh", title: "Chief Compliance Officer", description: "Abiola Jimoh is a lawyer and Deal Maker with over 15 years experience in business incubation, partnership and growth development. He has hands-on experience having built a financial technology company and provided advisory to a number of companies in Nigeria." },
  ];

  return (
    <section className="py-16  text-gray-300">
      {/* Board of Directors */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Meet Our Management Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boardOfDirectors.map((director, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#020025] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={director.image}
                alt={director.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{director.name}</h3>
              <p className="text-indigo-500 text-lg">{director.title}</p>
              <p className="text-gray-300 mt-4 text-base">{director.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
