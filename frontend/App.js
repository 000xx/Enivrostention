import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Review from './Review';
import ReviewViewer from './ReviewViewer';
import User from './User';
import React, {useState} from 'react';








function App() {

  const [userName, setUsername] = useState("")
  const [isLoggedIn, setisLoggedIn] = useState("")
  

  function onUserLogIn(userName){
    setUsername(userName)
    setisLoggedIn(true)
  }
  if(isLoggedIn){
    return (
      <div className="stuff">
          <div className="Navbar">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
          <NavLink to="/review" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Review</NavLink>
          <NavLink to="/reviewviewer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews</NavLink>
          </div>
          <div>
            signed in as {userName}
          </div>

          <Routes>
          <Route exact path='/home'     element={<Home />}></Route>
          <Route exact path='/review'     element={<Review />}></Route>
          <Route exact path='/reviewviewer'     element={<ReviewViewer />}></Route>
          
          
        </Routes>
      
      </div>
  );
  }
  else{
    return(
      <div className="stuff">
      <div className="Navbar">
      <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
      <NavLink to="/signup" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Sign Up</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Log in</NavLink>
      <NavLink to="/reviewviewer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews</NavLink>
      </div>
      <div>
        Not signed in
      </div>

      <Routes>
      <Route exact path='/home'     element={<Home />}></Route>
      <Route exact path='/signup'     element={<Signup />}></Route>
      <Route exact path='/login'     element={<Login loggedIn={onUserLogIn}/>}></Route>
      <Route exact path='/reviewviewer'     element={<ReviewViewer />}></Route>
      </Routes>
  
  </div>
    )
  }
}

export default App;
