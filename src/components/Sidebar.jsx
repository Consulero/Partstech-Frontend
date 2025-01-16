import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/catalog", label: "Catalog", icon: GrCatalog },
    { path: "/quotations", label: "Quotation", icon: FaFileInvoiceDollar },
  ];

  return (
    <>
      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-gray-200 rounded-lg z-50"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:static top-0 left-0 w-48 h-screen bg-[#f6f5f5] text-black p-5 transition-transform duration-300 md:translate-x-0 z-40`}
      >
        <h3 className="text-xl font-semibold mb-6">Order Service</h3>
        <ul className="space-y-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? "bg-blue-500 text-white"
                    : "hover:text-blue-500"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
