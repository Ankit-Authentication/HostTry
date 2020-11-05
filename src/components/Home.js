import React ,{useEffect , Fragment}from "react";
import  AOS from "aos";
import "aos/dist/aos.css";
import './Home.css';
import './FAQ.css'
const Home=()=>{
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
      
   
   
return(<Fragment>
  <div className="flexitem" >
    <div style={{color:"white",marginTop:"30px"}} data-aos="fade-down">
      <h2>GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h2>
      <h5 style={{color:"#ccccff"}}>presents</h5>
     <h1 className="data">WEB-A-THON</h1>
     <h3>(A NATIONAL LEVEL VIRTUAL-HACKATHON)</h3>
     <h5>ON</h5> <br/>
     <h1>18-19 DECEMBER 2020</h1> <br/>
     <button className="regbtn"><span>Register</span></button>
    </div>
    <div>
      <img src="/images/image1.png" className="image" data-aos="fade-left"></img>
    </div>
</div>
<img src="/images/seperation.png" width="100%" height="15%"></img>
{/* <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}}></hr> */}
<div style={{textAlign:"center",color:"white",marginTop:"-95px",width:"100%",wordWrap:"break-word"}}>
  <br></br>
  <br></br>
  <br></br>
<h1 className="data" style={{fontSize:"60px"}}>WEB-A-THON??</h1>
<p>As the very name suggests in hackathon we try to use tech to hack into real world problem to solve them better. It's a 24–72 hours product making competition where every team needs to develop a product from scratch during those pretty hours. A team size can vary from 2–6 depending on the organization who is organizing it. </p>
<p> This Hackathon is usually a coding competition that can last upto 48 hours where software programmers, developers, designers, etc. come together to build and design something innovative and productive.</p>
 
<p>The WEB-A-THON is a virtual national-level hackathon in which you will be provided with a set of real-life problems and you have to provide a solution for the same. It is a great platform to showcase your hidden talent and skills.</p>

<p>It doesn't matter if someone is still making their first app or their 100th one. There are a lot of things to learn. The only constraint is time.</p>
</div>
<img src="/images/seperation.png" width="100%" height="15%"></img>
<div className="flexitem" >

   <img src="/images/dir.jpg" className="imagedir" data-aos="fade-left"></img>
    <div style={{color:"white",marginTop:"50px",borderLeft:"5px solid red"}} data-aos="fade-down">
      <h1>From the Desk of Director</h1>
      <h4>"I am confident that the participants will find PU Digital Hackathon 2020 a very valuable experience. I wish the Hackathon great success. I hope you have a good time and opportunity to connect with experts from the scientific community and influential entrepreneurs from industries."</h4>
      <h4>- Dr. Aman Aggarwal(GANGA INSTITUTE OF TECHNOLOGY AND MANAGEMENT)</h4>
    </div>
</div>
</Fragment>)
}
export default Home