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
  }).then(data=>console.log(data.data))
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
            
    <Col lg={9} md={7} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label><h4>ENTER TEAM NAME</h4></Form.Label>
    <Form.Control type="text" onChange={handleteam.bind(this)} placeholder="Enter Team Name" />
    
  </Form.Group>
     
    </Col>
    <Col lg={3} md={3} sm={12}>
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
    const form=(  <Form style={{margin:"auto"}} onSubmit={submit.bind(this)}>
        <Row style={{width:"100%"}}>
            
    <Col lg={6} md={6} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>NAME</Form.Label>
    <Form.Control type="text"  placeholder="Enter Team Name" name="name"/>
    
  </Form.Group>
     
    </Col>
    <Col lg={6} md={6} sm={12}>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>ROLL NUMBER</Form.Label>
    <Form.Control type="text"  placeholder="Enter Team Name" name="roll"/>
    </Form.Group>
    </Col>
    
  </Row>
  <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>CONTACT No.</Form.Label>
            <Form.Control type="text"  placeholder="Enter Team Name" name="phn"/>
            
          </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>MAIL ID</Form.Label>
            <Form.Control type="text"  placeholder="Enter Team Name" name="mail"/>
            </Form.Group>
            </Col>
            
          </Row>
          <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>UNIVERSITY NAME</Form.Label>
            <Form.Control type="text" placeholder="Enter Team Name" name="uni"/>
            
          </Form.Group>
             
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>COLLEGE NAME</Form.Label>
            <Form.Control type="text"  placeholder="Enter Team Name" name="col"/>
            </Form.Group>
            </Col>
            
          </Row>
          <Row style={{width:"100%"}}>
            
            <Col lg={6} md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>COURSE</Form.Label>
            <Form.Control as="select" name="course">  
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
  <Button variant="primary" type="submit" name="submit" disabled={false}>
    ADD MEMBER
  </Button>
</Form>)
    for (let i = 0; i < memNum; i++) {
   
     data.push( <fieldset style={{border:"2px solid white",margin:"auto"}}>
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