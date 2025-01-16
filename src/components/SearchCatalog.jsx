import React, { useState, useEffect } from "react";
import {
  getCategories,
  getParts,
  getSubcategories,
  searchByVechiclePartTypes,
  reqQuotes,
} from "../api";
import { vehicleState } from "../atoms/vehicleInfo";
import { quoteState } from "../atoms/quoteSession";
import { useRecoilValue, useRecoilState } from "recoil";
import { toast } from "react-toastify";
import _ from "lodash";

const SearchCatalog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("parts");
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useRecoilState(quoteState);
  const [showDropdown, setShowDropdown] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [parts, setParts] = useState([]);
  const [status, setStatus] = useState("category");
  const [searchItem, setSearchItem] = useState({
    category: "",
    subcategory: "",
    parts: [],
  });
  const vehicleInfo = useRecoilValue(vehicleState);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const response = await getCategories();
        const response = {
          data: [
            { categoryId: 1, categoryName: "Engine" },
            { categoryId: 2, categoryName: "Suspension" },
            { categoryId: 3, categoryName: "Brakes" },
            { categoryId: 4, categoryName: "Exhaust" },
            { categoryId: 5, categoryName: "Interior" },
            { categoryId: 6, categoryName: "Exterior" },
            { categoryId: 7, categoryName: "Wheels" },
            { categoryId: 8, categoryName: "Lighting" },
            { categoryId: 9, categoryName: "Tires" },
            { categoryId: 10, categoryName: "Accessories" },
          ],
        };
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories");
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      if (_.isEmpty(query)) {
        toast.error("Please Type keyword to search");
        return;
      }
      if (_.isEmpty(vehicleInfo)) {
        toast.error("Please select a vehicle");
        return;
      }

      const partIds = searchItem.parts.map((part) => part.partTypeId);
      const res = await reqQuotes(vehicleInfo, partIds);
      setQuote(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Error searching parts");
    }
  };

  const handleCategorySelect = async (selectedCategory) => {
    setSearchItem({ ...searchItem, category: selectedCategory });
    // const response = await getSubcategories(selectedCategory);
    // setSubcategories(response.data);
    const data = [
      {
        subcategoryId: 116,
        subcategoryName: "Battery and Related Components",
      },
      {
        subcategoryId: 120,
        subcategoryName: "Brackets, Flanges and Hangers",
      },
      {
        subcategoryId: 136,
        subcategoryName: "Cylinder Block Components",
      },
      {
        subcategoryId: 143,
        subcategoryName: "Electrical Connectors",
      },
      {
        subcategoryId: 180,
        subcategoryName: "Lighting - Exterior",
      },
      {
        subcategoryId: 211,
        subcategoryName: "Switches, Solenoids and Actuators",
      },
      {
        subcategoryId: 233,
        subcategoryName: "Wheel",
      },
      {
        subcategoryId: 246,
        subcategoryName: "Hardware, Fasteners and Fittings",
      },
      {
        subcategoryId: 249,
        subcategoryName: "Shop Equipment, Tools and Accessories",
      },
      {
        subcategoryId: 251,
        subcategoryName: "Decals and Emblems",
      },
      {
        subcategoryId: 261,
        subcategoryName: "Signage",
      },
      {
        subcategoryId: 263,
        subcategoryName: "Miscellaneous Merchandise",
      },
      {
        subcategoryId: 290,
        subcategoryName: "Adhesives, Sealants and Tape",
      },
      {
        subcategoryId: 309,
        subcategoryName: "Underhood",
      },
      {
        subcategoryId: 311,
        subcategoryName: "Information Labels",
      },
      {
        subcategoryId: 339,
        subcategoryName: "RV and Marine Accessories",
      },
      {
        subcategoryId: 437,
        subcategoryName: "Powersport Accessories",
      },
      {
        subcategoryId: 447,
        subcategoryName: "Food and Drink",
      },
      {
        subcategoryId: 449,
        subcategoryName: "Storage and Organization",
      },
      {
        subcategoryId: 456,
        subcategoryName: "Underhood Accessories",
      },
      {
        subcategoryId: 457,
        subcategoryName: "Exterior Accessories",
      },
      {
        subcategoryId: 458,
        subcategoryName: "Interior Accessories",
      },
      {
        subcategoryId: 478,
        subcategoryName: "Safety Equipment, Tools and Accessories",
      },
      {
        subcategoryId: 480,
        subcategoryName: "Tow, Hoist and Lift Tools and Accessories",
      },
    ];
    setSubcategories(data);
    setStatus("subcategory");
  };

  const clearCategorySearch = () => {
    setQuery("");
    setSearchItem({ ...searchItem, category: "", subcategory: "", parts: [] });
    setStatus("category");
    setParts([]);
    setSubcategories([]);
    setShowDropdown(false);
  };

  const handlePartToggle = (part) => {
    const isSelected = searchItem.parts.some(
      (p) => p.partTypeId === part.partTypeId
    );
    const updatedParts = isSelected
      ? searchItem.parts.filter((p) => p.partTypeId !== part.partTypeId)
      : [...searchItem.parts, part];
    setSearchItem({ ...searchItem, parts: updatedParts });
    const partNames = updatedParts.map((p) => p.partTypeName).join(", ");
    setQuery(partNames);
  };

  const handleSubcategorySelect = async (selectedSubCategory) => {
    setSearchItem({ ...searchItem, subcategory: selectedSubCategory });

    // const response = await getParts(searchItem.category, selectedSubCategory);
    // console.log(response);
    // setParts(response.data);

    const data = [
      { partTypeId: 1, partTypeName: "Parts1" },
      { partTypeId: 2, partTypeName: "Parts2" },
      { partTypeId: 3, partTypeName: "Parts3" },
      { partTypeId: 4, partTypeName: "Parts4" },
      { partTypeId: 5, partTypeName: "Parts5" },
      { partTypeId: 6, partTypeName: "Parts6" },
      { partTypeId: 7, partTypeName: "Parts7" },
      { partTypeId: 8, partTypeName: "Parts8" },
      { partTypeId: 9, partTypeName: "Parts9" },
      { partTypeId: 10, partTypeName: "Parts10" },
    ];
    setParts(data);
    setStatus("part");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="relative flex items-center w-2/3">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="parts">Parts</option>
        <option value="tyre">Tyre</option>
      </select>

      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={toggleDropdown}
          placeholder={"Search..."}
          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {category !== "tyre" && showDropdown && categories.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-y-auto p-2">
            <div className="flex justify-between items-center mb-1">
              <p className="ml-2 text-center font-semibold mb-2">
                {status.toLocaleUpperCase()}
              </p>
              <button
                className="text-red-500 mr-2"
                onClick={clearCategorySearch}
              >
                Clear
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {status === "category" &&
                categories.map((cat) => (
                  <div
                    key={cat.categoryId}
                    onClick={() => handleCategorySelect(cat.categoryId)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100 border rounded text-center"
                  >
                    {cat.categoryName}
                  </div>
                ))}
              {status === "subcategory" &&
                subcategories.map((cat) => (
                  <div
                    key={cat.subcategoryId}
                    onClick={() => handleSubcategorySelect(cat.subcategoryId)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100 border rounded text-center"
                  >
                    {cat.subcategoryName}
                  </div>
                ))}
              {status === "part" &&
                parts.map((part) => (
                  <div
                    key={part.partTypeId}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100 border rounded"
                  >
                    <input
                      type="checkbox"
                      checked={searchItem.parts.some(
                        (p) => p.partTypeId === part.partTypeId
                      )}
                      onChange={() => handlePartToggle(part)}
                      className="mr-2"
                    />
                    {part.partTypeName}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchCatalog;
