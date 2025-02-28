import React from "react";
import { Vehicle, VehicleTableColumn } from "../vehicles.types";

interface VehicleTableProps {
  columns: VehicleTableColumn[];
  data: Vehicle[];
}

const VehicleTable = ({ columns, data }: VehicleTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b border-gray-200">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {row[column.propertyKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default VehicleTable;
