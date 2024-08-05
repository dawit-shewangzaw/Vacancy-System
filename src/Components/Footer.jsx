import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-6 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left side with company name and logo */}
        <div className="mb-6 lg:mb-0 lg:mr-12 lg:self-start lg:w-1/3 lg:ml-16">
          <h2 className="text-xl font-bold text-gray-300">IE Network Solutions</h2>
          {/* Logo would go here */}
        </div>

        {/* Right side with three columns */}
        <div className="flex flex-col lg:flex-row items-start lg:ml-auto lg:space-x-16 lg:mr-16 space-y-6 lg:space-y-0">
          {/* Column 1: IE Network */}
          <div className="space-y-1">
            <h3 className="font-semibold text-lg mb-2 text-gray-300">IE Network</h3>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#jobs" className="hover:text-gray-400">Jobs</a></li>
            </ul>
          </div>
          
          {/* Column 2: Contact Info */}
          <div className="space-y-1">
            <h3 className="font-semibold text-lg mb-2 text-gray-300">Contact Info</h3>
            <ul className="space-y-1">
              <li><a href="tel:+1234567890" className="hover:text-gray-400">+1234567890</a></li>
              <li><a href="tel:+1234567891" className="hover:text-gray-400">+1234567891</a></li>
              <li><a href="tel:+1234567893" className="hover:text-gray-400">+1234567893</a></li>
            </ul>
          </div>
          
          {/* Column 3: Find Us */}
          <div className="space-y-1">
            <h3 className="font-semibold text-lg mb-2 text-gray-300">Find Us</h3>
            <ul className="space-y-1">
              <li><a href="mailto:info@example.com" className="hover:text-gray-400">info@example.com</a></li>
              <li><a href="mailto:support@example.com" className="hover:text-gray-400">support@example.com</a></li>
              <li><a href="mailto:sales@example.com" className="hover:text-gray-400">sales@example.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-gray-400">&copy; 2024 IE Network Solutions&reg;</p>
        <div className="flex space-x-4 my-4 lg:my-0">
          {/* Social Media Icons with Circle Border */}
          <a href="https://facebook.com" className="p-2 rounded-full border border-white hover:bg-gray-600">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="p-2 rounded-full border border-white hover:bg-gray-600">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="p-2 rounded-full border border-white hover:bg-gray-600">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" className="p-2 rounded-full border border-white hover:bg-gray-600">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" className="p-2 rounded-full border border-white hover:bg-gray-600">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
          <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
