import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Leet from './Leet'
import Cipher from './Cipher';
import BounceCounter from './BounceCounter';
import ClickToAdd from './ClickToAdd';




function App() {
  return (
    <div>
      <Leet greetMe="hey who the heck are you?"></Leet>


      <Greet myGreet="WWHAAT IS HAPPENING">
      </Greet>
      <Cipher theText="What WHERE AM I !?! I DONT UNDERSTAND!"></Cipher>
      <BounceCounter countBy={4} lowerLimit={-220} upperLimit={280}></BounceCounter>
      <BounceCounter countBy={25} lowerLimit={-500} upperLimit={2000}></BounceCounter>
      
      <ClickToAdd></ClickToAdd>
    </div>
  );
}

export default App;
