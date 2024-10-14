/* eslint-disable react/prop-types */
import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Destructure product data
  const { id, image, category, title, price } = product;

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent the click from bubbling up
    addToCart(product, id); // Call addToCart with the product and its id
  };

  const handleClick = () => {
    // Navigate to product detail directly without timeout
    navigate(`/product/${id}`);
  };

  return (
    // Parent container with padding for left-right margins and grid layout
    <div className="p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2 border border-[#e4e4e4] w-[200px] h-[200px] relative overflow-hidden group transition rounded-lg">
          <div className="flex justify-center items-center h-full ">
            {/* Image */}
            <div className="w-[130px] mx-auto flex justify-center items-center ">
              <img
                className="max-h-[160px] transition duration-300 "
                src={image}
                alt={title}
              />
            </div>
          </div>

          {/* Buttons - fixed and always visible */}
          <div className="absolute top-3 right-1 p-2 flex flex-col justify-center items-center gap-y-2">
            <button
              onClick={handleAddToCart} // Call handleAddToCart
              className="flex justify-center items-center text-black w-6 h-6
              bg-gray-200 hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 active:scale-125 rounded-full"
            >
              <BsPlus className="text-3xl" />
            </button>
          </div>

          {/* Category positioned bottom left inside the card */}
          <div
            className="absolute bottom-2 left-2 text-sm capitalize bg-gray-200 rounded-lg p-1 text-gray-500 cursor-pointer"
            onClick={handleClick}
          >
            {category}
          </div>
        </div>

        {/* Title & price outside the card */}
       
      </div>
       {/* Title & price outside the card */}
      <div className="flex flex-col items-center relative overflow-hidden ">
          <h2 className="text-center mb-1 line-clamp-1">{title}</h2>
          <h2 className="font-semibold text-lg">{price}$</h2>
        </div>
    </div>
  );
};

export default Product;
