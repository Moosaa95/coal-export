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
        Partner with Us for Seamless  <span className="text-purple">Trading</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Get in touch today to explore how we can support your commodity trading and supply chain needs.
        </p>
        <MagicButton link="/contact" title="Contact Us" position="right" icon={<FaLocationArrow />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About the Coal Export Business */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Trustbox Global Investment Limited</h2>
          <p className="text-gray-400">
          We facilitate seamless trade by investing
          in key sectors with established partners,
          ensuring sustainable and profitable
          ventures for our stakeholders
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
          <p className="text-gray-400">Plot 2787, Shehu Shagari Way, Maitama Abuja, Nigeria</p>
          <p className="text-gray-400">Email: trustboxng@gmail.com</p>
          <p className="text-gray-400">Phone: +234 (0) 805 271 2266</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Trustbox Global Investment Limited. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
