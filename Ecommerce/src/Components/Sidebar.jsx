import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    handleClose();  // Close the sidebar when the checkout button is clicked
    navigate("/checkout");  // Navigate to the checkout page
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-[70px] h-[calc(100vh-70px)] shadow-2xl transition-all duration-300 z-30 px-4 lg:px-[35px] 
      md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] flex flex-col justify-between`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-grow overflow-y-auto border-b">
        {cart.length === 0 ? (
          <div className="text-center py-4">Your cart is empty.</div>
        ) : (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        )}
      </div>

      {/* Subtotal and Actions */}
      <div className="py-4">
        <div className="flex w-full justify-between items-center mb-4">
          {/* Subtotal */}
          <div className="font-semibold text-lg">
            <span className="mr-2">Subtotal:</span> ${parseFloat(total).toFixed(2)}
          </div>
          {/* Clear Cart Button */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>

        {/* View Cart Button */}
        <Link
          to="/cart"
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium mb-2"
        >
          View Cart
        </Link>

        {/* Checkout Button */}
        <button
          onClick={handleCheckoutClick}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
