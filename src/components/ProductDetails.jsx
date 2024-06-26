import { Link } from "react-router-dom";
import {
  Accordion,
  Card,
  Col,
  Container,
  Image,
  Placeholder,
  Row,
} from "react-bootstrap";
import useProductDetails from "../hooks/useProductDetails";

const ProductDetailsLoadingPlaceHolder = () => {
  return (
    <Row>
      <Col lg={6} className="mb-4">
        <Card.Img
          className="object-fit-contain"
          variant="top"
          src="https://placehold.co/100"
        />
      </Col>
      <Col lg={6} className="mb-4">
        <div className="d-grid h-100 gap-4">
          <Placeholder lg={6} />
          <Placeholder lg={6} />
          <Placeholder />
          <Placeholder />

          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </Col>
    </Row>
  );
};

const ProductDetails = () => {
  const { accordianArray, product, isLoading } = useProductDetails();
  return (
    <Container>
      <Link to="/">
        <p>← Go back</p>
      </Link>

      <Row>
        {isLoading !== true ? (
          <>
            <Col lg={6} className="mb-4">
              <Image fluid src={product?.productImage} alt={product?.name} />
            </Col>
            <Col lg={6}>
              <h2>{product?.name}</h2>
              <p>
                <strong>Cost Price:</strong> ${product?.cost_price}
              </p>
              <p>
                <strong>Selling Price:</strong> ${product?.selling_price}
              </p>
              <Accordion alwaysOpen>
                {accordianArray?.map((each) => (
                  <Accordion.Item key={each?.name} eventKey={each?.name}>
                    <Accordion.Header>{each?.name}</Accordion.Header>
                    <Accordion.Body>{each?.value}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </>
        ) : (
          <ProductDetailsLoadingPlaceHolder />
        )}
      </Row>
    </Container>
  );
};

export default ProductDetails;
