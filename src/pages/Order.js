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

  const fetchFiles = async (page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await findOrders(page);
      setFiles(response.data?.data || []);
      setTotalPages(response.data?.pagination?.totalPages || 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles(currentPage);
    setFiles((prevFiles) =>
      prevFiles.map((file) => ({ ...file, selected: false }))
    );
  }, [currentPage, reloadTable]);

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
