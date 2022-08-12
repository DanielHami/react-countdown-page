import React, { useEffect, useState } from "react";


function Timer () {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            day:Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
      }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
      const timerComponents = [];

      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
      
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
    
    return  (
     <div className="styledTimer">
        <div className="timerItems">
        <p>{timeLeft.day}</p>
        <span>Day</span>
        </div>
        <div className="timerItems">
        <p>{timeLeft.hours}</p>
        <span>Hours</span>
        </div>
        <div className="timerItems">
        <p>{timeLeft.minutes}</p>
        <span>Minutes</span>
        </div>
        <div className="timerItems">
        <p>{timeLeft.seconds}</p>
        <span>Seconds</span>
        </div>
       
       
        {/*timerComponents.length ? timerComponents : <span>Time's up!</span>*/}
     </div>
    )
}

export default Timer