import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Create from './Components/Create/Create';
import { useEffect, useState } from 'react';
import Login from './Components/Login/Login';
import Navbar from './Components/NavBar/NavBar';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:3001"

function App() {
  const [access, setAccess]=useState(false)
  const navigate=useNavigate()
  const location=useLocation()


  useEffect(()=>{
    !access&&navigate("/")
  },[access,navigate])

const handlelogin=()=>{
  setAccess(true)
  navigate("/home")
}

const handleLogout=()=>{
  setAccess(false)
  navigate("/")
}

  return (
    <div className="App">
      {
       location.pathname!=='/' &&<Navbar handleLogout={handleLogout}/>
      }
      <Routes>
        <Route path='/' element={<Login handlelogin={handlelogin}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
