"use client";

import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { FiltersResponse, VehicleFilters } from "../vehicles.types";
import { getFilters } from "../vehicles.services";

type Props = {
  filters: VehicleFilters;
  setFilters: React.Dispatch<React.SetStateAction<VehicleFilters>>;
};

const Filters = ({ filters, setFilters }: Props) => {
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: VehicleFilters) => ({
      ...prev,
      brand: e.target.value,
    }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev: VehicleFilters) => ({
      ...prev,
      location: e.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      brand: null,
      location: "all",
    });
  };

  const handleClearBrand = () => {
    setFilters((prev: VehicleFilters) => ({
      ...prev,
      brand: null,
    }));
  };

  const [filtersData, setFiltersData] = useState<FiltersResponse>();

  useEffect(() => {
    const fetchFilters = async () => {
      const filtersResponse = await getFilters();
      setFiltersData(filtersResponse);
    };
    fetchFilters();
  }, []);

  return (
    <div className="filters">
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="mb-4 relative w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="brandInput"
            >
              Brand
            </label>
            <input
              id="brandInput"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
              type="text"
              placeholder="Search by Brand"
              value={filters.brand ?? ""}
              onChange={handleBrandChange}
              aria-label="Search by Brand"
            />
            {filters.brand && (
              <span
                className="absolute right-3 bottom-0 transform -translate-y-1/2 cursor-pointer"
                onClick={handleClearBrand}
                aria-label="Clear brand filter"
              >
                <FaTimesCircle size={20} color="#888" />
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4 w-full">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="locationSelect"
              >
                Location
              </label>
              <select
                id="locationSelect"
                name="location"
                value={filters.location}
                onChange={handleLocationChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                aria-label="Select location"
              >
                <option value="all">All Locations</option>
                {filtersData?.locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button
          className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md shadow hover:bg-blue-700 transition duration-300"
          onClick={clearFilters}
          aria-label="Clear all filters"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
