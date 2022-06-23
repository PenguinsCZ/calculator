import './App.css';
import Buttons from './components/Buttons';
import React, { useState } from 'react';
import Display from './components/Display';

function App() {
  
  let [count, addcount] = useState("")

  function addFunc(symbol){
    
    if(symbol === "="){
      addcount(count = calculate(count))
      
    }
    else if(symbol === "CE"){
      addcount(count = "")
    }
    else{addcount(count + symbol)}
  }

  function calculate(equation){
    let result = eval(equation)
    return result
  }
  return (
    <div className="App">
      <Display text = {count}/>
      <Buttons addFunc = {addFunc}/>
    </div>
  );
}

export default App;
