import React, { useState, useRef } from "react";

const Model = ({ setShowModal, handleFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSpanClick = () => fileInputRef.current.click();

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      await handleFileUpload(formData);
      setShowModal(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg w-full max-w-lg mx-4 sm:mx-0">
        <h2 className="text-lg font-bold mb-4">Upload File</h2>
        <div className="border border-dashed border-gray-400 rounded-lg p-6 text-center">
          <p className="text-gray-600">
            Drag and drop or{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={handleSpanClick}
            >
              click to upload
            </span>
          </p>
          <input
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleFileSelect}
            ref={fileInputRef}
            className="hidden"
          />
        </div>

        {selectedFile && (
          <div className="mt-4 text-sm text-gray-700">
            Selected File:{" "}
            <span className="font-medium">{selectedFile.name}</span>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            className="px-3 py-1 text-white text-sm bg-red-500 rounded-md mr-2"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              selectedFile
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
