import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Leet from './Leet'




function App() {
  return (
    <div>
      <Leet greetMe="hey who the heck are you?"></Leet>
      <Greet myGreet="WWHAAT IS HAPPENING">
      </Greet>
    </div>
  );
}

export default App;
