import React from 'react'
import { useParams } from 'react-router'

export const ProductDetail = () => {
  const {id} = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product id: {id}</p>
    </div>
  )
}
