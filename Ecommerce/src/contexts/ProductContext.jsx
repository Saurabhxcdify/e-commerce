/* eslint-disable react/prop-types */
import  { createContext, useState, useEffect } from "react";
import axios from "axios"; // Import Axios

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); 
        console.log("response is",response)// Set products data
      } catch (err) {
        setError(err); // Set error if the request fails
        console.error(err); // Log the error for debugging
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
