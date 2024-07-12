import { useState } from "react";
import { useReducer } from "react";



import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import './App.css';
function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  
  const switchLight = () => setLight((light === "on") ? "off" : "on");


  // const [angryApp, setAngryApp] = useState(0); // no longer need usestate since we useReducer

  const [angryApp, dispatch] = useReducer((angryApp, amount) => {
    
// dispatch will either add 0.1 to the existing state or set the state of anger to 0
      return angryApp > 1 ? 0 : angryApp + amount;
    }, 0);




  
  





  return (
    <div className={`App ${dark}`}>    
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
      <AngryButton increaseAnger={dispatch}/>
        <CounterButton increaseAnger={dispatch}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={dispatch}/>
        <TextRepeaterButton increaseAnger={dispatch}/>
      </section>
    </div>
  );
}


// function LightSwitchButton(props) {
//   const {light, setLight} = props;
//   // ...
// }

export default App;
