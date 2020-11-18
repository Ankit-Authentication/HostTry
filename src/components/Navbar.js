import React from 'react';
import './Navbar.css';
import {Navbar, Nav } from "react-bootstrap";

import { Link} from "@reach/router";
const Navbars = props => {
  const NavLink = props => {
    return(<Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "#f1c40f" : "#fff"
          }
        };
      }}
    />
  )}
 
  return(
  

  

  <Navbar collapseOnSelect={false} style={{background:"#00004d"}} expand="lg" className="navbar" sticky="top">
  <Navbar.Toggle aria-controls="basic-navbar-nav" ><i className="fa fa-align-justify" style={{color:"#fff"}}></i></Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" className="navitm">
      <Nav.Link as={NavLink} to="/" className="link">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/schedule" className="link">Schedule</Nav.Link>
      <Nav.Link as={NavLink} to="/register" className="link">Register</Nav.Link>
      <Nav.Link as={NavLink} to="/problemStatement" className="link">Problem Statement</Nav.Link>
      <Nav.Link as={NavLink} to="/faq" className="link">FAQ</Nav.Link>
      <Nav.Link as={NavLink} to="/team" className="link">Team</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


);
}

  

export default Navbars;
