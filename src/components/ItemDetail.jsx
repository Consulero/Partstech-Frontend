import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ItemDetail = ({ index, item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price, quantity }));
  };

  return (
    <div className="flex justify-between items-center mb-4 p-4 border-b last:border-none">
      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-gray-700">{item.price}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-2 py-1 w-16 mt-2 mr-2 placeholder:text-sm"
          placeholder="Qty"
        />
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-4 py-2 rounded mt-2 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;