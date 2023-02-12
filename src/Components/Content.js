import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "./Content.css";

function stTime(time) {
  return time.toString().padStart(2, "0");
}

function Content(props) {
  // const [mnt, setmnt] = useState(props.mnt);
  // const [scnd, setscnd] = useState(props.scnd);
  const [Time, setTime] = useState((props.mn)*60 + parseInt(props.sc ? props.sc : '0'));
  const [isRun, setisRun] = useState(false);
  const [isSt, setisSt] = useState(false);
  const [text, settext] = useState(`LET'S START!!`);
  const minutes = stTime(Math.floor(Time / 60));
  const seconds = stTime(Time % 60);
  // setisSt(false);
  
  const intervalRef = useRef(null);

  useEffect(() => {
    setTime((props.mn)*60 + parseInt(props.sc ? props.sc : '0'));
  }, [(props.mn)*60 + parseInt(props.sc ? props.sc : '0')]);

  function handleStart() {
    setisSt(true);
    setisRun(true);
    settext(`YOU ARE DOING GREAT :)`);
    intervalRef.current = setInterval(() => {
      setTime((Time) => {
        if (Time >= 1) return Time - 1;
        handleReset();
        return 0;
      }); 
    }, 1000);
  }
  function handleStop() {
    settext('KEEP IT UP!');
    clearInterval(intervalRef.current);
    setisRun(false);
    
  }
  function handleReset() {
    settext('READY FOR ANOTHER ROUND?');
    clearInterval(intervalRef.current);
    setisRun(false);
    setTime((props.mn)*60 + parseInt(props.sc ? props.sc : '0'));
    setisSt(false);
  }

  return (
    <div >
      
      <h1 className="txt">{text}</h1>
      
      <div className=" txt Timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button"  className={`btn btn-success ${isRun ? 'btn-disabled' : ''}`} onClick={handleStart}>Start</button>
        <button type="button"  className={`btn btn-warning ${!isRun ? 'btn-disabled' : ''}`} onClick={handleStop}>Stop</button>
        <button type="button" className={`btn  btn-info ${!isSt ? 'btn-disabled' : ''}`} onClick={handleReset}>Reset</button>
        
      </div>
    </div>
  );
}

export default Content;
