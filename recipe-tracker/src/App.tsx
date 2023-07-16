import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {Recipe} from './interface';

function App() {
  return (
    <div className="App">
     <header>
      <h1>Supichka 2.0</h1>
     </header> 
     <div className='content-list'>
      <ul>
        <li>neshto</li>
        <li>sdfd</li>
        <li>asdf</li>
      </ul>

     </div >
     <div className='content-details'>detail</div>
     <footer>some footer content</footer>
    </div>
  );
}

export default App;
