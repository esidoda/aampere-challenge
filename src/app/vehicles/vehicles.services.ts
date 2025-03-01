import { FiltersResponse, VehicleResponse } from "./vehicles.types";
import dummyVehicles from "../data/vehicles.json";
import dummyFilters from "../data/filters.json";

export const getVehicles = async (): Promise<VehicleResponse> => {
  return Promise.resolve(dummyVehicles as VehicleResponse);
};

export const getFilters = async (): Promise<FiltersResponse> => {
  return Promise.resolve(dummyFilters as FiltersResponse);
};
