import React from 'react';
import { Link } from 'react-router-dom';

const MenuWindow = () => {
  return (
    <div className="absolute h-screen w-screen bg-black-transparent">
      <div className="flex flex-col h-full items-center justify-around justify-center font-RockSalt">
        <div className="flex flex-col h-30vh justify-between">
          <Link to="/home" className="bg-blue-500 w-18rem py-4 my-2 text-white rounded-full hover:shadow-inner shadow hover:bg-blue-600 text-center"> Pao Sets </Link>
          <Link to="/flashcards" className="bg-yellow-500 w-18rem py-4 my-2 text-white rounded-full hover:shadow-inner shadow hover:bg-yellow-600 text-center"> Flashcards </Link>
          <Link to="/home" className="bg-red-500 w-18rem py-4 my-2 text-white rounded-full hover:shadow-inner shadow hover:bg-red-600 text-center"> Account Settings </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuWindow;