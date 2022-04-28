import React, { useState } from 'react';
import Modal from './Modal';

function LeftHeader(props) {
  const [getOpen,setOpen] = useState("0");
  
  function open(){
    setOpen("1");
  }
  
  const close = (input, photo) => {
    setOpen("0");
    props.input(input, photo);
  }
  const x = (input, photo) => {
    setOpen("0");
  }
  
  return (
    <div class="chat-header2">
      <img src={props.img} width="50" height="50"></img>
      {props.me}
      <button class="btn btn-outline-secondary" onClick={open}><i class="fa fa-user-plus"></i></button>    
      <Modal open={getOpen} onClose = {close} x={x} type = "text" text = "Add new contact"/>
    </div>


  );
}

export default LeftHeader;