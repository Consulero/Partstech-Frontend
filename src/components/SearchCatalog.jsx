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
import { categoryState } from "../atoms/category";
import { useRecoilValue, useRecoilState } from "recoil";
import { toast } from "react-toastify";
import _ from "lodash";

const SearchCatalog = () => {
  const [query, setQuery] = useState("");
  const [] = useState("parts");
  const [category, setCategory] = useRecoilState(categoryState);
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
            {
              categoryId: 1,
              categoryName: "Accessories",
            },
            {
              categoryId: 2,
              categoryName: "Body",
            },
            {
              categoryId: 3,
              categoryName: "Brake",
            },
            {
              categoryId: 4,
              categoryName: "Belts and Cooling",
            },
            {
              categoryId: 5,
              categoryName: "Driveline and Axles",
            },
            {
              categoryId: 6,
              categoryName: "Electrical, Charging and Starting",
            },
            {
              categoryId: 7,
              categoryName: "Electrical, Lighting and Body",
            },
            {
              categoryId: 9,
              categoryName: "Emission Control",
            },
            {
              categoryId: 10,
              categoryName: "Engine",
            },
            {
              categoryId: 11,
              categoryName: "Exhaust",
            },
            {
              categoryId: 12,
              categoryName: "Air and Fuel Delivery",
            },
            {
              categoryId: 13,
              categoryName: "HVAC",
            },
            {
              categoryId: 14,
              categoryName: "Ignition",
            },
            {
              categoryId: 15,
              categoryName: "Steering",
            },
            {
              categoryId: 16,
              categoryName: "Suspension",
            },
            {
              categoryId: 17,
              categoryName: "Tire and Wheel",
            },
            {
              categoryId: 18,
              categoryName: "Vehicles, Equipment, Tools, and Supplies",
            },
            {
              categoryId: 19,
              categoryName: "Transfer Case",
            },
            {
              categoryId: 20,
              categoryName: "Transmission",
            },
            {
              categoryId: 22,
              categoryName: "Wiper and Washer",
            },
            {
              categoryId: 23,
              categoryName: "Hardware and Service Supplies",
            },
            {
              categoryId: 29,
              categoryName: "Multifunction Terms",
            },
            {
              categoryId: 42,
              categoryName: "Entertainment and Telematics",
            },
            {
              categoryId: 44,
              categoryName: "Household, Shop and Office Products",
            },
            {
              categoryId: 45,
              categoryName: "Plumbing",
            },
            {
              categoryId: 46,
              categoryName: "Oil, Fluids and Chemicals",
            },
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
      if (_.isEmpty(query) && category === "parts") {
        toast.error("Please Type keyword to search");
        return;
      }
      if (_.isEmpty(vehicleInfo)) {
        toast.error("Please select a vehicle");
        return;
      }

      const partIds = searchItem.parts.map((part) => part.partTypeId);
      const res = await reqQuotes(vehicleInfo, partIds, category);
      setQuote(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Error searching parts");
    }
  };

  const handleCategorySelect = async (selectedCategory) => {
    setSearchItem({ ...searchItem, category: selectedCategory });
    const response = await getSubcategories(selectedCategory);
    setSubcategories(response.data);
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
    const response = await getParts(searchItem.category, selectedSubCategory);
    setParts(response.data);
    setStatus("part");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className='text-sm relative flex items-center w-2/3'>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        <option value='parts'>Parts</option>
        <option value='tires'>Tires</option>
      </select>

      <div className='relative w-full'>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          onFocus={toggleDropdown}
          placeholder={"Search..."}
          className='w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        {category !== "tires" && showDropdown && categories.length > 0 && (
          <div className='absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-y-auto p-2'>
            <div className='flex justify-between items-center mb-1'>
              <p className='ml-2 text-center font-semibold mb-2'>
                {status.toLocaleUpperCase()}
              </p>
              <button
                className='text-red-500 mr-2'
                onClick={clearCategorySearch}
              >
                Clear
              </button>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              {status === "category" &&
                categories.map((cat) => (
                  <div
                    key={cat.categoryId}
                    onClick={() => handleCategorySelect(cat.categoryId)}
                    className='px-4 py-2 cursor-pointer hover:bg-blue-100 border rounded text-center'
                  >
                    {cat.categoryName}
                  </div>
                ))}
              {status === "subcategory" &&
                subcategories.map((cat) => (
                  <div
                    key={cat.subcategoryId}
                    onClick={() => handleSubcategorySelect(cat.subcategoryId)}
                    className='px-4 py-2 cursor-pointer hover:bg-blue-100 border rounded text-center'
                  >
                    {cat.subcategoryName}
                  </div>
                ))}
              {status === "part" &&
                parts.map((part) => (
                  <div
                    key={part.partTypeId}
                    className='flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100 border rounded'
                  >
                    <input
                      type='checkbox'
                      checked={searchItem.parts.some(
                        (p) => p.partTypeId === part.partTypeId
                      )}
                      onChange={() => handlePartToggle(part)}
                      className='mr-2'
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
        className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Search
      </button>
    </div>
  );
};

export default SearchCatalog;
