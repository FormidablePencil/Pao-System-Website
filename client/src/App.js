import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './js/pages/HomePage';
import FlashcardsPage from './js/pages/FlashcardsPage';
import SettingsP from './js/pages/SettingsPage'; 
import './styles/tailwind.css';
import './styles/sass/style.sass';
import WebFont from 'webfontloader';

import { Provider } from 'react-redux';
import store from './store'; //This is the files we've created and shouldn't ever need to touch again.
import { loadUser } from './actions/authActions'; //* 

//google fonts
WebFont.load({
  google: {
    families: ['Rock Salt', 'sans-serif']
  }
});


class App extends Component {
  componentDidMount() { //* this means that the function within this method will always be run
    store.dispatch(loadUser()); //* loadUser checks to see if correct token is present in the localStorage. 
  }                             //* if no token present then ... 
  
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/flashcards" component={FlashcardsPage} />
          <Route path="/settings" component={SettingsP} />
        </div>
      </Router>
    </Provider>
    )
  }
}

export default App;
