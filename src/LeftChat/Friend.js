import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import MyMessege from '../CurrentChat/MyMessege';

function Friend(props) {
  const [last, setLast] = useState('');
   

  const whatWasLast = (childdata, time) => {
    if(childdata!="0"){
      
        setLast([childdata, time]);
      
    }
  }

  




  return (
    <li class="clearfix"
      onClick={() => {props.set(<CurrentChat name={props.name} img={props.img} getLast={whatWasLast}/>); }}>
      <div>
        <div class="name">
          <img src={props.img} width="50" height="50"></img>
          {props.name}
          <span class="status"> {last[1]}</span>
        </div>
        <div class="lastMessege">{last[0]}</div>
      </div>
    </li>
  );
}

export default Friend;
