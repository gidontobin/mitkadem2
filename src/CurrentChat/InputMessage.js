import React, { useState } from 'react';
import MyMessege from './MyMessege';
import ChatHistory from './ChatHistory';


function InputMessage(props) {
    var val = 0;
    var time = (new Date).toLocaleTimeString();
    
    const [messagesA, setA] = useState([])
    const [messagesB, setB] = useState([])
    const [messagesC, setC] = useState([])
    const [messagesD, setD] = useState([])
    const [messagesE, setE] = useState([])
    
    function setting() {
        if (val != 0) {
            if(props.name == "Aaron"){
                setA(arr => [...arr, (<div><MyMessege message={val} time={time} /></div>)]);
            }
            if(props.name == "Birt"){
                setB(arr => [...arr, (<div><MyMessege message={val} time={time} /></div>)]);
            }
            if(props.name == "Coby"){
                setC(arr => [...arr, (<div><MyMessege message={val} time={time} /></div>)]);
            }
            if(props.name == "Derek"){
                setD(arr => [...arr, (<div><MyMessege message={val} time={time} /></div>)]);
            }
            if(props.name == "Eran"){
                setE(arr => [...arr, (<div><MyMessege message={val} time={time} /></div>)]);
            }
        }
        document.getElementById('myInput').value = '';
        props.getLast(val,time);
    }

    function getInput() {
        val = document.querySelector('input').value;

    }
    var messages;
    if(props.name == "Aaron"){
        messages = messagesA;
    }
    if(props.name == "Birt"){
        messages = messagesB;
    }
    if(props.name == "Coby"){
        messages = messagesC;
    }
    if(props.name == "Derek"){
        messages = messagesD;
    }
    if(props.name == "Eran"){
        messages = messagesE;
    }
    
    return (
        <div>
            <ChatHistory message={messages} />
            <div class="chat-message clearfix">
                <div class="input-group mb-0">
                <button class="btn btn-outline-secondary"><i class="fa fa-paperclip"></i></button>    
                <input id="myInput" type="text" class="form-control" placeholder="New message here..." onInput={getInput}></input>
                    <div class="input-group-prepend">
                        <button type="button" class="btn btn-success" onClick={setting}>send</button>
                        
                        
                    </div>
    
                </div>
            </div>
        </div>
    );
}

export default InputMessage;




