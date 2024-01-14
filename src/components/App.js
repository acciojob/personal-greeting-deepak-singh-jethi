
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
        <h2>Enter your name</h2>
        <input type="text" onChange={(e)=>{handleInput(e)}} />
        {name? <h1>Hello {name}</h1>:null}
    </div>
  )
}

export default App
