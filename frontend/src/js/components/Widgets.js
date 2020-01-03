import React from 'react';
import circle from './../../images/full-moon.png';
import checkCircle from './../../images/check.png';
import switchImg from './../../images/switch.png';

export const WidgetShuffle = () => {
  return (
    <div className="flex items-center my-10">
      <span className="w-20 ml-4">Shuffle</span>
      {/* <img src={} className="ml-5 rotateimg270 z-0" alt="switch"/> */}

        <img src={switchImg} className="ml-5" width="40" height="40" alt="checkbox"/>

    </div>
  );
};

export const WidgetStudyOption = () => {
  return (
    <div className="flex items-center text-base">
      <div className="py-2 px-6 bg-blue-500 border border-blue-500">
          Study all
      </div>
      <div className="py-2 px-6 bg-blue-200 border border-blue-500">
        Study Stared
      </div>
    </div>
  );
};

export const WidgetOrderOption = () => {
  return (
    <div className="mt-4">
      <span className="text-gray-500 text-xl">Front of the card</span>

      <div className="flex items-center mb-10 mt-6">
          <span className="w-20 ml-4">Number</span>
          <img src={circle} className="w-8 h-8 ml-5" alt="checkbox"/>
      </div>
    
      <div className="flex items-center my-10">
          <span className="w-20 ml-4">Pao</span>
          <img src={checkCircle} className='w-8 h-8 ml-5' alt="checkbox"/>
      </div>
    </div>
  );
};

export const WidgetSearch = () => {
  return (

          <div className="flex self-center pt-12">
            <p>Search </p>
            <img src="./../../images/magnifying-glass-finder.png" alt=""/>
            <input className="border-b border-gray-800 bg-transparent" type="text"/>
          </div>

  )
}

export default WidgetShuffle;