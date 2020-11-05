import React , {Fragment , useState} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Sidebar from "./components/Sidebar";
import Routes from "./components/Routes";
import Particles from "react-particles-js"
const App = () => {
  const [icon,setIcon]= useState("fa fa-align-justify")
  const onclick=()=>{
    if(icon==="fa fa-align-justify"){
 document.getElementById("sidebar-wrapper").style.display="block";

 setIcon("fa fa-chevron-left")
}
else{
  document.getElementById("sidebar-wrapper").style.display="none";

 setIcon("fa fa-align-justify")
}
  }
  const click=()=>{
 
    document.getElementById("sidebar-wrapper").style.display="none";
  
   setIcon("fa fa-align-justify")
  
    }
  return(
    <Fragment>
      <Particles
     params={{
	    "particles": {
	        "number": {
	            "value": 75
          },
          "color":{
            "value":"#ccccff"
          },
          "line_linked":{
            "color":"#ccccff"
          },
	        "size": {
	            "value": 5
	        }
	    },
	   
  }} 
  height="100vh"
  className="canvas"
      />
      <Navbar onclick={onclick} icon={icon}/>
      <div className="flex">
        <Sidebar onclick={click}/>
    <Routes style={{width:"100%"}}/>
    </div>
     </Fragment>
)}

export default App;
