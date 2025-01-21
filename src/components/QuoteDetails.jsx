import React from "react";
import { FaCarAlt, FaInfoCircle } from "react-icons/fa";

const PartDetails = ({ part, storeName }) => (
  <div className="flex items-center justify-between mb-4 border rounded-md p-3 shadow-sm">
    <div className="flex items-center">
      <img
        className="w-20 h-20 object-contain border rounded-md mr-4"
        src={part.imageUrl}
        alt={part.partName || "Part Image"}
      />
      <div>
        <p className="font-medium text-gray-800">
          {part.partName || "Part Name"}
        </p>
        <p className="text-sm text-gray-500"># {part.partId || "N/A"}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-green-600 font-semibold mb-1">
        In Stock ({part.quantity || "N/A"})
      </p>
      <p className="text-sm text-gray-500">Store: {storeName || "Unknown"}</p>
    </div>
    <div className="flex items-center">
      <p className="font-bold text-gray-800">
        ${part.price?.price.toFixed(2) || "0.00"}
      </p>
      <p className="text-sm ml-1">x {part.quantity}</p>
      <div className="ml-2 relative group">
        <FaInfoCircle className="text-blue-500 cursor-pointer" />
        <div className="absolute top-full right-0 mt-2 w-64 p-4 bg-white border rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-10">
          <h3 className="font-bold text-sm text-gray-800 mb-2">Attributes</h3>
          <ul className="text-xs text-gray-600">
            {part.taxonomy &&
              Object.entries(part.taxonomy).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="font-medium">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const OrderDetails = ({ order }) => (
  <div className="border rounded-md p-4 mb-4 bg-white shadow-sm">
    <div className="flex justify-between items-center text-gray-800 border-b pb-2 mb-4">
      <h2 className="text-lg font-bold">{order.supplier.name.toUpperCase()}</h2>
      <div className="text-right">
        <p className="text-blue-400 text-sm">PO: {order.poNumber}</p>
        <div className="flex items-center">
          <FaCarAlt className="mt-1 mr-2" />
          <p className="font-semibold">{order.parts[0].vehicleName || "N/A"}</p>
        </div>
      </div>
    </div>
    {order.parts.map((part, index) => (
      <PartDetails key={index} part={part} storeName={order.store.name} />
    ))}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-md shadow-sm text-sm">
      <div className="flex flex-wrap sm:gap-6 gap-4 mt-2 sm:mt-0">
        <p className="font-medium text-gray-700">
          <span className="text-blue-400">Delivery:</span>
          {order.delivery.name}
        </p>

        <p className="font-medium text-gray-700">
          <span className="text-blue-400">Delivery Charge:</span> $
          {order.delivery.price.toFixed(2)}
        </p>

        <p className="font-medium text-gray-700">
          <span className="text-blue-400">Total Price:</span> $
          {order.totalPrice.toFixed(2)}
        </p>
        <p className="font-medium text-gray-700">
          <span className="text-blue-400">Total Discount:</span> $
          {order.totalDiscount.toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

const QuoteDetails = ({ data }) => {
  if (!data) {
    return <p className="text-gray-500 text-center mt-4">No data available</p>;
  }

  const orderData = JSON.parse(data);
  console.log(orderData.orders);

  return (
    <div className="p-4">
      <div className="max-h-[400px] overflow-y-scroll space-y-4">
        {orderData.orders.map((order, index) => (
          <OrderDetails key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default QuoteDetails;
