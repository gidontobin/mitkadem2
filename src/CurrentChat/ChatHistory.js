import HisMessege from "./HisMessege";
import MyMessege from "./MyMessege";
import React, { useState } from 'react';

let itemList = [];
var n = 2;
var message1 = "Hi, how is it going?";
var time = (new Date).toLocaleTimeString();
var message2 = "Hi, going ok, how are you?";


for (let i = 0; i < n; i++) {
  itemList.push(<div><HisMessege message= {message1} time = {time}/>
  <MyMessege message= {message2} time = {time}/></div>);
}

function ChatHistory(props) {
    return (
        <div class="chat-history">
            <ul class="m-b-0">
            
            {props.message}
            </ul>
        </div>
    );
}

export default ChatHistory;


