import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import HeaderSection from "../components/HeaderSection";
import Pagination from "../components/Pagination";
import { findQuotes } from "../api";

const Quotes = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

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
    { header: "Id", key: "id", width: "20%" },
    { header: "SessionId", key: "sessionId", width: "20%" },
    { header: "CreatedAt", key: "createdAt", width: "20%" },
    { header: "UpdatedAt", key: "updatedAt", width: "20%" },
  ];

  if (loading) return <div>Loading files...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <HeaderSection title={"Review Items"} />
      </div>
      <Table data={files} columns={columns} onRowSelect={handleRowSelect} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Quotes;
