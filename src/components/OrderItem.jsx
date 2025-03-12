import React, { useState } from "react";
import moment from "moment";
import { addInventoryItems, setOrderDetails } from "../api";
import { toast } from "react-toastify";
import { FiRefreshCcw } from "react-icons/fi";

const OrderItem = ({ data, setReloadTable }) => {
  const [recievedItem, setRecievedItem] = useState(0);

  const updatePartsStatus = async (
    partId,
    orderId,
    psOrderId,
    orderQty,
    storeQty
  ) => {
    try {
      if (recievedItem > orderQty - storeQty) {
        return toast.error("Received quantity exceeds the ordered amount");
      }
      const result = await addInventoryItems({
        orderId,
        psOrderId,
        recievedItem,
        partId,
      });
      if (result.status === 200) {
        toast.success("Parts added to inventory");
        setReloadTable((prev) => !prev);
      } else {
        toast.error("Unable to add parts");
      }
    } catch (err) {
      toast.error("Unable to parts to inventory");
    }
  };

  const updateOrderData = async (orderId, psOrderId) => {
    try {
      const result = await setOrderDetails({ orderId, psOrderId });
      if (result.status === 200) {
        toast.success("Order updated successfully");
        setReloadTable((prev) => !prev);
      }
    } catch (err) {
      toast.error("Order couldn't update");
    }
  };

  const statusColors = {
    "In Progress": "text-yellow-500 border-yellow-500",
    Completed: "text-green-500 border border-green-500 rounded-md p-1 text-xs",
    Returned: "text-blue-500",
    Failed: "text-red-500",
  };

  return (
    <div className='p-4 border rounded-lg shadow-lg mx-auto mb-6 bg-white'>
      <div className='mb-2 flex justify-between items-center'>
        <p className='text-lg text-gray-500'>#{data.id}</p>
        <p className='text-sm text-gray-500'>
          Created At:{" "}
          <span className='font-semibold text-gray-700'>
            {" "}
            {moment(data.createdAt).format("DD-MM-YYYY hh:mm A")}
          </span>
        </p>
      </div>

      {data.orders.map((orderItem) => (
        <div
          key={orderItem.id}
          className='mb-4 p-4 border rounded-md bg-gray-50 shadow-sm'
        >
          <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center space-x-2'>
              <h3 className='text-sm font-semibold text-gray-800'>
                Order ID: {orderItem.id}
              </h3>
              <a
                href={orderItem.orderUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline text-sm ml-2'
              >
                view invoice
              </a>
            </div>
            <p className={statusColors[orderItem.status] || "text-gray-500"}>
              {orderItem.status || ""}
            </p>
            <p className='text-sm text-gray-600'>
              Supplier:{" "}
              <span className='font-semibold text-gray-800'>
                {orderItem.supplier.name}
              </span>
            </p>{" "}
            {orderItem.paymentDate && (
              <span className='font-semibold text-gray-700 text-sm'>
                {" "}
                Purchased At:{" "}
                {moment(orderItem.paymentDate).format("DD-MM-YYYYhh:mm A")}
              </span>
            )}
            <button
              className='flex items-center gap-2 px-3 py-1 text-xs rounded-md bg-gray-500 text-white hover:scale-105 transform transition-all duration-200'
              onClick={() => updateOrderData(data.id, orderItem.id)}
            >
              <FiRefreshCcw className='text-white text-sm animate-none hover:scale-105 transform transition-all duration-200' />
            </button>
          </div>

          <div className='space-y-4'>
            {orderItem.parts.map((part) => (
              <div
                key={part.partId}
                className='flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm'
              >
                <div className='w-96 flex items-center space-x-4'>
                  <img
                    src={part.imageUrl}
                    alt={part.partName}
                    className='w-16 h-16 object-cover rounded-md border'
                  />
                  <div>
                    <p className='text-gray-800 font-medium text-sm'>
                      {part.partName}
                    </p>
                    <p className='text-gray-500 text-sm'>
                      Part ID: {part.partId}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row items-center gap-4'>
                    {part.quantityDelivered ||
                      (part.quantityDelivered === 0 && (
                        <div className='text-sm'>
                          Delivered Qty: {part.quantityDelivered}
                        </div>
                      ))}

                    {part.deliveryStatus && (
                      <div className='text-sm'>
                        Status : {part.deliveryStatus}
                      </div>
                    )}
                    <div className='text-sm'>
                      At Store : {part.recievedItem || 0}
                    </div>
                  </div>
                  {part.recievedItem !== part.quantity && orderItem.status && (
                    <div className='text-sm'>
                      Item Recieved:{" "}
                      <input
                        type='number'
                        onChange={(e) =>
                          setRecievedItem(parseInt(e.target.value) || 0)
                        }
                        className='border border-gray-300 p-1 rounded-md text-xs'
                      />
                      <button
                        className='px-2 py-1 text-xs bg-gray-500 text-white rounded-md ml-2 hover:scale-105 transform transition-all duration-200'
                        onClick={() =>
                          updatePartsStatus(
                            part.partId,
                            data.id,
                            orderItem.id,
                            part.quantity,
                            part.recievedItem || 0
                          )
                        }
                      >
                        recieve
                      </button>
                    </div>
                  )}
                </div>
                <div className='text-right'>
                  <p className='text-gray-800 font-medium'>
                    Qty: {part.quantity}
                  </p>
                  <p className='text-green-600 font-semibold'>
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
