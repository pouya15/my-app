// import Card from "@/ui/components/card";
// import CategorySelectorr from "@/ui/components/categorySelector";
// import ProductContext from "@/ui/components/Contexts/productContext";
// import { Box, Container, Typography } from "@mui/material";
// import React, { useContext, useState } from "react";

// const CategorySelector = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const { products } = useContext(ProductContext);

//   const categories = [...new Set(products.map((product) => product.category))];

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };
//   const filteredProducts = selectedCategory
//     ? products.filter((product) => product.category === selectedCategory)
//     : products;


//   return (
//     <Container>
//       <Typography variant="h4" sx={{ marginTop: 2 }}>
//         Product List
//       </Typography>
//       <CategorySelectorr
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />
//       {filteredProducts.map((product, index) => (
//         <Card key={index}  />
//       ))}
//     </Container>
//   );
// };

// export default CategorySelector;
