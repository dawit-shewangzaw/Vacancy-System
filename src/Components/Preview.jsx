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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 pt-24"> {/* Added pt-24 for top padding */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Post Preview</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-black">Title:</h2>
            <p className="text-black">{title}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black">Work Place:</h2>
            <p className="text-black">{workPlace}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black">Team Leader:</h2>
            <p className="text-black">{teamLeader}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black">Responsibility:</h2>
            <p className="text-black whitespace-pre-line">{responsibility}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black">Requirement Qualification:</h2>
            <p className="text-black whitespace-pre-line">{requirementQualification}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
