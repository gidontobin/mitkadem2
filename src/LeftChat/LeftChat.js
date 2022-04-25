import { propTypes } from "react-bootstrap/esm/Image";
import Friend from "./Friend";
import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import LeftHeader from "./LeftHeader";


function LeftChat(props) {


  const [prop, setP] = useState( )
  const [contacts, setContacts] = useState
  ([
      <Friend name="Aaron" img="/logo192.png" set = {setP} />,
      <Friend name="Birt" img="/logo192.png" set = {setP} />,
      <Friend name="Coby" img="/logo192.png" set = {setP} />,
      <Friend name="Derek" img="/logo192.png" set = {setP} />,
      <Friend name="Eran" img="/logo192.png" set = {setP} />
      ])

  const input = (inp) => {
    if(inp)
    setContacts(arr => [...arr, (<Friend name= {inp} img="/logo192.png" set = {setP} />)]);
    
  }

  return (
    <div>
      <div id="plist" class="people-list">
        <LeftHeader me = {props.me} input={input} />
        <div class="list2">
          <ul class="list-unstyled chat-list mt-2 mb-0">
            {contacts}
          </ul>
        </div>
      </div>
      {prop}
    </div>
  );
}

export default LeftChat;
