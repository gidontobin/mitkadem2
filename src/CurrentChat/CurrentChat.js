import ChatHeader from "./ChatHeader";
import ChatHistory from "./ChatHistory";
import InputMessage from "./InputMessage";
import React, { useState } from 'react';



function CurrentChat(props) {
  return (
    <div className="CurrentChat">
      <div class="chat">
        <ChatHeader name= {props.name} img = {props.img}/>
        <InputMessage name= {props.name} getLast = {props.getLast} />
      </div>
    </div>
  );
}

export default CurrentChat;
