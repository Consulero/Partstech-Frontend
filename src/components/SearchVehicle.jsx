import React, { useState, useEffect } from "react";
import { FaCarAlt, FaChevronDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { SearchVehicleFormData } from "../data";
import {
  getYears,
  getMakes,
  getModels,
  getSubmodels,
  getEngines,
  getVehicleByVin,
  getVehicleByDetails,
} from "../api";
import { vehicleState } from "../atoms/vehicleInfo";
import { useRecoilState } from "recoil";
import _ from "lodash";

const SearchVehicle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [formData, setFormData] = useState(SearchVehicleFormData);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [submodels, setSubmodels] = useState([]);
  const [engines, setEngines] = useState([]);
  const [vehicleInfo, setVehicleInfo] = useRecoilState(vehicleState);

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

  const clearVehicleInfo = () => {
    setVehicleInfo({});
    setFormData(SearchVehicleFormData);
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      if (activeTab === "Tab1") {
        const response = await getVehicleByDetails(
          formData.make,
          formData.year,
          formData.model,
          formData.submodel,
          formData.engine
        );
        setVehicleInfo(response.data[0]);
        onClose();
      }
      if (activeTab === "Tab2") {
        const response = await getVehicleByVin(formData.vin);
        setVehicleInfo(response.data);
        onClose();
      }
    } catch (error) {
      console.error(error); // notification
    }
  };

  // console.log("vehicleInfo", vehicleInfo);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await getYears();
        setYears(response.data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (formData.submodel) {
          const response = await getEngines(
            formData.make,
            formData.year,
            formData.model,
            formData.submodel
          );
          setEngines(response.data);
        } else if (formData.model) {
          const response = await getSubmodels(
            formData.make,
            formData.year,
            formData.model
          );
          setSubmodels(response.data);
        } else if (formData.make) {
          const response = await getModels(formData.make, formData.year);
          setModels(response.data);
        } else if (formData.year) {
          const response = await getMakes(formData.year);
          setMakes(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error); // notification
      }
    };

    fetchData();
  }, [formData.year, formData.make, formData.model, formData.submodel]);

  return (
    <div>
      <div className="flex flex-row p-2 gap-2 justify-items-center">
        <FaCarAlt className="mt-1" />
        {!_.isEmpty(vehicleInfo) ? (
          <>
            <p className="text-sm text-center w-[180px] mx-auto break-words">
              {vehicleInfo.vehicleName}
            </p>
            <button
              className="text-red-400 hover:text-red-500"
              onClick={clearVehicleInfo}
            >
              <ImCross />
            </button>
          </>
        ) : (
          <button className="flex flex-row gap-1" onClick={toggleModal}>
            Select Vehicle <FaChevronDown className="mt-1" />
          </button>
        )}
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
                          <select
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="" disabled>
                              Select Year
                            </option>
                            {years?.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-2">
                          <select
                            disabled={!formData.year}
                            name="make"
                            value={formData.make}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="" disabled>
                              Select Make
                            </option>
                            {makes?.map(({ makeId, makeName }) => (
                              <option key={makeId} value={makeId}>
                                {makeName}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-2">
                          <select
                            disabled={!formData.make}
                            name="model"
                            value={formData.model}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="" disabled>
                              Select Model
                            </option>
                            {models?.map(({ modelId, modelName }) => (
                              <option key={modelId} value={modelId}>
                                {modelName}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td className="pb-2">
                          <select
                            disabled={!formData.model}
                            name="submodel"
                            value={formData.submodel}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="" disabled>
                              Select Submodel
                            </option>
                            {submodels?.map(({ submodelId, submodelName }) => (
                              <option key={submodelId} value={submodelId}>
                                {submodelName}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/* <input
                            type="text"
                            name="engine"
                            value={formData.engine}
                            onChange={handleInputChange}
                            className="placeholder:italic placeholder:text-sm placeholder:p-2 w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Engine"
                          /> */}
                          <select
                            disabled={!formData.submodel}
                            name="engine"
                            value={formData.engine}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="" disabled>
                              Select Engine
                            </option>
                            {engines?.map(({ engineId, engineName }) => (
                              <option key={engineId} value={engineId}>
                                {engineName}
                              </option>
                            ))}
                          </select>
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
                          className="placeholder:italic placeholder:text-sm placeholder:p-2 w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="px-4 py-1 rounded bg-red-500 text-white text-sm"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded  text-sm"
                onClick={handleSave}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchVehicle;
