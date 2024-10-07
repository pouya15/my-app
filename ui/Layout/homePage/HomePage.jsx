
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <><ul>
      {products.map((product) => 
       <li> {product.title}</li>
      )}
      </ul>
    </>
  );
};

export default HomePage;
