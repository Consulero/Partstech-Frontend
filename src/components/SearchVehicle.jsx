import React, { useState } from "react";
import { FaCarAlt, FaChevronDown } from "react-icons/fa";

const SearchVehicle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("vin");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-row p-2 gap-2 justify-items-center">
        <FaCarAlt className="mt-1" />
        <button className="flex flex-row gap-1" onClick={toggleModal}>
          Select Vehicle <FaChevronDown className="mt-1" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96 h-auto">
            {/* tab section */}
            <div className="flex justify-start mb-4">
              <button
                onClick={() => handleTabChange("vin")}
                className={`px-4 py-1 ${
                  activeTab === "vin" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                VIN
              </button>
              <button
                onClick={() => handleTabChange("tin")}
                className={`px-4 py-1 ${
                  activeTab === "tin" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                Year/Make/Model
              </button>
            </div>
            {/* Content for Active Tab */}
            <div className="mb-2 h-20 ">
              {activeTab === "vin" && (
                <>
                  <input
                    type="text"
                    className="w-2/3 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter VIN Number"
                  />
                  <div className="text-center mt-4 mr-1">
                    <button
                      className="px-4 py-1 bg-green-500 text-white rounded"
                      onClick={closeModal}
                    >
                      Search
                    </button>
                    <button
                      className="ml-2 px-4 py-1 bg-red-500 text-white rounded"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
              {activeTab === "tin" && (
                <>
                  <input
                    type="text"
                    className="w-1/3 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Year"
                  />
                  <input
                    type="text"
                    className="w-1/3 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Make"
                  />
                  <input
                    type="text"
                    className="w-1/3 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Model"
                  />
                  <div className="text-center mt-4 mr-1">
                    <button
                      className="px-4 py-1 bg-green-500 text-white rounded"
                      onClick={closeModal}
                    >
                      Search
                    </button>
                    <button
                      className="ml-2 px-4 py-1 bg-red-500 text-white rounded"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchVehicle;
