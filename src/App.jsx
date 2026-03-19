import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import './styles/App.css';
import {products} from './data/product';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
