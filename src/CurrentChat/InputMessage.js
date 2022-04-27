import React, { useState } from 'react';
import MyMessege from './MyMessege';
import ChatHistory from './ChatHistory';
import useRecorder from '../CurrentChat/useRecorder';



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
    function getInputImg() {
        val = document.querySelector('#file-path-img').value;
    }
    function getInputVid() {
        val = document.querySelector('#file-path-vid').value;
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
                                    <input type="file" onInput={getInputImg} id="file-path-img" ></input>;
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
                                    <input type="file" onInput={getInputVid} id="file-path-vid" ></input>;
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
