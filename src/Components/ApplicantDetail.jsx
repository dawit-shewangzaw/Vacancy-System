import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ApplicantDetail = () => {
  const [activeSection, setActiveSection] = useState('form');
  const [emailBody, setEmailBody] = useState('');

  const applicant = {
    name: 'Dawit Shewnagzaw',
    jobTitle: '3D Designer',
    email: 'dawit@example.com',
    phone: '+123 456 7890',
    institute: 'ASTU University',
    fieldOfStudy: 'Computer Science',
    cgpa: '3.75',
    yearsOfExperience: '5 Years',
    gender: 'Man',
    cvLink: '/path-to-cv.pdf',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email body submitted:', emailBody);
  };

  const handleChange = (e) => {
    setEmailBody(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black">{applicant.name}</h1>
            <p className="text-gray-600 text-sm sm:text-base">{applicant.jobTitle}</p>
          </div>
        </div>

        {/* Contact Info and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500 text-sm sm:text-base" />
              <span className="text-gray-800 text-sm sm:text-base break-all">{applicant.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-500 text-sm sm:text-base" />
              <span className="text-gray-800 text-sm sm:text-base">{applicant.phone}</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-red-700 transition duration-200">
              Decline
            </button>
            <button className="bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-green-700 transition duration-200">
              Approve
            </button>
          </div>
        </div>

        {/* Horizontal Line with Links */}
        <div className="relative">
          <div className="flex justify-start items-center mb-4 space-x-6 w-full sm:w-1/2 mx-auto">
            <Link 
              to="/form" 
              className={`relative ${activeSection === 'form' ? 'text-blue-600' : 'text-black'} text-sm sm:text-base hover:text-blue-600 transition duration-200`}
              onClick={() => setActiveSection('form')}
            >
              Form
              {activeSection === 'form' && <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>}
            </Link>
            <Link 
              to="/cover-letter" 
              className={`relative ${activeSection === 'cover-letter' ? 'text-blue-600' : 'text-black'} text-sm sm:text-base hover:text-blue-600 transition duration-200`}
              onClick={() => setActiveSection('cover-letter')}
            >
              Cover Letter
              {activeSection === 'cover-letter' && <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>}
            </Link>
            <Link 
              to="/email" 
              className={`relative ${activeSection === 'email' ? 'text-blue-600' : 'text-black'} text-sm sm:text-base hover:text-blue-600 transition duration-200`}
              onClick={() => setActiveSection('email')}
            >
              Email
              {activeSection === 'email' && <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>}
            </Link>
          </div>
          <div className="border-t border-gray-300 mt-2 sm:w-1/2 w-full mx-auto"></div> {/* Centered line */}
        </div>

        {/* Applicant Information Section */}
        <div className="space-y-6 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold text-black">Applicant Information</h2>
          
          {activeSection === 'form' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-black">Institute / University</h3>
                <div className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4">
                  <span className="text-sm sm:text-base">{applicant.institute}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium text-black">Field of Study</h3>
                <div className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4">
                  <span className="text-sm sm:text-base">{applicant.fieldOfStudy}</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium text-black">CGPA</h3>
                <div className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4">
                  <span className="text-sm sm:text-base">{applicant.cgpa}</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium text-black">Years of Experience</h3>
                <div className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4">
                  <span className="text-sm sm:text-base">{applicant.yearsOfExperience}</span>
                </div>
              </div>

              {/* CV Section */}
              <div>
                <h3 className="text-base font-medium text-black">CV</h3>
                <div className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4 flex items-center">
                  <FaFilePdf className="text-gray-600 mr-2" />
                  <a
                    href={applicant.cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-600 hover:underline"
                  >
                    View CV
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'cover-letter' && (
            <div className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4">
              <h3 className="text-base font-semibold">Cover Letter</h3>
              <p className="mt-2 text-sm sm:text-base">Dear Hiring Manager,</p>
              <p className="mt-2 text-sm sm:text-base">I am writing to express my interest in the 3D Designer position at your company. With a background in Computer Science and 5 years of experience in 3D design, I am confident in my ability to contribute effectively to your team.</p>
              <p className="mt-2 text-sm sm:text-base">Thank you for considering my application. I look forward to the opportunity to discuss how my skills align with your needs.</p>
              <p className="mt-2 text-sm sm:text-base">Sincerely,<br />Dawit Shewnagzaw</p>
            </div>
          )}

          {activeSection === 'email' && (
            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-300 rounded-md p-2 sm:p-4">
              <h3 className="text-base font-semibold">Email</h3>
              <div className="mt-2">
                <label htmlFor="body" className="block text-sm text-black font-medium">Body:</label>
                <textarea
                  id="body"
                  name="body"
                  value={emailBody}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-base"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
