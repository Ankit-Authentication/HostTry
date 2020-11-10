import React ,{useEffect , Fragment}from "react";
import  AOS from "aos";
import "aos/dist/aos.css";
import { Container,Row,Col, Card} from "react-bootstrap";
import './Home.css';
const Home=()=>{
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
      
   
   const click=()=>{
    
    window.open('https://www.gangainstitute.com/', '_blank');
    
   }
return(<Fragment>
  <Container style={{color:"white",marginTop:"30px",textAlign:"center"}} fluid>
  <h2>GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h2>
  <h5 style={{color:"#ccccff"}}>presents</h5>
  <Row style={{width:"100%"}}>
    <Col lg={6} md={7} sm={12} style={{color:"white",marginTop:"30px",textAlign:"center"}} data-aos="fade-down">
    
      
     <h1 style={{color:"#f1c40f"}}>WEB-A-THON</h1>
     <h3 style={{textAlign:"center"}} >(A NATIONAL LEVEL VIRTUAL-HACKATHON)</h3>
     <h5>ON</h5> <br/>
     <h1>18-19 DECEMBER 2020</h1> <br/>
     <button className="regbtn"><span>Register</span></button>
    </Col>
    <Col lg={3} md={3} sm={12}><img src="/images/image1.png" className="image" data-aos="fade-down"></img></Col>
  </Row>
  <section class="section">
  <h1 className="data" style={{fontSize:"60px"}}>WEB-A-THON??</h1>
<p className="p">As the very name suggests in hackathon we try to use tech to hack into real world problem to solve them better. It's a 24–72 hours product making competition where every team needs to develop a product from scratch during those pretty hours. A team size can vary from 2–6 depending on the organization who is organizing it. </p>
<p className="p"> This Hackathon is usually a coding competition that can last upto 48 hours where software programmers, developers, designers, etc. come together to build and design something innovative and productive.</p>
 
<p className="p">The WEB-A-THON is a virtual national-level hackathon in which you will be provided with a set of real-life problems and you have to provide a solution for the same. It is a great platform to showcase your hidden talent and skills.</p>

<p className="p">It doesn't matter if someone is still making their first app or their 100th one. There are a lot of things to learn. The only constraint is time.</p>
</section>

<Row style={{width:"100%",marginTop:"100px"}}>
  <Col xl={4} md={12} sm={12}> <img src="/images/dir.jpg" className="imagedir" data-aos="fade-left"></img></Col>
    <Col xl={8} md={12} sm={12}>
    
    <h1 style={{fontSize:"40px",color:"#f1c40f"}}>From the Desk of Director </h1>
      <div className= "info" >
      <h3>"I am confident that the participants will find WEB-A-Thon 2020 a very valuable experience. I wish the Hackathon great success. I hope you have a good time and opportunity to connect with experts from the scientific community and influential entrepreneurs from industries."</h3>
      <h4 style={{textAlign:"center"}}>- Dr. Aman Aggarwal<br/></h4>
      <h3 style={{textAlign:"center"}}>(GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT)</h3>
      </div>
    </Col>
    
  </Row>
  
  <Row style={{width:"100%",marginTop:"100px"}}>
  
  <Col xl={6} md={6} sm={12}>
  <h1 className="data" style={{fontSize:"40px"}}>ORGANISED BY</h1>
    <Card style={{ width: '80%' ,backgroundColor:"transparent"}}>
  <Card.Img variant="top" src="/images/apptechtell.png" style={{width:"40%",margin:"auto"}}/>
  <Card.Body>
    <Card.Title>APPTECHTELL</Card.Title>
    <Card.Text>
    IT CLUB @ GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT
    </Card.Text>
  </Card.Body>
  
</Card></Col>
    <Col xl={6} md={6} sm={12} onClick={click}>
    <h1 className="data" style={{fontSize:"40px"}}>SPONSORED BY</h1>
   <Card style={{ width: '80%' ,backgroundColor:"transparent"}}>
  <Card.Img variant="top" src="/images/gitam-logo.png" style={{width:"40%",margin:"auto"}}/>
  <Card.Body>
    <Card.Title>GANGA INSTITUTE OF  TECHNOLOGY AND MANAGEMENT</Card.Title>
    <Card.Text>
    Approved by AICTE, New Delhi & Affiliated to Maharshi Dayanand University,Rohtak and HSBTE, Panchkula
    </Card.Text>
    <Card.Text>
    Recognized under Section 2(f) of UGC Act , 1956
    </Card.Text>
  </Card.Body>
  
</Card>
    </Col>
    
  </Row>
  


</Container>



 



</Fragment>)
}
export default Home