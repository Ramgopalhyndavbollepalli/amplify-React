import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10) || 1);
    };

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        setQuantity(1); // Reset quantity after adding to cart
    };

    return (
        <Card className="product my-3">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <input
                    type="number"
                    className="form-control mb-2"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                />
                <Card.Text>Total: ${(product.price * quantity).toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;
