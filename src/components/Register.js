import React ,{useState} from "react";
import ReactDOM from 'react-dom';
import axios from "axios"
import { Form,Button ,Container,Row,Col} from "react-bootstrap";
const Register=()=>{
const [teamName, setTeamName]= useState()
const[memNum,setMemNum]=useState()
const team=[]
const submitTeam=()=>{
  console.log(team)
  axios({
    method: 'POST',
    url: "http://web-a-thon.test/src/api/addPart.php",
    headers: { 'content-type': 'application/json' },
    data: team
  }).then(data=>console.log(data))
}
const submit=(event)=>{
  event.preventDefault()

  team.push({
    team: teamName,
    name: event.target.name.value,
    roll: event.target.roll.value,
    phone: event.target.phn.value,
    mail: event.target.mail.value,
    university : event.target.uni.value,
    college: event.target.col.value,
    course: event.target.course.value,
    semister: event.target.sem.value
  })
  event.target.submit.disabled=true
 console.log (event)
  
}
const handleteam=(e)=>{
    setTeamName(e.target.value)
}

  

    const handleChange=(e)=>{
        setMemNum(e.target.value)
        
        
         
        console.log(memNum)
    }
    
return(
   
        
        <Container style={{color:"#fff"}}>
            <h1 style={{textAlign:"center",margin:"50px"}}>REGISTER YOUR TEAM</h1>
             <Form style={{margin:"30px"}}>
        <Row style={{width:"100%"}}>
            
    <Col lg={7} md={7} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label><h4>ENTER TEAM NAME</h4></Form.Label>
    <Form.Control type="text" onChange={handleteam.bind(this)} placeholder="Enter Team Name" />
    
  </Form.Group>
     
    </Col>
    <Col lg={5} md={5} sm={12}>
        <Form.Group controlId="formBasicEmail">
    <Form.Label><h4>ENTER TEAM SIZE</h4></Form.Label>
    <Form.Control as="select"  onChange={handleChange.bind(this)}>
    <option >TEAM SIZE</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
     </Form.Control>
    
  </Form.Group>

    </Col>
   
  </Row>
</Form>

{(()=>{
    const data=[]
    const form=(  <Form style={{padding:"25px" , marginLeft:"10px"}} onSubmit={submit.bind(this)}>
        <Row style={{width:"100%"}}>
            
    <Col lg={6} md={6} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>NAME</Form.Label>
    <Form.Control type="text"  placeholder="Enter Name" name="name" required/>
    
  </Form.Group>
     
    </Col>
    <Col lg={6} md={6} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Roll Number/ Registration Number</Form.Label>
    <Form.Control type="text"  placeholder="Enter  Roll No" name="roll" required/>
    </Form.Group>
    </Col>
    
  </Row>
  <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text"  placeholder=" Enter Contact No" name="phn" required/>
            
          </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Mail Id</Form.Label>
            <Form.Control type="mail"  placeholder="Enter Mail Id" name="mail" required/>
            </Form.Group>
            </Col>
            
          </Row>
          <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>University </Form.Label>
            <Form.Control type="text" placeholder="Enter  University id" name="uni" required/>
            
          </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>COLLEGE NAME</Form.Label>
            <Form.Control type="text"  placeholder="Enter College Name" name="col" required/>
            </Form.Group>
            </Col>
            
          </Row>
          <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>COURSE</Form.Label>
            <Form.Control as="select" name="course" >  
              <option >COURSE</option>
              <option value="B.TECH">B.TECH</option>
              <option value="BCA">BCA</option>
              <option value="B.E.">B.E.</option>
              <option value="B.Sc.">B.Sc.</option>
            </Form.Control>
           </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>SEMESTER</Form.Label>
            <Form.Control as="select" name="sem"> 
              <option > SEMESTER</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
            </Form.Control>
            </Form.Group>
            </Col>
            
          </Row>
  <Button variant="primary" type="submit" name="submit"  disabled={false}>
    ADD MEMBER
  </Button>
</Form>)
    for (let i = 0; i < memNum; i++) {
   
     data.push( <fieldset style={{border:"2px solid white",marginBottom:"50px", width:"100%"}}>
      <legend style={{textAlign:"center",width:"auto"}}>MEMBER {i+1} DETAILS</legend>
      {form}
    </fieldset> )  
            
        }
        return data
        })()}
<Button variant="primary" onClick={submitTeam}>
    SUBMIT TEAM
  </Button>
        </Container>
  
  

        // <h1>hello</h1>
    
)
}
export default Register