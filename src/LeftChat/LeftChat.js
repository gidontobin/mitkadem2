import { propTypes } from "react-bootstrap/esm/Image";
import Friend from "./Friend";
import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import LeftHeader from "./LeftHeader";


function LeftChat(props) {
  var realTime = (new Date).toLocaleTimeString();

  const [lastA, setLastA] = useState('');
  const whatWasLastA = (childdata, time) => {
    setLastA([childdata, time])
  }
  const [lastB, setLastB] = useState('');
  const whatWasLastB = (childdata, time) => {
    setLastB([childdata, time])
  }
  const [lastC, setLastC] = useState('');
  const whatWasLastC = (childdata, time) => {
    setLastC([childdata, time])
  }
  const [lastD, setLastD] = useState('');
  const whatWasLastD = (childdata, time) => {
    setLastD([childdata, time])
  }
  const [lastE, setLastE] = useState('');
  const whatWasLastE = (childdata, time) => {
    setLastE([childdata, time])
  }




  const [prop, setP] = useState( )
  function Aaron() {
    setP(<CurrentChat name={"Aaron"} img={"/logo192.png"} getLast={whatWasLastA} />);
  }
  function Birt() {
    setP(<CurrentChat name={"Birt"} img={"/WIN_20180212_14_20_46_Pro.jpg"} getLast={whatWasLastB} />);
  }
  function Coby() {
    setP(<CurrentChat name={"Coby"} img={"/logo192.png"} getLast={whatWasLastC} />);
  }
  function Derek() {
    setP(<CurrentChat name={"Derek"} img={"/logo192.png"} getLast={whatWasLastD} />);
  }
  function Eran() {
    setP(<CurrentChat name={"Eran"} img={"/logo192.png"} getLast={whatWasLastE} />);
  }



  return (
    <div>
      <div id="plist" class="people-list">
        <LeftHeader me = {props.me} />
        <div class="list2">
          <ul class="list-unstyled chat-list mt-2 mb-0">
            <li class="clearfix" onClick={Aaron}><Friend name="Aaron" min={lastA[1]} lastM={lastA[0]} img="/logo192.png" /></li>
            <li class="clearfix" onClick={Birt}><Friend name="Birt" min={lastB[1]} lastM={lastB[0]} img="/WIN_20180212_14_20_46_Pro.jpg" /></li>
            <li class="clearfix" onClick={Coby}><Friend name="Coby" min={lastC[1]} lastM={lastC[0]} img="/logo192.png" /></li>
            <li class="clearfix" onClick={Derek}><Friend name="Derek" min={lastD[1]} lastM={lastD[0]} img="/logo192.png" /></li>
            <li class="clearfix" onClick={Eran}><Friend name="Eran" min={lastE[1]} lastM={lastE[0]} img="/logo192.png" /></li>
          </ul>
        </div>
      </div>
      {prop}
    </div>
  );
}

export default LeftChat;
