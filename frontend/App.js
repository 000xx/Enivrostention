import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Review from './Review';
import ReviewProducts from './ReviewProducts';
import Management from './Management';
import ReviewViewerProducts from './ReviewViewerProducts';
import ReviewViewer from './ReviewViewer';
import User from './User';
import React, {useState} from 'react';








function App() {

  const [userName, setUsername] = useState("")
  const [isLoggedIn, setisLoggedIn] = useState("")
  const [userRole, setUserRole] = useState("")
  

  function onUserLogIn(userName, role){
    setUsername(userName)
    setisLoggedIn(true)
    setUserRole(role)
  }

  function logOut(){
    if(confirm("Are you sure you want to log out?") == true){
      setUsername("")
      setisLoggedIn(false)
      setUserRole("")
    }
  }
  if (userRole == "removed"){
    return(<div>
      Your account has been removed
    </div>)
  }
  else if(userRole == "admin"){
    return (
      <div className="stuff">
          <div className="Navbar">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
          <NavLink to="/management" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Management</NavLink>
          <NavLink to="/review/producer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Review a producer</NavLink>
          <NavLink to="/review/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Review a product</NavLink>
          <NavLink to="/reviewviewer/producer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews of producers</NavLink>
          <NavLink to="/reviewviewer/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Look at Reviews of products</NavLink>
          </div>
          <div>
            signed in as {userName} (admin account)
          </div>
          <div onClick={logOut}>
            logout
          </div>

          <Routes>
          <Route exact path='/home'     element={<Home name={userName}/>}></Route>
          <Route exact path='/review/producer'     element={<Review />}></Route>
          <Route exact path='/management'     element={<Management role="admin" />}></Route>
          <Route exact path='/review/product'     element={<ReviewProducts />}></Route>
          <Route exact path='/reviewviewer/producer'     element={<ReviewViewer role="admin" />}></Route>
          <Route exact path='/reviewviewer/product'     element={<ReviewViewerProducts role="admin" />}></Route>
          
          
        </Routes>
      
      </div>
  );
  }
  else if(isLoggedIn){
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
          <div onClick={logOut}>
            logout
          </div>

          <Routes>
          <Route exact path='/home'     element={<Home />}></Route>
          <Route exact path='/review/producer'     element={<Review />}></Route>
          <Route exact path='/review/product'     element={<ReviewProducts />}></Route>
          <Route exact path='/reviewviewer/producer'     element={<ReviewViewer role="member" />}></Route>
          <Route exact path='/reviewviewer/product'     element={<ReviewViewerProducts role="member" />}></Route>
          <Route exact path='/management'     element={<Management role="member" />}></Route>
          
          
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
      <Route exact path='/reviewviewer/producer'     element={<ReviewViewer role="rando" />}></Route>
      <Route exact path='/reviewviewer/product'     element={<ReviewViewerProducts role="rando" />}></Route>
      </Routes>
  
  </div>
    )
  }
}

export default App;
