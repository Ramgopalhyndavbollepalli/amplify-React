// src/components/ProductList.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Import custom CSS for additional styling
import bannerKids from './Assets/product_24.png';
import bannerKids1 from './Assets/product_26.png';
import bannerKids2 from './Assets/product_28.png';
import bannerKids3 from './Assets/product_29.png';

const ProductList = ({ addToCart }) => {
    const products = [
      { id: 1, title: "Product 1", description: "Description 1", price: 50, imageUrl: bannerKids },
      { id: 2, title: "Product 2", description: "Description 2", price: 75, imageUrl: bannerKids1 },
      { id: 3, title: "Product 3", description: "Description 3", price: 100, imageUrl: bannerKids2 },
      { id: 4, title: "Product 4", description: "Description 4", price: 125, imageUrl: bannerKids3 },
    ];

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card className="h-100 custom-card">
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>${product.price}</Card.Text>
                                <Link to={`/products/${product.id}`}>
                                    <Button variant="primary" className="me-2">View Details</Button>
                                </Link>
                                <Button
                                    variant="success"
                                    onClick={() => addToCart({ ...product, quantity: 1 })}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
