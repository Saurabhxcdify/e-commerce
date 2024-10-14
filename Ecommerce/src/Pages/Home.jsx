import  { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../Components/Product';
import SearchBar from "../Components/SearchBar";

const Home = () => {
  const [search, setSearch] = useState(""); 
  const { products } = useContext(ProductContext);

  // Filter products by category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "electronics" ||
      item.category === "jewelery"||
      item.category ==="women's clothing"
    );
  });

  // Filter products based on the search term
  const filteredSearchProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <div className="mb-4"> 
            <h1>Home</h1>
          </div>
          {/* Centered SearchBar */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md"> {/* Adjust max width as needed */}
              <SearchBar setSearch={setSearch} /> {/* Adjust width as needed */}
            </div>
          </div>
          <h1 className="text-3xl font-semibold mb-10">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {filteredSearchProducts.map((product) => {
              return (
                <Product product={product} key={product.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
