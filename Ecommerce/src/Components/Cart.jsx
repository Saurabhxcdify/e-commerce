import  { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, total, placeOrder } = useContext(CartContext); // Access total from CartContext

  return (
    <div className="w-full max-w-[600px] mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Display Total Price and Place Order Button */}
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">
          Total: ${parseFloat(total).toFixed(2)} {/* Display total price */}
        </h3>
        <button
          onClick={placeOrder} // Handle placing the order
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Place Order (${parseFloat(total).toFixed(2)}) {/* Show total in button */}
        </button>
      </div>
    </div>
  );
};

export default Cart;
