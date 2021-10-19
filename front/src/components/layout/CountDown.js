import { useState, useEffect } from "react";


  const Countdown = ({fechaFin}) => {
    const [countdownDate, setCountdownDate] = useState(new Date(fechaFin).getTime());
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
     const timer = setInterval(() => setNewTime(), 1000);
      return () => clearTimeout(timer);
    });


    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
  
        const distanceToDate = countdownDate - currentTime;
  
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
  
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
  
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };
  

  return (
    
    `Cierra en: ${state.days || '0'} días ${state.hours || '00'} hs : ${state.minutes || '00'} min : ${state.seconds || '00'} seg`
  );
  };


export default Countdown;

