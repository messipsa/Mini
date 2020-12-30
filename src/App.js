import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import Poster from './Components/Poster';
import Postform from './Components/Postform';
class App extends Component {

  render()
  {
    return(
        <div className="App">
          <header >
           
            
          </header>
          <Postform/>
         <hr/>
         <Poster/>
        </div>
    );
  }

}
export default App;