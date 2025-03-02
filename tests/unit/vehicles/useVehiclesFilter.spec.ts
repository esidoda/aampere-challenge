import { useVehicleFilters } from "../../../src/app/vehicles/hooks/useVehiclesFilter";
import { Vehicle, VehicleFilters } from "@/app/vehicles/vehicles.types";

describe("useVechilesFilter", () => {
  const mockedVehicles = [
    { brand: "Tesla", location: "Frankfurt am Main" },
    { brand: "Honda", location: "Berlin" },
    { brand: "Mercedes-Benz", location: "Berlin" },
    { brand: "Opel", location: "Stuttgart" },
  ] as Vehicle[];

  const { filterVehicles } = useVehicleFilters();

  it("should filter vehicles by brand", () => {
    const filters: VehicleFilters = { brand: "Tesla" };

    const result = filterVehicles(filters, mockedVehicles);
    expect(result).toEqual([{ brand: "Tesla", location: "Frankfurt am Main" }]);
  });

  it("should filter vehicles by location", () => {
    const filters: VehicleFilters = { location: "Berlin" };

    const result = filterVehicles(filters, mockedVehicles);
    expect(result).toEqual([
      { brand: "Honda", location: "Berlin" },
      { brand: "Mercedes-Benz", location: "Berlin" },
    ]);
  });

  it("should filter vehicles by brand and location", () => {
    const filters: VehicleFilters = { brand: "Opel", location: "Stuttgart" };

    const result = filterVehicles(filters, mockedVehicles);
    expect(result).toEqual([{ brand: "Opel", location: "Stuttgart" }]);
  });

  it("should return all vehicles if no filters are applied", () => {
    const filters: VehicleFilters = {};

    const result = filterVehicles(filters, mockedVehicles);
    expect(result).toEqual(mockedVehicles);
  });

  it("should return an empty array if no vehicles match the filters", () => {
    const filters: VehicleFilters = {
      brand: "Mercedes-Benz",
      location: "Stuttgart",
    };

    const result = filterVehicles(filters, mockedVehicles);
    expect(result).toEqual([]);
  });
});
