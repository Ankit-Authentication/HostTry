
import React ,{ useState}from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./team.css"
const Team=()=>{

    <h1>TEAMS CARDS  </h1>
    const info=[
        {
            name:"ARIHANT JAIN",
            title: "SOFTWARE DEVELOPER",
            image :"image1.png"
        },
        {
            name:"Ankit GUPTA",
            title: "SOFTWARE DEVELOPER"
        },
        {
            name:"DEEPANSHI JAIN",
            title: "SOFTWARE DEVELOPER"
        },
        {
            name:"NEETU SHARMA",
            title: "SOFTWARE DEVELOPER"
        },
        {
            name:"MAHESH MALKHANI",
            title: "SOFTWARE DEVELOPER"
        },
        {
            name:"ARIHANT JAIN",
            title: "SOFTWARE DEVELOPER"
        }
    ]

  const[data,setData]=useState(info)
  
 console.log(data)
 const datadata=(inf)=>{
     console.log("inf",inf)
     return(
         inf.map((item,index)=>{
             return(
                 
                 <Col lg={4} xl={4} md={6} sm={12} style={{paddingBottom:"50px"}}>
                <div className='Card'>
                  <div className='upper-container'>
                    <div className='image-container'>
                    <img src={`/images/${item.image}`} className="img" alt='' height="100px" width="100px" />
                      </div>
                  </div>
                  <div className='lower-container'>
                    <h3> { item.name } </h3>
                    <h4> { item.title } </h4>
                    <p> about </p>
                    <button className="button">Visit Profile</button>
                  </div>
                </div>
                
                </Col>
             )
         })
     )

 }

    return(
    <Container>
        <Row>
   {datadata(data)}</Row>
   </Container>
    )
  }
    


export default Team