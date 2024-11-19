import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { Routes , Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Navbar , Container , Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import LogoImg from '../src/assets/logo.png';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Movie from './components/Movie';
import SelectSeat from './components/SelectSeat';
import Success from './components/Success';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const navigate = useNavigate("");
  const [user, setUser] = useState('');

  useEffect(() => {
    // const userEmail = localStorage.getItem('userEmail')
    // if(userEmail) {
    //   setUser(userEmail);
    // }
    onAuthStateChanged(auth, user1 => {
      if(user1){
        navigate('/')
        setUser(user)
        console.log("user is login")
      }else{
        navigate('/login')
        console.log('user is not there')
      }
    })
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    window.location.href = '/login';
  }

  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{display: 'flex', justifyContent: 'space-between', padding:"20px 50px"}}>
          <Navbar.Brand onClick={() => navigate('/')} style={{fontStyle:"italic", fontWeight:"bold", fontSize:"35px", marginLeft:"2rem"}}>
            <img
              alt=""
              src={LogoImg}
              width="45"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            MOVIE CORNER
          </Navbar.Brand>
          {user && <Button onClick={() => handleLogout()} className='logout-btn'>Logout</Button> }

      </Navbar>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup setUser={setUser} />}/>
          <Route path='/login' element={<Login setUser={setUser} />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/select' element={<SelectSeat /> }/>
          <Route path='/success' element={ <Success />}/>
      </Routes>
    </div>
  )
}

export default App
