import { Vehicle, VehicleFilters } from "../vehicles.types";

export function useVehicleFilters() {
  const filterVehicles = (
    filters: VehicleFilters,
    vehicles: Vehicle[]
  ): Vehicle[] => {
    if (filters.brand) {
      vehicles = vehicles.filter(
        (vehicle) =>
          filters.brand &&
          filters.brand.trim() !== "" &&
          vehicle.brand.toLowerCase().includes(filters.brand.toLowerCase())
      );
    }

    if (filters.location && filters.location !== "all") {
      vehicles = vehicles.filter(
        (vehicle) =>
          filters.location &&
          filters.location.trim() !== "" &&
          vehicle.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    return vehicles;
  };
  return {
    filterVehicles,
  };
}
