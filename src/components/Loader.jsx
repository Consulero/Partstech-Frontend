import React from "react";

const Loader = ({ size = "5", color = "white-500" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-4 border-${color} border-opacity-50`}
      ></div>
    </div>
  );
};

export default Loader;
