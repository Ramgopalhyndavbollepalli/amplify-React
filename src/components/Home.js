// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure this import is present
import './Home.css'; // Import custom CSS for additional styling

// Import images from ProductList
import bannerKids from './Assets/product_24.png';
import bannerKids1 from './Assets/product_26.png';
import bannerKids2 from './Assets/product_28.png';
import bannerKids3 from './Assets/product_29.png';

const Home = () => {
  return (
    <Container fluid className="home-container">
      {/* Header Section */}
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="home-title">Welcome to Our E-Commerce Store</h1>
          <p className="home-subtitle">Discover our wide range of products at the best prices.</p>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="mb-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bannerKids}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-title">Latest Gadgets</h3>
                <p className="carousel-text">Check out the latest in technology and innovation.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bannerKids1}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-title">Fashion Trends</h3>
                <p className="carousel-text">Stay stylish with the newest fashion trends.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bannerKids2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="carousel-title">Exclusive Offers</h3>
                <p className="carousel-text">Don't miss out on our exclusive deals and discounts.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Featured Products Section */}
      <Row className="text-center">
        <Col md={4}>
          <Card className="mb-4 custom-card">
            <Card.Img variant="top" src={bannerKids} />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                High-quality product at an affordable price.
              </Card.Text>
              <Card.Text>$50</Card.Text>
              <Link to="/products/1">
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 custom-card">
            <Card.Img variant="top" src={bannerKids1} />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                Discover the latest features and benefits.
              </Card.Text>
              <Card.Text>$75</Card.Text>
              <Link to="/products/2">
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 custom-card">
            <Card.Img variant="top" src={bannerKids2} />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                Best deals on top-selling products.
              </Card.Text>
              <Card.Text>$100</Card.Text>
              <Link to="/products/3">
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
