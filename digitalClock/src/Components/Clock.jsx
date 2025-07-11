export default function Clock({time}){
      const formatTime = (date) =>{
            return date.toLocaleTimeString("en-US",{hour12:false});
             date.toLocaleDateString("en-US",{
                weekday:"long",
                year:"numeric",
                month:"long",
                day:"long",
           });
           //return(`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`);
      }
      
        return(
            <>
               <h1>Digital Clock</h1>
               <p>{formatTime(time)}</p>
            </>
        )
}