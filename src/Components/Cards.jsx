// Cards component
import React from 'react';

const Cards = () => {
  return (
    <section className="bg-[#F9F9FB] py-12 px-8 lg:px-16">
      {/* Warning Text */}
      <div className="text-center mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-[#848D9A]">
          PLEASE DO NOT APPLY IF YOU ARE NOT
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
        <div className="bg-white py-16 px-8 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-500">
          <h3 className="text-2xl font-semibold mb-6 text-gray-600">
            Responsible
          </h3>
          <p className="text-base lg:text-lg text-gray-500">
            Are not a self-directed learner who takes full responsibility for growth and skill development even if it’s at the price of social commitment.
          </p>
        </div>
        <div className="bg-white py-16 px-8 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-500">
          <h3 className="text-2xl font-semibold mb-6 text-gray-600">
            Committed
          </h3>
          <p className="text-base lg:text-lg text-gray-500">
            Are not committed to meeting deadlines regardless of working on weekends, holidays, and beyond normal working hours.
          </p>
        </div>
        <div className="bg-white py-16 px-8 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-500">
          <h3 className="text-2xl font-semibold mb-6 text-gray-600">
            Accountable
          </h3>
          <p className="text-base lg:text-lg text-gray-500">
            Do not take ownership of problems and shepherd the process until it is resolved even if you are not the one who will ultimately fix it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
