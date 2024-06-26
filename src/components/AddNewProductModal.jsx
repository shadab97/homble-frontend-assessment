import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function AddNewProductModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddNeProduct = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Product
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNeProduct}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" />
              <Form.Text className="text-muted">Name of your Product</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter product description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Allergen info</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter product allergen info"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Are you sure you want to create a new product"
              />
            </Form.Group>
            <Button size="lg" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewProductModal;
