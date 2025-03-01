"use client";

import { useState, useEffect } from "react";
import { getFilters, getVehicles } from "./vehicles.services";
import { Vehicle, VehicleFilters } from "./vehicles.types";
import Filters from "./components/VehiclesFilters";
import Table from "./components/VehiclesTable";
import { VehicleTableColumn } from "./vehicles.types";
import { useFilter } from "./hooks/useVehiclesFilter";

const VehicleListing = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState({} as VehicleFilters);
  const [loading, setLoading] = useState(true);
  const { filterVehicles } = useFilter();
  const hasNoData = filteredVehicles.length === 0;

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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">List of Vehicles</h1>
      <Filters filters={filters} setFilters={setFilters} />
      {!hasNoData ? (
        <Table columns={tableColumns} data={filteredVehicles} />
      ) : (
        <div>No vehicles available</div>
      )}
    </div>
  );
};

export default VehicleListing;
