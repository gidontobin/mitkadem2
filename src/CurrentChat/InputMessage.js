import React, { useState } from 'react';
import MyMessege from './MyMessege';
import ChatHistory from './ChatHistory';
import useRecorder from '../CurrentChat/useRecorder';
import HisMessege from './HisMessege';



function InputMessage(props) {

    var val = 0;
    var time = (new Date).toLocaleTimeString();
    const [messagesA, setA] = useState(new Map().set("Aaron", [<div><MyMessege message="hi" time="12:01:16" /></div>,<div><HisMessege message={<img src="/wa.jpg" ></img>} time="12:01:20" /></div>,<div><MyMessege message={<video autoPlay id="vid"><source src="/WIN_20220424_18_27_52_Pro.mp4" type="video/mp4"></source></video>} time="12:02:16" /></div>,<div><HisMessege message={<audio id="rec" src="/be1ee15a-e6f4-4d30-9f3d-08c3acb6d425.weba" controls />} time="12:03:20" /></div>,<div><MyMessege message="by" time="12:05:16" /></div>]))
    

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
        if (typeof val != 'string') {
            if (val.type == "img") {
                props.getLast(<div><i class="fa fa-picture-o"></i> Image</div>, time);
            }
            else if (val.type == "video") {
                props.getLast(<div><i class="fa fa-video-camera"></i> Video</div>, time);
            }
            else if (val.type == "audio") {
                props.getLast(<div><i class="fa fa-microphone"></i> Audio</div>, time);
            }
        }
        else {
            props.getLast(val, time);
        }
    }
    
    const imgGet = (e) => {
        e.preventDefault();
        val = URL.createObjectURL(e.target.files[0])
    }

    const vidGet = (e) => {
        e.preventDefault();
        console.log (e)
        val = URL.createObjectURL(e.target.files[0])
    }


    function getInputTxt() {
        val = document.querySelector('#myInput').value;
    }

    const closeP = () => {
        val = val.split("fakepath").pop();
        console.log(val)
        val = <img src={val} ></img>
        setting();
    }
    const closeV = () => {
        val = val.split("fakepath").pop();
        console.log(val)
        val = <video autoPlay id="vid"><source src={val} type="video/mp4"></source></video>
        setting();
    }
    const closeM = () => {
        val = <audio id="rec" src={audioURL} controls />
        setting();
    }

    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
        <div>
            <ChatHistory message={messagesA.get(props.name)} />
            <div class="chat-message clearfix">
                <div class="input-group mb-0">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle btn-outline-secondary" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-paperclip"></i>
                        </button>
                        <ul class="dropdown-menu ul-drp" role="menu">
                            <a href="#" data-toggle="modal" data-target="#myModal1"> <i class="btn btn-outline-secondary fa fa-picture-o"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal2"> <i class="btn btn-outline-secondary fa fa-video-camera"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal3"> <i class="btn btn-outline-secondary fa fa-microphone"></i></a>
                        </ul>
                    </div>
                    <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">Select Image</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <input type="file" id="file-path-img" onChange={imgGet} ></input>;
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closeP}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">Select Video</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <input type="file" onChange={vidGet} id="file-path-vid" ></input>;
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closeV}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">Select Image</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <h1>Record</h1>
                                        <audio src={audioURL} controls />
                                        <button onClick={startRecording} disabled={isRecording}>
                                            start recording
                                        </button>
                                        <button onClick={stopRecording} disabled={!isRecording}>
                                            stop recording
                                        </button></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closeM}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input id="myInput" type="text" class="form-control" placeholder="New message here..." onInput={getInputTxt}></input>
                    <div class="input-group-prepend">
                        <button type="button" class="btn btn-success" onClick={setting}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputMessage;
