import React from 'react';

const JobTable = () => {
  const jobLinks = [
    'https://example.com/job1',
    'https://example.com/job2',
    'https://example.com/job3',
    'https://example.com/job4',
    'https://example.com/job5',
    'https://example.com/job6',
  ];

  const handleRowClick = (url) => {
    window.location.href = url;
  };  

  return (
    <section className="py-12 px-4 lg:px-16 bg-[#F9F9FB]">
      <div className="overflow-x-auto">
        <h2 className="text-xl lg:text-2xl font-semibold text-center mb-4">Find a Job</h2>
        <p className="text-sm lg:text-base text-center text-gray-500 mb-8">
          <span className="block">Please first be sure that you meet all requirements for</span>
          <span className="block">the specific job you want to apply for.</span>
        </p>
        <table className="min-w-full bg-white border border-gray-200 mx-auto max-w-full lg:max-w-screen-lg">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">Job Name</th>
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">Location</th>
              <th className="py-3 px-4 text-sm lg:text-base text-center text-gray-600">Post Time</th>
            </tr>
          </thead>
          <tbody>
            {jobLinks.map((link, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(link)}
              >
                <td className="py-4 px-3 text-sm lg:text-base text-gray-800 font-semibold text-center text-blue-600">
                  Networking {index + 1}
                </td>
                <td className="py-4 px-3 text-sm lg:text-base text-gray-500 text-center">Addis Ababa, Ethiopia</td>
                <td className="py-4 px-3 text-sm lg:text-base text-gray-500 text-center">Posted 2 days ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default JobTable;
