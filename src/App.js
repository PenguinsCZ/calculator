import './App.css';
import Buttons from './components/Buttons';
import React, { useState } from 'react';
import Display from './components/Display';

function App() {
  
  let [count, addcount] = useState("")

  function addFunc(symbol){
    if(symbol === "CE"){
      addcount(count = "")
    }
    else if(count === "ERROR"){

    }
    else if(symbol === "="){
      addcount(count = calculate(count))
      
    }
    else{addcount(count + symbol)
    
    }
   
  }

  function calculate(equation){
    if(equation.includes("--")){
      equation = equation.replace("--", "+")
    }
    try{
      let result = eval(equation)
      return result
    }
    catch{
      let result = "ERROR"
      return result
    }
    
  }
  return (
    <div className="App">
      <Display text = {count}/>
      <Buttons addFunc = {addFunc}/>
    </div>
  );
}

export default App;
