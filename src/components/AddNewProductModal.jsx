import { Form, Button, Modal, Spinner } from "react-bootstrap";
import useAddNewProduct from "../hooks/useAddNewProduct";

function AddNewProductModal() {
  const {
    show,
    loading,
    handleShow,
    errorState,
    handleClose,
    handleAddNeProduct,
    handleSetFormState,
  } = useAddNewProduct();
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
              <Form.Label htmlFor="name">Product Name</Form.Label>
              <Form.Control
                name="name"
                onChange={handleSetFormState}
                type="text"
                placeholder="Enter product name"
              />
              <Form.Text id="name" className="text-muted">
                Name of your Product
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                type="textarea"
                name="description"
                onChange={handleSetFormState}
                placeholder="Enter product description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="allergen_info">Allergen info</Form.Label>
              <Form.Control
                type="textarea"
                name="allergen_info"
                onChange={handleSetFormState}
                placeholder="Enter product allergen info"
              />
            </Form.Group>

            <Button
              disabled={loading}
              size="lg"
              variant="primary"
              type="submit"
            >
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
          <p className="error">{errorState}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewProductModal;
