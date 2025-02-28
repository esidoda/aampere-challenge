import VehicleTable from "./components/VehicleTable";
import { getVehicles } from "./vehicles.services";
import { VehicleTableColumn } from "./vehicles.types";

const VehicleListing = async () => {
  const vehiclesResponse = await getVehicles();

  const tableColumns = [
    { propertyKey: "brand", header: "Brand" },
    { propertyKey: "model", header: "Model" },
    { propertyKey: "year", header: "Year" },
    { propertyKey: "price", header: "Price" },
    { propertyKey: "range_km", header: "Range (km)" },
    { propertyKey: "color", header: "Color" },
    { propertyKey: "condition", header: "Condition" },
    { propertyKey: "battery_capacity_kWh", header: "Battery Capacity (kWh)" },
    { propertyKey: "charging_speed_kW", header: "Charging Speed (kW)" },
    { propertyKey: "seats", header: "Seats" },
    { propertyKey: "drivetrain", header: "Drivetrain" },
    { propertyKey: "location", header: "Location" },
  ] as VehicleTableColumn[];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">List of Vehicles</h1>
      <VehicleTable columns={tableColumns} data={vehiclesResponse.data} />
    </div>
  );
};

export default VehicleListing;
