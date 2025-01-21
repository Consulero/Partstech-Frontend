import React from "react";

const Modalpopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Quotation</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modalpopup;
