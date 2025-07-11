import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from "./Components/Clock.jsx";
import Alarm from "./Components/Alarm.jsx";

function App() {
      const [time,setTime] = useState(new Date());

      useEffect(()=>{
         const interval =  setInterval(()=>{
                             setTime(new Date()); 
                          },1000)
         return () => clearInterval(interval);
          
      },[]);
  return (
    <>
      <Clock time={time}/>
      <Alarm time={time}/>
    </>
  )
}

export default App
