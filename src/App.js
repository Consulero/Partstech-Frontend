import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NewCatalog from "./pages/NewCatalog";
import Quotes from "./pages/Quotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderList from "./pages/Order";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar className="w-64 bg-gray-800 text-white fixed h-screen" />
        <div className="flex-1 overflow-y-auto p-1">
          <ToastContainer />
          <Routes>
            <Route path="/catalog" element={<NewCatalog />} />
            <Route path="/quotations" element={<Quotes />} />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
