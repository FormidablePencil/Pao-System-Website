import React from 'react';
import WidgetShuffle, { WidgetOrderOption, WidgetStudyOption, WidgetSearch } from './Widgets';
// import {Link} from 'react-router-dom';

const SidebarLeft = () => {
  return (/* //! hidden here */
        <div className="text-lg text-gray-800 flex lg:flex-col justify-around items-center w-full">

          
            <div className="flex lg:flex-col w-full justify-around items-center">

              <div>
                <WidgetSearch />
              </div>
              <div className="mt-8">
                <WidgetStudyOption />
              </div>

              <WidgetShuffle />

              <div>
                <WidgetOrderOption />
              </div>
            </div>
            
        </div>
  );
};

export default SidebarLeft;