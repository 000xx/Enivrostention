//import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Review from './Review';
import React, {useState} from 'react';


function App() {
  return (
    <div className="stuff">
        <div className="Navbar">
        <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Sign Up</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Log in</NavLink>
        <NavLink to="/review" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Review</NavLink>
        <div className="User"></div>
        </div>

        <Routes>
        <Route exact path='/home'     element={<Home />}></Route>
        <Route exact path='/signup'     element={<Signup />}></Route>
        <Route exact path='/login'     element={<Login />}></Route>
        <Route exact path='/review'     element={<Review />}></Route>
        
        
      </Routes>
    
    </div>
  );
}

export default App;