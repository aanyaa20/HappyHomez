import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}