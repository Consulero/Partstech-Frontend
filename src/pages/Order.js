import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Pagination from "../components/Pagination";
import { findOrders } from "../api";
import { toast } from "react-toastify";
import OrderItem from "../components/OrderItem";

const OrderList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [reloadTable, setReloadTable] = useState(false)
  const [activeTab, setActiveTab] = useState("part");

  const fetchFiles = async (page = 1, activeTab) => {
    setLoading(true);
    setError(null);

    try {
      const response = await findOrders(page, activeTab);
      setFiles(response.data?.data || []);
      setTotalPages(response.data?.pagination?.totalPages || 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles(currentPage, activeTab);
    setFiles((prevFiles) =>
      prevFiles.map((file) => ({ ...file, selected: false }))
    );
  }, [currentPage, reloadTable, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset pagination when switching tabs
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <div>Loading data...</div>;
  if (error) return toast.error("Could not get orders");

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-3 text-center">
        <HeaderSection title={"Orders List"} />
      </div>
      <div className='flex border-b'>
        <button
          className={`flex-1 p-2 ${activeTab === "part"
            ? "border-b-2 border-blue-500 font-bold"
            : ""
            }`}
          onClick={() => handleTabChange("part")}
        >
          Part
        </button>
        <button
          className={`flex-1 p-2 ${activeTab === "tire"
            ? "border-b-2 border-blue-500 font-bold"
            : ""
            }`}
          onClick={() => handleTabChange("tire")}
        >
          Tire
        </button>
      </div>
      <div className="overflow-hidden">
        <div className="overflow-auto" style={{ maxHeight: "420px" }}>
          {files.map((row, rowIndex) => (
            <OrderItem key={rowIndex} data={row} setReloadTable={setReloadTable} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default OrderList;
