import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate payment processing (you can integrate payment gateways here)
    setTimeout(() => {
      alert("Payment Successful! Thank you for your purchase.");
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };

  const handleCancel = () => {
    // You can add logic here to cancel or return to the cart page.
    alert("Checkout cancelled. You can continue shopping.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full md:w-1/2 mx-auto text-center">
      <h1 className="text-2xl font-bold mt-10 ">Your Orders</h1>
        {cart.length === 0 ? (
          <div className="text-center py-4">Your cart is empty. Add items to checkout.</div>
        ) : (
          <>
            {/* Cart Items */}  
            <div className="flex flex-col gap-y-4 mb-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Subtotal */}
            <div className="text-lg font-semibold mb-6">
              <span className="mr-2">Subtotal:</span> ${parseFloat(total).toFixed(2)}
            </div>

            {/* Checkout Actions */}
            <div className="flex gap-4">
              <button
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Confirm & Pay"}
              </button>

              <button
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                onClick={handleCancel}
                disabled={isProcessing}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
