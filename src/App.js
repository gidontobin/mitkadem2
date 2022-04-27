//import './App.css'
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';
import React, { useState } from 'react';

function App() {

  /*
  const users = () => {
    const data = [    
      { id: 'Kermit', password: "kermit1" },
      {id: 'Miss Piggy', password: "misspiggy1"},
      {id: 'Fozzie Bear', password: "fozziebear1"},
      {id: 'Gonzo', password: "gonzo1"},
      {id: 'Scooter', password: "scooter1"}
  ];
*/

  const users = [    
    {id: 'kermit', password: "kermit1" },
    {id: 'miss_piggy', password: "misspiggy1"},
    {id: 'fozzie_bear', password: "fozziebear1"},
    {id: 'gonzo', password: "gonzo1"},
    {id: 'scooter', password: "scooter1"}
  ];

  /*
  const users = new Map();
  users.set('Kermit', kermit1);
  users.set('Miss Piggy', misspiggy1);
  users.set('Fozzie Bear', fozziebear1);
  users.set('Gonzo', gonzo1);
  users.set('Scooter', scooter1);
*/

  const [usrname, setusrname] = useState('randomali')

  const getUsrname = (myName) => {
    setusrname(myName);
    console.log('argument is:')
    console.log(myName)
    console.log('value in usrname is:')
    console.log(usrname);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login name={getUsrname} usersList={users} />}></Route>
          <Route path="/Register" element={<Register usersList={users} />}></Route>
          <Route path="/Chat" element={<MainChat name={usrname} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<Background />
*/