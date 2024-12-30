import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="h-full flex flex-col p-3">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="mb-2 p-4 border-b bg-white">
            <h2 className="font-semibold">{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <div className="flex justify-between items-center">
              Price per item:
              <p className="text-lg font-bold text-gray-700">{item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img src="/images/cart.png" className="h-32 w-32" alt="cart" />
          <p className="font-semibold text-gray-600">Your cart is empty</p>
          <p className="font-semibold text-gray-600 text-sm">
            Add items to the cart to build an order.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
