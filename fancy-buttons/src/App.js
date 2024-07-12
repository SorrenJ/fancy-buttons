import { useState } from "react";

import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import './App.css';
function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  
  const switchLight = () => setLight((light === "on") ? "off" : "on");


  const [angryApp, setAngryApp] = useState(0)
  const increaseAnger = (amount) => {
    if (angryApp < 1) {
      setAngryApp(angryApp + amount);
    } else {
      setAngryApp(0);
    }
  
  
  }




  return (
    <div className={`App ${dark}`}>    
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
      <AngryButton increaseAnger={increaseAnger}/>
        <CounterButton increaseAnger={increaseAnger}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={increaseAnger}/>
        <TextRepeaterButton increaseAnger={increaseAnger}/>
      </section>
    </div>
  );
}


// function LightSwitchButton(props) {
//   const {light, setLight} = props;
//   // ...
// }

export default App;
