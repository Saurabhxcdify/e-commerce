import  { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from './Product';
import SearchBar from "./SearchBar";


const Electronics = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "electronics" 
    );
  });

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
            <SearchBar /> {/* Adjust width as needed */}
          </div>
        </div>
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Electronics Items</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;
