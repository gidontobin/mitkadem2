import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";

function Friend(props) {
  const [lastA, setLastA] = useState('');
  
  const whatWasLastA = (childdata, time) => {
    if(childdata!="0")
    setLastA([childdata, time])
  }

  return (
    <li class="clearfix"
      onClick={() => {props.set(<CurrentChat name={props.name} img={props.img} getLast={whatWasLastA} />); }}>

    
      <div>
        <div class="name">
          <img src={props.img} width="50" height="50"></img>
          {props.name}
          <span class="status"> {lastA[1]}</span>
        </div>
        <div class="lastMessege">{lastA[0]}</div>

      </div>
    </li>
  );
}

export default Friend;
