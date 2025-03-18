import React, { useState } from "react";
import QuoteOder from "./QuoteOrder";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { placeOrder } from "../api";

const QuoteDetails = ({ data }) => {
  const [loader, setLoader] = useState(false);
  const { orders: orderData, id: orderId, isOrderPlaced, orderType } = data;

  if (!data) {
    return <p className='text-gray-500 text-center mt-4'>No data available</p>;
  }

  const orderParts = async (orders) => {
    try {
      setLoader(true);
      const result = await placeOrder(orders, orderId, orderType);

      if (result.status === 200) {
        toast.success("Order placed successfully");
      } else {
        toast.error("Couldn't place order");
      }
    } catch (err) {
      toast.error("Failed to place order");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className='p-4'>
      <div className='max-h-[400px] overflow-y-scroll space-y-4'>
        {isOrderPlaced === false && (
          <button
            className='flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:scale-105 transform transition-all duration-200'
            onClick={() => orderParts(orderData.orders)}
            disabled={loader}
          >
            Order Parts
            {loader && <Loader />}
          </button>
        )}
        {orderData.orders.map((order, index) => {
          return (
            <QuoteOder
              key={`order-${index}`}
              orderData={order}
              index={index}
              isOrderPlaced={isOrderPlaced}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuoteDetails;
