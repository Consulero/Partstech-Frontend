import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";
import { RxCross2 } from "react-icons/rx";
const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.partId === item.partId
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.partId === item.partId
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  return (
    <div className="flex mb-4 p-4 border-b last:border-none">
      <div className="relative group w-24 h-24">
        {item.images?.length > 0 && (
          <img
            src={item.images[0].preview}
            alt={item.partName}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
            onClick={() => setIsPreviewOpen(true)}
          />
        )}
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-l font-semibold text-gray-800 mb-1">{item.partName}</h2>
        {item.attributes.map((ele, index) => (
          <div className="flex text-sm text-gray-600" key={index}>
            <p className="font-medium">{ele.label}:</p>
            <p className="ml-1">{ele.value}</p>
          </div>
        ))}
      </div>
      <div className="ml-auto text-right">
        <p className="text-lg font-bold text-gray-700">${item.price}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded-lg mr-2 px-3 py-1 w-20 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddToCart}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition text-sm"
        >
          Add to Cart
        </button>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[80%] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
              onClick={() => setIsPreviewOpen(false)}
            >
              <RxCross2 className="w-6 h-6" />
            </button>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Image Preview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {item.images.map((img, index) => (
                <img
                  key={index}
                  src={img.preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
