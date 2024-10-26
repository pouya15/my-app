"use client";
import React, { useEffect, useState } from "react";
import Card from "@/ui/components/card";
import { Grid2 } from "@mui/material";
import ProductContext from "@/ui/components/Contexts/productContext";
import CategorySelectorr from "@/ui/components/categorySelector";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setProducts(json);
      const categoriesResponse = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);
    };

    fetchProducts();
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
          <CategorySelectorr
            onCategoryChange={handleCategoryChange}
            categories={categories}
          />
          <Card items={filteredProducts} />
        </Grid2>
      </ProductContext.Provider>
    </>
  );
};

export default HomePage;
