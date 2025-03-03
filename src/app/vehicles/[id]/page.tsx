"use client";
import { useEffect, useState } from "react";
import { getVehicleDetails } from "../vehicles.services";
import { Vehicle } from "../vehicles.types";
import { useParams } from "next/navigation";
import ImageCarousel from "@/app/components/ImageCarousel";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const VehicleDetails = () => {
  const [vehicle, setVehicle] = useState<Vehicle | null>();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      const details = await getVehicleDetails(Number(id));
      setVehicle(details);
    };

    if (id) {
      fetchVehicleDetails();
    }
  }, [id]);

  if (!vehicle) {
    return <div>Vehicle not found...</div>;
  }
  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <Link
          href="/vehicles"
          className="text-blue-500 hover:underline flex items-center"
          e2e-id="back-vehicle-list-link"
        >
          <FaArrowLeft />
          <span className="ml-2">Back to Vehicles</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Vehicle Details</h1>
          <table className="w-full mb-4 rounded-lg">
            <tbody>
              <tr>
                <td className="py-2 font-semibold">Brand</td>
                <td className="px-4 py-2">{vehicle.brand}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Model</td>
                <td className="px-4 py-2">{vehicle.model}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Year</td>
                <td className="px-4 py-2">{vehicle.year}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Price</td>
                <td className="px-4 py-2">{vehicle.price}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Range (km)</td>
                <td className="px-4 py-2">{vehicle.range_km}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Condition</td>
                <td className="px-4 py-2">{vehicle.condition}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Drivetrain</td>
                <td className="px-4 py-2">{vehicle.drivetrain}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Location</td>
                <td className="px-4 py-2">{vehicle.location}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <ImageCarousel images={vehicle.images} />
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Additional Information</h2>
        <table className="w-full rounded-lg">
          <tbody>
            <tr>
              <td className="py-2 font-semibold">Battery Capacity (kWh)</td>
              <td className="px-4 py-2">{vehicle.battery_capacity_kWh}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Charging Speed (kW)</td>
              <td className="px-4 py-2">{vehicle.charging_speed_kW}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Autopilot</td>
              <td className="px-4 py-2">{vehicle.autopilot ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Kilometer Count</td>
              <td className="px-4 py-2">{vehicle.kilometer_count}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Accidents</td>
              <td className="px-4 py-2">{vehicle.accidents ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Accident Description</td>
              <td className="px-4 py-2">
                {vehicle.accident_description || "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleDetails;
