import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";
import { MdDelete, MdOutlineShoppingCart } from "react-icons/md";
import { vehicleState } from "../atoms/vehicleInfo";
import { useRecoilValue } from "recoil";
import { reqQuotes } from "../api";
import { toast } from "react-toastify";
import _ from "lodash";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const vehicleInfo = useRecoilValue(vehicleState);

  const handleDeleteFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleEditFromCart = (qty, id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: qty };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleQuotation = async () => {
    try {
      if (_.isEmpty(vehicleInfo)) {
        toast.error("Please select a vehicle");
        return;
      }
      const partIds = cartItems?.map((x) => x.id);
      const data = await reqQuotes(vehicleInfo, partIds);
      console.log(data);
    } catch (e) {
      console.error(e);
      toast.error("Could not req for quote");
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <MdOutlineShoppingCart />
        <p className="ml-1">Cart Section</p>
      </div>
      <div className="h-[345px] flex flex-col border overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="p-4 border-b bg-white text-sm">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{item.title}</h2>
                <button onClick={() => handleDeleteFromCart(item.id)}>
                  <MdDelete className="text-red-500 hover:text-red-600" />
                </button>
              </div>
              <p>
                Quantity:{"  "}
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleEditFromCart(Number(e.target.value), item.id)
                  }
                  className="border rounded px-2 py-1 w-14 mt-2 mr-2 placeholder:text-sm"
                  placeholder="Qty"
                />
              </p>
              <div className="flex justify-between items-center text-s">
                Price per item:
                <p className="text-gray-700">${item.price}</p>
              </div>
              <div className="flex font-semibold justify-between items-center">
                Price :
                <p className="text-l font-bold text-gray-700">
                  ${item.quantity * item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <img src="/images/cart.png" className="h-32 w-32" alt="cart" />
            <p className="font-semibold text-gray-600">Your cart is empty</p>
            <p className="font-semibold text-gray-600 text-sm">
              Add items build an order.
            </p>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="h-[145px] flex flex-col border shadow-md p-3 bg-white">
          <div className="text-sm flex flex-row justify-between items-center m-1">
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items in
            Total
            <p className="font-semibold text-lg">
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <textarea
            name="address"
            className="w-full border border-gray-300 rounded-lg p-2 mb-2 text-sm"
            placeholder="Enter your delivery address"
            rows={2}
          />
          <button
            className="bg-blue-500 text-white px-2 py-2 rounded text-sm shadow-2xl"
            onClick={handleQuotation}
          >
            Send For Quotation
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
