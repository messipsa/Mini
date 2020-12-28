import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Poster from './Components/Poster';
import Postform from './Components/Postform';
class App extends Component {
 
  render() {
    return (
      <div>
        <header>
          <Poster/>
          <Postform/>
        
        
     
       
      </header>
      </div>
    );
  }
}

export default App;
