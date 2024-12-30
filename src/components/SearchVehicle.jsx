import React, { useState } from "react";
import { FaCarAlt, FaChevronDown } from "react-icons/fa";
import { SearchVehicleFormData } from "../data";

const SearchVehicle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [formData, setFormData] = useState(SearchVehicleFormData);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    alert(`Saved Data: ${JSON.stringify(formData)}`);
    setFormData(SearchVehicleFormData);
    onClose();
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
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-100 w-96 p-4 rounded shadow-lg">
            {/* Modal Header with Tabs */}
            <div className="flex border-b">
              <button
                className={`flex-1 p-2 ${
                  activeTab === "Tab1"
                    ? "border-b-2 border-blue-500 font-bold"
                    : ""
                }`}
                onClick={() => setActiveTab("Tab1")}
              >
                Make/Model/Year
              </button>
              <button
                className={`flex-1 p-2 ${
                  activeTab === "Tab2"
                    ? "border-b-2 border-blue-500 font-bold"
                    : ""
                }`}
                onClick={() => setActiveTab("Tab2")}
              >
                VIN
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              {activeTab === "Tab1" && (
                <>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="pb-2">
                          <input
                            type="text"
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Year"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-2">
                          <input
                            type="text"
                            name="make"
                            value={formData.make}
                            onChange={handleInputChange}
                            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Make"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleInputChange}
                            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Model"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
              {activeTab === "Tab2" && (
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="vin"
                          value={formData.vin}
                          onChange={handleInputChange}
                          className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter VIN"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-200 px-4 py-1 rounded"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchVehicle;
