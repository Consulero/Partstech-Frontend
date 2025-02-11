import React, { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Pagination from "../components/Pagination";
import { findInventory } from "../api";
import { toast } from "react-toastify";
import Table from "../components/Table";

const InventoryList = () => {
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
            const response = await findInventory(page);
            setFiles(response.data?.data || []);
            setTotalPages(response.data?.pagination?.totalPages || 1);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        { header: "Id", key: "id", width: "15%" },
        { header: "Part", key: "partNumber", width: "25%" },
        { header: "on-Hand", key: "onHand", width: "20%" },
        { header: "Price", key: "partPrice", width: "20%" },
        { header: "Cost", key: "partCost", width: "20%" },

    ];

    useEffect(() => {
        fetchFiles(currentPage);
        setFiles((prevFiles) =>
            prevFiles.map((file) => ({ ...file, selected: false }))
        );
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    if (loading) return <div>Loading data...</div>;
    if (error) return toast.error("Could not get inventory");

    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-3 text-center">
                <HeaderSection title={"Inventory"} />
            </div>
            <Table data={files} columns={columns} onRowSelect={handleRowSelect} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default InventoryList;
