import React from 'react';
import { Link} from "@reach/router";
import './Sidebar.css'

const Sidebar = props => {

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
    <div  id="wrapper">


<div id="sidebar-wrapper">
    <div className="list-group list-group-flush">
    <NavLink to="/" className="list-group-item "  onClick={props.onclick}>Home</NavLink>
    <NavLink to="/academic" className="list-group-item "  onClick={props.onclick}>Schedule</NavLink>
    <NavLink to="/technical" className="list-group-item "  onClick={props.onclick}>Register</NavLink>
    <NavLink to="/project" className="list-group-item "  onClick={props.onclick}>Problem Statements</NavLink>
    <NavLink to="/faq" className="list-group-item "  onClick={props.onclick}>FAQ</NavLink>
    <NavLink to="/awards" className="list-group-item "  onClick={props.onclick}>Awards And Honour</NavLink>

  </div>

</div>

</div>
);
  }
export default Sidebar;
