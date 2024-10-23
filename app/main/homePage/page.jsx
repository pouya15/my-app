"use client";
import React, { useEffect, useState } from "react";
import Card from "@/ui/components/card";
import { Grid2 } from "@mui/material";
import CategorySelector from "../categorySelector/page";
import ProductContext from "@/ui/components/Contexts/productContext";
import CategorySelectorr from "@/ui/components/categorySelector";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Grid2 container>
          <CategorySelectorr onCategoryChange={handleCategoryChange} />
          <Card items={filteredProducts} />
        </Grid2>
      </ProductContext.Provider>
    </>
  );
};

export default HomePage;
