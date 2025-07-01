import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  return (
    <div style={{maxWidth:'1000px',margin:'3rem auto',display:'flex',gap:'2rem',flexWrap:'wrap',alignItems:'center',padding:'0 2rem'}}>
      <img src={product.image} alt={product.name} style={{width:'100%',maxWidth:'500px',borderRadius:'8px'}} />
      <div style={{flex:1}}>
        <h1>{product.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat.</p>
        <h2>{product.price}</h2>
        <button style={{marginTop:'1rem',padding:'0.8rem 1.5rem',background:'#0077cc',color:'#fff',border:'none',borderRadius:'6px'}}>Add to Cart</button>
      </div>
    </div>
  )
}