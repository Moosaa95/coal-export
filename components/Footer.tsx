'use client'

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-[#01031a] text-gray-300 py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center my-16">
        <h1 className="font-bold text-4xl md:text-5xl text-center">
          Ready to secure reliable <span className="text-purple">coal exports</span> for your business?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s discuss how our quality coal export services can meet your energy and supply chain needs with efficiency and sustainability.
        </p>
        <MagicButton link="/contact" title="Get in Touch" position="right" icon={<FaLocationArrow />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About the Coal Export Business */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Our Coal Export Services</h2>
          <p className="text-gray-400">
            We specialize in the export of high-quality coal to meet the growing demand for energy production and industrial needs globally. With years of experience, we ensure reliable supply and on-time delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-indigo-400 transition" href="/">Home</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/about">About</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/services">Our Services</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/gallery">Gallery</Link></li>
            <li><Link className="hover:text-indigo-400 transition" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </motion.a>
          </div>
          <p className="text-gray-400">Our Main Office: 123 Coal Road, Mining City, Nigeria</p>
          <p className="text-gray-400">Email: coalexports@business.com</p>
          <p className="text-gray-400">Phone: +234 123 456 789</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Coal Exporters Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
