import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4" style={{color:"#fff"}}>
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
              <h5>ABOUT US</h5>
          <p>With a mission to improve lives through learning, connecting people and ideas, and to create skilled software engineers for our country and the world, Code Warriors aims to connect learners from all over the globe with high-quality educators.</p>
          </MDBCol>
          <MDBCol md="4" style={{color:"#fff", textAlign:"center",marginTop:"50px"}}>
            <h5 className="title">GET IN TOUCH WITH US</h5>
           <p><i class="fa fa-whatsapp" aria-hidden="true"></i> 9518407256 &emsp;<i class="fa fa-whatsapp" aria-hidden="true"></i> 8447771951&emsp;<i class="fa fa-whatsapp" aria-hidden="true"></i> 8168095773</p>
           <p><i class="fa fa-e
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           nvelope" aria-hidden="true"></i> &nbsp; apptechtell@gmail.com</p><br/>
           <hr style={{backgroundColor:"#fff",width:"100px"}}/>
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
