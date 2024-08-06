import React, { useState } from 'react';
import LoginImage from '../Assets/IE.jpg'; 
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Check if email ends with '@gmail.com'
    if (!e.target.value.endsWith('@gmail.com')) {
      setEmailError('Insert proper email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Check if password is exactly 8 characters long
    if (e.target.value.length !== 8) {
      setPasswordError('Password must be exactly 8 characters');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginImage})` }}
    >
      {/* Left Side (1/3 of the page) */}
      <div className="hidden md:w-1/3 md:block"></div>

      {/* Right Side (2/3 of the page) with white overlay */}
      <div className="w-full md:w-2/3 flex items-center justify-center bg-white bg-opacity-70">
        <div className="p-6 md:p-16 rounded-lg max-w-lg w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-8 text-center mt-2 md:mt-4">Welcome Back!</h1>
          
          {/* Horizontal Lines with Fields in Between */}
          <div className="space-y-4">
            <div className="border-t border-gray-400"></div>

            {/* Email Field */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <FaEnvelope className="text-black mr-2 md:mr-3 text-lg md:text-xl" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base"
                />
              </div>
              {emailError && <span className="text-red-500 text-xs md:text-sm mt-1">{emailError}</span>}
            </div>
            <div className="border-t border-gray-400"></div>

            {/* Password Field */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <FaLock className="text-black mr-2 md:mr-3 text-lg md:text-xl" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base"
                />
              </div>
              {passwordError && <span className="text-red-500 text-xs md:text-sm mt-1">{passwordError}</span>}
            </div>
            <div className="border-t border-gray-400"></div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4 md:mb-6">
            <a 
              href="draw.io" 
              className="text-black hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
            >
              Forgot Password?
            </a>
          </div>

          {/* Log In Button */}
          <button className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
