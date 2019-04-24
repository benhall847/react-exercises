import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Leet from './Leet'
import Cipher from './Cipher';
import BounceCounter from './BounceCounter';




function App() {
  return (
    <div>
      <Leet greetMe="hey who the heck are you?"></Leet>
      <Greet myGreet="WWHAAT IS HAPPENING">
      </Greet>
      <Cipher theText="What WHERE AM I !?! I DONT UNDERSTAND!"></Cipher>
      <BounceCounter></BounceCounter>
    </div>
  );
}

export default App;
