import { propTypes } from "react-bootstrap/esm/Image";
import Friend from "./Friend";
import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import LeftHeader from "./LeftHeader";


function LeftChat(props) {


  const [prop, setP] = useState( )

  const contacts = [
  <Friend name="Aaron" img="/logo192.png" set = {setP} />,
  <Friend name="Birt" img="/WIN_20180212_14_20_46_Pro.jpg" set = {setP} />,
  <Friend name="Coby" img="/logo192.png" set = {setP} />,
  <Friend name="Derek" img="/logo192.png" set = {setP} />,
  <Friend name="Eran" img="/logo192.png" set = {setP} />,
  <Friend name="Fred" img="/logo192.png" set = {setP} />,
  <Friend name="George" img="/logo192.png" set = {setP} />,
  <Friend name="Harry" img="/logo192.png" set = {setP} />,
  <Friend name="Yohay" img="/logo192.png" set = {setP} />
  ]



  return (
    <div>
      <div id="plist" class="people-list">
        <LeftHeader me = {props.me} />
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
