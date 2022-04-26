//import './App.css'
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';
import React, { useState } from 'react';

function App() {

  map

  const [usrname, setusrname] = useState('randomali')

  const sync getUsrname = (myName) => {
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
          <Route path="/" element={<Login name={getUsrname} map={} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
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