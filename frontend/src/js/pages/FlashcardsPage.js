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
// import axios from "axios";


export class FlashCardsP extends Component { //! make an option to edit a card within flashcard mode. Make it so whe the screen is flippd the wording is flipped too; sidewys
  constructor(props) {
    super(props);
   
    this.state = {
      MenuWindow : false,
      SettingsWindow : false,
      users: [],
      qwe: "test123",
      renderedResponse: '12'
    };
     
    this.eventHandler2 = this.eventHandler2.bind(this); //~ now this.eventHandler2 refers to the actual function within this class. An alternative method is make the eventhander2 an arrow function. eventhandler demonstrates that. No cunstructore and bind needed. The state could be outside of a constructor.
  };

  // componentDidMount() {
  //   fetch('/api/customers')
  //     .then(res => res.json())
  //     .then(customers => this.setState({customers}, () => console.log('Customers fetched..', customers)))
  // }
  
  weGetResponse = async() => {
    const response = await fetch('/');
    const body = await response.json();
    if (response.state !==200) throw Error(body.message);
    
    return body
  }

  componentDidMount() {
    this.weGetResponse()
      .then(res => {
        const PaoData = res;
        this.setState({ renderedResponse: PaoData })
      })
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

    const { renderedResponse } = this.state; //~ indead of typing out this.state all the time we could use this method of doing things.
    
    return (
      <div className="relative">
      <div className="text-white">

        <div>1 {this.state.renderedResponse}</div>
        <div>2 {renderedResponse}</div>
        <input type="text"/>


        <ul>{this.state.users.map(user => 
          <li key={user.id}>{user.username}</li>
          )}
        </ul>
      </div>

      <div className={this.state.SettingsWindow ? " " : "hidden"} id="settingWindow"> {/* this component will allways be hidden until the state is changed from on = false to ture */}
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

export default FlashCardsP;