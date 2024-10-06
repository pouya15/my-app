'use client';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  console.log(products);
  

  return (
    <>
        
    </>
)
}

export default HomePage