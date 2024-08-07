import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const title = queryParams.get('title');
  const workPlace = queryParams.get('workPlace');
  const teamLeader = queryParams.get('teamLeader');
  const responsibility = queryParams.get('responsibility');
  const requirementQualification = queryParams.get('requirementQualification');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 pt-24">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Post Preview</h1>

        <div className="space-y-6">
          {/* Title */}
          <div className="relative bg-gray-50 p-4 border border-gray-300 rounded-md">
            <span className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium text-black">Title:</span>
            <p className="text-black">{title}</p>
          </div>

          {/* Work Place */}
          <div className="relative bg-gray-50 p-4 border border-gray-300 rounded-md">
            <span className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium text-black">Work Place:</span>
            <p className="text-black">{workPlace}</p>
          </div>

          {/* Team Leader */}
          <div className="relative bg-gray-50 p-4 border border-gray-300 rounded-md">
            <span className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium text-black">Team Leader:</span>
            <p className="text-black">{teamLeader}</p>
          </div>

          {/* Responsibility */}
          <div className="relative bg-gray-50 p-4 border border-gray-300 rounded-md">
            <span className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium text-black">Responsibility:</span>
            <p className="text-black whitespace-pre-line">{responsibility}</p>
          </div>

          {/* Requirement Qualification */}
          <div className="relative bg-gray-50 p-4 border border-gray-300 rounded-md">
            <span className="absolute -top-4 left-4 bg-white px-2 text-lg font-medium text-black">Requirement Qualification:</span>
            <p className="text-black whitespace-pre-line">{requirementQualification}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
