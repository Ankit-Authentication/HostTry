import React from 'react';
import './Navbar.css'

import { Link} from "@reach/router";
const Navbar = props => {
  const NavLink = props => {
    return(<Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "blue" : "#fff"
          }
        };
      }}
    />
  )}
 
  return(
  

  <nav className="navbar navbar-expand-lg ">
  {/* <div class ="container"> */}

  <i className={props.icon} id="icon" onClick={props.onclick}></i>

  <NavLink to="/" className="icon1">Home</NavLink>
    <NavLink to="/academic" className="icon1">Schedule</NavLink>
    <NavLink to="/technical" className="icon1">Register</NavLink>
    <NavLink to="/project" className="icon1">Problem Statements</NavLink>
    <NavLink to="/faq" className="icon1">FAQ</NavLink>
    <NavLink to="/awards" className="icon1">Awards And Honour</NavLink>
  
      {/* </div> */}
  </nav>

);
}

  

export default Navbar;
