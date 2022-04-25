//import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Chat" element={<MainChat name= "Yossi Hagever" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*


<Background />
*/