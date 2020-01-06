import React from 'react'
import LogoImg from './../../images/playing-cards-png-11-original.png';

export default function Logo() {
  return (
    <div className="h-32 w-32 mx-auto">
      <div className="relative">
        <img src={LogoImg} className="" alt="Logo"/>
        <p className="absolute mt-12 ml-16 text-white text-sm font-RockSalt" style={pStyle}>Pao</p>
      </div>
    </div>
  )
};

//user css to position the text purfectly and to slant it. 
 
const pStyle = {
  'top': 15,
  'right': 0,
  'bottom': 0,
  'left': -10,
  'transform': 'rotate(20deg)'
}



