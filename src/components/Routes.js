import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Faqs from "./Faq";
const Routes= props =>{
return(<Router style={props.style}>
    <Home path="/"/>
    <Faqs path="faq"/>
</Router>)
}
export default Routes