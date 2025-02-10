import React from "react";
import moment from "moment";
import { setOrderDetails } from "../api";
import { toast } from "react-toastify";

const OrderItem = ({ data }) => {
  const updatePartsStatus = (partId, orderId, psOrderId, status) => {
    console.log(
      "Part ID:",
      partId,
      "OrderID:",
      orderId,
      psOrderId,
      "Status:",
      status
    );
  };

  const updateOrderData = async (orderId, psOrderId) => {
    try {
      const result = await setOrderDetails({ orderId, psOrderId });
      if (result.status === 200) {
        toast.success("Order updated successfully");
        window.location.reload();
      }
    } catch (err) {
      toast.error("Order couldn't updat");
    }
  };

  const statusColors = {
    "In Progress": "text-yellow-500 border-yellow-500",
    Completed: "text-green-500 border border-green-500 rounded-md p-1 text-xs",
    Returned: "text-blue-500",
    Failed: "text-red-500",
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg mx-auto mb-6 bg-white">
      <div className="mb-2 flex justify-between items-center">
        <p className="text-lg text-gray-500">#{data.id}</p>
        <p className="text-sm text-gray-500">
          Created At:{" "}
          <span className="font-semibold text-gray-700">
            {" "}
            {moment(data.createdAt).format("DD-MM-YYYY hh:mm A")}
          </span>
        </p>
      </div>

      {data.orders.map((orderItem) => (
        <div
          key={orderItem.id}
          className="mb-4 p-4 border rounded-md bg-gray-50 shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-800">
                Order ID: {orderItem.id}
              </h3>
              <a
                href={orderItem.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm ml-2"
              >
                view invoice
              </a>
            </div>
            <p className={statusColors[orderItem.status] || "text-gray-500"}>
              {orderItem.status || ""}
            </p>
            <p className="text-sm text-gray-600">
              Supplier:{" "}
              <span className="font-semibold text-gray-800">
                {orderItem.supplier.name}
              </span>
            </p>{" "}
            {orderItem.paymentDate && (
              <span className="font-semibold text-gray-700 text-sm">
                {" "}
                Purchased At:{" "}
                {moment(orderItem.paymentDate).format("DD-MM-YYYYhh:mm A")}
              </span>
            )}
            <button
              className="flex items-center gap-2 px-3 py-1 text-xs rounded-md bg-gray-500 text-white hover:scale-105 transform transition-all duration-200"
              onClick={() => updateOrderData(data.id, orderItem.id)}
            >
              Refresh
            </button>
          </div>

          <div className="space-y-4">
            {orderItem.parts.map((part) => (
              <div
                key={part.partId}
                className="flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm"
              >
                <div className="w-96 flex items-center space-x-4">
                  <img
                    src={part.imageUrl}
                    alt={part.partName}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <p className="text-gray-800 font-medium text-sm">
                      {part.partName}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Part ID: {part.partId}
                    </p>
                  </div>
                </div>
                {part.quantityDelivered ||
                  (part.quantityDelivered === 0 && (
                    <div className="text-sm">
                      Delivered Qty: {part.quantityDelivered}
                    </div>
                  ))}

                {part.deliveryStatus && (
                  <div className="text-sm">Status : {part.deliveryStatus}</div>
                )}
                <div className="text-sm">
                  Item Recieved:{" "}
                  <select
                    onChange={(e) =>
                      updatePartsStatus(
                        part.partId,
                        data.id,
                        orderItem.id,
                        e.target.value
                      )
                    }
                    value={part.recievedItem}
                    className="border border-gray-300 p-1 rounded-md text-xs"
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>

                <div className="text-right">
                  <p className="text-gray-800 font-medium">
                    Qty: {part.quantity}
                  </p>
                  <p className="text-green-600 font-semibold">
                    Price: ${part.price.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderItem;
