import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";
import { getRequest } from "../axios";
import { Link } from "react-router-dom";

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
  console.log("products", product);
  const goToProductDetailsPage = () => {};
  return (
    <Card>
      <Link to={`products/${product.id}`}>
        <Card.Img
          className="object-fit-contain"
          variant="top"
          src={product.productImage}
        />
        <Card.Body>
          <Card.Title className="text-truncate" as="h3">
            {product.name}
          </Card.Title>
          <Card.Text className="text-truncate lead">
            {product.description}
          </Card.Text>
          <Card.Text
            as="h4"
            className="text-success d-flex justify-content-between align-items-center"
          >
            {/* <strike>{product.cost_price}</strike>  */}{" "}
            {/* <Row className=""> */}
            <p>₹{product.selling_price}</p>
            <Button size="sm">+Add</Button>
            {/* </Row> */}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};
const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRequest("/products")
      .then((products) => {
        console.log(products.data);
        const productSortedBySellingPrice = products?.data?.sort(
          (a, b) => a.selling_price - b.selling_price
        );
        setProducts(productSortedBySellingPrice);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <Container>
      <Row>
        {isLoading !== true ? (
          products.map((product) => (
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
