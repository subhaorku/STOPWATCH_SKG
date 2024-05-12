// import React from 'react'

// function Content({timeValue}) {

//     const formatTimeToDisplay = (timeInSeconds) =>{
//     const hours = Math.floor (timeInSeconds / 3600);
//     const minutes = (Math.floor (timeInSeconds/60))%60;
//     const seconds = timeInSeconds % 60;
//     return  `${hours}:${(String(minutes)).padStart(2,'0')}:${(String(seconds)).padStart(2,'0')}`;
//     }
//   return (
//     <div>
//         <h1>STOPWATCH</h1>
//         <p>
//         {formatTimeToDisplay(timeValue)}
//         </p>
//     </div>
//   )
// }

// export default Content;

import React from "react";
import img from "../../assets/stop_watch.png";
import './Content.css';
function Content({ timeValue }) {
  const handleTimeFormat = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds / 60) % 60;
    const seconds = timeInSeconds % 60;

    return `${String(hours)}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };
  return (
    <div className="content-container">
      <h1 className="content-heading">STOPWATCH</h1>
      <div>
        <img className="content-image" src={img} />
      </div>
      <div className="content-value">{handleTimeFormat(timeValue)}</div>
    </div>
  );
}

export default Content;
