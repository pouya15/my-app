"use client";
import { Select, MenuItem } from "@mui/material";

const CategorySelectorr = ({ categories, onCategoryChange }) => {
  return (
    <Select
    container
      displayEmpty
      sx={{
        marginBottom: 2,
        boxShadow: 4,

        backgroundColor: "white",
        "&:hover": {
          boxShadow: 8,
        },
      }}
      onChange={(e) => onCategoryChange(e.target.value)}
      defaultValue=""
    >
      <MenuItem value=""> All Categories</MenuItem>

      {categories.map((category) => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CategorySelectorr;
