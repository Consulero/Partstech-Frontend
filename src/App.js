import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Catalog from "./pages/Catalog";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar className="w-64 bg-gray-800 text-white fixed h-screen" />
        <div className="flex-1 overflow-y-auto p-5">
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
