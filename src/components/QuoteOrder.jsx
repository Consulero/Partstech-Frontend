import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import PartDetails from "./PartDetails";
import { checkPartavailability } from "../api";
import { toast } from "react-toastify";
import Loader from "./Loader";

const QuoteOder = ({ orderData, index, isOrderPlaced }) => {
  const [order, setOrder] = useState(orderData);
  const [loader, setLoader] = useState(false);

  const refreshQty = async (order, index) => {
    try {
      setLoader(true);
      const result = await checkPartavailability(order);

      if (result.status === 200) {
        setOrder({
          ...order,
          parts: order.parts.map((part) => {
            const updatedPart = result.data.parts?.find(
              (updated) => updated.orderItemId === part.orderItemId
            );
            return updatedPart
              ? {
                  ...part,
                  updatedData: {
                    availability: updatedPart.availability,
                    backOrder: updatedPart.availability,
                    price: updatedPart.price,
                  },
                }
              : part;
          }),
          updatedData: {
            totalDiscount: result.data.totalDiscount,
            totalPrice: result.data.totalPrice,
            delivery: result.data.delivery,
          },
        });
      } else {
        toast.error("Couldn't check availability");
      }
    } catch (err) {
      toast.error("Failed to check availability");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div key={index} className="border rounded-md p-4 mb-4 bg-white shadow-sm">
      <div className="flex justify-between items-center text-gray-800 border-b pb-2 mb-4">
        {isOrderPlaced === false && (
          <button
            className="flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-gray-500 text-white hover:scale-105 transform transition-all duration-200"
            onClick={() => refreshQty(order, index)}
            disabled={loader}
          >
            Check Availability
            {loader && <Loader />}
          </button>
        )}
        <h2 className="text-lg font-bold">
          {order.supplier.name.toUpperCase()}
        </h2>

        <div className="text-right">
          <p className="text-blue-400 text-sm">PO: {order.poNumber}</p>
          <div className="flex items-center">
            <FaCarAlt className="mt-1 mr-2" />
            <p className="font-semibold text-sm">
              {order.parts[0].vehicleName || "N/A"}
            </p>
          </div>
        </div>
      </div>
      {order.parts.map((part, index) => (
        <PartDetails
          key={`part-${index}`}
          part={part}
          storeName={order.store.name}
        />
      ))}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-md shadow-sm text-sm">
        <div className="flex flex-wrap sm:gap-6 gap-4 mt-2 sm:mt-0">
          <div className="flex-col">
            <p className="font-medium text-gray-700">
              <span className="text-blue-400">Delivery Charge:</span> $
              {order?.delivery?.name}
            </p>
            {order?.updatedData?.delivery && (
              <p className="text-xs text-gray-500">
                Updated Charge: ${order.updatedData.delivery.name}
              </p>
            )}
          </div>

          <div className="flex-col">
            <p className="font-medium text-gray-700">
              <span className="text-blue-400">Delivery Charge:</span> $
              {order?.delivery?.price?.toFixed(2) || "0.00"}
            </p>
            {order?.updatedData?.delivery && (
              <p className="text-xs text-gray-500">
                Updated Charge: ${order.updatedData.delivery.price.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex-col">
            <p className="font-medium text-gray-700">
              <span className="text-blue-400">Total Price:</span> $
              {order.totalPrice.toFixed(2)}
            </p>

            {order?.updatedData && (
              <p className="text-xs text-gray-500">
                Updated Total Price: ${order.updatedData.totalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex-col">
            <p className="font-medium text-gray-700">
              <span className="text-blue-400">Total Discount:</span> $
              {order.totalDiscount.toFixed(2)}
            </p>

            {order?.updatedData && (
              <p className="text-xs text-gray-500">
                Updated Total Discount: $
                {order.updatedData.totalDiscount.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteOder;
