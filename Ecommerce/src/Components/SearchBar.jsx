/* eslint-disable react/prop-types */
import  { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const SearchBar = ({ setSearch, onProductSelect }) => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setShowResults(searchTerm.length > 0);
  }, [searchTerm, products]);

  const handleSearchClick = () => {
    setShowResults(true);
  };

  const handleSuggestionClick = (product) => {
    setSearchTerm(product.title);
    setSearch(product.title); // Update the search state in the parent component
    setShowResults(false);
    onProductSelect(product); // Notify the parent component about the selected product
  };

  return (
    <Box sx={{ flex: 2, mx: 3 }}>
      <TextField
        variant="outlined"
        placeholder="Search products..."
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowResults(searchTerm.length > 0)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearchClick}>
                {/* Add an icon here if needed */}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: "300px",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 1,
          boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
        }}
      />

      {showResults && searchTerm.length > 0 && (
        <Box
          component="ul"
          sx={{
            listStyleType: "none",
            padding: 0,
            marginTop: 2,
            maxHeight: "200px",
            overflowY: "auto",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: 1,
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Box component="li" key={product.id}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    width: "100%",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSuggestionClick(product)}
                >
                  {product.title}
                </button>
              </Box>
            ))
          ) : (
            <p>No products found</p>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
