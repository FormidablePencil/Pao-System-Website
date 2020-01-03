import React from 'react';
import { Navbar2 } from '../components/Navbar';
import CatImg from './../../images/mycat.jpg';
import gear from './../../images/gear-option.png';
import Logo from '../components/Logo';
import { StandardButton } from '../components/Buttons';
// import Toggle from '../components/Toggle';

const SettingsP = () => {   
  return (
    <div className="h-full">
      {/* <Toggle /> */}
      <Navbar2 />
      <div className="flex flex-col bg-blue-100 justify-around items-center font-RockSalt leading-loose">
        <div className="flex items-center mt-20">
            <img src={CatImg} className="rounded-full h-64 w-64 object-cover " alt="cat wiskers"/> {/* //! failed to contain the image. Thr creator of tailwind has a tutorial on how to use image positioning classes. Watch them. */}
        </div>
        <div className="flex items-center justify-around md:w-50pec lg:w-full my-20">
            <img className="h-0 w-0 lg:h-full lg:w-64 object-contain" src={gear} alt="gear"/>
          <div className="flex flex-col w-full lg:w-auto">
            <StandardButton styleName="bg-blue-500 hover:bg-blue-600 rounded-full text-white my-2" value="Change profile image" />
            <StandardButton styleName="bg-blue-500 hover:bg-blue-600 rounded-full text-white my-2" value="Change wallpaper" />
            <StandardButton styleName="bg-blue-500 hover:bg-blue-600 rounded-full text-white my-2" value="Change password" />
            <StandardButton styleName="bg-blue-500 hover:bg-blue-600 rounded-full text-white my-2" value="Change username" />
          </div>
        </div>
        <div className="flex items-center justify-around w-full mt-20 h-50vh linearGradientBlue2 text-white">
          <div>
            <span className="text-3xl">About us</span>
            <p className="w-64 font-sans">We are memory fanatics. Come join and learn more about how we improve our memories. <a href="www.youtube.com">www.youtube.com</a> </p>
          </div>
          <div>
            <Logo />
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default SettingsP;