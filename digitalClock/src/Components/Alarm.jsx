import "./Alarm.css";
import {useState,useEffect,useRef} from "react";
import alarmSound from "./alarmSound.mp3";


export default function Alarm({time}){
        const [alarmTime,setAlarmTime] = useState("");
        const [isAlarmTriggered,setIsAlarmTriggered] = useState(false);
        const audioRef = useRef(new Audio(alarmSound));
        const timeoutRef = useRef(null);


        useEffect(()=>{
            const currentTime = time.toTimeString().slice(0,5);
            if(alarmTime && currentTime === alarmTime && !isAlarmTriggered){
                     setIsAlarmTriggered(true);
                     audioRef.current.play();
                     alert("alarm ringing")
            
            const timeoutRef = setTimeout(()=>{
                 audioRef.current.pause();
                 audioRef.current.currentTime =0;
                 setIsAlarmTriggered(false);
            },60000);
          }
          return() =>{
              if(timeoutRef.current){
                   clearTimeout(timeoutRef.current)
              }
          }
              
        },[time,alarmTime,isAlarmTriggered]);

        const stopAlarm = () =>{
              audio.pause();
              audio.currentTime=0;
              setIsAlarmTriggered(false);
              if(timeoutRef.current){
                 clearTimeout(timeoutRef.current);
              }
        }

        return(
            <>
              <div className="alarm-container">
                     <label htmlFor="alarm">Set Alarm &nbsp;</label>
                     <input type="time" id="alarm" placeholder="enter Alarm time HH:MM" value={alarmTime} onChange={(e)=>(setAlarmTime(e.target.value))}/>
              
                 <div>
                     <button onClick={stopAlarm}>Stop alarm</button>
                 </div>

              </div>
              
               

            </>
        )
}