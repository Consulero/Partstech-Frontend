import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Pagination from "../components/Pagination";
import { findQuotes, updateQuoteStatus } from "../api";
import { tableCol } from "../utils/css";
import { FaRegEye } from "react-icons/fa";
import Modalpopup from "../components/Modelpopup";
import QuoteDetails from "../components/QuoteDetails";
import { toast } from "react-toastify";

const Quotes = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState("");

  const handleRowSelect = (rowIndex) => {
    const updatedFiles = [...files];
    const rowId = updatedFiles[rowIndex].id;

    updatedFiles[rowIndex].selected = !updatedFiles[rowIndex].selected;

    setSelectedRows((prevSelectedRows) => {
      if (updatedFiles[rowIndex].selected) {
        return [...prevSelectedRows, rowId];
      } else {
        return prevSelectedRows.filter((id) => id !== rowId);
      }
    });

    setFiles(updatedFiles);
  };

  const fetchFiles = async (page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await findQuotes();
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
    setSelectedRows([]);
    setFiles((prevFiles) =>
      prevFiles.map((file) => ({ ...file, selected: false }))
    );
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const columns = [
    { name: "Id", width: "10%" },
    { name: "PO Number", width: "20%" },
    { name: "Status", width: "10%" },
    { name: "SessionId", width: "30%" },
    { name: "CreatedAt", width: "20%" },
    { name: "Action", width: "20%" },
  ];

  const handleOpenModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleUpdateStatus = async () => {
    try {
      if (approvalStatus === "") {
        return toast.error("Please select status");
      }
      const data = { ids: selectedRows, status: approvalStatus };
      const result = await updateQuoteStatus(data);
      if (result.status === 200) {
        setSelectedRows([]);
        toast.success("Statuse Updated");
        window.location.reload();
      } else {
        return toast.error("Couldn't update status");
      }
    } catch (err) {
      toast.error("Failed to update");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-3 text-center">
        <HeaderSection title={"Quotations Review"} />

        <select
          id="status"
          name="status"
          className="block ml-auto mr-3 p-1 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-400 text-sm bg-gray-100"
          onChange={(e) => setApprovalStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        <button
          disabled={selectedRows.length !== 1}
          onClick={handleUpdateStatus}
          className={`px-3 py-1 text-sm rounded-md 
      ${
        selectedRows.length !== 1
          ? "bg-blue-300 text-white cursor-not-allowed"
          : "bg-blue-500 text-white hover:scale-110 transform transition-all duration-200"
      }`}
        >
          Save
        </button>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <div className="overflow-auto" style={{ maxHeight: "420px" }}>
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="font-serif">
                {columns.map((col, idx) => {
                  return (
                    <th
                      key={idx}
                      className="border-b bg-gray-200 p-2 text-sm text-semibold"
                      style={{ width: col.width }}
                    >
                      {col.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {files.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={row.selected ? "bg-green-100" : ""}
                  onClick={() => handleRowSelect(rowIndex)}
                >
                  <td className={tableCol}>{row.id}</td>
                  <td className={tableCol}>{row.poNumber}</td>
                  <td
                    className={`${tableCol} font-semibold ${
                      row.status === "pending"
                        ? "text-yellow-500"
                        : row.status === "rejected"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {row.status}
                  </td>
                  <td className={tableCol}>{row.sessionId}</td>
                  <td className={tableCol}>{row.createdAt}</td>
                  <td className={tableCol}>
                    <FaRegEye
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(row.orders);
                      }}
                      className="cursor-pointer text-gray-600 hover:text-blue-500 hover:scale-125 transition-transform duration-200"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Modalpopup isOpen={isModalOpen} onClose={handleCloseModal}>
        <QuoteDetails data={modalData} />
      </Modalpopup>
    </div>
  );
};

export default Quotes;
