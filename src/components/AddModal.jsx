import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const AddModal = ({show,handleClose,city}) => {
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{city}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Number of People</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              
              type="date"
              placeholder="Date"
              required
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