import  './MainChat.css';
import LeftChat from './LeftChat/LeftChat';
import React, { useState } from 'react';


function MainChat() {
    return (
        <div>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="chat-app">
                            <LeftChat me="Gidon Tobin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChat;