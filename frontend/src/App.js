import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './js/pages/HomePage';
import FlashcardsPage from './js/pages/FlashcardsPage';
import SettingsP from './js/pages/SettingsPage'; 
import './styles/tailwind.css';
import './styles/sass/style.sass';
import WebFont from 'webfontloader';

//google fonts
WebFont.load({
  google: {
    families: ['Rock Salt', 'sans-serif']
  }
});


function App(){
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/flashcards" component={FlashcardsPage} />
        <Route path="/settings" component={SettingsP} />
      </div>
    </Router>
  )
}

export default App;
