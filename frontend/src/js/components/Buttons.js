import React from 'react';
import diamonds from './../../images/diamonds.svg';
import heart from './../../images/heart.svg';
import spades from './../../images/spades.svg';
import { Link } from "react-router-dom";


export function CallToAction() {
  return (
    <div className="scaledown">

      <Link to="flashcards">{/* //! when clicked then then the bottom section slides up. on hover cards will flip */}
        <div className="bg-blue2-transparent px-10 pb-4 pt-2 rounded-2rem font-RockSalt" style={{'boxShadow': '0px 7.15385px 5.36539px rgba(0, 0, 0, 0.25)'}}>
          <p className="text-gray-200 text-center text-2xl">Go to Flashcards</p>
          <div className="flex flex-row justify-center">

            <div className="w-16 h-20 mx-2 bg-white rounded shadow">
              <div className="flex justify-end m-1">
                <img src={heart} width="12" className="" alt="queen of hearts" />
              </div>
                <p className="flex justify-center text-3xl">P</p>
            </div> 

            <div className="w-16 h-20 mx-2 bg-white rounded shadow">
              <div className="flex justify-end m-1">
                <img src={diamonds} width="12" className="" alt="diamonds" />
              </div>
                <p className="flex justify-center text-3xl">A</p>
            </div>

            <div className="w-16 h-20 mx-2 bg-white rounded shadow">
              <div className="flex justify-end m-1">
                <img src={spades} width="12" className="" alt="spades" />
              </div>
                <p className="flex justify-center text-3xl">O</p>
            </div> 

          </div>
        </div>
      </Link>
    </div>
  );
};

export function StandardButton(props) {
  return (
    <div className={`px-10 py-2 mx-2 rounded-sm text-xl text-center ${props.styleName}`}>{props.value}</div>
    
  );
};

export default CallToAction;