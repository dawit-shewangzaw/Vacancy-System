import React, { useState } from 'react';
import LoginImage from '../Assets/IE.jpg'; 
import { FaEnvelope, FaLock } from 'react-icons/fa';
{/*import { useNavigate } from 'react-router-dom';*/}


const ForgotPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPinPage, setShowPinPage] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [showNewPasswordPage, setShowNewPasswordPage] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  {/*const navigate = useNavigate();*/}

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.endsWith('@gmail.com')) {
      setEmailError('Insert proper email address');
    } else {
      setEmailError('');
    }
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
    if (!/^\d{6}$/.test(e.target.value)) {
      setPinError('PIN must be exactly 6 digits');
    } else {
      setPinError('');
    }
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (e.target.value.length !== 8) {
      setPasswordError('New Password must be exactly 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSendClick = () => {
    if (!emailError && email) {
      setShowPinPage(true);
    }
  };

  const handleResetClick = () => {
    if (!pinError && pin) {
      setShowNewPasswordPage(true);
    }
  };

  {/* const handleSaveClick = () => {
    if (newPassword && repeatPassword && newPassword === repeatPassword && !passwordError) {
      // Navigate to the desired component
      navigate('/new-component'); // Replace '/new-component' with the actual path
    } else {
      setPasswordError('Passwords do not match or are invalid');
    }
  };*/}

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
          {showNewPasswordPage ? (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-6 md:mb-8 text-center mt-2 md:mt-4">New Password</h1>
              
              {/* New Password Fields */}
              <div className="space-y-4">

                <div className="flex flex-col space-y-4">
                  <div className="border-t border-gray-400"></div>
                  <div className="flex items-center">
                    <FaLock className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>

                  <div className="border-t border-gray-400"></div>
                  <div className="flex items-center">
                    <FaLock className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      value={repeatPassword}
                      onChange={handleRepeatPasswordChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>

                  {passwordError && <span className="text-red-500 text-xs md:text-sm mt-1">{passwordError}</span>}
                </div>
                
                <div className="border-t border-gray-400"></div>
              </div>

              {/* Back to LogIn Link */}
              <div className="text-right mb-4 md:mb-6">
                <a 
                  href="/login"
                  className="text-[#1A1A1A] hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Back to LogIn
                </a>
              </div>

              {/* Save Button */}
              <button
                onClick={handleResetClick}
                className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
              >
                Save
              </button>
            </>
          ) : showPinPage ? (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-4 md:mb-6 text-center mt-2 md:mt-4">Forgot Password</h1>
              
              {/* Instruction Text */}
              <p className="text-sm md:text-base text-center text-[#1A1A1A] mb-6 md:mb-8">
                This will reset your password and give a chance to create a new password to Log In.
              </p>
              
              {/* PIN Field */}
              <div className="space-y-4">
                <div className="border-t border-gray-400"></div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <FaLock className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="text"
                      placeholder="PIN"
                      value={pin}
                      onChange={handlePinChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>
                  {pinError && <span className="text-red-500 text-xs md:text-sm mt-1">{pinError}</span>}
                </div>
                
                <div className="border-t border-gray-400"></div>
              </div>

              {/* Back to LogIn Link */}
              <div className="text-right mb-4 md:mb-6">
                <a 
                  href="/login"
                  className="text-[#1A1A1A] hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Back to LogIn
                </a>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleResetClick}
                className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
              >
                Reset
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-6 md:mb-8 text-center mt-2 md:mt-4">Forgot Password</h1>
              
              {/* Email Field */}
              <div className="space-y-4">
                <div className="border-t border-gray-400"></div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <FaEnvelope className="text-[#1A1A1A] mr-2 md:mr-3 text-lg md:text-xl" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full p-2 md:p-3 border-none bg-transparent focus:outline-none text-sm md:text-base text-[#1A1A1A]"
                    />
                  </div>
                  {emailError && <span className="text-red-500 text-xs md:text-sm mt-1">{emailError}</span>}
                </div>
                
                <div className="border-t border-gray-400"></div>
              </div>

              {/* Back to LogIn Link */}
              <div className="text-right mb-4 md:mb-6">
                <a 
                  href="/login"
                  className="text-[#1A1A1A] hover:text-blue-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Back to LogIn
                </a>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendClick}
                className="w-full bg-[#18D06E] text-white p-2 md:p-3 rounded-full hover:bg-green-600 mt-6 md:mt-8 text-sm md:text-base"
              >
                Send
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;