import React,{useEffect,useState} from 'react';
// import  Timer from "time-counter ";
import './Counter.css'

const Counter=()=>{
    const [day,setDay]=useState()
    const [hour,sethour]=useState()
    const [min,setmin]=useState()
    const [sec,setsec]=useState()
    const fun=()=>{
         var countDownDate = new Date ("Dec 10,2020 00:00:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var dd = countDownDate - now;

        var days= Math.floor(dd/(1000*60*60*24));
        var hours = Math.floor((dd%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((dd%(1000*60*60))/(1000*60));
        var seconds = Math.floor((dd%(1000*60))/1000);

        // document.querySelector(".timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
       setDay(days)
       sethour(hours)
       setmin(minutes)
       setsec(seconds)

        if(dd <= 0){
            clearInterval(x);
        }
        },1000);
    }

useEffect(()=>{
fun()
   
},1000)
    

return(<div className="containercounter">
        <div className ="count">
            <div className="countd">
<span id ="days">{day}</span>
                DAYS
            </div>
    
            <div class="countd">
                <span id ="hours">{hour}</span>
                HOURS
            </div>
    
            <div class="countd">
                <span id ="minutes">{min}</span>
                MINUTES
            </div>
    
            <div class="countd">
                <span id ="seconds">{sec}</span>
                SECONDS
            </div>
        </div>
    </div>)
 
      
}
export default Counter