import React from "react";
import { Router } from "@reach/router";
import Personal from "./Personal";

const Routes= props =>{
return(<Router style={props.style}>
    <Personal path="/personal"/>
</Router>)
}
export default Routes