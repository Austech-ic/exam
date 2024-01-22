"use client"

import React from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ProductPage from '../../../Components/SectionTwo/[category]/page'




const Product = () => {
  const {productId} = useParams();

  

  if (!productId) {
    // Handle loading or error state
    return null;
  
  }
  return (
    
    <div>
      
      <ProductPage id={productId}  />
    </div>
  )
}

export default Product