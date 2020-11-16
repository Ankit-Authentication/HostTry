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
          <MDBCol md="4"  style={{color:"#fff", textAlign:"center" }}>
              <img src="/images/apptechtell.png" style={{width:"20%",marginTop:"-5px"}}/>
            <h5 className="title">APPTECHTELL</h5>
            <p id = "it">
             IT CLUB @ GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT
            </p>
            <hr style={{backgroundColor:"black",width:"100px"}}/>
           <p><i class="fa fa-facebook" aria-hidden="true" onClick={event =>  window.location.href='https://www.facebook.com/Apptechtell_IT_Club-122213073030384'}></i> &emsp;<i class="fa fa-instagram" aria-hidden="true" onClick={event =>  window.location.href='https://www.instagram.com/apptechtell_club/'}></i> &emsp;<i class="fa fa-twitter" aria-hidden="true"  onClick={event => 'https://twitter.com/gitamofficial'}></i>&emsp;<i class="fa fa-youtube-play" aria-hidden="true"  onClick={event =>  window.location.href='https://www.youtube.com/c/GANGAINSTITUTEOFTECHNOLOGYMANAGEMENT/'}></i> &emsp;  </p>
         
          </MDBCol>
          <MDBCol md="4" style={{color:"#fff" , textAlign:"center", marginTop: "25px"}}>
              <h5 style={{color:"black"}}>ABOUT US</h5>
          <p>With a mission to improve lives through learning, connecting people and ideas, and to create skilled software engineers for our country and the world, Code Warriors aims to connect learners from all over the globe with high-quality educators.</p>
          </MDBCol>
          <MDBCol md="4" style={{color:"#fff", textAlign:"center" , marginTop: "25px"}}>
            <h5 className="title" style={{color:"black"}}>Get In Touch With Us</h5>
           <p><i class="fa fa-whatsapp" onClick={event =>  window.location.href='/your-href'} aria-hidden="true"></i> <a href="https://api.whatsapp.com/send?phone=+919518407256" style={{color:"white",textDecoration:"none"}}>9518407256</a>   </p>
           <p><i class="fa fa-whatsapp" onClick={event =>  window.location.href='/your-href'} aria-hidden="true"></i> <a href="https://api.whatsapp.com/send?phone=+918447771951" style={{color:"white",textDecoration:"none"}}>8447771951</a></p>
           <p><i class="fa fa-whatsapp" onClick={event =>  window.location.href='/your-href'} aria-hidden="true"></i><a href="https://api.whatsapp.com/send?phone=+918168095773" style={{color:"white",textDecoration:"none"}}> 8168095773 </a></p>
           <p><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;<a href="mailto:YourMail@apptechtell@gmail.com" style={{color:"white",textDecoration:"none"}}>apptechtell@gmail.com</a> </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: APPTECHTELL @ <a href="https://www.gangainstitute.com/"> GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
