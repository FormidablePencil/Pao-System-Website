import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
// import { CallToAction } from '../components/Buttons';
// import PaoTable from '../components/PaoTable';
import Logo from '../components/Logo';
import SidebarLeft from '../components/SidebarL';
import SidebarRight from '../components/SidebarR';
import Flashcard, { FlashcardPhoneScreen } from '../components/Flashcard';
import SettingsWindow from '../components/popup windows comps/SettingsWindow';
import MenuWindow from '../components/popup windows comps/MenuWindow';
import uuid from 'uuid';
// import axios from "axios";
import { connect } from 'react-redux';
import { getItems } from './../../actions/itemAction'; //~ getItem proforms an action GET_ITEMS which if you look into itemReducer GET_ITEMS returns to you the state. If you want to access the state then you would use 'item' just as reducer/index sets it so.
import PropTypes from 'prop-types';

//% Reducers folder, actions folder and store.js is all of Redux. Store is the setup, Reducers are the ..., and actions are the ...

export class FlashCardsP extends Component { //! make an option to edit a card within flashcard mode. Make it so whe the screen is flippd the wording is flipped too; sidewys
  constructor(props) { //For reference purposes. I'll refractor it later.
    super(props);
   
    this.state = {
      MenuWindow : false,
      SettingsWindow : false,
    };
     
    this.eventHandler2 = this.eventHandler2.bind(this); //~ now this.eventHandler2 refers to the actual function within this class. An alternative method is make the eventhander2 an arrow function. eventhandler demonstrates that. No cunstructore and bind needed. The state could be outside of a constructor.
  };

  componentDidMount() {
    this.props.getItems();
  }
  
  weGetResponse = async() => {
    const response = await fetch('/');
    const body = await response.json();
    if (response.state !==200) throw Error(body.message);
    
    return body
  }


  eventHandler2(e) {
    this.setState({
      SettingsWindow: !this.state.SettingsWindow
    })
  };

  eventHandler = (e) => {
    this.setState({
      MenuWindow: !this.state.MenuWindow

    });
  };

  //% I'm going to need to make an input field for the use to type in data, update that into the state, have the state be linked to Redux and from redux do send requests to the server with the data.
  render () {

    const { items } = this.props.item; 

    return (
      <div className="relative">
      <div className="text-white">

        {/* <div>2 {items}</div> */}
        <button onClick={() => {
          const name = prompt('Enter Item'); 
          if(name) {
            this.setState(state => ({
              items: [...state.items, { id: uuid(), name }]
            })); //~ updating state
          } 
        }}
        >click me</button>

        {/* //~ Mapped shit */}
        <div className="bg-gray-700 w-64">
          <h1>Within thisstateitems:</h1>

          {items.map(({ id, name }) => (
            <div key={id}>{name}
              {/*//~` Delete functionality */}
            <button
              onClick={() => {
                this.setState(state => ({
                  items: state.items.filter(item => item.id !== id)
                }));//@ this means to set state of items object with everything except the property with he the certian id.
              }}>Delete &times;</button>
              </div>
          ))}
        </div>


      </div>

      <div className={this.state.SettingsWindow ? " " : "hidden"} id="settingWindow"> 
        <SettingsWindow eventHandler2={this.eventHandler2} doNothing={this.doNothing} />
      </div>
      <div className={this.state.MenuWindow ? " " : "hidden"} id="menuWindow">
        <MenuWindow eventHandler={this.eventHandler} />
      </div>
      <Navbar eventHandler2={this.eventHandler2} eventHandler={this.eventHandler} /> 
      <div className="sm:hidden">
        <FlashcardPhoneScreen />
      </div>

      <div className="hidden sm:block">
          
        <div className="container mx-auto">
          <div className="flex justify-center h-80vh">
            <div className="flex flex-col">
              <div className="h-32 w-32 mt-24 mb-20 mx-auto">
                <Logo />
              </div>
            </div> 
          </div>
        </div>

        <div className="xxl:px-0"> 
          <div className="h-24 lg:mx-12 xxl:mx-0 linearGradientBlue2 rounded-t-full"></div>
          <div className="flex lg:mx-12 xxl:mx-0 flex-col lg:bg-white">
            <div className="flex flex-col h-full lg:flex-row justify-center">
              <div className="bg-blue-100 w-full xxl:block">
                <SidebarLeft />
              </div>
              <div className="h-full w-full">
                

                <Flashcard />

              </div>

              <SidebarRight />
            </div>
 

          </div>
      <div className="h-24 lg:mx-12 xxl:mx-0 linearGradientBlue2 rounded-b-full"></div>
        </div>
    </div>
  </div>
  );
  }
};

FlashCardsP.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(FlashCardsP);