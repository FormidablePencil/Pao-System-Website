import React from 'react';
// import SidebarLeft from './SidebarL';
import WidgetShuffle, { WidgetStudyOption, WidgetOrderOption } from './Widgets';

const Flashcard = () => {
  return (
    <div className="flashcards w-full py-20 bg-white inset-0 flex justify-center items-center">
      <div className="flashcard w-4/5 h-70 bg-gray-100 shadow-md rounded">
        <div className="flex flex-col justify-center items-center h-full">
          <div>Dennis dfdfAleksandrov</div>
        </div>
      </div>
    </div>
  );
};

export function FlashcardPhoneScreen () {
  return (
    <div className="h-screen w-screen bg-gray-300">

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-white h-70vh w-80pec rounded-lg shadow-lg">

          <div className="flex justify-center items-center h-full">
            <span className="hidden BlockIfOpen">
              Dennis Aleksandrov
            </span>
            <div className="BlockIfOpen">
              {/* //!*? We are going to have to make it so you could choose from what list of cards to study; Person, action or object associated to the number  */}
            
            <WidgetStudyOption />
            <WidgetShuffle />
            <WidgetOrderOption />
              
            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Flashcard;