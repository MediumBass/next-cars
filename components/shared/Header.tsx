import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Cars Shop</div>
        <div className="flex space-x-4"></div>
      </div>
    </header>
  );
};

export default Header;
