import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './js/pages/HomePage';
import FlashcardsPage from './js/pages/FlashcardsPage';
import SettingsP from './js/pages/SettingsPage'; 
import './styles/tailwind.css';
import './styles/sass/style.sass';
import WebFont from 'webfontloader';

import { Provider } from 'react-redux';
import store from './store'; //This is the files we've created and shouldn't ever need to touch again.

//google fonts
WebFont.load({
  google: {
    families: ['Rock Salt', 'sans-serif']
  }
});


function App(){
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

export default App;
