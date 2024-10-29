"use client";
import React, { useEffect, useState } from "react";
import Card from "@/ui/components/card";
import { Grid2, TextField } from "@mui/material";
import ProductContext from "@/ui/components/Contexts/productContext";
import CategorySelectorr from "@/ui/components/categorySelector";
import SkeletonCard from "@/ui/components/Skeleton/skeletonCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
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
          <Grid2 item>
            <CategorySelectorr
              onCategoryChange={handleCategoryChange}
              categories={categories}
            />
          </Grid2>
          <TextField
            id="outlined-search"
            label="Search products..."
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ mx: 2 }}
          />

          {/* <SearchBox onChange={handleSearchChange}/> */}
        </Grid2>
        <Grid2 container>
          {/* <Card items={filteredProducts} /> */}

          {loading
            ? Array.from(new Array(12)).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : filteredProducts.map((product) => (
                <Card key={product.id} item={product} loading={false} />
              ))}
        </Grid2>
      </ProductContext.Provider>
    </>
  );
};

export default HomePage;
