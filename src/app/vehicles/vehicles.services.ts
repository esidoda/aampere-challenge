import { VehicleResponse } from "./vehicles.types";
import dummyVehicles from "../data/vehicles.json";

export const getVehicles = async (): Promise<VehicleResponse> => {
  return Promise.resolve(dummyVehicles as VehicleResponse);
};
