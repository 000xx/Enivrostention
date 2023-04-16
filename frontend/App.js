import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Review from './Review';
import ReviewProducts from './ReviewProducts';
import ReviewViewerProducts from './ReviewViewerProducts';
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
          <NavLink to="/review/producer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Review a producer</NavLink>
          <NavLink to="/review/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Review a product</NavLink>
          <NavLink to="/reviewviewer/producer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews of producers</NavLink>
          <NavLink to="/reviewviewer/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews of products</NavLink>
          </div>
          <div>
            signed in as {userName}
          </div>

          <Routes>
          <Route exact path='/home'     element={<Home />}></Route>
          <Route exact path='/review/producer'     element={<Review />}></Route>
          <Route exact path='/review/product'     element={<ReviewProducts />}></Route>
          <Route exact path='/reviewviewer/producer'     element={<ReviewViewer />}></Route>
          <Route exact path='/reviewviewer/product'     element={<ReviewViewerProducts />}></Route>
          
          
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
      <NavLink to="/reviewviewer/producer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews of producers</NavLink>
      <NavLink to="/reviewviewer/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews of products</NavLink></div>
      <div>
        Not signed in
      </div>

      <Routes>
      <Route exact path='/home'     element={<Home />}></Route>
      <Route exact path='/signup'     element={<Signup />}></Route>
      <Route exact path='/login'     element={<Login loggedIn={onUserLogIn}/>}></Route>
      <Route exact path='/reviewviewer/producer'     element={<ReviewViewer />}></Route>
      <Route exact path='/reviewviewer/product'     element={<ReviewViewerProducts />}></Route>
      </Routes>
  
  </div>
    )
  }
}

export default App;
