import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{background:'#fff',padding:'1.5rem 3rem',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
      <Link to="/" style={{textDecoration:'none',color:'#333',fontSize:'2rem',fontWeight:'bold'}}>HomeDecor Store</Link>
    </nav>
  )
}