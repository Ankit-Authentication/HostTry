import React,{useEffect} from 'react';
// import  Timer from "time-counter ";
import './Counter.css'

const Counter=()=>{

    var countDownDate = new Date ("Dec 10,2020 00:00:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var dd = countDownDate - now;

        var days= Math.floor(dd/(1000*60*60*24));
        var hours = Math.floor((dd%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((dd%(1000*60*60))/(1000*60));
        var seconds = Math.floor((dd%(1000*60))/1000);

        // document.querySelector(".timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if(dd <= 0){
            clearInterval(x);
        }
        },1000);

return(<div className="container">
        <div className ="count">
            <div className="countd">
                <span id ="days">00</span>
                DAYS
            </div>
    
            <div class="countd">
                <span id ="hours">00</span>
                HOURS
            </div>
    
            <div class="countd">
                <span id ="minutes">00</span>
                MINUTES
            </div>
    
            <div class="countd">
                <span id ="seconds">00</span>
                SECONDS
            </div>
        </div>
    </div>)
 
      
}
export default Counter