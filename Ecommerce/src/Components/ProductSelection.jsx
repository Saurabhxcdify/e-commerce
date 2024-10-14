import  { useState } from "react";
import SearchBar from "./SearchBar"; // Import your SearchBar component
import Box from "@mui/material/Box";

const ProductSelection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product); // Update the selected product state
  };

  return (
    <Box>
      <SearchBar onSelectProduct={handleSelectProduct} />

      {/* Display the selected product */}
      {selectedProduct && (
        <Box sx={{ marginTop: 2 }}>
          <h3>Selected Product:</h3>
          <p>{selectedProduct.title}</p>
          {/* You can add more product details here */}
        </Box>
      )}
    </Box>
  );
};

export default ProductSelection;
