"use client";

import { useState, useEffect } from "react";
import { getFilters, getVehicles } from "./vehicles.services";
import { Vehicle, VehicleFilters } from "./vehicles.types";
import Filters from "./components/VehiclesFilters";
import Table from "./components/VehiclesTable";
import { VehicleTableColumn } from "./vehicles.types";
import { useFilter } from "./hooks/useVehiclesFilter";
import Pagination from "../components/Pagination";
import { useRouter } from "next/navigation";

const VehicleListing = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [paginatedVehicles, setPaginatedVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState({} as VehicleFilters);
  const [loading, setLoading] = useState(true);
  const { filterVehicles } = useFilter();
  const hasNoData = filteredVehicles.length === 0;

  const tableColumns = [
    { propertyKey: "brand", header: "Brand" },
    { propertyKey: "model", header: "Model" },
    { propertyKey: "year", header: "Year", isSortable: true },
    { propertyKey: "price", header: "Price", isSortable: true },
    { propertyKey: "range_km", header: "Range (km)", isSortable: true },
    { propertyKey: "color", header: "Color" },
    { propertyKey: "condition", header: "Condition" },
    { propertyKey: "location", header: "Location" },
  ] as VehicleTableColumn[];

  useEffect(() => {
    const fetchVehicles = async () => {
      const vehiclesResponse = await getVehicles();
      setVehicles(vehiclesResponse.data);
      setFilteredVehicles(vehiclesResponse.data);
      setLoading(false);
    };
    fetchVehicles();
  }, []);

  useEffect(() => {
    const filteredVehicles = filterVehicles(filters, vehicles);
    setFilteredVehicles(filteredVehicles);
  }, [filters, vehicles]);

  /* Handle Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedVehicles(filteredVehicles.slice(startIndex, endIndex));
  }, [filteredVehicles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

  const router = useRouter();

  const vehicleDetailsLink = (id: number) => {
    router.push(`/vehicles/${id}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">List of Vehicles</h1>
      <Filters filters={filters} setFilters={setFilters} />
      {!hasNoData ? (
        <Table
          columns={tableColumns}
          data={paginatedVehicles}
          detailsLink={vehicleDetailsLink}
        />
      ) : (
        <div>No vehicles available</div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default VehicleListing;
