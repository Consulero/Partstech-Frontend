import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Catalog from "./pages/Catalog";
import Quotes from "./pages/Quotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar className="w-64 bg-gray-800 text-white fixed h-screen" />
        <div className="flex-1 overflow-y-auto p-5">
          <ToastContainer />
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/quotations" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
