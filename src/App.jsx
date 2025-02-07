import { useState } from 'react'
import './App.css'

function App() {
  const [Exp, setExp] = useState("")
  const [Result,setResult] = useState("");

  const handleClick = (value) => {
    setExp(prevExp => prevExp+value);
  }

  

  return (
   <div>
    <h1 style={{marginLeft:"450px"}}>React Calculator</h1>
    <input value={Exp} readOnly id="input" style={{marginLeft:"500px"}}></input><br/>
    {
      Result && 
       <div style={{marginLeft:"550px", height:"20px"}}> {Result} </div>
      
    }
    <div style={{marginLeft:"490px", marginTop:"10px"}}>
    <button onClick={()=>{handleClick("7")}}>7</button> <button onClick={()=>{handleClick("8")}}>8</button> <button onClick={()=>{handleClick("9")}}>9</button> <button onClick={()=>{handleClick("+")}} >+</button><br/>
    <button onClick={()=>{handleClick("4")}}>4</button> <button onClick={()=>{handleClick("5")}}>5</button> <button onClick={()=>{handleClick("6")}}>6</button> <button onClick={()=>{handleClick("-")}}>-</button><br/>
    <button onClick={()=>{handleClick("1")}}>1</button> <button onClick={()=>{handleClick("2")}}>2</button> <button onClick={()=>{handleClick("3")}}>3</button> <button onClick={()=>{handleClick("*")}}>*</button><br/>
    <button onClick={()=>{setExp(""); setResult("");}}>C</button> <button onClick={()=>{handleClick("0")}}>0</button> <button onClick={() => {setResult(eval(Exp).toString())}}>=</button> <button onClick={()=>{handleClick("/")}}>/</button><br/>
    </div>                                                                                                                                        
   </div>
  )
}

export default App
