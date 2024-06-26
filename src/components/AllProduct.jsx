import {
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetAllProduct from "../hooks/useGetAllProduct";

const ProductCardLoadingPlaceHolder = () => {
  return [1, 2, 3, 4, 5, 6].map((each) => (
    <Col key={each} xs={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img
          className="object-fit-contain"
          variant="top"
          src="https://placehold.co/100"
        />
        <Card.Body>
          <Placeholder bg="light" as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder bg="light" as={Card.Text} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  ));
};
const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img
        className="object-fit-contain"
        variant="top"
        src={product.productImage}
      />
      <Card.Body>
        <Link to={`products/${product.id}`}>
          <Card.Title className="text-truncate" as="h3">
            {product.name}
          </Card.Title>
        </Link>
        <Card.Text className="text-truncate lead">
          {product.description}
        </Card.Text>
        <Card.Text
          as="h4"
          className="text-success d-flex justify-content-between align-items-center"
        >
          <p>₹{product.selling_price}</p>
          {/* <Button size="sm">+</Button> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
const AllProduct = () => {
  const { products, isLoading } = useGetAllProduct();
  return (
    <Container>
      <Row>
        {isLoading !== true ? (
          products?.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <ProductCardLoadingPlaceHolder />
        )}
      </Row>
    </Container>
  );
};

export default AllProduct;
