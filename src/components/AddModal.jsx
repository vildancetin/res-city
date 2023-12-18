import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const AddModal = ({show,handleClose,city}) => {
  const [number,setNumber] = useState("")
  const [date,setDate]=useState("")

  const handleSubmit=(e)=>{
e.preventDefault()
const newList={
  id:new Date().getTime(),
  day:date,
  visited:false,
  numberOfPeople:number,
  place:city,
}
handleClose()
console.log(number,date)
  }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{city}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Number of People</Form.Label>
            <Form.Control
              type="number"
              placeholder="number of people"
              required
              onChange={(e)=>setNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              
              type="date"
              placeholder="Date"
              required
              onChange={(e)=>setDate(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit" className="me-2">
              Save
            </Button>
            <Button variant="danger" type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  </>
);
}

export default AddModal