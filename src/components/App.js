
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  const[name,setName] = useState("");

  function handleInput(e){
  const value = e.target.value;
  setName(value);
  
  }
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" onChange={(e)=>{handleInput(e)}} />
        {name? (<p>Hello {name}!</p>):null}
    </div>
  )
}

export default App
