
import { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import {products} from './data/products';
import './styles/App.css';
import CartSidebar from './components/CartSidebar';

function App() {
  // Cart state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(
        cart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Toggle cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Total items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    
    <div className="app">
      <Header 
        cartItemCount={getTotalItems()} 
        toggleCart={toggleCart} 
      />
      
      <main className="main-content">
        <ProductList 
          products={products} 
          addToCart={addToCart} 
        />
      </main>

      <CartSidebar
  isOpen={isCartOpen}
  onClose={toggleCart}
  cart={cart}
  onUpdateQuantity={updateQuantity}
  onRemoveItem={removeFromCart}
/>
    </div>
  );
}

export default App;
