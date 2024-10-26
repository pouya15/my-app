"use client";
import React, { useEffect, useState } from "react";
import Card from "@/ui/components/card";
import { Grid2, TextField } from "@mui/material";
import ProductContext from "@/ui/components/Contexts/productContext";
import CategorySelectorr from "@/ui/components/categorySelector";
import SearchBox from "@/ui/components/searchBox";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
        const categoriesResponse = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Grid2 container>
          <CategorySelectorr
            onCategoryChange={handleCategoryChange}
            categories={categories}
          />
       

           <TextField
            id="outlined-search"
            label="Search products..."
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{mx:2}}
          /> 

          {/* <SearchBox onChange={handleSearchChange}/> */}

          <Card items={filteredProducts} />
        </Grid2>
      </ProductContext.Provider>
    </>
  );
};

export default HomePage;
