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

  <NavLink to="/personal" className="icon1">Home</NavLink>
    <NavLink to="/academic" className="icon1">Schedule</NavLink>
    <NavLink to="/technical" className="icon1">Register</NavLink>
    <NavLink to="/project" className="icon1">Problem Statements</NavLink>
    <NavLink to="/awards" className="icon1">Awards And Honour</NavLink>
  <a href="https://www.instagram.com/arihantjain812000?r=nametag" className="icon"><i className= "fa fa-instagram" style={{marginLeft:"50px"}} ></i></a>
  <a href="https://www.facebook.com/profile.php?id=100021723864058" className="icon"><i className="fa fa-facebook-square " ></i></a>
  <a href="mailto" className="icon"><i className="fa fa-envelope" ></i></a>
  <a href="https://www.linkedin.com/in/arihant-jain-8642881a6" className="icon"><i className= "fa fa-linkedin "></i></a>
  <a href="http://www.google.com" className="icon"><i className="fa fa-whatsapp " ></i></a>
  <a href="https://github.com/arihant812000" className="icon"><i className="fa fa-github" ></i></a>
      {/* </div> */}
  </nav>

);
}

  

export default Navbar;
