import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Faqs from "./FAQ";
import Schedule from "./Schedule";
import ProblemStatements from "./Exceltry"
import ErrorPage from "./ErrorPage";
import Register from "./Register";
const Routes= props =>{
return(<Router style={props.style}>
    <Home path="/"/>
    <Faqs path="FAQ"/>
    <ProblemStatements path="problemStatement"/>
    <Schedule path="schedule"/>
    <Team path="team"/>
    <Register path="register"/>
    <ErrorPage path="*"/>


    
</Router>)
}
export default Routes