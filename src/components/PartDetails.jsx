import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";

const PartDetails = ({ index, part, storeName }) => (
  <div
    key={index}
    className="flex items-center justify-between mb-4 border rounded-md p-3 shadow-sm"
  >
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
      <p
        className={`font-semibold ${
          part.availability === true ? "text-green-500" : "text-red-500"
        }`}
      >
        Quantity ({part.quantity || "N/A"})
      </p>
      <p className="text-sm text-gray-500">Store: {storeName || "Unknown"}</p>
      <div className="flex gap-2">
        <IoStorefrontOutline className="w-5 h-7 text-blue-500" />
        <select className="w-full p-1 border border-black rounded-md text-sm">
          {part.storesAvailability.map((store, index) => (
            <option key={index}>
              {store.quantity} Qty- {store.specificName}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="flex items-center">
      <div className="felx-col">
        <p className="font-bold text-gray-800">
          ${part.price?.price.toFixed(2) || "0.00"}
        </p>

        {part?.updatedData?.price?.price && (
          <p className="text-gray-800 text-xs">
            ${part.updatedData.price.price.toFixed(2) || "0.00"}
          </p>
        )}
      </div>

      <p className="text-sm ml-1">x {part.quantity}</p>
      <div className="ml-2 relative group">
        <FaInfoCircle className="text-blue-500 cursor-pointer" />
        <div className="absolute top-full right-0 mt-2 w-80 p-4 bg-white border rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-10">
          <h3 className="font-bold text-sm text-gray-800 mb-2">Attributes</h3>
          <ul className="text-xs text-gray-600">
            {part.taxonomy &&
              Object.entries(part.taxonomy)
                .filter(
                  ([key]) => !["categoryId", "subCategoryId"].includes(key)
                )
                .map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="font-medium">{key.toUpperCase()}:</span>
                    <span>{value}</span>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PartDetails;
