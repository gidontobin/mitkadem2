import React, { useState } from 'react';
import MyMessege from './MyMessege';
import ChatHistory from './ChatHistory';
import Modal from '../LeftChat/Modal';


function InputMessage(props) {
    var val = 0;
    var time = (new Date).toLocaleTimeString();
    const [messagesA, setA] = useState(new Map())


    function setting() {
        if (val != 0) {
            if (messagesA.has(props.name)) {
                var ml = messagesA.get(props.name);
                ml.push(<div><MyMessege message={val} time={time} /></div>)
                setA((prev) => new Map(prev).set(props.name, ml));
            }
            else {
                setA((prev) => new Map(prev).set(props.name, [<div><MyMessege message={val} time={time} /></div>]));
            }
        }
        document.getElementById('myInput').value = '';
        if (typeof val != 'string'){
            props.getLast(<div><i class="fa fa-picture-o"></i> picture</div>, time);
            /*
            if (val.nodeName == "IMG"){
            props.getLast(<div><i class="fa fa-picture-o"></i> picture</div>, time);
            }
            else if (val.nodeName == "video"){
                props.getLast(<div><i class="fa fa-picture-o"></i> video</div>, time);
            }
            else if (val.nodeName == "audio"){
                props.getLast(<div><i class="fa fa-picture-o"></i> audio</div>, time);
            }
            */

        }
        else {
            props.getLast(val, time);
        }
    }

    function getInput() {
        val = document.querySelector('input').value;
    }
    const [getOpenP, setOpenP] = useState("0");
    function openP() {
        setOpenP("1");
    }
    const closeP = (input) => {
        setOpenP("0");
        val = input.split("fakepath").pop();
        val = "."+val;
        val = <img src = {val} ></img>
        setting();
        
    }

    const [getOpenV, setOpenV] = useState("0");
    function openV() {
        setOpenV("1");
    }
    const closeV = (input) => {
        setOpenV("0");
        val = input.split("fakepath").pop();
        val = "."+val;
        val = <video autoPlay>
        <source src={val} type="video/mp4"></source>
        </video>
        setting();
    }



    const [getOpenM, setOpenM] = useState("0");

    function openM() {
        setOpenM("1");
    }

    const closeM = (input) => {
        setOpenM("0");
        val = input
        val = <audio src={val} controls />
        setting();
    }
      
    return (
        <div>
            <ChatHistory message={messagesA.get(props.name)} />
            <div class="chat-message clearfix">
                <div class="input-group mb-0">
                    
                <button class="btn btn-outline-secondary" onClick={openP}><i class="fa fa-picture-o"></i></button>
                    <Modal open={getOpenP} onClose={closeP} type="file" text="Select Image" />
                    <button class="btn btn-outline-secondary" onClick={openV}><i class="fa fa-video-camera"></i></button>
                    <Modal open={getOpenV} onClose={closeV} type="file" text="Select Video" />
                    <button class="btn btn-outline-secondary" onClick={openM}><i class="fa fa-microphone"></i></button>
                    <Modal open={getOpenM} onClose={closeM} type="file" text="Record" />

                    <button class="btn btn-outline-secondary" data-tooltip="hello"><i class="fa fa-paperclip"></i></button>
                    <input id="myInput" type="text" class="form-control" placeholder="New message here..." onInput={getInput}></input>
                    <div class="input-group-prepend">
                        <button type="button" class="btn btn-success" onClick={setting}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputMessage;
