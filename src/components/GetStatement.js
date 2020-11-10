import React,{useState} from "react";
import { Button,Modal ,Table } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  console.log("data is ",props.data)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            WEB-A-THON
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th colSpan="2">PROBLEM DESCRIPTION</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Code</td>
      <td>{props.data.ps_code}</td>

    </tr>
    <tr>
      <td>Domain</td>
      <td>{props.data.domain}</td>

    </tr>
    <tr>
      <td>Title</td>
      <td>{props.data.ps_title}</td>

    </tr>
    <tr>
      <td>Statement</td>
      <td>{props.data.ps}</td>

    </tr>
  </tbody>
</Table>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const GetStatement=(row,column)=>{
    const [modalShow, setModalShow] = useState(false);
console.log(row.cell.row.original)
    return (
      <>
        <p onClick={() => setModalShow(true)} style={{fontSize:"10px",cursor:"pointer"}}>
          Click for complete description
        </p>
  
        <MyVerticallyCenteredModal
        data={row.cell.row.original}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}
   export default GetStatement