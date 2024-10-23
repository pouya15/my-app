"use client";
import { Select, MenuItem } from "@mui/material";
import { useContext } from "react";
import ProductContext from "./Contexts/productContext";

const CategorySelectorr = ({
  // categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const { products } = useContext(ProductContext);

  return (
    <Select
      value={selectedCategory}
      onChange={onCategoryChange}
      displayEmpty
      sx={{ marginBottom: 2 }}
    >
      <MenuItem value="">
        <em>All Categories</em>
      </MenuItem>

      {products?.map((category, index) => (
        <MenuItem key={index} value={category}>
          {category}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CategorySelectorr;
