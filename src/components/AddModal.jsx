import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddModal = ({ show, handleClose, city,handleAdd }) => {
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = {
      id: new Date().getTime(),
      day: date,
      visited: false,
      numberOfPeople: number,
      place: city,
    };
    handleAdd(newList)
    handleClose();
    console.log(number, date);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title className="head">{city}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg">
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="number">
              <Form.Label className="col-light">Number of People</Form.Label>
              <Form.Control
                type="number"
                placeholder="number of people"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label className="col-light">Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                required
                onChange={(e) => setDate(e.target.value)}
                
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="me-2 save-color">
                Save
              </Button>
              <Button variant="danger" type="button" onClick={handleClose} className="cancel-color">
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddModal;
