import React, { useState } from 'react';
import Modal from './Modal';

function LeftHeader(props) {
  const [getOpen,setOpen] = useState("0");
  
  function open(){
    setOpen("1");
  }
  
  const close = () => {
    setOpen("0");
  }
  
  return (
    <div class="chat-header2">
      <img src="/IMG_0062.jpg" width="50" height="50"></img>
      {props.me}
      <button class="btn btn-outline-secondary" onClick={open}><i class="fa fa-user-plus"></i></button>    
      <Modal open={getOpen} onClose = {close}/>
    </div>


  );
}

export default LeftHeader;