import React from 'react';

const CarModel = (payload) => {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h1 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        {payload.payload.Model_Name}
      </h1>
      <h2 className="font-normal text-gray-700 dark:text-gray-400">
        {payload.payload.Make_Name}
      </h2>
    </a>
  );
};

export default CarModel;
