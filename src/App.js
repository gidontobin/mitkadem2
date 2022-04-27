//import './App.css'
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';
import React, { useState } from 'react';



function App() {

  const users = [
    { id: 'kermit', password: "kermit1" },
    { id: 'miss_piggy', password: "misspiggy1" },
    { id: 'fozzie_bear', password: "fozziebear1" },
    { id: 'gonzo', password: "gonzo1" },
    { id: 'scooter', password: "scooter1" }
  ];

  var itemsList = []
  for (let i = 0; i < users.length; i++) {
    var p = "/Chat/" + users[i].id;
    itemsList.push(<Route path={p} element={<MainChat userInfo={users[i]} />}></Route>)
  }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login usersList={users} />}></Route>
          <Route path="/Register" element={<Register usersList={users} />}></Route>
          {itemsList}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<Background />
*/