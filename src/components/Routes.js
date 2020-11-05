import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import FAQ from "./FAQ";
const Routes= props =>{
return(<Router style={props.style}>
    <Home path="home"/>
    <FAQ path="faq"/>
</Router>)
}
export default Routes