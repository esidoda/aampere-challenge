import { AvailableItem, Filter } from "../types/Filters";

export interface Vehicle {
  brand: string;
  model: string;
  year: number;
  price: number;
  range_km: number;
  color: string;
  condition: string;
  battery_capacity_kWh: number;
  charging_speed_kW: number;
  seats: number;
  drivetrain: string;
  location: string;
  autopilot: boolean;
  kilometer_count: number;
  accidents: boolean;
  accident_description: string;
  images: string[];
}

export interface VehicleResponse {
  count: number;
  data: Vehicle[];
}

export interface VehicleTableColumn {
  header: string;
  propertyKey: keyof Vehicle;
  isSortable?: boolean;
}

export interface SortConfig<T> {
  key: keyof T | null;
  direction: "asc" | "desc" | null;
}

export interface FiltersResponse {
  locations: string[];
}

export interface VehicleFilters {
  brand: string | null;
  location: string;
}
