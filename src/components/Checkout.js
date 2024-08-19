import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import './Checkout.css';

const Checkout = ({ cartItems }) => {

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container className="checkout-container">
      <h1 className="text-center mb-4">Checkout</h1>
      {cartItems.length > 0 ? (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imageUrl} alt={item.title} className="img-fluid checkout-img" />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end">
            <h3>Total: ${calculateTotal()}</h3>
            <Button variant="success" className="mt-3">
              Place Order
            </Button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};

export default Checkout;
