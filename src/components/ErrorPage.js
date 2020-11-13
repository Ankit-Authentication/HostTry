import React ,{Fragment} from "react";
import { Container,Row,Col, Card} from "react-bootstrap";
const ErrorPage=()=>{
return(
    
        <Container>
        <Row style={{width:"100%"}}>
    <Col lg={6} md={7} sm={12}>
    
      <img src="/images/404.png"/>
    </Col>
    <Col lg={3} md={3} sm={12}><img src="/images/robot.png" style={{margin:"auto",display:"block"}}></img></Col>
  </Row>

        </Container>
        
    
)
}
export default ErrorPage