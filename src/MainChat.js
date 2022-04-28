import './MainChat.css';
import LeftChat from './LeftChat/LeftChat';
import React, { useState } from 'react';
import users from './Users';



function MainChat(user) {

    let index
    for (let i = 0; i < users.length; i++) {
        if (users[i].isOnline == true)
            index = i;
    }

    return (
        <div>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="chat-app">
                            <LeftChat me={users[index].id} img={users[index].img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChat;
