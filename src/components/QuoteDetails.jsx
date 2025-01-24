import React from "react";
import QuoteOder from "./QuoteOrder";

const QuoteDetails = ({ data }) => {
  const orderData = data;

  if (!data) {
    return <p className="text-gray-500 text-center mt-4">No data available</p>;
  }

  return (
    <div className="p-4">
      <div className="max-h-[400px] overflow-y-scroll space-y-4">
        {orderData.orders.map((order, index) => {
          return <QuoteOder orderData={order} index={index} />;
        })}
      </div>
    </div>
  );
};

export default QuoteDetails;
