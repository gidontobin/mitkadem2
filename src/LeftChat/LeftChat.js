import { propTypes } from "react-bootstrap/esm/Image";
import Friend from "./Friend";
import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import LeftHeader from "./LeftHeader";

function LeftChat(props) {
const [prop, setP] = useState( )

const [contacts1, setContacts1] = useState([
  <Friend name="Aaron" img="/I1.jpg" set = {setP} />,
  <Friend name="Birt" img="/I1.jpg" set = {setP} />,
  <Friend name="Coby" img="/I1.jpg" set = {setP} />,
  <Friend name="Derek" img="/I1.jpg" set = {setP} />,
  <Friend name="Eran" img="/I1.jpg" set = {setP} />
  ])

const [contacts2, setContacts2] = useState([])

var con;
  if(props.check.includes("=kermit")){
    con = contacts1;
  }
  else{
    con = contacts2;
  }
  

  const input = (inp, photo) => {
    if(inp){
      if(props.check.includes("=kermit")){
    
        setContacts1(arr => [...arr, (<Friend name= {inp} img={photo} set = {setP} />)]);
      }
      else{
        setContacts2(arr => [...arr, (<Friend name= {inp} img={photo} set = {setP} />)]);
      }
    } 
  }

  return (
    <div>
      <div id="plist" class="people-list">
        <LeftHeader me = {props.me} img={props.img} input={input} />
        <div class="list2">
          <ul class="list-unstyled chat-list mt-2 mb-0">
            {con}
          </ul>
        </div>
      </div>
      {prop}
    </div>
  );
}

export default LeftChat;
