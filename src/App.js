import React from 'react';
import "./App.css";
import Content from "./Components/Content/Content";
import Button from "./Components/Button/Button";

import { useState, useEffect } from "react";



function App()
{
  const[isRunning,setIsRunning] = useState(false);
  const[time,setTime] = useState(0);

  // we need to use the hook 'useEffect' to handle the change of state,'isRunning'.

    useEffect(()=>{
    let IntervalId;

    if(isRunning)
      {
        IntervalId=setInterval(()=>{
        setTime((prevTime)=>prevTime+1);
        },1000);
      }

    return() => {
      clearInterval(IntervalId)};
    },[isRunning]);

    const handleButtonClick = () =>{
      setIsRunning(!isRunning);
    }

  const handleReset = () =>{
    setIsRunning(false);
    setTime(0);
  }

  return (
  <div className='App'>
  <Content timeValue={time}/>
  <div className='button-container'>
  <Button onButtonClick={handleButtonClick} >{isRunning? 'STOP' : 'START'}</Button>
  <Button onButtonClick={handleReset} >RESET</Button>
  </div>
  </div>
  )

}
export default App;

// function App() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(()=>{
//   let Interval;
//   if(isRunning){
//        Interval = setInterval(()=>{
//           setTime((prev)=>prev+1);
//        },1000)
//   }

//   return ()=>clearInterval(Interval);
//   },[isRunning])
//   const handleButtonClick = () => {
//     setIsRunning(!isRunning);
//   };
//   const handleResetButton = () => {
//     setIsRunning(false);
//     setTime(0);
//   };
//   return (
//     <>
//       <Content timeValue={time} />
//       <div>
//         <Button onButtonClick={handleButtonClick}>
//           {isRunning ? "STOP" : "START"}
//         </Button>
//         <Button onButtonClick={handleResetButton}>RESET</Button>
//       </div>
//     </>
//   );
// }
