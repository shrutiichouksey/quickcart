import React from 'react';
import ProductList from '../ProductList';
import { useCart } from '../context/CartContext'; // ✅ added

function HomePage({ products, searchTerm }) {

const { addToCart } = useCart(); // ✅ use context

// Filter products based on searchTerm
const filtered = products.filter(p =>
p.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return ( <div className="home-page">


  {/* Show filtered count if searching */}
  {searchTerm && (
    <p>
      Showing {filtered.length} result(s) for "{searchTerm}"
    </p>
  )}

  {/* Show "No products found" if empty */}
  {filtered.length === 0 ? (
    <p>No products found</p>
  ) : (
    /* Render ProductList */
    <ProductList 
      products={filtered} 
      onAddToCart={addToCart}   // ✅ replaced
    />
  )}

</div>


);
}

export default HomePage;
