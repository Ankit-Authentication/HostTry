import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Faqs from "./Faq";
import Schedule from "./Schedule";
import ProblemStatements from "./Exceltry"
import Team from "./Team"
import ErrorPage from "./ErrorPage";
const Routes= props =>{
return(<Router style={props.style}>
    <Home path="/"/>
    <Faqs path="faq"/>
    <ProblemStatements path="problemStatement"/>
    <Schedule path="schedule"/>
    <Team path="team"/>
    <ErrorPage path="*"/>
</Router>)
}
export default Routes