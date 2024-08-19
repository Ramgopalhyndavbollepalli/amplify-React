// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './ProductDetails.css';
import bannerKids from './Assets/product_24.png';
import bannerKids1 from './Assets/product_26.png';
import bannerKids2 from './Assets/product_28.png';
import bannerKids3 from './Assets/product_29.png';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mock product data, normally you would fetch this from an API or context
    const products = [
      { id: 1, title: "Product 1", description: "Description 1", price: 50, imageUrl: bannerKids },
      { id: 2, title: "Product 2", description: "Description 2", price: 75, imageUrl: bannerKids1 },
      { id: 3, title: "Product 3", description: "Description 3", price: 100, imageUrl: bannerKids2 },
      { id: 4, title: "Product 4", description: "Description 4", price: 125, imageUrl: bannerKids3 },
    ];

    const selectedProduct = products.find(prod => prod.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const totalPrice = product.price * quantity;

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate('/cart');
  };

  const handleCheckout = () => {
    addToCart({ ...product, quantity });
    navigate('/checkout');
  };

  return (
    <Container className="product-details">
      <Row>
        <Col md={6}>
          <img src={product.imageUrl} alt={product.title} className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-between">
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>Price per unit: ${product.price}</h3>
            <h3>Total Price: ${totalPrice}</h3>
          </div>
          <div className="quantity-container">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="quantity-input"
            />
          </div>
          <div className="button-group mt-4">
            <Button variant="primary" onClick={handleAddToCart} className="me-2">
              Add to Cart
            </Button>
            <Button variant="success" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
