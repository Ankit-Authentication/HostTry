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
            color: isCurrent ? "blue" : "black"
          }
        };
      }}
    />
  )}

  return(
    <div  id="wrapper">


<div id="sidebar-wrapper">
    <div className="list-group list-group-flush">
    <NavLink to="/personal" className="list-group-item "  onClick={props.onclick}>Personal Details</NavLink>
    <NavLink to="/academic" className="list-group-item " onClick={props.onclick}>Academic Qualification</NavLink>
    <NavLink to="/technical" className="list-group-item " onClick={props.onclick}>Technical Qallification</NavLink>
    <NavLink to="/project" className="list-group-item " onClick={props.onclick}>Projects</NavLink>
    <NavLink to="/awards" className="list-group-item " onClick={props.onclick}>Awards And Honour</NavLink>

  </div>

</div>

</div>
);
  }
export default Sidebar;
