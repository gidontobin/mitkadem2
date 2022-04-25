import React from 'react'
import { render } from "react-dom";
import useRecorder from '../CurrentChat/useRecorder';
import requestRecorder from '../CurrentChat/useRecorder';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    
    if (props.open == "0") return null
    var val;

    function getInput() {
        val = document.querySelector('input').value;
    }

    function addContact() {
        if (props.text == "Record") {
            props.onClose(audioURL);
        }
        else{
            props.onClose(val);
        }
    }

    var disp = <h1>{props.text}</h1>;
    var inp = <input type={props.type} onInput={getInput} id="file-path" ></input>;
    if (props.text == "Record") {
        disp = (
            <div>
            <h1>Record</h1>
            <audio src={audioURL} controls />
            <button onClick={startRecording} disabled={isRecording}>
                start recording
            </button>
            <button onClick={stopRecording} disabled={!isRecording}>
                stop recording
            </button></div>)
        inp = "";
    }


    return (
        <div>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <div class="modal-body">
                    {disp}
                </div>
                <div>
                    {inp}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onClick={addContact}>Add</button>
                </div>
            </div>
        </div>
    )
}

