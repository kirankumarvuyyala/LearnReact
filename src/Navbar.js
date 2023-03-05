import React from 'react'
// import Cards from './Cards'
import { NavLink, useNavigate } from 'react-router-dom'; 
import './First.css';

function Navbar() {
  const Token=window.localStorage.getItem('authorized')
  const navigateBack=useNavigate();
  const searchtable=(e)=>{
    let value=e.target.value;
    console.log(value+"search");

  }
  const handelLogout=()=>{
    if(Token)
    {
    window.localStorage.removeItem('authorized');
    navigateBack('/Login');
    }


  }
  return (
    <>
     
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item ">
      <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
    <li className="nav-item ">
      <NavLink className="nav-link" to="/Signup">SignUp</NavLink>
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link" to="/User">User</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/Cards">Cards</NavLink>
   
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link" to="/Form">Form</NavLink>
       
      
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link" to="/HttpDemo1">HttpDemo</NavLink>
      </li>
     
      {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="!#">Action</a></li>
            <li><a className="dropdown-item" href="!#">Another action</a></li>
            <li><a className="dropdown-item" href="!#">Something else here</a></li>
          </ul>
        </li>
      <li className="nav-item">
        <a className="nav-link" href="!#">Disabled</a>
      </li> */}

      <li className="nav-item " style={{display:Token?"block":"none"}}>
<button className="nav" onClick={handelLogout}>LogOut</button>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchtable}>Search</button>
    </form>
  </div>
</nav>

</>
  )
}

export default Navbar