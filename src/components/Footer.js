import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
const Footer = () => {
  return (
<<<<<<< HEAD
    <MDBFooter className="font-small pt-4 mt-4" style={{background:"orange",color:"#fff",bottom:"0px"}}>
=======
    <MDBFooter color="blue" className="font-small pt-4 mt-4 foot" >
>>>>>>> 2b37f04a8e6d2d1107bda9cc904f1474044d2dca
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4" style={{color:"#fff", textAlign:"center"}}>
              <img src="/images/apptechtell.png" style={{width:"40%",margin:"auto"}}/>
            <h5 className="title">APPTECHTELL</h5>
            <p>
             IT CLUB @ GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT
            </p>
          </MDBCol>
          <MDBCol md="4" style={{color:"#fff" , textAlign:"center",marginTop:"50px"}}>
              <h5 style={{color:"black"}}>ABOUT US</h5>
          <p>With a mission to improve lives through learning, connecting people and ideas, and to create skilled software engineers for our country and the world, Code Warriors aims to connect learners from all over the globe with high-quality educators.</p>
          </MDBCol>
          <MDBCol md="4" style={{color:"#fff", textAlign:"center",marginTop:"50px"}}>
            <h5 className="title" style={{color:"black"}}>GET IN TOUCH WITH US</h5>
           <p><i class="fa fa-whatsapp" aria-hidden="true"></i> 9518407256 &emsp;<i class="fa fa-whatsapp" aria-hidden="true"></i> 8447771951&emsp;<i class="fa fa-whatsapp" aria-hidden="true"></i> 8168095773</p>
           <p><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; apptechtell@gmail.com</p><br/>
           <hr style={{backgroundColor:"black",width:"100px"}}/>
           <p><i class="fa fa-facebook" aria-hidden="true"></i> &emsp;<i class="fa fa-instagram" aria-hidden="true"></i> &emsp;<i class="fa fa-twitter" aria-hidden="true"></i>&emsp;<i class="fa fa-youtube-play" aria-hidden="true"></i> &emsp;<i class="fa fa-linkedin" aria-hidden="true"></i>  </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: APPTECHTELL @ <a href="https://www.gangainstitute.com/"> GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
