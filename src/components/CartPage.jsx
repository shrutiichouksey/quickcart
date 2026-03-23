import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {
// Calculate total
const calculateTotal = () => {
return cart.reduce((total, item) => {
return total + item.price * item.quantity;
}, 0);
};

return ( <div className="cart-page"> <h1>Shopping Cart</h1>

```
  {cart.length === 0 ? (
    <div className="empty-cart-page">
      <p>Your cart is empty</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  ) : (
    <div className="cart-page-content">

      {/* Cart Items */}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          <div className="quantity-controls">
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>

          <p>Total: ₹{item.price * item.quantity}</p>

          <button 
            className="remove-btn"
            onClick={() => onRemoveItem(item.id)}
          >
            Remove
          </button>

        </div>
      ))}

      {/* Total Section */}
      <div className="cart-total">
        <h2>Grand Total: ₹{calculateTotal()}</h2>
      </div>

      {/* Actions */}
      <div className="cart-actions">
        <Link to="/">Continue Shopping</Link>
        <button className="checkout-btn">Checkout</button>
      </div>

    </div>
  )}
</div>


);
}

export default CartPage;
